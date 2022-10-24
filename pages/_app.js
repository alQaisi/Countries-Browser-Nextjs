import '../styles/globals.css';
import { Fragment } from 'react';
import Head from 'next/head';
import { ThemeProvider } from "../context/theme.context";
import { FilterProvider } from "../context/filter.context";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  return (
    <Fragment>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name='description' content='Countries Browser Web Application' />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Countries Browser</title>
      </Head>
      <ThemeProvider>
        <FilterProvider>
          { getLayout(<Component {...pageProps} />) }
        </FilterProvider>
      </ThemeProvider>
    </Fragment>
  );
}

export default MyApp
