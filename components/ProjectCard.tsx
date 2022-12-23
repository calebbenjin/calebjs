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
};

export default function ProjectCard({ title, slug, gradient, src, siteUrl, codeUrl }: BlogProps) {
  const { data } = useSWR<Views>(`/api/views/${slug}`, fetcher);
  const views = data?.total;

  return (
    <div className={cn(
        'transform hover:scale-[1.01] transition-all',
        'rounded-xl w-full md:w-1/3 bg-gradient-to-r p-1',
        gradient
      )}
    >
      <div className="flex flex-col justify-between h-full bg-white dark:bg-gray-900 rounded-lg p-4">
        <div className="flex flex-col md:flex-row justify-between">
          <Image 
            alt={title}
            height={176}
            width={276}
            src={src}
            sizes="30vw"
            priority
            className="filter" />
        </div>
        <div className="flex flex-col md:flex-row justify-between">
          <h4 className="text-lg md:text-lg font-medium mb-6 mt-4 sm:mb-10 w-full text-gray-900 dark:text-gray-100 tracking-tight">
            {title}
          </h4>
        </div>
        <div className="flex items-center justify-between text-gray-800 dark:text-gray-200 capsize">
          <Link href={siteUrl} className="card-btn-view">View site</Link>
          <Link href={codeUrl} className="card-btn-github">Codebase</Link>
        </div>
      </div>
    </div>
  );
}