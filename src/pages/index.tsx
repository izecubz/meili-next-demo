import type { NextPage } from 'next';
import Head from 'next/head';
import { InstantSearch } from 'react-instantsearch-dom';
import { searchClient } from '../lib/client/MeiliSearch';
import HeaderMiddle from '../components/Header';
import HeroText from '../components/Hero';
import { Container, Text, Center, createStyles } from '@mantine/core';
import InfiniteHits from '../components/InfiniteHits';

const useStyles = createStyles(theme => ({
  footer: {
    marginTop: 120,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`
  },

  footerText: {
    marginTop: theme.spacing.md
  }
}));

const Home: NextPage = () => {
  const { classes } = useStyles();

  return (
    <>
      <Head>
        <title>Meilisearch Next.JS Demo</title>
        <meta name="description" content="Meilisearch Next.JS Demo" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <HeaderMiddle
        links={[
          {
            link: '/',
            label: 'Home'
          }
        ]}
      />

      <HeroText />

      <Container my="md">
        <InstantSearch searchClient={searchClient} indexName="movies">
          <InfiniteHits />
        </InstantSearch>
      </Container>

      <Center className={classes.footer}>
        <Container>
          <Text className={classes.footerText}>
            A demo made with ❤️ by Ize_Cubz
          </Text>
        </Container>
      </Center>
    </>
  );
};

export default Home;
