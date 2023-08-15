"use client";

import Link from "next/link";

import CategoryCard from "@/shared-components/cards/CategoryCard";

export default function LatestPostCard({ data }) {
  return (
    <article className="w-full shrink-0 overflow-hidden rounded-lg shadow">
      <img 
        src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${data.attributes.cover.data.attributes.formats.small.url}`} 
        alt="Test Card Image"
        className="h-32 w-full bg-gray-300 object-cover object-center transition hover:scale-110 sm:h-36" 
      />

      <div className="relative z-10 mt-[-20px] w-full shrink-0 rounded-lg rounded-b-none bg-white p-4 pb-5 pt-3">
        <h2 className="mb-3 text-sm font-semibold text-black sm:text-base">
          {data.attributes.title}
        </h2>

        <p className="line-clamp-2 text-xs sm:text-sm">
          {data.attributes.content}
        </p>

        <div className="mt-3 flex w-full items-center gap-x-3">
          <CategoryCard 
            categoryName={data.attributes.category.data.attributes.name} 
            isSmaller
          />

          <Link 
            className="rounded-lg p-2 text-sm text-gray-500 transition hover:bg-gray-300 hover:text-gray-700"
            href={`/${data.attributes.slug}`}
          >
            Read more...
          </Link>
        </div>
      </div>
    </article>
  );
}