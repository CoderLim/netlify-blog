import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import SiteAnalysis from '../components/SiteAnalysis';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="theme-compiled h-full">
        <Head>
          <SiteAnalysis />
        </Head>
        <body
          className={`antialiased text-lg dark:bg-gray-900 dark:text-white leading-base h-full`}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
