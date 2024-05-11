import Link from "next/link";
import Image from "next/image";

import Container from "../../components/Layout";
import avatar from "public/user-avatar.jpg";
import avatarBW from "public/avatar2.jpg";
import {
  BsGithub,
  BsTwitter,
  BsLinkedin,
  BsBoxArrowInUpRight,
} from "react-icons/bs";
import Navbar from "../../components/Navbar";
import decoImg from "../../public/DecoreTopRight.png";
import decoLeftImg from "../../public/DecoreBottomLeft.png";

export default function About() {
  return (
    <div>
      <Navbar />
      <Image
        src={decoImg}
        alt="product1"
        width="800"
        className="fixed top-0 right-0"
      />
      <Image
        src={decoLeftImg}
        alt="product1"
        width="400"
        className="fixed bottom-0 left-0 z-10 lg:flex hidden"
      />
      <Image
        src={decoLeftImg}
        alt="product1"
        width="200"
        className="absolute bottom-0 left-0 z-10 lg:hidden flex"
      />
      <Container title="About – Caleb Benjamin">
        <div className="flex flex-col justify-center items-center px-10 bg-white sm:w-9/12 w-full dark:prose-dark mx-auto pb-16 dark:bg-gray-900">
          <div className="mb-8 prose leading-6 dark:text-white">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight text-black dark:text-white">
              Hey 👋 There,
            </h1>
            <div className="relative mb-4 sm:mb-10 mr-auto">
              <Image
                alt="Caleb Benjamin"
                height={64}
                width={70}
                src="/avatar.png"
                sizes="30vw"
                priority
                className="rounded-full filter grayscale profile-bg"
              />
            </div>
            <p>
              I&apos;m Caleb. Most folks know me as{" "}
              <Link href="">
                <b>@FrontendHeavy</b>
              </Link>{" "}
              online.
            </p>
            <div className="">
              <p>
                Ex Co-Founder/Frontend Lead{" "}
                <Link href="https://www.easeplan.io">
                  <b>@Easeplan</b>
                </Link>{" "}
              </p>
              <p>
                Ex Frontend Lead{" "}
                <Link href="https://www.easeplan.io">
                  <b>@Fiatplug</b>
                </Link>{" "}
              </p>
            </div>
            <p>
              I&apos;m currently the Co-founder/Lead Frontend Engineer at{" "}
              <b>Easeplan.io</b> and also the senior frontend lead at{" "}
              <b>Fiatplug</b> Where I lead the frontend team. I focus on
              security, optimazation and improving the user expirence and
              dashboard of easeplan and fiatplug.
            </p>
            <hr />
            <p>
              I&apos;m passionate building saas projects and many creative
              pursuits, including building interactive and optimize web app that
              has rich seo. and of course helping other developers to move from
              0 to 1. This combination of interests is what ultimately led me to
              my current role.
            </p>
            <p>
              In my spare time I write technical articles and build SaaS
              projects, Currently I am building a SaaS app for Sport Betting,
              still under development.
            </p>

            <p>
              Outside of EasePlan, I Mentor at Stutern and run a frontend
              developer community called{" "}
              <Link href="/">
                <b>FrontendInit</b>
              </Link>{" "}
              where i provide guidance to frontend developers to move from 0 to
              1.
            </p>
            {/* <hr /> */}
            <div className="flex mt-10">
              <Link
                href="https://github.com/calebbenjin"
                className="text-gray-600 no-underline mr-1 sm:mr-4">
                <button
                  style={{ border: ` solid 1px #ccc`, textDecoration: `none` }}
                  className="flex items-center justify-space-between rounded-md py-2 px-2 sm:px-4">
                  <BsGithub className="sm:mr-4 mr-1 sm:text-2xl text-sm" />
                  <span className="sm:mr-6 mr-2 sm:text-lg text-sm">
                    GitHub
                  </span>
                  <BsBoxArrowInUpRight className="text-sm" />
                </button>
              </Link>
              <Link
                href="https://twitter.com/FrontendHeavy"
                className="text-gray-600 no-underline mr-1 sm:mr-4">
                <button
                  style={{ border: ` solid 1px #ccc`, textDecoration: `none` }}
                  className="flex items-center justify-space-between rounded-md py-2 px-2 sm:px-4">
                  <BsTwitter className="sm:mr-4 mr-1 sm:text-2xl text-sm" />
                  <span className="sm:mr-6 mr-2 sm:text-lg text-sm">
                    Twitter
                  </span>
                  <BsBoxArrowInUpRight className="text-sm" />
                </button>
              </Link>
              <Link
                href="https://www.linkedin.com/in/calebbenjin"
                className="text-gray-600 no-underline">
                <button
                  style={{ border: ` solid 1px #ccc`, textDecoration: `none` }}
                  className="flex items-center justify-space-between rounded-md py-2 sm:px-4 px-2">
                  <BsLinkedin className="sm:mr-4 mr-2 sm:text-lg text-sm" />
                  <span className="sm:mr-6 mr-2 sm:text-lg text-sm">
                    LinkedIn
                  </span>
                  <BsBoxArrowInUpRight className="text-sm" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
