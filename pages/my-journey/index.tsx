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

export default function MyJourney() {
  return (
    <Container title="About – Caleb Benjamin">
      <div className="flex flex-col justify-center items-center px-10 bg-white sm:w-9/12 w-full dark:prose-dark mx-auto pb-16 dark:bg-gray-900">
        <div className="mb-8 prose leading-6 dark:text-white">
          <h1 className="font-bold text-3xl md:text-5xl tracking-tight text-black dark:text-white">
            My Journey 🛣️
          </h1>

          <p>
            On a mission to build products that solve real life value with great
            users experince. and along the way, found and invest in amazing
            products. Here&apos;s a summary of my work so far.
          </p>
          <hr className="mt-1 " />

          <div className="product">
            <p className="my-0 font-bold dark:text-white text-lg">FiatPlug</p>
            <p className="my-0 text-gray-300 text-sm">
              Senior Lead Frontend Engineer, 2023 - Present
            </p>
            <p>
              Fiatplug is a digital currency peer to peer system, a platform
              that ensures a seamless and secure trading experience for selling
              gift cards and cryptocurrencies. I joined a team of product
              engineers working across web and mobile using Flutter.
            </p>
            <ul>
              <p>
                Throughout my time here, I was able to work on some hard
                problems:
              </p>
              <b>Performance Optimization:</b>
              <li>Identify and resolve performance bottlenecks</li>
              <li>Optimize rendering processes for better user experience.</li>
              <li>Implement lazy loading for images and other resources.</li>
              <li>Convert the merchant dashboard to PWA</li>
              <li>Responsive Design and Cross-Browser Compatibility</li>
              <li>
                Handle complex layout adjustments for different screen sizes and
                resolutions
              </li>
              <li>
                Implement PWA features such as service workers, offline support,
                and push notifications.
              </li>
              <li>
                Implement state management in large-scale applications using
                tools like Redux.
              </li>
              <li>
                Handle complex data flow and synchronization between components.
              </li>
              <li>
                Mitigate security vulnerabilities, such as cross-site scripting
                (XSS) and cross-site request forgery (CSRF).
              </li>
              <li>
                Implement secure authentication and authorization mechanisms.
              </li>
              <li>Integrate with various third-party APIs and services.</li>
              <li>Handle authentication and data fetching securely.</li>
              <li>
                Participate in code reviews and provide constructive feedback.
              </li>
              <li>
                Perform code refactoring to improve code maintainability and
                readability.
              </li>
              <li>
                Work effectively in a team, communicating ideas and solutions
                clearly.
              </li>
              <li>
                Collaborate with backend developers, designers, and other
                stakeholders.
              </li>
              <p></p>
            </ul>
          </div>

          <hr />
          <div className="product">
            <p className="my-0 font-bold dark:text-white text-lg">Easeplan</p>
            <p className="my-0 text-gray-300 text-sm">
              Senior Lead Frontend Engineer / Co-founder
            </p>
            <p>
              After coming out from covid I and my friend discovered a problem
              to solve for the event management industry, to help millions find
              event vendors just from the comfort of their home, that&apos;s
              were easeplan all came about, solving that once single problem.
            </p>
            <p>
              Easeplan took us months to build, trying to meet the user
              requirement and don&apos;t loose track of the solution we are
              trying to solve. Finally we launched and get 500 uers on our first
              month.
            </p>
            <p>
              As the frontend developer I was responsible for creating a user
              interface that facilitates smooth interactions and a positive user
              experience.
            </p>
            <ul>
              <p>
                Throughout my time here, I was able to work on some hard
                problems:
              </p>
              <li>
                Form for creating a vendor account with details like title,
                description, date, time, and location.
              </li>
              <li>
                Different user roles with varying levels of access (admin,
                organizer, participant)
              </li>
              <li>
                Confirmation emails or notifications upon successful
                registration.
              </li>
              <li>
                Real-time notifications for important updates (e.g., event
                changes, new registrations).
              </li>
              <li>Real-time Live chat and Support</li>
              <li>
                Ability for vendors to customize their business profile pages
                with images, branding, and additional information.
              </li>
              <li>hare buttons for promoting events on social media.</li>
              <li>
                Integration with social platforms for event discovery and
                sharing.
              </li>
              <li>Rating system for events and vendors</li>
              <li>Search functionality for finding specific events.</li>
            </ul>
          </div>

          <hr />
          <div className="product">
            <p className="my-0 font-bold dark:text-white text-lg">Cohexa</p>
            <p className="my-0 text-gray-300 text-sm">
              Senior Lead Frontend Engineer
            </p>
            <p>
              Cohexa is a US based company. Cohexa is an AI note dictation
              system is pivotal in meticulously documenting patient discussions,
              and ensuring the integrity of medical records. I joined team as
              move the website from a wordpress to a Nextjs app.
            </p>
            <p>
              On the frontend, I redesign the entire web app with Nextjs,
              Typescript, and Tailwindcss for styling. this new design help them
              close their first seed round of $1.6m.
            </p>
          </div>

          <hr />
          <div className="product">
            <p className="my-0 font-bold dark:text-white text-lg">Eachblock</p>
            <p className="my-0 text-gray-300 text-sm">
              Senior Lead Frontend Engineer, 2021 - 2023
            </p>
            <p>
              Eachblock is a remote software agency that build software for top
              brands around the world, from Web development, Mobile development,
              UIUX etc...
            </p>
            <p>
              On the frontend, I joined eachblock as a frontend developer to
              revamp their website with their new UI and increase seo and
              performance.
            </p>
            <ul>
              <p>
                Throughout my time here, I was able to work on some hard
                problems:
              </p>
              <li>Improve the website performance</li>
              <li>Improve the SEO ranking on google.</li>
              <li>Achieve a pixel perfect design.</li>
              <li>Move from just React to Nextjs 14</li>
              <li>
                <b>Tools:</b> Nextjs-14, Typescript, Tailwindcss
              </li>
            </ul>
          </div>

          <hr />
          <div className="product">
            <p className="my-0 font-bold dark:text-white text-lg">
              CapitalRollup
            </p>
            <p className="my-0 text-gray-300 text-sm">
              Lead Frontend Engineer, 2019 - 2021
            </p>
            <ul>
              <p>
                Throughout my time here, I was able to work on some hard
                problems:
              </p>
              <li>
                Design and build reusable code and libraries for future use,
                increasing development efficiency by 30%.
              </li>
              <li>
                Worked with product managers and designers to gather
                requirements and translate them into code
              </li>
              <li>
                Optimized the website&apos;s performance by implementing lazy
                loading and code splitting techniques, resulting in faster page
                load times and improved user engagement
              </li>
              <li>
                Translating designs and wireframes into quality code that
                maintains the highest standards.
              </li>
              <li>
                Optimize applications for maximum speed and scalability,
                resulting in a 35% increase in overall performance.
              </li>
            </ul>
          </div>
          <hr />
          <div className="product">
            <p className="my-0 font-bold dark:text-white text-lg">Stutern</p>
            <p className="my-0 text-gray-300 text-sm">
              Frontend Developer Mentor, 2019 - 2021
            </p>
            <p>
              On the frontend, I led our move from a custom webpack and React
              configuration to Next.js and the latest React patterns, handling
              from the web app down to admin dasboard.
            </p>
            <ul>
              <p>
                Throughout my time here, I was able to work on some hard
                problems:
              </p>
              <li>
                Collaborate with cross-functional teams to design, develop, and
                maintain scalable and solid frontend codebase for a leading
                EdTech company in Lagos, Nigeria.
              </li>
              <li>
                I mentored students in redesigning the student dashboard to help
                student track their progress and take courses.
              </li>
              <li>
                I trained and mentored 24 junior frontend engineers that ranked
                in the company&apos;s top 10 fastest-growing talent and
                onboarded mentees to business projects 20% faster than others.
              </li>
            </ul>
          </div>
          <hr />
          <div className="flex mt-10">
            <Link
              href="https://github.com/calebbenjin"
              className="text-gray-600 no-underline mr-1 sm:mr-4">
              <button
                style={{ border: ` solid 1px #ccc`, textDecoration: `none` }}
                className="flex items-center justify-space-between rounded-md py-2 px-2 sm:px-4">
                <BsGithub className="sm:mr-4 mr-1 sm:text-2xl text-sm" />
                <span className="sm:mr-6 mr-2 sm:text-lg text-sm">GitHub</span>
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
                <span className="sm:mr-6 mr-2 sm:text-lg text-sm">Twitter</span>
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
  );
}
