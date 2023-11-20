import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  BsGithub,
  BsTwitter,
  BsCalendar3,
  BsBoxArrowInUpRight,
  BsLinkedin,
} from 'react-icons/bs'

const HeroSection = () => {
  return (
    <div className='flex flex-col justify-center items-start border-gray-200 dark:border-gray-700 px-6 sm:px-16 sm:pb-16 py-4 bg-white sm:w-9/12 w-full  mx-auto sm:shadow-sm dark:bg-gray-900'>
      <div className='flex flex-col-reverse sm:mt-10 sm:flex-row items-start'>
        <div className='flex flex-col pr-8'>
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
          <h1 className='font-extrabold text-3xl sm:text-5xl tracking-tight mb-1 text-gray-700 dark:text-white'>
            Caleb Benjamin
          </h1>
          <p className='text-gray-600 sm:text-md text-md dark:text-gray-200 mt-4 mb-6 sm:w-9/12 w-full'>
            I&apos;m Caleb Benjamin, a Frontend Software Developer based in
            Lagos Nigeria. I am the Co-founder/Frontend Engineer of{' '}
            <Link
              href='https://www.easeplan.io'
              className='underline decoration-1'>
              easeplan.io
            </Link>
            . where we built an event planning platform that connects
            event owners to event planners and vendors, with over 500 users
            daily. And I am mentoring over 25+ junior frontend developers at{' '}
            <Link
              href='https://www.stutern.com'
              className='underline decoration-1'>
              stutern.com
            </Link>
            . {` `}
            In my spare time I love writing technical articles and building SaaS
            projects.
          </p>
          <p className='mb-6'>
            <b>Technical Skills:</b> Typescript, Reactjs, Nextjs, Redux, Sass,
            Performance, PWA, Code Splitting, Webpack, Load Balancing, SSR, SSH,
            Security, Serverless, Security, CI/CD, Nodejs/Express, Automated
            Testing.
          </p>
          <p className='mb-6'>
            <b>Soft Skills:</b> Communication, Kindness, Leadership, Excellence,
            Ownership, Growth Mindset, Decision making.
          </p>
          <div className='flex items-center mt-2 mb-8 text-gray-500 dark:text-gray-200'>
            <Link href='https://twitter.com/calebbenjin'>
              <BsTwitter className='mr-6 text-2xl dark:text-gray-200' />
            </Link>
            <Link href='https://www.linkedin.com/in/calebbenjin'>
              <BsLinkedin className='mr-6 text-2xl dark:text-gray-200' />
            </Link>
            <Link href='https://github.com/calebbenjin'>
              <BsGithub className='text-2xl dark:text-gray-200' />
            </Link>
          </div>
          <Link
            href='https://calendly.com/calebbenjin/30minwithcaleb'
            className='text-gray-600 no-underline mr-1 sm:mr-4'>
            <button
              style={{
                border: ` solid 1px #ccc`,
                textDecoration: `none`,
              }}
              className='flex items-center justify-space-between rounded-md py-3 px-6 sm:px-4'>
              <BsCalendar3 className='sm:mr-2 mr-2 sm:text-xl text-sm dark:text-gray-200' />
              <span className='sm:mr-4 mr-2 sm:text-md text-sm dark:text-gray-200'>
                Schedule a call
              </span>
              <BsBoxArrowInUpRight className='text-sm dark:text-gray-200' />
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
