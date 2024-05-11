import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Image from "next/image";
import decoImg from "../public/DecoreTopRight.png";
import decoLeftImg from "../public/DecoreBottomLeft.png";

export default function Layout(props: any) {
  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: "Caleb Benjamin – Software Developer, Writer, Content creator.",
    description: `Front-end developer, JavaScript enthusiast, and Technical Writer, Content creator`,
    image:
      "https://res.cloudinary.com/calebbenjin/image/upload/v1671711888/caleb-banner1_rnzof8.png",
    type: "website",
    ...customMeta,
  };

  return (
    <div className="">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://calebjs.vercel.app${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://calebjs.vercel.app${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Caleb Benjamin" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@calebbenjin" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}

        {/*<!-- Google / Search Engine Tags -->*/}
        <meta itemProp="name" content={meta.title} />
        <meta itemProp="description" content={meta.description} />
        <meta itemProp="image" content={meta.image} />

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
        <meta name="description" content={meta.description} />
      </Head>
      <main id="skip" className="flex flex-col justify-center">
        
        {/* <Navbar /> */}
        {children}
        <Footer />
      </main>
    </div>
  );
}
