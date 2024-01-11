import Layout from '../../components/Layout'
import ProjectCard from '../../components/ProjectCard'
import { projects } from '../../lib/projectData'

export default function ProjectsPage() {
  return (
    <Layout
      title='My Projects – Caleb Benjamin'
      description='Side Projects, Freelance Projects, Company projects from small to industry standard'>
      <div className='flex flex-col items-start justify-center py-10 flex flex-col items-start justify-center px-6 sm:px-16 bg-white sm:w-9/12 w-full mx-auto sm:shadow-sm dark:bg-gray-900'>
        <h1 className='mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white'>
          🛠Projects
        </h1>
        <p className='mb-4 text-gray-600 dark:text-gray-400'>
          Things I build with a computer.
        </p>
        <div className='grid sm:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-4'>
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
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}
