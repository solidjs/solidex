import fs from 'fs';
import path from 'path';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import schema from '../schema.json';

const ajv = new Ajv();
addFormats(ajv);
const validate = ajv.compile(schema);
const dataDir = path.join(__dirname, '..', 'data');

let count = 0;
for (let typeDir of fs.readdirSync(dataDir)) {
  typeDir = path.join(dataDir, typeDir);
  for (let filename of fs.readdirSync(typeDir)) {
    filename = path.join(typeDir, filename);
    let data: string, json: unknown;
    try {
      data = fs.readFileSync(filename, 'utf8');
      json = JSON.parse(data);
    } catch (err) {
      console.log(`!! Failed to load ${filename}: ${err.message}`);
    }
    if (!validate(json)) {
      console.log(`!! ${filename} validation failed`);
      console.log(validate.errors);
    }
    count++;
  }
}

console.log(`>> Checked ${count} files in ${dataDir}`);
