import React, { useState, useEffect } from "react";
import MobileMenu from "./MobileMenu";
import NavItem from "./NavItem";
import { useTheme } from "next-themes";
import Link from "next/link";

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  return (
    <div className=" lg:pl-40 flex flex-col justify-center bg-white w-full  mx-auto dark:bg-gray-900">
      <nav className="flex items-center justify-between w-full relative mx-auto pl-6 pr-10 sm:pt-8 pt-6 pb-4 sm:pb-8 text-gray-900 dark:text-gray-100">
        <a href="#skip" className="skip-nav">
          Skip to content
        </a>
        <h1 className="font-extrabold text-xl lg:hidden block">
          <span className="text-3xl font-extrabold">F</span>
          <span className="text-red-600">H</span>
        </h1>
        <div className="hidden sm:inline shadow-md p-2 rounded-full border border-1 border-gray-500">
          <NavItem href="/" text="Portfolio" />
          <NavItem href="/projects" text="My works" />
          <NavItem href="/about-caleb" text="About me" />
          {/* <NavItem href="/my-journey" text="My journey" /> */}
          <NavItem href="/snippets" text="Code Snippets" />
          <NavItem href="/blog" text="Blog" />
          {/* <NavItem href="/guestbook" text="Guestbook" />
            <NavItem href="/dashboard" text="Dashboard" /> */}
          {/* <NavItem href='/notes' text='My Notes' /> */}
        </div>
        <button
          aria-label="Toggle Dark Mode"
          type="button"
          className="z-50 w-10 h-10 bg-white shadow-lg rounded-xl dark:bg-gray-600 flex items-center justify-center  hover:ring-2 ring-gray-300  transition-all"
          onClick={() =>
            setTheme(resolvedTheme === "light" ? "dark" : "light")
          }>
          {mounted && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="w-5 h-5 text-gray-800 dark:text-gray-200">
              {resolvedTheme === "light" ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              )}
            </svg>
          )}
        </button>
        <div className="sm:hidden block shadow-md rounded-full border border-1 border-gray-500">
          <MobileMenu />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
