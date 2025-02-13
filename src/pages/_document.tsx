import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="description" content="From Waste to Wealth" />
        </Head>

        <body className="w-full max-w-[768px] mx-auto min-h-screen">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
