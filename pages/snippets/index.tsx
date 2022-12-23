import Layout from "../../components/Layout";


export default function SnippetsPage(){
  return <Layout title="Code Snippets" description="A collection of code snippets – including serverless functions, Node.js scripts, and CSS tricks.">
  <div className="flex flex-col items-start justify-center max-w-3xl mx-auto mb-16">
    <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
      💻Code Snippets
    </h1>
    <p className="mb-4 text-gray-600 dark:text-gray-400">
      {`These are a collection of code snippets I've used in the past and saved. Some are Serverless Functions, which include set up instructions. Others are anything from random CSS snippets to Node.js scripts.`}
    </p>
  </div>
</Layout>
}