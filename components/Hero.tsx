import React from "react";
import Navbar from "./Navbar";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaTwitter, FaGithub } from "react-icons/fa";
import Link from "next/link";
import {
  BsGithub,
  BsTwitter,
  BsCalendar3,
  BsBoxArrowInUpRight,
  BsLinkedin,
} from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import productImg from "../public/aquatrack-landing.jpg";
import faitproductImg from "../public/fatPlug.jpg";
import decoImg from "../public/DecoreTopRight.png";
import decoLeftImg from "../public/DecoreBottomLeft.png";

const Hero = () => {
  return (
    <div className="lg:h-[100vh] pb-20 bg-white dark:bg-gray-900 relative">
      <Navbar />
      <Image
        src={decoImg}
        alt="product1"
        width="800"
        className="absolute top-0 right-0"
      />
      <Image
        src={decoLeftImg}
        alt="product1"
        width="400"
        className="absolute bottom-0 left-0 z-10 lg:flex hidden"
      />
      <Image
        src={decoLeftImg}
        alt="product1"
        width="200"
        className="absolute bottom-0 left-0 z-10 lg:hidden flex"
      />
      <div className="lg:block hidden left-side absolute top-0 left-0 bottom-0 h-screen border-r-[2px] border-gray-200 w-24 ">
        <div className="relative h-screen ">
          <div className="flex w-full pt-10 items-center justify-center">
            <h1 className="font-extrabold text-xl">
              <span className="text-3xl font-extrabold">F</span>
              <span className="text-red-600">H</span>
            </h1>
          </div>
          <div className="icons w-full absolute bottom-14 right-0 flex items-center justify-center">
            <div className="space-y-6">
              <IoLogoLinkedin className="text-gray-300 h-6 w-6 transition-all hover:text-red-600" />
              <FaTwitter className="text-gray-300 h-6 w-6 hover:text-red-600" />
              <FaGithub className="text-gray-300 h-6 w-6 hover:text-red-600" />
            </div>
          </div>
        </div>
      </div>

      <div className="section lg:pl-40 px-5 lg:px-0 lg:mt-20 mt-10 flex justify-between">
        <div className="content z-50">
          <p className="text-gray-700 dark:text-gray-200 font-semibold shadow-text">
            Hi There,
          </p>
          <h1 className="font-extrabold lg:text-8xl text-6xl text-gray-700 dark:text-gray-200 dark:shadow-textdark shadow-text">
            I am Ca<span className="text-[#F1214F] font-bold">l</span>eb
          </h1>
          <h2 className="lg:text-2xl text-xl font-bold text-gray-600 dark:text-gray-200 shadow-text mt-2">
            I am Frontend Developer during daytime
          </h2>
          <p className="lg:text-xl text-lg text-gray-700 dark:text-gray-200 font-semibold shadow-text">
            & work with batman during nights.
          </p>
          <div className="flex items-center lg:space-x-6 space-x-4 mt-10 flex-row lg:space-y-0">
            <Link
              href="https://calendly.com/calebbenjin/30minwithcaleb"
              className="text-gray-600 no-underline lg:mr-4 sm:w-auto w-full ">
              <button className="flex items-center lg:justify-space-between justify-center py-4 w-full text-center sm:px-4 bg-[#F1214F]">
                <BsCalendar3 className="lg:mr-2 mr-2 lg:text-xl h-4 w-4 text-sm text-white" />
                <span className="lg:mr-4 lg:text-md text-sm text-white">
                  Schedule a call
                </span>
                <BsBoxArrowInUpRight className="text-lg text-white lg:flex hidden" />
              </button>
            </Link>
            <Link
              href="https://wa.link/cayfcl"
              target="_blank"
              className="text-gray-600 no-underline mr-1 sm:mr-4 sm:w-auto w-full">
              <button className="flex items-center lg:justify-space-between justify-center py-4 w-full text-center sm:px-4 bg-[#F1214F]">
                <FaWhatsapp className="sm:mr-2 mr-2 sm:text-xl text-lg text-white" />
                <span className="lg:mr-4 sm:text-md text-sm text-white">
                  Let&apos;s chat
                </span>
                <BsBoxArrowInUpRight className="text-lg lg:flex hidden text-white" />
              </button>
            </Link>
          </div>
          <div className="contacts lg:flex hidden grid grid-cols-2 items-center lg:space-x-10 space-4 mt-10 lg:mt-24 lg:flex-row">
            <div className="lg:border-r border-gray-400 lg:pr-6">
              <h2 className="font-extrabold text-gray-600 dark:text-gray-200 text-base">
                Email
              </h2>
              <p className="text-gray-800 dark:text-gray-200 text-xs mt-1">
                calebbenjin@gmail.com
              </p>
            </div>
            <div className="lg:border-r border-gray-400 lg:pr-6">
              <h2 className="font-extrabold text-gray-600 dark:text-gray-200 text-base">
                Phone
              </h2>
              <p className="text-gray-800 dark:text-gray-200 text-xs mt-1">
                +234 9066 322 383
              </p>
            </div>
            <div className="lg:border-r border-gray-400 lg:pr-6 mt-4">
              <h2 className="font-extrabold text-gray-600 dark:text-gray-200 text-base">
                Location
              </h2>
              <p className="text-gray-800 dark:text-gray-200 text-xs mt-1">
                Lagos Island, Nigeria
              </p>
            </div>
          </div>
        </div>
        <div className="imgs h-[90vh] w-[50vw] lg:block hidden absolute top-20 right-0 p-6 overflow-hidden">
          <div className="rounded-lg w-auto flex gap-x-4 relative">
            <Image
              src={productImg}
              alt="product1"
              width="500"
              className="shadow-2xl rounded-lg"
            />
            <Image
              src={faitproductImg}
              alt="product1"
              width="500"
              height="600"
              className="shadow-2xl absolute bottom-0 right-[-2rem] top-40"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
