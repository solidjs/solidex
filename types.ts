export const ResourceTypes = {
  'article': 1,
  'video': 1,
  'podcast': 1,
};
export type ResourceType = keyof typeof ResourceTypes;

export const PackageTypes = {
  'package': 1,
};
export type PackageType = keyof typeof PackageTypes;

export const EcosystemTypes = {...ResourceTypes, ...PackageTypes};
export type EcosystemType = keyof typeof EcosystemTypes;

export const ResourceCategories = {
  'primitive': 1,
  'router': 1,
  'data': 1,
  'ui': 1,
  'plugin': 1,
  'starters': 1,
  'build_utility': 1,
  'add_on': 1,
  'testing': 1,
  'educational': 1,
}
export type ResourceCategory = keyof typeof ResourceCategories;

export interface Ecosystem {
  /** @minLength 1 */
  title: string;
  /** @format uri */
  link: string;
  author?: string;
  author_url?: string;
  description?: string;
  type: EcosystemType;
  categories: readonly ResourceCategory[];
  keywords?: readonly string[];
  official?: boolean; // whether the resource is an official Solid resource
  /** @format date-time */
  published_at?: string; // ISO 8601 date/time string
}

export type Package = Ecosystem & {type: PackageType};
export type Resource = Ecosystem & {type: ResourceType};
