import fs from 'fs';
import path from 'path';
import { Ecosystem } from '../types';
import { dataDir } from './utils';

function key(item: Ecosystem) {
  // If published_at is missing, put at front.
  return item.published_at || `0${item.title}`;
}

for (let typeDir of fs.readdirSync(dataDir)) {
  const items: Ecosystem[] = [];
  const typePath = path.join(dataDir, typeDir);
  for (let filename of fs.readdirSync(typePath)) {
    filename = path.join(typePath, filename);
    const data = fs.readFileSync(filename, 'utf8');
    const json = JSON.parse(data);
    items.push(json as Ecosystem);
  }
  items.sort((a: Ecosystem, b: Ecosystem) => key(a) < key(b) ? -1 : 1);
  fs.writeFileSync(`./dist/${typeDir}s.json`, JSON.stringify(items, null, 2));
}
