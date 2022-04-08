import { instantMeiliSearch } from '@meilisearch/instant-meilisearch';

export const searchClient = instantMeiliSearch(
  // @ts-ignore
  'http://127.0.0.1:7700', // Host
  'BmMt8ajl64b9a504e7fa0c2abffca25e7e6328454e6152bfe1a1b6c24408c83f534f45c3' // API key
);
