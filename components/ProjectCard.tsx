import Link from "next/link";
import useSWR from "swr";
import cn from "classnames";

import fetcher from "../lib/fetcher";
import Image from "next/image";

type Views = {
  total: number;
};
type BlogProps = {
  title: string;
  slug: string;
  gradient: string;
  src: any;
  siteUrl: string;
  codeUrl: string;
  description: string;
  prodata?: any;
};

export default function ProjectCard({
  title,
  description,
  slug,
  gradient,
  src,
  siteUrl,
  codeUrl,
  prodata,
}: BlogProps) {
  const { data } = useSWR<Views>(`/api/views/${slug}`, fetcher);
  const views = data?.total;

  return (
    <div>
      <div className="flex lg:flex-row flex-col gap-x-8 items-center bg-white dark:bg-gray-900 rounded-lg z-50">
        <div
          className={`flex flex-col md:flex-row justify-between ${
            prodata?.title == "SUREODDS"
              ? "lg:h-[50vh] h-[20vh]"
              : `lg:h-[75vh] h-[40vh]`
          } lg:w-[50vw] w-full rounded-lg relative`}>
          <Image
            alt={title}
            src={src}
            layout="fill"
            // sizes="80vw"
            priority
            className="shadow-2xl rounded-md"
          />
        </div>
        <div className="lg:w-[50vw] w-full">
          <div className="">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-xl lg:text-3xl font-extrabold mt-3 w-full text-gray-700 dark:text-gray-100 tracking-tight">
                  {title}
                </h4>
                <p className="font-semibold">{prodata?.role}</p>
              </div>
              <div>
                <Link
                  href={siteUrl}
                  className="dark:bg-gray-200 dark:text-black bg-gray-200 rounded-lg text-center sm:text-sm py-2 px-4 border-solid cursor-pointer">
                  View site
                </Link>
              </div>
            </div>
            <p className="mt-6 font-bold">Tech Stack</p>
            <div className="lg:flex grid grid-cols-3 gap-3 lg:space-x-4 mt-2">
              {prodata?.stacks?.map((stack: any, index: any) => (
                <p
                  key={index}
                  className="border text-center border-[#F1214F] py-1 lg:px-3 rounded-lg text-sm">
                  {stack}
                </p>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <p className="sm:my-3 my-4 w-full text-gray-900 dark:text-gray-100 tracking-tight font-semibold">
              {description}
            </p>
            <p className="font-bold mt-8 mb-2">Key features I worked on</p>
            <div className="space-y-2">
              {prodata?.features?.map((list: any, index: any) => (
                <p key={index} className=" text-sm">
                  🚀 {list}
                </p>
              ))}
            </div>
          </div>
          {/* <div className="grid grid-cols-2 gap-6 text-gray-800 dark:text-gray-200">
            <Link
              href={siteUrl}
              className="dark:bg-gray-800 bg-gray-200 rounded-lg text-center sm:text-sm p-2 border-solid">
              View site
            </Link>
            <Link
              href={codeUrl}
              className="dark:bg-gray-800 bg-gray-200 rounded-lg text-center sm:text-sm p-2">
              Code base
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
}
