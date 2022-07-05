import articles from './dist/articles.json';
import packages from './dist/packages.json';
import videos from './dist/videos.json';
import podcasts from './dist/podcasts.json';

import type { Ecosystem } from './types.ts';
export Ecosystem;

export interface EcosystemProps {
  packages: Ecosystem[];
  articles: Ecosystem[];
  podcasts: Ecosystem[];
  videos: Ecosystem[];
};

export const EcosystemData: EcosystemProps = {
  packages,
  videos,
  articles,
  podcasts
};

export default EcosystemData;
