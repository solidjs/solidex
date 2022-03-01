
import articles from './resources/articles';
import packages from './resources/packages';
import videos from './resources/videos';
import podcasts from './resources/podcasts';

export const ResourceData = () => ({
  packages,
  videos,
  articles,
  podcasts
});

export type ResourcesDataProps = ReturnType<typeof ResourceData>;

export default ResourceData;
