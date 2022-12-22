import { Suspense } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import { Inter } from '@next/font/google'
import Layout from '../components/Layout'
import BlogPostCard from '../components/BlogPostCard'
import ProjectCard from '../components/ProjectCard'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Caleb.js is my portfolio that's built with NextJS-13, TypeScript, Tailwind, Prisma, and Vercel" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Suspense fallback={null}>
        <Layout>
          <div className="flex flex-col justify-center items-start max-w-4xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
            <div className="flex flex-col-reverse sm:flex-row items-start">
              <div className="flex flex-col pr-8">
                <h1 className="font-bold text-2xl md:text-6xl tracking-tight mb-1 text-black dark:text-white">
                  Caleb Benjamin
                </h1>
                <h2 className="text-gray-700 text-3xl md:text-2xl dark:text-gray-200 mb-4 mt-4">
                  Frontend Developer / Mentor at{' '}
                  <span className="font-semibold">Stutern</span>
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-16">
                  Helping developers build a faster web. Teaching about web
                  development, serverless, and React / Next.js.
                </p>
              </div>
              <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
                <Image
                  alt="Caleb Benjamin"
                  height={176}
                  width={176}
                  src="/avatar.png"
                  sizes="30vw"
                  priority
                  className="rounded-full filter grayscale profile-bg"
                />
              </div>
            </div>

            <h3 className="font-bold text-2xl md:text-4xl tracking-tight mt-10 mb-10 text-black dark:text-white">
              Featured Projects
            </h3>
            <div className="flex gap-6 flex-col md:flex-row">
              <ProjectCard
                title="Eachblock - A creative design Agency website."
                slug="style-guides-component-libraries-design-systems"
                gradient="from-[#D8B4FE] to-[#818CF8]"
                src="/projectimg.png"
              />
              <ProjectCard
                title="CapitalRollup -  A crypto indexes web app that helps users invest in stable coing USDT"
                slug="style-guides-component-libraries-design-systems"
                gradient="from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
                src="/projectimg2.png"
              />
              <ProjectCard
                title="Everything I Know About Style Guides, Design Systems, and Component Libraries"
                slug="style-guides-component-libraries-design-systems"
                gradient="from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
                src="/projectimg3.png"
              />
            </div>
            <Link
              href="/project"
              className="flex items-center mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6"
            >
              <>
                {'View all Projects'}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="h-6 w-6 ml-1"
                >
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

            <h3 className="font-bold text-2xl md:text-4xl tracking-tight mt-20 mb-10 mt-10 text-black dark:text-white">
              Featured Posts
            </h3>
            <div className="flex gap-6 flex-col md:flex-row">
              <BlogPostCard
                title="Everything I Know About Style Guides, Design Systems, and Component Libraries"
                slug="style-guides-component-libraries-design-systems"
                gradient="from-[#D8B4FE] to-[#818CF8]"
              />
              <BlogPostCard
                title="Rust Is The Future of JavaScript Infrastructure"
                slug="rust"
                gradient="from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
              />
              <BlogPostCard
                title="Past, Present, and Future of React State Management"
                slug="react-state-management"
                gradient="from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
              />
            </div>
            <Link
              href="/blog"
              className="flex items-center mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6"
            >
              <>
                {'Read all posts'}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="h-6 w-6 ml-1"
                >
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
  )
}
