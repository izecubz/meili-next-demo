# This is a simple example of a full-text search using Meilisearch and Next.JS

## Built using:
- [Next.JS](https://nextjs.org/)
- [Meilisearch](https://www.meilisearch.com/)
- [React InstantSearch](https://github.com/algolia/react-instantsearch)
- [Mantine UI](https://mantine.dev/)

---
# How to install on your system:

This project uses [yarn](https://yarnpkg.com/) to install dependencies, if you wish to use npm, please install the dependencies manually.

## Steps:
1. Create a file called `.env` in the root of the project.
2. Copy the following content into the file:
```
#Meilisearch Public
NEXT_PUBLIC_MEILISEARCH_HOST="<your-meilisearch-host>"
NEXT_PUBLIC_MEILISEARCH_PUBLIC_KEY="<your-meilisearch-public-key>"

#Meilisearch Private
MEILISEARCH_PRIVATE_KEY="<your-meilisearch-private-key>"
```
3. Change the variables to you corresponding self-hosted Meilisearch instance.
4. Run `yarn install` to install dependencies.
5. Run `yarn run seed` to seed your database with demo movie data.
6. Finally, run `yarn run dev` to start the application in `development` mode.
