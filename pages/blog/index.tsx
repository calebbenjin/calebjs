import { Suspense, useState } from 'react'
import { InferGetStaticPropsType } from 'next'
import Layout from '../../components/Layout'
// import { indexQuery } from '../../lib/queries';
// import { getClient } from '../../lib/sanity-server';
import { Post } from '../../lib/types'
import BlogPost from '../../components/BlogPost'

const posts = [
  {
    _id: '0989790',
    slug: 'Developer Experience at Vercel',
    content:
      "Why we're expanding my role from leading our DevRel team to making Developer Experience part of the executive team.",
    title: 'Developer Experience at Vercel',
    date: '21-6-2021',
    excerpt:
      "Why we're expanding my role from leading our DevRel team to making Developer Experience part of the executive team.",
    coverImage: 'image',
    readingTime: 'time',
    tweets: [],
  },
  {
    _id: '0989790',
    slug: 'Building a Design System Monorepo with Turborepo',
    content:
      'Why is Rust being used to replace parts of the JavaScript web ecosystem like minification (Terser), transpilation (Babel), formatting (Prettier), bundling (webpack), linting (ESLint), and more?',
    title: 'Building a Design System Monorepo with Turborepo',
    date: '21-6-2021',
    excerpt:
      'Why is Rust being used to replace parts of the JavaScript web ecosystem like minification (Terser), transpilation (Babel), formatting (Prettier), bundling (webpack), linting (ESLint), and more?',
    coverImage: 'image',
    readingTime: 'time',
    tweets: [],
  },
  {
    _id: '0989790',
    slug: 'Rust Is The Future of JavaScript Infrastructure',
    content:
      'Why is Rust being used to replace parts of the JavaScript web ecosystem like minification (Terser), transpilation (Babel), formatting (Prettier), bundling (webpack), linting (ESLint), and more?',
    title: 'Rust Is The Future of JavaScript Infrastructure',
    date: '21-6-2021',
    excerpt:
      'Why is Rust being used to replace parts of the JavaScript web ecosystem like minification (Terser), transpilation (Babel), formatting (Prettier), bundling (webpack), linting (ESLint), and more?',
    coverImage: 'image',
    readingTime: 'time',
    tweets: [],
  },
]

export default function BlogPage() {
  const [searchValue, setSearchValue] = useState('')
  const filteredBlogPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchValue.toLowerCase())
  )

  return (
    <Layout
      title='Blog – Caleb Benjamin'
      description='Thoughts on the software industry, programming, tech, and my personal life.'>
      <div className='flex flex-col items-start justify-center sm:px-16 px-10 sm:pb-16 py-4 bg-white sm:w-9/12 w-full  mx-auto sm:shadow-sm dark:bg-gray-900'>
        <div className='relative sm:w-9/12 w-full mx-auto mb-4'>
          <h1 className='mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white'>
            💡Blog
          </h1>
          {/* <p className='mb-4 text-gray-600 dark:text-gray-400'>
            {`I've been writing online since 2022, mostly about web development and tech careers.
          In total, I've written articles on my blog.
          Use the search below to filter by title.`}
          </p> */}
          <input
            aria-label='Search articles'
            type='text'
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder='Search articles'
            className='block w-full px-4 py-2 text-gray-900 bg-white border border-gray-200 rounded-md dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100'
          />
          <svg
            className='absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
            />
          </svg>
        </div>
        {!searchValue && (
          <>
            <h3 className='mt-8 mb-4 text-2xl font-bold tracking-tight text-black md:text-4xl dark:text-white'>
              Working on this blog page with MDX & ContentLayer stay tuned
            </h3>
            {/* <BlogPost
            title="Rust Is The Future of JavaScript Infrastructure"
            excerpt="Why is Rust being used to replace parts of the JavaScript web ecosystem like minification (Terser), transpilation (Babel), formatting (Prettier), bundling (webpack), linting (ESLint), and more?"
            slug="rust"
          />
          <BlogPost
            title="Everything I Know About Style Guides, Design Systems, and Component Libraries"
            excerpt="A deep-dive on everything I've learned in the past year building style guides, design systems, component libraries, and their best practices."
            slug="style-guides-component-libraries-design-systems"
          />
          <BlogPost
            title="Building a Design System Monorepo with Turborepo"
            excerpt="Manage multiple packages with a shared build, test, and release process using Turborepo, Changesets, Storybook, and more."
            slug="turborepo-design-system-monorepo"
          /> */}
          </>
        )}
        {/* <Suspense fallback={null}>
        <h3 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-black md:text-4xl dark:text-white">
          All Posts
        </h3>
        {!filteredBlogPosts.length && (
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            No posts found.
          </p>
        )}
        {filteredBlogPosts.map((post) => (
          <BlogPost
            key={post.title}
            slug={post.slug}
            title={post.title}
            excerpt={post.excerpt}
          />
        ))}
      </Suspense> */}
      </div>
    </Layout>
  )
}

// export async function getStaticProps({ preview = false }) {
//   const posts: Post[] = await getClient(preview).fetch(indexQuery);

//   return { props: { posts } };
// }
