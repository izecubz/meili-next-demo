import { instantMeiliSearch } from '@meilisearch/instant-meilisearch'

export const searchClient = instantMeiliSearch(
    // @ts-ignore
    process.env.NEXT_PUBLIC_MEILISEARCH_HOST, // Host
    process.env.NEXT_PUBLIC_MEILISEARCH_PUBLIC_KEY // API key
);
