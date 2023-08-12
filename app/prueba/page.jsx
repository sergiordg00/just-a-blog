import clsx from "clsx";
import { BiCategoryAlt, BiTrendingUp } from "react-icons/bi";
import { ImNewspaper } from "react-icons/im";
import { MdDateRange } from "react-icons/md";

import test from "@/assets/img/test.jpg";
import test2 from "@/assets/img/test2.jpg";

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-[1600px] items-start">
      <div className="min-h-screen w-full min-w-0 p-6 pb-12 pt-4">
        <div className="flex w-full items-center gap-x-4">
          <div className="h-12 w-12 rounded-full bg-red-500"></div>
          <div className="w-full max-w-[500px] rounded-full border border-solid border-gray-400 p-2 px-4 text-gray-500">
            Search for a post...
          </div>
        </div>
        
        <div className="my-5 h-[1px] w-full shrink-0 bg-gray-300"/>

        {/* SEARCH RESULT UI TEST START */}
        {/* SEARCH RESULT UI TEST END */}

        <h2 className="mb-3 flex items-center gap-x-2 text-lg font-bold sm:text-xl">
          <ImNewspaper size={24} className="text-black"/>
        Article of the day
        </h2>

        <article className="flex w-full flex-col overflow-hidden rounded-md shadow-lg lg:flex-row">
          <div className="order-2 flex w-full flex-col justify-center bg-black p-6 lg:order-none lg:py-16">
            <h2 className="mb-8 w-full text-xl font-semibold text-white lg:text-3xl">
              How to Become Super Standout 3D NFT Artist
            </h2>

            <p className="mb-5 text-sm text-white opacity-50">
              Calling out all 3D artists! This is your chance to become a superstar in the NFT world. Here are some tips to help you get started.
            </p>

            <button className="w-fit rounded-full bg-white px-5 py-[6px] text-sm font-semibold text-black hover:opacity-75 lg:text-base">
              Read now
            </button>
          </div>

          <div className="relative w-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={test.src} 
              alt="Test Card Image"
              className="h-full max-h-[250px] w-full object-cover object-center lg:max-h-none " 
            />

            <div className={clsx(
              "absolute left-0 from-black to-transparent",
              "bottom-0 h-48 w-full bg-gradient-to-t",
              "lg:h-full lg:w-48 lg:bg-gradient-to-r"
            )}/>
          </div>
        </article>

        <h2 className="mb-3 mt-6 flex items-center gap-x-2 text-lg font-bold sm:text-xl">
          <BiTrendingUp size={28} className="text-red-500"/>
        Trending posts
        </h2>

        <section className="flex w-full items-center gap-x-4 overflow-x-auto">
          <article className="relative aspect-[3/5] w-full min-w-[200px] overflow-hidden rounded-lg bg-gray-300 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${test2.src})` }}>
            <div className="flex h-full w-full flex-col justify-between bg-black/30 p-4">
              <p className="text-xs text-white">
                Space Exploration
              </p>

              <h2 className="my-4 text-xl font-bold text-white">
                Are we really going to Mars in 2026?
              </h2>

              <button className="mt-auto w-fit rounded-md bg-white/20 p-2 px-4 text-sm font-semibold text-white backdrop-blur-[3px] transition hover:bg-black sm:p-3 sm:px-5">
                View Details
              </button>
            </div>
          </article>

          <article className="relative aspect-[3/5] w-full min-w-[200px] overflow-hidden rounded-lg bg-gray-300 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${test.src})` }}>
            <div className="flex h-full w-full flex-col justify-between bg-black/30 p-4">
              <p className="text-xs text-white">
                Space Exploration
              </p>

              <h2 className="my-4 text-xl font-bold text-white">
                Are we really going to Mars in 2026?
              </h2>

              <button className="mt-auto w-fit rounded-md bg-white/20 p-2 px-4 text-sm font-semibold text-white backdrop-blur-[3px] transition hover:bg-black sm:p-3 sm:px-5">
                View Details
              </button>
            </div>
          </article>

          <article className="relative aspect-[3/5] w-full min-w-[200px] overflow-hidden rounded-lg bg-gray-300 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${test2.src})` }}>
            <div className="flex h-full w-full flex-col justify-between bg-black/30 p-4">
              <p className="text-xs text-white">
                Space Exploration
              </p>

              <h2 className="my-4 text-xl font-bold text-white">
                Are we really going to Mars in 2026?
              </h2>

              <button className="mt-auto w-fit rounded-md bg-white/20 p-2 px-4 text-sm font-semibold text-white backdrop-blur-[3px] transition hover:bg-black sm:p-3 sm:px-5">
                View Details
              </button>
            </div>
          </article>

          <article className="relative aspect-[3/5] w-full min-w-[200px] overflow-hidden rounded-lg bg-gray-300 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${test.src})` }}>
            <div className="flex h-full w-full flex-col justify-between bg-black/30 p-4">
              <p className="text-xs text-white">
                Space Exploration
              </p>

              <h2 className="my-4 text-xl font-bold text-white">
                Are we really going to Mars in 2026?
              </h2>

              <button className="mt-auto w-fit rounded-md bg-white/20 p-2 px-4 text-sm font-semibold text-white backdrop-blur-[3px] transition hover:bg-black sm:p-3 sm:px-5">
                View Details
              </button>
            </div>
          </article>

          <article className="relative aspect-[3/5] w-full min-w-[200px] overflow-hidden rounded-lg bg-gray-300 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${test2.src})` }}>
            <div className="flex h-full w-full flex-col justify-between bg-black/30 p-4">
              <p className="text-xs text-white">
                Space Exploration
              </p>

              <h2 className="my-4 text-xl font-bold text-white">
                Are we really going to Mars in 2026?
              </h2>

              <button className="mt-auto w-fit rounded-md bg-white/20 p-2 px-4 text-sm font-semibold text-white backdrop-blur-[3px] transition hover:bg-black sm:p-3 sm:px-5">
                View Details
              </button>
            </div>
          </article>

          <article className="relative aspect-[3/5] w-full min-w-[200px] overflow-hidden rounded-lg bg-gray-300 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${test.src})` }}>
            <div className="flex h-full w-full flex-col justify-between bg-black/30 p-4">
              <p className="text-xs text-white">
                Space Exploration
              </p>

              <h2 className="my-4 text-xl font-bold text-white">
                Are we really going to Mars in 2026?
              </h2>

              <button className="mt-auto w-fit rounded-md bg-white/20 p-2 px-4 text-sm font-semibold text-white backdrop-blur-[3px] transition hover:bg-black sm:p-3 sm:px-5">
                View Details
              </button>
            </div>
          </article>

          <article className="relative aspect-[3/5] w-full min-w-[200px] overflow-hidden rounded-lg bg-gray-300 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${test2.src})` }}>
            <div className="flex h-full w-full flex-col justify-between bg-black/30 p-4">
              <p className="text-xs text-white">
                Space Exploration
              </p>

              <h2 className="my-4 text-xl font-bold text-white">
                Are we really going to Mars in 2026?
              </h2>

              <button className="mt-auto w-fit rounded-md bg-white/20 p-2 px-4 text-sm font-semibold text-white backdrop-blur-[3px] transition hover:bg-black sm:p-3 sm:px-5">
                View Details
              </button>
            </div>
          </article>

          <article className="relative aspect-[3/5] w-full min-w-[200px] overflow-hidden rounded-lg bg-gray-300 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${test.src})` }}>
            <div className="flex h-full w-full flex-col justify-between bg-black/30 p-4">
              <p className="text-xs text-white">
                Space Exploration
              </p>

              <h2 className="my-4 text-xl font-bold text-white">
                Are we really going to Mars in 2026?
              </h2>

              <button className="mt-auto w-fit rounded-md bg-white/20 p-2 px-4 text-sm font-semibold text-white backdrop-blur-[3px] transition hover:bg-black sm:p-3 sm:px-5">
                View Details
              </button>
            </div>
          </article>
        </section>

        <h2 className="mb-5 mt-6 flex items-center gap-x-1 text-lg font-bold sm:text-xl">
          <BiCategoryAlt size={24} className="text-black"/>
        Categories
        </h2>

        <div className="mb-5 flex w-full items-center gap-x-3 overflow-x-auto sm:gap-x-4">
          <div className="w-fit shrink-0 rounded-full border border-solid border-black bg-black p-1 px-3 text-xs font-semibold text-white transition hover:border-black hover:bg-black hover:text-white sm:text-sm">
            For you
          </div>

          <div className="w-fit shrink-0 rounded-full border border-solid border-gray-400 p-1 px-3 text-xs font-semibold hover:bg-black hover:text-white sm:text-sm">
            Math
          </div>

          <div className="w-fit shrink-0 rounded-full border border-solid border-gray-400 p-1 px-3 text-xs font-semibold hover:bg-black hover:text-white sm:text-sm">
          Science
          </div>

          <div className="w-fit shrink-0 rounded-full border border-solid border-gray-400 p-1 px-3 text-xs font-semibold hover:bg-black hover:text-white sm:text-sm">
          Technology
          </div>

          <div className="w-fit shrink-0 rounded-full border border-solid border-gray-400 p-1 px-3 text-xs font-semibold hover:bg-black hover:text-white sm:text-sm">
          History
          </div>

          <div className="w-fit shrink-0 rounded-full border border-solid border-gray-400 p-1 px-3 text-xs font-semibold hover:bg-black hover:text-white sm:text-sm">
          Society
          </div>

          <div className="w-fit shrink-0 rounded-full border border-solid border-gray-400 p-1 px-3 text-xs font-semibold hover:bg-black hover:text-white sm:text-sm">
          Biology
          </div>

          <div className="w-fit shrink-0 rounded-full border border-solid border-gray-400 p-1 px-3 text-xs font-semibold hover:bg-black hover:text-white sm:text-sm">
          Chemistry
          </div>
        </div>

        <div className="grid w-full grid-cols-2 gap-x-4 gap-y-6 lg:grid-cols-3 lg:gap-x-6">
          <div className="flex w-full flex-col gap-y-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={test.src} 
              alt="Post cover" 
              className="aspect-[3/2] w-full rounded-md bg-gray-300 object-cover object-center" 
            />

            <h2 className="text-base font-bold text-black md:text-lg">
            Is United States really the best country in the world?
            </h2>

            <p className="line-clamp-3 text-sm font-medium text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, iusto ipsa! Soluta in, alias expedita ut recusandae repudiandae dicta at rem provident, quo labore doloremque consectetur explicabo dolor possimus officiis.
            </p>

            <p className="flex w-full items-center gap-x-1 text-xs font-medium  text-gray-900">
              <MdDateRange size={16}/>
              18 october 2021
            </p>
          </div>

          <div className="flex w-full flex-col gap-y-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={test2.src} 
              alt="Post cover" 
              className="aspect-[3/2] w-full rounded-md bg-gray-300 object-cover object-center" 
            />

            <h2 className="text-base font-bold text-black md:text-lg">
            Is United States really the best country in the world?
            </h2>

            <p className="line-clamp-3 text-sm font-medium text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, iusto ipsa! Soluta in, alias expedita ut recusandae repudiandae dicta at rem provident, quo labore doloremque consectetur explicabo dolor possimus officiis.
            </p>

            <p className="flex w-full items-center gap-x-1 text-xs font-medium  text-gray-900">
              <MdDateRange size={16}/>
              18 october 2021
            </p>
          </div>

          <div className="flex w-full flex-col gap-y-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={test.src} 
              alt="Post cover" 
              className="aspect-[3/2] w-full rounded-md bg-gray-300 object-cover object-center" 
            />

            <h2 className="text-base font-bold text-black md:text-lg">
            Is United States really the best country in the world?
            </h2>

            <p className="line-clamp-3 text-sm font-medium text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, iusto ipsa! Soluta in, alias expedita ut recusandae repudiandae dicta at rem provident, quo labore doloremque consectetur explicabo dolor possimus officiis.
            </p>

            <p className="flex w-full items-center gap-x-1 text-xs font-medium  text-gray-900">
              <MdDateRange size={16}/>
              18 october 2021
            </p>
          </div>

          <div className="flex w-full flex-col gap-y-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={test2.src} 
              alt="Post cover" 
              className="aspect-[3/2] w-full rounded-md bg-gray-300 object-cover object-center" 
            />

            <h2 className="text-base font-bold text-black md:text-lg">
            Is United States really the best country in the world?
            </h2>

            <p className="line-clamp-3 text-sm font-medium text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, iusto ipsa! Soluta in, alias expedita ut recusandae repudiandae dicta at rem provident, quo labore doloremque consectetur explicabo dolor possimus officiis.
            </p>

            <p className="flex w-full items-center gap-x-1 text-xs font-medium  text-gray-900">
              <MdDateRange size={16}/>
              18 october 2021
            </p>
          </div>

          <div className="flex w-full flex-col gap-y-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={test.src} 
              alt="Post cover" 
              className="aspect-[3/2] w-full rounded-md bg-gray-300 object-cover object-center" 
            />

            <h2 className="text-base font-bold text-black md:text-lg">
            Is United States really the best country in the world?
            </h2>

            <p className="line-clamp-3 text-sm font-medium text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, iusto ipsa! Soluta in, alias expedita ut recusandae repudiandae dicta at rem provident, quo labore doloremque consectetur explicabo dolor possimus officiis.
            </p>

            <p className="flex w-full items-center gap-x-1 text-xs font-medium  text-gray-900">
              <MdDateRange size={16}/>
              18 october 2021
            </p>
          </div>

          <div className="flex w-full flex-col gap-y-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={test2.src} 
              alt="Post cover" 
              className="aspect-[3/2] w-full rounded-md bg-gray-300 object-cover object-center" 
            />

            <h2 className="text-base font-bold text-black md:text-lg">
            Is United States really the best country in the world?
            </h2>

            <p className="line-clamp-3 text-sm font-medium text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, iusto ipsa! Soluta in, alias expedita ut recusandae repudiandae dicta at rem provident, quo labore doloremque consectetur explicabo dolor possimus officiis.
            </p>

            <p className="flex w-full items-center gap-x-1 text-xs font-medium  text-gray-900">
              <MdDateRange size={16}/>
              18 october 2021
            </p>
          </div>

          <div className="flex w-full flex-col gap-y-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={test2.src} 
              alt="Post cover" 
              className="aspect-[3/2] w-full rounded-md bg-gray-300 object-cover object-center" 
            />

            <h2 className="text-base font-bold text-black md:text-lg">
            Is United States really the best country in the world?
            </h2>

            <p className="line-clamp-3 text-sm font-medium text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, iusto ipsa! Soluta in, alias expedita ut recusandae repudiandae dicta at rem provident, quo labore doloremque consectetur explicabo dolor possimus officiis.
            </p>

            <p className="flex w-full items-center gap-x-1 text-xs font-medium  text-gray-900">
              <MdDateRange size={16}/>
              18 october 2021
            </p>
          </div>

          <div className="flex w-full flex-col gap-y-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={test2.src} 
              alt="Post cover" 
              className="aspect-[3/2] w-full rounded-md bg-gray-300 object-cover object-center" 
            />

            <h2 className="text-base font-bold text-black md:text-lg">
            Is United States really the best country in the world?
            </h2>

            <p className="line-clamp-3 text-sm font-medium text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, iusto ipsa! Soluta in, alias expedita ut recusandae repudiandae dicta at rem provident, quo labore doloremque consectetur explicabo dolor possimus officiis.
            </p>

            <p className="flex w-full items-center gap-x-1 text-xs font-medium  text-gray-900">
              <MdDateRange size={16}/>
              18 october 2021
            </p>
          </div>

          <div className="flex w-full flex-col gap-y-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={test2.src} 
              alt="Post cover" 
              className="aspect-[3/2] w-full rounded-md bg-gray-300 object-cover object-center" 
            />

            <h2 className="text-base font-bold text-black md:text-lg">
            Is United States really the best country in the world?
            </h2>

            <p className="line-clamp-3 text-sm font-medium text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, iusto ipsa! Soluta in, alias expedita ut recusandae repudiandae dicta at rem provident, quo labore doloremque consectetur explicabo dolor possimus officiis.
            </p>

            <p className="flex w-full items-center gap-x-1 text-xs font-medium  text-gray-900">
              <MdDateRange size={16}/>
              18 october 2021
            </p>
          </div>

          <div className="flex w-full flex-col gap-y-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={test2.src} 
              alt="Post cover" 
              className="aspect-[3/2] w-full rounded-md bg-gray-300 object-cover object-center" 
            />

            <h2 className="text-base font-bold text-black md:text-lg">
            Is United States really the best country in the world?
            </h2>

            <p className="line-clamp-3 text-sm font-medium text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, iusto ipsa! Soluta in, alias expedita ut recusandae repudiandae dicta at rem provident, quo labore doloremque consectetur explicabo dolor possimus officiis.
            </p>

            <p className="flex w-full items-center gap-x-1 text-xs font-medium  text-gray-900">
              <MdDateRange size={16}/>
              18 october 2021
            </p>
          </div>

          <div className="flex w-full flex-col gap-y-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={test2.src} 
              alt="Post cover" 
              className="aspect-[3/2] w-full rounded-md bg-gray-300 object-cover object-center" 
            />

            <h2 className="text-base font-bold text-black md:text-lg">
            Is United States really the best country in the world?
            </h2>

            <p className="line-clamp-3 text-sm font-medium text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, iusto ipsa! Soluta in, alias expedita ut recusandae repudiandae dicta at rem provident, quo labore doloremque consectetur explicabo dolor possimus officiis.
            </p>

            <p className="flex w-full items-center gap-x-1 text-xs font-medium  text-gray-900">
              <MdDateRange size={16}/>
              18 october 2021
            </p>
          </div>

          <div className="flex w-full flex-col gap-y-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={test2.src} 
              alt="Post cover" 
              className="aspect-[3/2] w-full rounded-md bg-gray-300 object-cover object-center" 
            />

            <h2 className="text-base font-bold text-black md:text-lg">
            Is United States really the best country in the world?
            </h2>

            <p className="line-clamp-3 text-sm font-medium text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, iusto ipsa! Soluta in, alias expedita ut recusandae repudiandae dicta at rem provident, quo labore doloremque consectetur explicabo dolor possimus officiis.
            </p>

            <p className="flex w-full items-center gap-x-1 text-xs font-medium  text-gray-900">
              <MdDateRange size={16}/>
              18 october 2021
            </p>
          </div>

          <div className="flex w-full flex-col gap-y-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={test2.src} 
              alt="Post cover" 
              className="aspect-[3/2] w-full rounded-md bg-gray-300 object-cover object-center" 
            />

            <h2 className="text-base font-bold text-black md:text-lg">
            Is United States really the best country in the world?
            </h2>

            <p className="line-clamp-3 text-sm font-medium text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, iusto ipsa! Soluta in, alias expedita ut recusandae repudiandae dicta at rem provident, quo labore doloremque consectetur explicabo dolor possimus officiis.
            </p>

            <p className="flex w-full items-center gap-x-1 text-xs font-medium  text-gray-900">
              <MdDateRange size={16}/>
              18 october 2021
            </p>
          </div>

          <div className="flex w-full flex-col gap-y-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={test2.src} 
              alt="Post cover" 
              className="aspect-[3/2] w-full rounded-md bg-gray-300 object-cover object-center" 
            />

            <h2 className="text-base font-bold text-black md:text-lg">
            Is United States really the best country in the world?
            </h2>

            <p className="line-clamp-3 text-sm font-medium text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, iusto ipsa! Soluta in, alias expedita ut recusandae repudiandae dicta at rem provident, quo labore doloremque consectetur explicabo dolor possimus officiis.
            </p>

            <p className="flex w-full items-center gap-x-1 text-xs font-medium  text-gray-900">
              <MdDateRange size={16}/>
              18 october 2021
            </p>
          </div>

          <div className="flex w-full flex-col gap-y-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={test2.src} 
              alt="Post cover" 
              className="aspect-[3/2] w-full rounded-md bg-gray-300 object-cover object-center" 
            />

            <h2 className="text-base font-bold text-black md:text-lg">
            Is United States really the best country in the world?
            </h2>

            <p className="line-clamp-3 text-sm font-medium text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, iusto ipsa! Soluta in, alias expedita ut recusandae repudiandae dicta at rem provident, quo labore doloremque consectetur explicabo dolor possimus officiis.
            </p>

            <p className="flex w-full items-center gap-x-1 text-xs font-medium  text-gray-900">
              <MdDateRange size={16}/>
              18 october 2021
            </p>
          </div>

          <div className="flex w-full flex-col gap-y-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={test2.src} 
              alt="Post cover" 
              className="aspect-[3/2] w-full rounded-md bg-gray-300 object-cover object-center" 
            />

            <h2 className="text-base font-bold text-black md:text-lg">
            Is United States really the best country in the world?
            </h2>

            <p className="line-clamp-3 text-sm font-medium text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, iusto ipsa! Soluta in, alias expedita ut recusandae repudiandae dicta at rem provident, quo labore doloremque consectetur explicabo dolor possimus officiis.
            </p>

            <p className="flex w-full items-center gap-x-1 text-xs font-medium  text-gray-900">
              <MdDateRange size={16}/>
              18 october 2021
            </p>
          </div>

        </div>
      </div>

      <section className="sticky top-0 hidden min-h-screen w-[350px] shrink-0 flex-col gap-y-5 border-l border-solid border-gray-300 p-6 pt-4 md:flex">
        <h2 className="-mb-2 text-base font-bold sm:text-lg">
        Latest posts
        </h2>

        <article className="w-full shrink-0 overflow-hidden rounded-lg shadow">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={test.src} 
            alt="Test Card Image"
            className="h-32 w-full bg-gray-300 object-cover object-center transition hover:scale-110 sm:h-36" 
          />

          <div className="relative z-10 mt-[-20px] w-full shrink-0 rounded-lg rounded-b-none bg-white p-3 sm:p-5 sm:pt-3">
            <h2 className="mb-3 text-sm font-semibold text-black sm:text-base">
            Is United States really the best country in the world?
            </h2>

            <p className="line-clamp-2 text-xs sm:text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, iusto ipsa! Soluta in, alias expedita ut recusandae repudiandae dicta at rem provident, quo labore doloremque consectetur explicabo dolor possimus officiis.
            </p>

            <div className="mt-3 flex w-full items-center gap-x-3">
              <div className="w-fit rounded-full border border-solid border-gray-400 p-1 px-4 text-xs font-semibold hover:bg-black hover:text-white">
              Geography
              </div>

              <button className="rounded-lg p-2 text-sm text-gray-500 transition hover:bg-gray-300 hover:text-gray-700">
            Read more -&gt;
              </button>
            </div>
          </div>
        </article>

        <article className="w-full shrink-0 overflow-hidden rounded-lg shadow">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={test2.src} 
            alt="Test Card Image"
            className="h-32 w-full bg-gray-300 object-cover object-center transition hover:scale-110 sm:h-36" 
          />

          <div className="relative z-10 mt-[-20px] w-full rounded-lg rounded-b-none bg-white p-3 sm:p-5 sm:pt-3">
            <h2 className="mb-3 text-sm font-semibold  text-black sm:text-base">
            Are we really going to Mars in 2026?
            </h2>

            <p className="line-clamp-2 text-xs sm:text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, iusto ipsa! Soluta in, alias expedita ut recusandae repudiandae dicta at rem provident, quo labore doloremque consectetur explicabo dolor possimus officiis.
            </p>

            <div className="mt-3 flex w-full items-center gap-x-3">
              <div className="w-fit rounded-full border border-solid border-gray-400 p-1 px-4 text-xs font-semibold hover:bg-black hover:text-white">
              Space Exploration
              </div>

              <button className="rounded-lg p-2 text-sm text-gray-500 transition hover:bg-gray-300 hover:text-gray-700">
            Read more -&gt;
              </button>
            </div>

          </div>
        </article>

        <div className="mt-1 h-[1px] w-full shrink-0 bg-gray-300"/>

        <h2 className="-mb-2 text-base font-bold sm:text-lg">
        Interesting topics to explore
        </h2>

        <div className="flex w-full flex-wrap gap-x-2 gap-y-3">
          <div className="w-fit rounded-full border border-solid border-gray-400 p-1 px-3 text-xs font-semibold transition hover:border-black hover:bg-black hover:text-white">
            Other
          </div>

          <div className="w-fit rounded-full border border-solid border-gray-400 p-1 px-3 text-xs font-semibold hover:bg-black hover:text-white">
            Math
          </div>

          <div className="w-fit rounded-full border border-solid border-gray-400 p-1 px-3 text-xs font-semibold hover:bg-black hover:text-white">
          Science
          </div>

          <div className="w-fit rounded-full border border-solid border-gray-400 p-1 px-3 text-xs font-semibold hover:bg-black hover:text-white">
          Technology
          </div>

          <div className="w-fit rounded-full border border-solid border-gray-400 p-1 px-3 text-xs font-semibold hover:bg-black hover:text-white">
          History
          </div>

          <div className="w-fit rounded-full border border-solid border-gray-400 p-1 px-3 text-xs font-semibold hover:bg-black hover:text-white">
          Society
          </div>

          <div className="w-fit rounded-full border border-solid border-gray-400 p-1 px-3 text-xs font-semibold hover:bg-black hover:text-white">
          Biology
          </div>

          <div className="w-fit rounded-full border border-solid border-gray-400 p-1 px-3 text-xs font-semibold hover:bg-black hover:text-white">
          Chemistry
          </div>
        </div>
      </section>
    </div>
  );
}