import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="description" content="From Waste to Wealth" />
          <title>Energy Chleen</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body className="w-full max-w-[768px] mx-auto min-h-screen">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
