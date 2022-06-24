import fs from 'fs';
import path from 'path';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import schema from '../schema.json';
import { dataDir } from './utils';

type Typed = { type: string };

const ajv = new Ajv();
addFormats(ajv);
const validate = ajv.compile(schema);

let count = 0, errors = 0;
for (let typeDir of fs.readdirSync(dataDir)) {
  const typePath = path.join(dataDir, typeDir);
  for (let filename of fs.readdirSync(typePath)) {
    filename = path.join(typePath, filename);
    let data: string, json: unknown;
    try {
      data = fs.readFileSync(filename, 'utf8');
      json = JSON.parse(data);
    } catch (err) {
      console.log(`!! Failed to load ${filename}: ${err}`);
      errors++;
      continue;
    }
    if (!validate(json)) {
      console.log(`!! ${filename} validation failed`);
      console.log(validate.errors);
      errors++;
    }
    if (json && typeof json === 'object' && (json as Typed).type !== typeDir) {
      console.log(`!! ${filename} has incorrect type ${(json as Typed).type}`);
      errors++;
    }
    count++;
  }
}

console.log(`>> Checked ${count} files in ${dataDir}`);
if (errors) {
  console.log(`!! ${errors} errors`);
  process.exit(errors);
}
