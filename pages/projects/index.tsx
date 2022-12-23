import Layout from "../../components/Layout";
import ProjectCard from "../../components/ProjectCard";


export default function ProjectsPage(){
  return <Layout title="My Projects – Caleb Benjamin" description="Side Projects, Freelance Projects, Company projects from small to industry standard">
    <div className="flex flex-col items-start justify-center max-w-3xl mx-auto mb-16">
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
        🛠Projects
      </h1>
      <p className="mb-4 text-gray-600 dark:text-gray-400">
        {`I've been writing online since 2014, mostly about web development and tech careers.
          In total, I've written articles on my blog.
          Use the search below to filter by title.`}
      </p>
    </div>

    <div className="flex flex-col items-start justify-center max-w-5xl mx-auto mb-16">

      <div className="flex gap-6 flex-col md:flex-row mt-10">
        <ProjectCard
          title="Eachblock - A creative design Agency website."
          slug="style-guides-component-libraries-design-systems"
          gradient="from-[#D8B4FE] to-[#818CF8]"
          src="/projectimg.png"
          codeUrl="/"
          siteUrl="/"
        />
        <ProjectCard
          title="CapitalRollup -  A crypto indexes web app that helps users invest in stable coing USDT"
          slug="style-guides-component-libraries-design-systems"
          gradient="from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
          src="/projectimg2.png"
          codeUrl="/"
          siteUrl="/"
        />
        <ProjectCard
          title="Everything I Know About Style Guides, Design Systems, and Component Libraries"
          slug="style-guides-component-libraries-design-systems"
          gradient="from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
          src="/projectimg3.png"
          codeUrl="/"
          siteUrl="/"
        />
      </div>
      <div className="flex gap-6 flex-col md:flex-row mt-10">
        <ProjectCard
          title="Everything I Know About Style Guides, Design Systems, and Component Libraries"
          slug="style-guides-component-libraries-design-systems"
          gradient="from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
          src="/projectimg3.png"
          codeUrl="/"
          siteUrl="/"
        />
        <ProjectCard
          title="CapitalRollup -  A crypto indexes web app that helps users invest in stable coing USDT"
          slug="style-guides-component-libraries-design-systems"
          gradient="from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
          src="/projectimg2.png"
          codeUrl="/"
          siteUrl="/"
        />
        <ProjectCard
          title="Eachblock - A creative design Agency website."
          slug="style-guides-component-libraries-design-systems"
          gradient="from-[#D8B4FE] to-[#818CF8]"
          src="/projectimg.png"
          codeUrl="/"
          siteUrl="/"
        />
      </div>
      <div className="flex gap-6 flex-col md:flex-row mt-10">
        <ProjectCard
          title="Eachblock - A creative design Agency website."
          slug="style-guides-component-libraries-design-systems"
          gradient="from-[#D8B4FE] to-[#818CF8]"
          src="/projectimg.png"
          codeUrl="/"
          siteUrl="/"
        />
        <ProjectCard
          title="CapitalRollup -  A crypto indexes web app that helps users invest in stable coing USDT"
          slug="style-guides-component-libraries-design-systems"
          gradient="from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
          src="/projectimg2.png"
          codeUrl="/"
          siteUrl="/"
        />
        <ProjectCard
          title="Everything I Know About Style Guides, Design Systems, and Component Libraries"
          slug="style-guides-component-libraries-design-systems"
          gradient="from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
          src="/projectimg3.png"
          codeUrl="/"
          siteUrl="/"
        />
      </div>
    </div>
  </Layout>
}