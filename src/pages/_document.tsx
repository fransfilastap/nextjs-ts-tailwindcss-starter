import { Html, Head, Main, NextScript } from "next/document";
import { ReactElement } from "react";
import Favicons from "@/components/seo/favicons";

export default function Document(): ReactElement {
  return (
    <Html lang="en">
      <Head>
        <Favicons />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
