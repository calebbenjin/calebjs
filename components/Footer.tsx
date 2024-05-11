import Link from 'next/link';

// import NowPlaying from 'components/NowPlaying';

type LinkProps = {
  href: string,
  children: any;
}

const ExternalLink = ({ href, children }: LinkProps) => (
  <a
    className="text-gray-500 hover:text-gray-600 transition dark:text-gray-200"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center border-x-2 border-orange-400 bg-white sm:w-9/12 w-full  mx-auto sm:shadow-sm dark:bg-gray-900 dark:text-white">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      {/* <NowPlaying /> */}
      <div className="w-full max-w-2xl mx-auto grid grid-cols-3 px-6 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <Link
            href="/"
            className="text-gray-500 hover:text-gray-600 transition dark:text-gray-200">
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-500 hover:text-gray-600 transition dark:text-gray-200">
            About
          </Link>
          <Link
            href="/newsletter"
            className="text-gray-500 hover:text-gray-600 transition dark:text-gray-200">
            Newsletter
          </Link>
        </div>
        <div className="flex flex-col space-y-4 dark:text-gray-200">
          <ExternalLink href="https://twitter.com/calebbenjin">
            Twitter
          </ExternalLink>
          <ExternalLink href="https://github.com/calebbenjin">
            GitHub
          </ExternalLink>
          <ExternalLink href="https://www.youtube.com/channel/UCZMli3czZnd1uoc1ShTouQw">
            YouTube
          </ExternalLink>
        </div>
        <div className="flex flex-col space-y-4 dark:text-white">
          <Link
            href="/notes"
            className="text-gray-500 hover:text-gray-600 transition dark:text-gray-200">
            My Notes
          </Link>
          <Link
            href="/projects"
            className="text-gray-500 hover:text-gray-600 transition dark:text-gray-200">
            Projects
          </Link>
          <Link
            href="/snippets"
            className="text-gray-500 hover:text-gray-600 transition dark:text-gray-200">
            CodeSnippets
          </Link>
          {/* <Link
            href="/https://twitter.com/calebbenjin"
            className="text-gray-500 hover:text-gray-600 transition dark:text-gray-200"
          >
            Tweets
          </Link> */}
        </div>
      </div>
    </footer>
  );
}