import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";

import test from "@/assets/img/test.jpg";

export default function ComponentName() {
  return (
    <div className="min-h-screen w-full">
      <div className="relative h-[400px] w-full">
        <img 
          src={test.src} 
          alt="test" 
          className="h-full w-full object-cover object-center" 
        />

        <div className="absolute bottom-0 left-0 h-[100px] w-full bg-gradient-to-t from-gray-100 to-transparent"/>
      </div>

      <div className="mx-auto w-full max-w-[800px] p-5 pt-6">
        <h1 className="mb-6 w-full text-3xl font-extrabold">
          Is United States really the best country in the world?
        </h1>

        <div className="h-[1px] w-full bg-gray-300"/>

        <div className="my-3 flex w-full items-center justify-between">
          <p className="flex w-fit items-center gap-x-1 text-sm font-semibold text-gray-500 opacity-75">
            <span className="hidden md:inline">
              Space Exploration &bull;
            </span>

            <MdDateRange size={16}/>

            18 october 2021
          </p>

          <div className="flex items-center gap-x-3">
            <a 
              href="https://www.facebook.com/sharer/sharer.php?u=https://google.com" 
              className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full bg-[#3b4ea9] text-white hover:opacity-75 sm:h-[35px] sm:w-[35px]"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF className="h-auto w-[17px] sm:w-[20px]"/>
            </a>

            <a 
              href="https://twitter.com/intent/tweet?url=https://google.com" 
              className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full bg-[#5fb7fc] text-white hover:opacity-75 sm:h-[35px] sm:w-[35px]"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter className="h-auto w-[17px] sm:w-[20px]"/>
            </a>

            <a 
              href="https://www.linkedin.com/sharing/share-offsite/?url=https://google.com" 
              className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full bg-[#0173b2] text-white hover:opacity-75 sm:h-[35px] sm:w-[35px]"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="h-auto w-[17px] sm:w-[20px]"/>
            </a>
          </div>
        </div>

        <div className="h-[1px] w-full bg-gray-300"/>

        {/* TODO: USE SEMANTIC TAGS SUCH AS MAIN */}

        <p className=" font-base mb-4 mt-6 text-justify">
          <span className="float-left mr-2 text-7xl font-extrabold">
            L
          </span>
          orem ipsum dolor sit amet consectetur adipisicing elit.
          orem ipsum dolor sit amet consectetur adipisicing elit.
          orem ipsum dolor sit amet consectetur adipisicing elit.
          orem ipsum dolor sit amet consectetur adipisicing elit.
          orem ipsum dolor sit amet consectetur adipisicing elit.
          orem ipsum dolor sit amet consectetur adipisicing elit.
          orem ipsum dolor sit amet consectetur adipisicing elit.
          orem ipsum dolor sit amet consectetur adipisicing elit.
          orem ipsum dolor sit amet consectetur adipisicing elit.
          orem ipsum dolor sit amet consectetur adipisicing elit.
          orem ipsum dolor sit amet consectetur adipisicing elit.
          orem ipsum dolor sit amet consectetur adipisicing elit.
          orem ipsum dolor sit amet consectetur adipisicing elit.
          orem ipsum dolor sit amet consectetur adipisicing elit.
          orem ipsum dolor sit amet consectetur adipisicing elit.
          orem ipsum dolor sit amet consectetur adipisicing elit.
        </p>

        <p className="font-base mb-4 text-justify">
          orem ipsum dolor sit amet consectetur adipisicing elit.
          orem ipsum dolor sit amet consectetur adipisicing elit.
          orem ipsum dolor sit amet consectetur adipisicing elit.
          orem ipsum dolor sit amet consectetur adipisicing elit.
          orem ipsum dolor sit amet consectetur adipisicing elit.
          orem ipsum dolor sit amet consectetur adipisicing elit.
          orem ipsum dolor sit amet consectetur adipisicing elit.
          orem ipsum dolor sit amet consectetur adipisicing elit.
          orem ipsum dolor sit amet consectetur adipisicing elit.
          orem ipsum dolor sit amet consectetur adipisicing elit.
          orem ipsum dolor sit amet consectetur adipisicing elit.
          orem ipsum dolor sit amet consectetur adipisicing elit.
          orem ipsum dolor sit amet consectetur adipisicing elit.
          orem ipsum dolor sit amet consectetur adipisicing elit.
          orem ipsum dolor sit amet consectetur adipisicing elit.
          orem ipsum dolor sit amet consectetur adipisicing elit.
        </p>

        <p className="font-base mb-4 text-justify">
          orem ipsum dolor sit amet consectetur adipisicing elit.
          orem ipsum dolor sit amet consectetur adipisicing elit.
          orem ipsum dolor sit amet consectetur adipisicing elit.
          orem ipsum dolor sit amet consectetur adipisicing elit.
          orem ipsum dolor sit amet consectetur adipisicing elit.
          orem ipsum dolor sit amet consectetur adipisicing elit.
          orem ipsum dolor sit amet consectetur adipisicing elit.
          orem ipsum dolor sit amet consectetur adipisicing elit.
          orem ipsum dolor sit amet consectetur adipisicing elit.
          orem ipsum dolor sit amet consectetur adipisicing elit.
          orem ipsum dolor sit amet consectetur adipisicing elit.
          orem ipsum dolor sit amet consectetur adipisicing elit.
          orem ipsum dolor sit amet consectetur adipisicing elit.
          orem ipsum dolor sit amet consectetur adipisicing elit.
          orem ipsum dolor sit amet consectetur adipisicing elit.
          orem ipsum dolor sit amet consectetur adipisicing elit.
        </p>

        <div className="w-full rounded-lg bg-white p-4 shadow-md">
          <p className="text-base font-bold">
            Leave a reply
          </p>
        </div>

        <h1 className="text-xl font-bold">Aqui ira los comments. Los comentarios que aparezca la imagen con un color simple todos y que en el centro aparezca la letra (como en gmail)</h1>
      </div>
    </div>
  );
}