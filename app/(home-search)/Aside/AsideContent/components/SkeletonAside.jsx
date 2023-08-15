"use client";

export default function SkeletonAside() {
  return (
    <>
      <h2 className="-mb-2 text-base font-bold sm:text-lg">
        Latest posts
      </h2>

      <article className="w-full shrink-0 overflow-hidden rounded-lg shadow">
        <div className="h-32 w-full bg-gray-300 sm:h-36"/>

        <div className="relative z-10 mt-[-20px] w-full shrink-0 rounded-lg rounded-b-none bg-white p-4 pb-5 pt-3">
          <div className="mb-4 h-4 w-full bg-gray-300"/>

          <div className="mb-2 h-3 w-full bg-gray-300"/>
          <div className="h-3 w-full bg-gray-300"/>

          <div className="mt-4 flex w-full items-center gap-x-5">
            <div className="h-6 w-24 rounded-full bg-gray-300"/>

            <div className="h-4 w-20 bg-gray-300"></div>
          </div>

        </div>
      </article>

      <article className="w-full shrink-0 overflow-hidden rounded-lg shadow">
        <div className="h-32 w-full bg-gray-300 sm:h-36"/>

        <div className="relative z-10 mt-[-20px] w-full shrink-0 rounded-lg rounded-b-none bg-white p-4 pb-5 pt-3">
          <div className="mb-4 h-4 w-full bg-gray-300"/>

          <div className="mb-2 h-3 w-full bg-gray-300"/>
          <div className="h-3 w-full bg-gray-300"/>

          <div className="mt-4 flex w-full items-center gap-x-5">
            <div className="h-6 w-24 rounded-full bg-gray-300"/>

            <div className="h-4 w-20 bg-gray-300"></div>
          </div>
        </div>
      </article>

      <div className="mt-1 h-[1px] w-full shrink-0 bg-gray-300"/>
  
      <h2 className="-mb-2 text-base font-bold sm:text-lg">
        Interesting topics to explore
      </h2>

      <div className="flex w-full flex-wrap gap-x-2 gap-y-3">
        <div className="h-6 w-20 rounded-full bg-gray-300"/>
        <div className="h-6 w-20 rounded-full bg-gray-300"/>
        <div className="h-6 w-20 rounded-full bg-gray-300"/>
        <div className="h-6 w-20 rounded-full bg-gray-300"/>
        <div className="h-6 w-20 rounded-full bg-gray-300"/>
        <div className="h-6 w-20 rounded-full bg-gray-300"/>
        <div className="h-6 w-20 rounded-full bg-gray-300"/>
        <div className="h-6 w-20 rounded-full bg-gray-300"/>
      </div>
    </>
  );
}