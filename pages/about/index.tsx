import Link from 'next/link'
import Image from 'next/image'

import Container from '../../components/Layout'
import avatar from 'public/user-avatar.jpg'
import avatarBW from 'public/avatar2.jpg'
import {
  BsGithub,
  BsTwitter,
  BsLinkedin,
  BsBoxArrowInUpRight,
} from 'react-icons/bs'

export default function About() {
  return (
    <Container title='About – Caleb Benjamin'>
      <div className='flex flex-col justify-center items-center px-10 bg-white sm:w-9/12 w-full dark:prose-dark mx-auto pb-16 dark:bg-gray-900'>
        <div className='mb-8 prose leading-6 dark:text-white'>
          <h1 className='font-bold text-3xl md:text-5xl tracking-tight text-black dark:text-white'>
            About Me
          </h1>
          <div className='relative sm:mb-8 mb-4 sm:mb-10 mr-auto'>
            <Image
              alt='Caleb Benjamin'
              height={64}
              width={70}
              src='/avatar.png'
              sizes='30vw'
              priority
              className='rounded-full filter grayscale profile-bg'
            />
          </div>
          <p>
            Hey I&apos;m Caleb. Most folks know me as <b>calebbenjin</b> online.
          </p>
          <p>
            I&apos;m currently the Lead Frontend Engineer at <b>Easeplan.io</b>{' '}
            Where I lead our frontend team. I focus on security, optimazation
            and improving the user expirence of easeplan.
          </p>
          <hr />
          <p>
            I&apos;m passionate about many creative pursuits, including building
            interactive and optimize web app that has rich seo. and of course
            helping other developers to move from 0 to 1. This combination of
            interests is what ultimately led me to my current role.
          </p>

          <p>
            I love building for the web. From something as simple as a single
            HTML file – all the way to large Next.js applications. The web is
            incredible. Anyone can become a developer, writer, or creator – and
            no one has to ask for permission. You can just build.
          </p>

          <p>
            Outside of EasePlan, I Mentor at Stutern and run a frontend
            developer community called{' '}
            <Link href='/'>
              <b>FrontendInit</b>
            </Link>{' '}
            where i provide guidance to frontend developers to move from 0 to 1.
          </p>
          {/* <hr /> */}
          <div className='flex mt-10'>
            <Link
              href='https://github.com/calebbenjin'
              className='text-gray-600 no-underline mr-1 sm:mr-4'>
              <button
                style={{ border: ` solid 1px #ccc`, textDecoration: `none` }}
                className='flex items-center justify-space-between rounded-md py-2 px-2 sm:px-4'>
                <BsGithub className='sm:mr-4 mr-1 sm:text-2xl text-sm' />
                <span className='sm:mr-6 mr-2 sm:text-lg text-sm'>GitHub</span>
                <BsBoxArrowInUpRight className='text-sm' />
              </button>
            </Link>
            <Link
              href='https://twitter.com/calebbenjin'
              className='text-gray-600 no-underline mr-1 sm:mr-4'>
              <button
                style={{ border: ` solid 1px #ccc`, textDecoration: `none` }}
                className='flex items-center justify-space-between rounded-md py-2 px-2 sm:px-4'>
                <BsTwitter className='sm:mr-4 mr-1 sm:text-2xl text-sm' />
                <span className='sm:mr-6 mr-2 sm:text-lg text-sm'>Twitter</span>
                <BsBoxArrowInUpRight className='text-sm' />
              </button>
            </Link>
            <Link
              href='https://www.linkedin.com/in/calebbenjin'
              className='text-gray-600 no-underline'>
              <button
                style={{ border: ` solid 1px #ccc`, textDecoration: `none` }}
                className='flex items-center justify-space-between rounded-md py-2 sm:px-4 px-2'>
                <BsLinkedin className='sm:mr-4 mr-2 sm:text-lg text-sm' />
                <span className='sm:mr-6 mr-2 sm:text-lg text-sm'>
                  LinkedIn
                </span>
                <BsBoxArrowInUpRight className='text-sm' />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  )
}
