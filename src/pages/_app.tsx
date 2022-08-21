/*istanbul ignore file */
import type { AppProps } from "next/app";
import Head from "next/head";
import { ApolloProvider } from "@apollo/client";
import client from "../graphql/client";
import GlobalStyles from "../styles/global";
import { CharactersProvider } from "../utils/contexts/CharactersContext";

function RickMortyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Rick and Morty - App</title>
      </Head>
      <GlobalStyles />
      <ApolloProvider client={client}>
        <CharactersProvider>
          <Component {...pageProps} />
        </CharactersProvider>
      </ApolloProvider>
    </>
  );
}

export default RickMortyApp;
