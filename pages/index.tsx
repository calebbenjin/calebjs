import { Suspense } from "react";
import Link from "next/link";
import Head from "next/head";
import { Inter } from "@next/font/google";
import Layout from "../components/Layout";
import BlogPostCard from "../components/BlogPostCard";
import ProjectCard from "../components/ProjectCard";
import { featuredProjects } from "../lib/projectData";
import SlideSection from "../components/SlideSection";
import Hero from "../components/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Caleb Benjamin || Frontend Engineer</title>
        <meta
          name="description"
          content="Caleb.js is my portfolio that's built with NextJS-13, TypeScript, Tailwind, Prisma, and Vercel"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Suspense fallback={null}>
        <Layout>
          <Hero />
          <SlideSection />
          <div className="flex flex-col items-startz lg:pt-40 pt-20 justify-center px-6 sm:px-16 bg-white sm:w-11/12 w-full mx-auto sm:shadow-sm dark:bg-gray-900">
            <h3 className="font-bold text-3xl lg:text-4xl tracking-tight mb-5 text-black dark:text-white">
              🛠 Projects
            </h3>
            <p className="mb-10 text-black dark:text-white">
              Things I created with my computer.
            </p>
            <div className="grid grid-cols-1 gap-8">
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
                  prodata={project}
                />
              ))}
            </div>
            <Link
              href="/projects"
              className="flex items-center mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6">
              <>
                {"View all Projects"}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="h-6 w-6 ml-1">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
                  />
                </svg>
              </>
            </Link>
          </div>

          <div className="flex flex-col items-start justify-center px-6 sm:px-16 py-6 sm:py-16 bg-red-400 sm:w-11/12 w-full mx-auto sm:shadow-sm dark:bg-gray-900">
            <h3 className="font-bold text-2xl md:text-2xl tracking-tight sm:mt-20 mb-10 text-black dark:text-white">
              Featured Posts
            </h3>
            <div className="grid gap-6 sm:grid-cols-3 grid-cols-1">
              <BlogPostCard
                title="5 reasons why you need to start writing Test-driven development (TDD)"
                slug="https://calebbenjin.hashnode.dev/5-reasons-why-you-need-to-start-writing-test-driven-development-tdd"
                gradient="from-[#D8B4FE] to-[#818CF8]"
                date="Jan 22, 2023"
                des="Writing tests for your app helps to ensure that your code is functioning correctly and is free of bugs."
              />
              <BlogPostCard
                title="HTTP-Only Cookies Authentication with Next.js"
                slug="https://calebbenjin.hashnode.dev/http-only-cookies-authentication-with-nextjs"
                gradient="from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
                date="Sep 23, 2022"
                des="In this article am going to show you how to handle authentication, JWT & HttpOnly Cookies with Next.js."
              />
              <BlogPostCard
                title="10 Advance React Do's and Don'ts"
                slug="https://calebbenjin.hashnode.dev/10-advance-react-dos-and-donts"
                gradient="from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
                date="Oct 6, 2022"
                des="Learning is a never-ending journey, as a developer you must learn to un-learn and re-learn new things every day. It should be a norm as developers to search google for best practices so we can write clean"
              />
            </div>
            <Link
              href="/blog"
              className="flex items-center mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6">
              <>
                {"Read all posts"}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="h-6 w-6 ml-1">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
                  />
                </svg>
              </>
            </Link>
          </div>
        </Layout>
      </Suspense>
    </>
  );
}
