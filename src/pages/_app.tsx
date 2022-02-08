import type { AppProps } from "next/app";
import GlobalStyles from "../styles/global";

function RickMortyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default RickMortyApp;
