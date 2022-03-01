export enum ResourceType {
  Article = 'article',
  Video = 'video',
  Podcast = 'podcast',
  Library = 'library',
  Package = 'package',
}
export enum ResourceCategory {
  Primitives = 'primitive',
  Routers = 'router',
  Data = 'data',
  UI = 'ui',
  Plugins = 'plugin',
  Starters = 'starters',
  BuildUtilities = 'build_utility',
  AddOn = 'add_on',
  Testing = 'testing',
  Educational = 'educational',
}
export interface Resource {
  title: string;
  link: string;
  author?: string;
  author_url?: string;
  description?: string;
  type: ResourceType;
  categories: readonly ResourceCategory[];
  official?: boolean; // If the resource is an official Solid resource
  keywords?: readonly string[];
  published_at?: number;
}
