import '../styles/globals.scss';
import { ThemeProvider } from '../context/Theme.context';
import { ContinentProvider } from '../context/ContinentContext';
import { SearchProvider } from '../context/SearchContext';
import { CountriesProvider } from '../context/CountriesContext';
import NextNProgress from 'nextjs-progressbar';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <ThemeProvider>
      <ContinentProvider>
        <SearchProvider>
          <CountriesProvider>
            <NextNProgress height={5}/>
            <Component {...pageProps} />
          </CountriesProvider>
        </SearchProvider>
      </ContinentProvider>
    </ThemeProvider>
    </>
  );
}
