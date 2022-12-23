import Link from 'next/link';
import Image from 'next/image';

import Container from '../../components/Layout';
import avatar from 'public/user-avatar.jpg';
import avatarBW from 'public/avatar2.jpg';

export default function About() {
  return (
    <Container title="About – Lee Robinson">
      <div className="flex flex-col justify-center items-start max-w-4xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          👨‍💻About Me
        </h1>
        <div className="mb-8 prose dark:prose-dark leading-6">
          <h2>Links</h2>
          <ul>
            <li>
              Twitter: <a href="https://twitter.com/calebbenjin">@calebbenjin</a>
            </li>
            <li>
              GitHub: <a href="https://github.com/calebbenjin">@calebbenjin</a>
            </li>
            <li>
              Website: <Link href="https://calebjs.vercel.app">https://calebjs.dev</Link>
            </li>
            <li>
              LinkedIn:{' '}
              <a href="https://www.linkedin.com/in/calebbenjin/">
                https://www.linkedin.com/in/calebbenjin
              </a>
            </li>
          </ul>
          <h2>Bio</h2>
          <h3>Job Title</h3>
          <p>Caleb Benjamin, Frontend Developer and Mentor at Stutern</p>
          
          <h3>Long, 3rd Person</h3>
          <p>
            Caleb Benjamin is a Frontend Developer and a Mentor at{' '}
            <a href="http://stutern.com/">Stutern</a>, where he helps mentor junior developers to start there career in tech and build a faster web. He is an educator, writer, and speaker, Caleb has written articles on React, Next.js, and web development.
          </p>
        
          <h3>Education</h3>
          <p>
            Caleb Benjamin graduated from Iowa State University with a B.S. in
            Computer Engineering.
          </p>
          <h2>Headshots</h2>
          <div className="flex space-x-8">
            <a href="/avatar.jpg">
              <Image
                alt="Caleb Benjamin headshot"
                width={400}
                quality={100}
                src={avatar}
                className="rounded-md"
              />
            </a>
            <a href="/avatar-bw.jpg">
              <Image
                alt="Caleb Benjamin headshot"
                width={400}
                quality={100}
                src={avatarBW}
                className="rounded-md"
              />
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}