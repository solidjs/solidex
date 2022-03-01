<p>
  <img width="100%" src="https://github.com/solidjs/solidex/blob/main/banner.png?raw=true" alt="Solidex">
</p>

# Solidex

The following is a list of articles, packages and other resources that focus on the SolidJS ecosystem. Solidex is a platform for listing and maintaining these resources is an organized and well-defined manner. This repository acts as a dependency for Solid Site and other future Solid-powered projects.

Resources in Solidex have been vetted by a team member, organized and tagged. We consider this a central source of information for our entire community. We accept PRs to add packages to resources and these are supplied upstream to various SolidJS public and private utilities including our future CLI.

## Adding Your Resource

To add to the list of Articles, Podcasts, Videos and Packages, modify the resource files in `resources/` and submit a PR. A team member will review your submission to ensuring tagging and details related to the package meet the Solidex standard.

We maintain these asset in TypeScript to take advantgae of type support. This maintains taconomy, structure and correctness of the data. It also makes it easy to transform the dataset into different formats including Markdown and JSON.

## Scripts

- `yarn build:json`: Generates the index.json file in the root

## Resource List

- `dist/articles.json`: JSON list of article resources.
- `dist/videos.json`: JSON list of video resources.
- `dist/packages.json`: JSON list of packages and utilities.
- `dist/podcasts.json`: JSON list of podcasts.
