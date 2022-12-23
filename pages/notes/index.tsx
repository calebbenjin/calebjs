import Layout from "../../components/Layout";


export default function NotesPage(){
  return <Layout title="Blog – Caleb Benjamin" description="Thoughts on the software industry, programming, tech, and my personal life.">
    <div className="flex flex-col items-start justify-center max-w-3xl mx-auto mb-16">
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
        📃My Notes
      </h1>
      <p className="mb-4 text-gray-600 dark:text-gray-400">
        {`Here I drop notes and bytes for all courses and programming languges, feel free to skim through and have fun.🤗`}
      </p>
    </div>
  </Layout>
}