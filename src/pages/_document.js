import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="it">
      <Head />
      <link 
          rel="preload" 
          href="/5184157.webp" 
          as="image"
          imagesrcset="5184157.webp 1920w, 5184157-mobile.webp 640w"
        />
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
