import React from "react";
import Image from "next/image";
import acceptImg from "../public/acceptimg.jpg";
import practiceImg from "../public/practice.jpg";
import keybordImg from "../public/keyboard.webp";
import genesisImg from "../public/workmood.jpg";
import iconImg from "../public/ice.webp";

const SlideSection = () => {
  return (
    <section className="dark:bg-gray-900">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-10 sm:py-0 sm:gap-8">
        <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2">
          <Image
            src={acceptImg}
            alt="Keyboard Image"
            className="rounded-xl"
            fill
          />
        </div>
        <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl -rotate-2">
          <Image
            src={iconImg}
            alt="Keyboard Image"
            className="rounded-xl"
            fill
          />
        </div>
        <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2">
          <Image
            src={practiceImg}
            alt="CreatorImage"
            className="rounded-xl"
            fill
          />
        </div>
        <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2">
          <Image
            src={keybordImg}
            alt="Keyboard Image"
            className="rounded-xl"
            fill
          />
        </div>
        <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl -rotate-2">
          <Image
            src={genesisImg}
            alt="Keyboard Image"
            className="rounded-xl"
            fill
          />
        </div>
      </div>
    </section>
  );
};

export default SlideSection;
