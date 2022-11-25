import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <meta
          name="description"
          content="Countries Browser Web Application"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json"/>
        <link rel='apple-touch-icon' href='/apple-touch-icon.png'/>
        <meta name='theme-color' content='#fff'/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}