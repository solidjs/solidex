// Convert old TypeScript data format
// [https://github.com/solidjs/solid-site/tree/2a0cba58397bb3fa22195e6d9c4a1e42b60fa073/src/pages/Resources]
// into JSON format.

import { itemToJsonFilename } from './utils';
import fs from 'fs/promises';
import path from 'path';

interface Item {
  type: string,
  title: string,
  published_at?: number | string,
}

function checkItem(item: unknown): item is Item {
  if (!(item && typeof item === 'object')) {
    console.log(`!! Invalid item ${JSON.stringify(item)}`);
    return false;
  }
  for (const key of ['type', 'title']) {
    if (!(key in item && typeof (item as any)[key] === 'string')) {
      console.log(`!! Missing ${key} in ${JSON.stringify(item)}`);
      return false;
    }
  }
  return true;
}

function upgradeItem(item: Item) {
  // Merge old 'library' type into existing 'package' type.
  if (item.type === 'library') {
    item.type = 'package';
  }

  // Convert UNIX timestamp to ISO 8601 date/time string.
  if (typeof item.published_at === 'number') {
    const date = new Date();
    date.setTime(item.published_at);
    item.published_at = date.toISOString();
  }
}

async function writeItem(item: unknown) {
  if (!checkItem(item)) return;
  upgradeItem(item);

  const filename = itemToJsonFilename(item);
  await fs.mkdir(path.dirname(filename), { recursive: true });
  try {
    await fs.stat(filename);
    return console.log(`!! ${filename} already exists; skipping`);
  } catch (err) {}
  await fs.writeFile(filename, JSON.stringify(item, null, 2), 'utf8');
  console.log(`>> ${filename}`);
}

async function main(args = process.argv.slice(2)) {
  if (!args.length) {
    return console.log("Usage: old2json file.data.ts ...");
  }

  for (const filename of args) {
    const module = await import(path.resolve(filename));
    const data = module.default;
    if (!Array.isArray(data)) {
      console.log(`!! ${filename} does not export default an array`);
      continue;
    }
    for (const item of data) {
      await writeItem(item);
    }
  }
}

main();
