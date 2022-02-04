import type { AppProps } from "next/app";

function RickMortyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default RickMortyApp;
