import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {Hits, InstantSearch} from "react-instantsearch-dom";
import {searchClient} from "../lib/client/MeiliSearch";
import CustomSearch from "../components/CustomSearch";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Meilisearch Demo</title>
        <meta name="description" content="Meilisearch Next.JS Demo" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

        <div>
            <InstantSearch searchClient={searchClient} indexName="movies">
                <CustomSearch />
                <Hits/>
            </InstantSearch>
        </div>
    </>
  )
}

export default Home
