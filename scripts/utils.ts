import path from 'node:path';
import GithubSlugger from 'github-slugger';
const slug = GithubSlugger.slug;  // memoryless interface

interface MinimalEcosystem {
  type: string;
  title: string;
}

export const dataDir = path.join(__dirname, '..', 'data');

export function itemToJsonFilename(item: MinimalEcosystem): string {
  return path.join(dataDir, item.type, `${slug(item.title)}.json`);
}
