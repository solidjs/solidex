import GithubSlugger from 'github-slugger';
const slug = GithubSlugger.slug;  // memoryless interface

interface MinimalEcosystem {
  type: string;
  title: string;
}

export function itemToJsonFilename(item: MinimalEcosystem): string {
  return `${item.type}/${slug(item.title)}.json`;
}
