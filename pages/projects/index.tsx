import Layout from '../../components/Layout'
import ProjectCard from '../../components/ProjectCard'
import { featuredProjects } from '../../lib/projectData'

export default function ProjectsPage() {
  return (
    <Layout
      title='My Projects – Caleb Benjamin'
      description='Side Projects, Freelance Projects, Company projects from small to industry standard'>
      <div className='flex flex-col items-start justify-center max-w-3xl mx-auto mb-16'>
        <h1 className='mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white'>
          🛠Projects
        </h1>
        <p className='mb-4 text-gray-600 dark:text-gray-400'>
          {`I've been writing online since 2014, mostly about web development and tech careers.
          In total, I've written articles on my blog.
          Use the search below to filter by title.`}
        </p>
      </div>

      <div className='flex flex-col items-start justify-center max-w-5xl mx-auto mb-16'>
        <div className='grid sm:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-4'>
          {featuredProjects.map((project) => (
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
