import type { AppProps } from "next/app";
import Head from "next/head";
import GlobalStyles from "../styles/global";

function RickMortyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Rick and Morty - App</title>
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default RickMortyApp;
