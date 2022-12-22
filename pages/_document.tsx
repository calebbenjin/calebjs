import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link href="/static/favicons/favicon.ico" rel="shortcut icon" />
        <link href="/static/favicons/site.webmanifest" rel="manifest" />
        <link
          href="/static/favicons/apple-touch-icon.png"
          rel="apple-touch-icon"
          sizes="180x180"
        />
        <link
          href="/static/favicons/favicon-32x32.png"
          rel="icon"
          sizes="32x32"
          type="image/png"
        />
        <link
          href="/static/favicons/favicon-16x16.png"
          rel="icon"
          sizes="16x16"
          type="image/png"
        />
        <link
          color="#4a9885"
          href="/static/favicons/safari-pinned-tab.svg"
          rel="mask-icon"
        />
        <meta content="#ffffff" name="theme-color" />
        <meta content="#ffffff" name="msapplication-TileColor" />
        <meta
          content="/static/favicons/browserconfig.xml"
          name="msapplication-config"
        />
        <meta content="14d2e73487fa6c71" name="yandex-verification" />
        <meta
          content="eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw"
          name="google-site-verification"
        />

          <link rel="shortcut icon" href="/public/favicon.ico" />
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="Front-end developer, JavaScript enthusiast, and Technical Writer, Content creator." />

          {/*<!-- Google / Search Engine Tags -->*/}
          <meta itemProp="name" content="Caleb Benjamin – Software Developer, Writer, Content creator." />
          <meta itemProp="description" content="Front-end developer, JavaScript enthusiast, and Technical Writer, Content creator." />
          <meta
            itemProp="image"
            content="https://res.cloudinary.com/calebbenjin/image/upload/v1671711888/caleb-banner1_rnzof8.png"
          />

          {/*<!-- Facebook Meta Tags -->*/}
          <meta property="og:title" content="Caleb Benjamin – Software Developer, Writer, Content creator." />
          <meta property="og:description" content="Front-end developer, JavaScript enthusiast, and Technical Writer, Content creator." />
          <meta
            property="og:image"
            content="https://res.cloudinary.com/calebbenjin/image/upload/v1671711888/caleb-banner1_rnzof8.png"
          />
          <meta property="og:url" content="https://calebjs.vercel.app/" />
          <meta property="og:type" content="website" />

          {/*<!-- Twitter Meta Tags -->*/}
          <meta name="twitter:title" content="Caleb Benjamin – Software Developer, Writer, Content creator." />
          <meta name="twitter:description" content="Front-end developer, JavaScript enthusiast, and Technical Writer." />
          <meta
            name="twitter:image"
            content="https://res.cloudinary.com/calebbenjin/image/upload/v1671711888/caleb-banner1_rnzof8.png"
          />
          <meta name="twitter:card" content="summary_large_image" />

          <meta
            property="og:image"
            content="https://res.cloudinary.com/calebbenjin/image/upload/v1671711888/caleb-banner1_rnzof8.png"
          ></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
