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
  title: string;
  link: string;
  author?: string;
  author_url?: string;
  description?: string;
  type: EcosystemType;
  categories: readonly ResourceCategory[];
  official?: boolean; // If the resource is an official Solid resource
  keywords?: readonly string[];
  published_at?: number;
}

export type Package = Ecosystem & {type: PackageType};
export type Resource = Ecosystem & {type: ResourceType};
