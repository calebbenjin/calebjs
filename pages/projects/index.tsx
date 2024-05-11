import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import ProjectCard from "../../components/ProjectCard";
import { projects } from "../../lib/projectData";
import Image from "next/image";
// import decoImg from "../../public/DecoreTopRight.png";
import decoLeftImg from "../../public/DecoreBottomLeft.png";

export default function ProjectsPage() {
  return (
    <Layout
      title="My Projects – Caleb Benjamin"
      description="Side Projects, Freelance Projects, Company projects from small to industry standard">
      <Navbar />

      <div className="py-10 flex flex-col items-start justify-center px-6 sm:px-10 bg-white sm:w-11/12 w-full mx-auto sm:shadow-sm dark:bg-gray-900 mb-40">
        <h1 className="mb-2 text-4xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          🛠 Projects
        </h1>
        <p className="mb-10 text-lg text-gray-600 dark:text-gray-200">
          Things I build with a computer.
        </p>
        <div className="grid lg:grid-cols-1 grid-cols-1 gap-x-8 gap-y-20">
          {projects.map((project) => (
            <ProjectCard
              key={project?.id}
              title={project?.title}
              description={project?.description}
              slug={project?.title}
              gradient={project?.gradient}
              src={project?.coverImg}
              codeUrl={project?.githubLink}
              siteUrl={project?.siteLink}
              prodata={project}
            />
          ))}
        </div>
      </div>
      {/* <Image
        src={decoImg}
        alt="product1"
        width="800"
        className="absolute top-0 right-0"
      /> */}
      <Image
        src={decoLeftImg}
        alt="product1"
        width="500"
        className="fixed bottom-0 left-0 z-10"
      />
    </Layout>
  );
}
