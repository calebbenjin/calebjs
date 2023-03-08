import Link from 'next/link';
import useSWR from 'swr';
import cn from 'classnames';

import fetcher from '../lib/fetcher';
import Image from 'next/image';

type Views = {
  total: number;
};
type BlogProps = {
  title: string, 
  slug: string,
  gradient: string,
  src: any,
  siteUrl: string,
  codeUrl: string,
  description: string,
};

export default function ProjectCard({ title, description, slug, gradient, src, siteUrl, codeUrl }: BlogProps) {
  const { data } = useSWR<Views>(`/api/views/${slug}`, fetcher);
  const views = data?.total;

  return (
    <div className={cn(
        'transform hover:scale-[1.01] transition-all',
        'rounded-xl w-full bg-gradient-to-r p-1',
        gradient
      )}
    >
      <div className="flex flex-col justify-between h-full bg-white dark:bg-gray-900 rounded-lg p-3">
        <div className="flex flex-col md:flex-row justify-between">
          <Image 
            alt={title}
            height={200}
            width={576}
            src={src}
            sizes="30vw"
            priority
            className="filter rounded-md" />
        </div>
        <div className="flex flex-col md:flex-row justify-between">
          <h4 className="text-lg sm:text-sm font-semibold mt-3 w-full text-gray-700 dark:text-gray-100 tracking-tight">
            {title}
          </h4>
        </div>
        <div className="flex flex-col md:flex-row justify-between">
          <p className="sm:text-sm font-light sm:my-3 my-4 w-full text-gray-900 dark:text-gray-100 tracking-tight">
            {description}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 text-gray-800 dark:text-gray-200">
          <Link href={siteUrl} className="dark:bg-gray-800 bg-gray-200 text-center sm:text-sm p-1 border-solid">View site</Link>
          <Link href={codeUrl} className="dark:bg-gray-800 bg-gray-200 text-center sm:text-sm p-1">Code base</Link>
        </div>
      </div>
    </div>
  );
}