import test from "@/assets/img/test.jpg";

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-[1600px] items-start">
      <div className="min-h-screen w-full p-4">
        <div className="flex w-full items-center gap-x-4">
          <div className="h-12 w-12 rounded-full bg-red-500"></div>
          <div className="w-full max-w-[500px] rounded-full border border-solid border-gray-400 p-2 px-4 text-gray-500">
            Search for a post...
          </div>
        </div>
      </div>

      <section className="flex h-screen w-full max-w-[360px] flex-col gap-y-5 overflow-y-auto border-l border-solid border-gray-300 p-4 px-6">
        <h2 className="-mb-2 text-base font-bold sm:text-lg">
        Latest post
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
            Is United States the best country in the world?
            </h2>

            <p className="line-clamp-2 text-xs sm:text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, iusto ipsa! Soluta in, alias expedita ut recusandae repudiandae dicta at rem provident, quo labore doloremque consectetur explicabo dolor possimus officiis.
            </p>

            <div className="mt-3 w-fit rounded-full border border-solid border-gray-400 p-1 px-4 text-xs font-semibold hover:bg-black hover:text-white">
            Geography
            </div>
          </div>
        </article>

        <article className="w-full shrink-0 overflow-hidden rounded-lg shadow">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={test.src} 
            alt="Test Card Image"
            className="h-32 w-full bg-gray-300 object-cover object-center transition hover:scale-110 sm:h-36" 
          />

          <div className="relative z-10 mt-[-20px] w-full rounded-lg rounded-b-none bg-white p-3 sm:p-5 sm:pt-3">
            <h2 className="mb-3 text-sm font-semibold  text-black sm:text-base">
            Is United States the best country in the world?
            </h2>

            <p className="line-clamp-2 text-xs sm:text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, iusto ipsa! Soluta in, alias expedita ut recusandae repudiandae dicta at rem provident, quo labore doloremque consectetur explicabo dolor possimus officiis.
            </p>

            <div className="mt-3 flex w-full items-center gap-x-3">
              <div className="w-fit rounded-full border border-solid border-gray-400 p-1 px-4 text-xs font-semibold hover:bg-black hover:text-white">
            Geography
              </div>

              <button className="p-2 text-sm text-gray-500 underline">
            Read more
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