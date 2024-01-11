import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BsGithub,
  BsTwitter,
  BsCalendar3,
  BsBoxArrowInUpRight,
  BsLinkedin,
} from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="flex flex-col justify-center items-start border-gray-200 dark:border-gray-700 px-6 sm:px-16 sm:pb-16 py-4 bg-white sm:w-9/12 w-full  mx-auto sm:shadow-sm dark:bg-gray-900">
      <div className="flex flex-col-reverse sm:mt-10 sm:flex-row items-start">
        <div className="flex flex-col pr-8">
          <div className="relative mb-4 sm:mb-10 mr-auto">
            <Image
              alt="Caleb Benjamin"
              height={100}
              width={100}
              src="/caleb-image.jpeg"
              sizes="30vw"
              priority
              className="rounded-full filter grayscale profile-bg"
            />
          </div>
          <h1 className="font-extrabold text-3xl sm:text-3xl tracking-tight mb-1 text-gray-700 dark:text-white">
            hey, I&apos;m Caleb 👋
          </h1>
          <p className="text-gray-600 sm:text-md text-md dark:text-gray-200 mt-4 mb-6 sm:w-9/12 w-full">
            I&apos;m a frontend developer, optimist, and indie hacker that based
            in Lagos Nigeria. I currently work as a Lead frontend developer at{" "}
            <Link
              href="https://www.eachblock.xyz"
              className=" font-bold py-1 px-2 bg-zinc-800 text-white text-sm rounded-sm">
              Eachblock
            </Link>{" "}
            In my spare time I love writing technical articles and building SaaS
            products.{" "}
            <Link href="/my-journey" className="underline decoration-1">
              Here&lsquo;s a summary of my work so far.
            </Link>
          </p>
          <p className="mb-6">
            <b>Technical Skills:</b> Typescript, Reactjs, Nextjs, Redux, Sass,
            Performance, PWA, Code Splitting, Webpack, Load Balancing, SSR, SSH,
            Security, Serverless, Security, CI/CD, Nodejs/Express, Automated
            Testing.
          </p>
          <p className="mb-6">
            <b>Soft Skills:</b> Communication, Kindness, Leadership, Excellence,
            Ownership, Growth Mindset, Decision making.
          </p>
          <div className="flex items-center mt-2 mb-8 text-gray-500 dark:text-gray-200">
            <Link href="https://twitter.com/calebbenjin">
              <BsTwitter className="mr-6 text-2xl dark:text-gray-200" />
            </Link>
            <Link href="https://www.linkedin.com/in/calebbenjin">
              <BsLinkedin className="mr-6 text-2xl dark:text-gray-200" />
            </Link>
            <Link href="https://github.com/calebbenjin">
              <BsGithub className="text-2xl dark:text-gray-200" />
            </Link>
          </div>
          <div className="flex items-center sm:space-x-6 sm:flex-row flex-col space-y-4">
            <Link
              href="https://calendly.com/calebbenjin/30minwithcaleb"
              className="text-gray-600 no-underline mr-1 sm:mr-4 sm:w-auto w-full">
              <button
                style={{
                  border: ` solid 1px #ccc`,
                  textDecoration: `none`,
                }}
                className="flex items-center justify-space-between rounded-md py-3 px-6 sm:px-4">
                <BsCalendar3 className="sm:mr-2 mr-2 sm:text-xl text-sm dark:text-gray-200" />
                <span className="sm:mr-4 mr-2 sm:text-md text-sm dark:text-gray-200">
                  Schedule a call
                </span>
                <BsBoxArrowInUpRight className="text-sm dark:text-gray-200" />
              </button>
            </Link>
            <Link
              href="https://wa.link/cayfcl"
              target="_blank"
              className="text-gray-600 no-underline mr-1 sm:mr-4 sm:w-auto w-full">
              <button
                style={{
                  border: ` solid 1px #ccc`,
                  textDecoration: `none`,
                }}
                className="flex items-center sm:justify-start justify-between rounded-md py-3 px-6 sm:px-4">
                <FaWhatsapp className="sm:mr-2 mr-2 sm:text-xl text-lg dark:text-gray-200" />
                <span className="sm:mr-4 mr-2 sm:text-md text-sm dark:text-gray-200">
                  Let&apos;s chat
                </span>
                <BsBoxArrowInUpRight className="text-lg dark:text-gray-200" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
