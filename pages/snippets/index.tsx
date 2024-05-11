import Layout from "../../components/Layout";
// import SnippetCard from '../../components/SnippetCard';
import { InferGetStaticPropsType } from "next";
// import { allSnippetsQuery } from '../../lib/queries';
// import { getClient } from 'lib/sanity-server';
import { Snippet } from "../../lib/types";
import Navbar from "../../components/Navbar";
import decoImg from "../../public/DecoreTopRight.png";
import decoLeftImg from "../../public/DecoreBottomLeft.png";
import Image from "next/image";

const snippets = [
  {
    _id: "997989",
    slug: "HTML",
    content: "Content details",
    title: "HTML",
    description: "Hello from snippets",
    logo: "logo",
  },
  {
    _id: "997989",
    slug: "HTML",
    content: "Content details",
    title: "HTML",
    description: "Hello from snippets",
    logo: "logo",
  },
  {
    _id: "997989",
    slug: "HTML",
    content: "Content details",
    title: "HTML",
    description: "Hello from snippets",
    logo: "logo",
  },
  {
    _id: "997989",
    slug: "HTML",
    content: "Content details",
    title: "HTML",
    description: "Hello from snippets",
    logo: "logo",
  },
];

export default function SnippetsPage() {
  return (
    <Layout
      title="Code Snippets"
      description="A collection of code snippets – including serverless functions, Node.js scripts, and CSS tricks.">
      <Navbar />
      <Image
        src={decoImg}
        alt="product1"
        width="400"
        className="fixed top-0 right-0"
      />
      <Image
        src={decoLeftImg}
        alt="product1"
        width="200"
        className="fixed bottom-0 left-0 z-10 lg:flex hidden"
      />
      <Image
        src={decoLeftImg}
        alt="product1"
        width="200"
        className="absolute bottom-0 left-0 z-10 lg:hidden flex"
      />
      <div className="flex flex-col items-start justify-center lg:w-9/12 w-11/12 mx-auto mb-16 mt-20">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          💻Code Snippets
        </h1>
        <p className="mb-4 text-gray-600 dark:text-gray-400 lg:w-8/12">
          {`These are a collection of code snippets I've used in the past and saved. Some are Serverless Functions, which include set up instructions. Others are anything from random CSS snippets to Node.js scripts.`}
        </p>

        <div className="grid w-full grid-cols-1 gap-4 my-2 mt-4 sm:grid-cols-2">
          {/* {snippets.map((snippet) => (
            <SnippetCard
              key={snippet.slug}
              title={snippet.title}
              slug={snippet.slug}
              logo={snippet.logo}
              description={snippet.description}
            />
          ))} */}
        </div>
      </div>
    </Layout>
  );
}
