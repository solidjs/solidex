export const ResourceTypes = [
  'article',
  'video',
  'podcast',
] as const;
export type ResourceType = typeof ResourceTypes[number];

export const PackageTypes = [
  'package',
] as const;
export type PackageType = typeof PackageTypes[number];

export const EcosystemTypes = [...ResourceTypes, ...PackageTypes];
export type EcosystemType = typeof EcosystemTypes[number];

export const Categories = [
  'primitive',
  'router',
  'data',
  'ui',
  'plugin',
  'starters',
  'build_utility',
  'add_on',
  'testing',
  'educational',
] as const;
export type Category = typeof Categories[number];

export interface Ecosystem {
  /** @minLength 1 */
  title: string;
  /** @format uri */
  link: string;
  author?: string;
  author_url?: string;
  description?: string;
  type: EcosystemType;
  categories: Category[];
  keywords?: string[];
  official?: boolean; // whether the resource is an official Solid resource
  /** @format date-time */
  published_at?: string; // ISO 8601 date/time string
}

export type Package = Ecosystem & {type: PackageType};
export type Resource = Ecosystem & {type: ResourceType};
