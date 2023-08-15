"use client";

import Link from "next/link";

import CategoryCard from "@/shared-components/cards/CategoryCard";

import LatestPostCard from "./components/LatestPostCard";
import SkeletonAside from "./components/SkeletonAside";

export default function AsideContent({ data }) {
  if(!data.latestPosts || !data.categories) {
    return (
      <SkeletonAside />
    );
  } else {
    return (
      <>
        <h2 className="-mb-2 text-base font-bold sm:text-lg">
          Latest posts
        </h2>

        {data.latestPosts.data.map((post) => (
          <LatestPostCard
            key={post.id}
            data={post}
          />
        ))}
  
        <div className="mt-1 h-[1px] w-full shrink-0 bg-gray-300"/>
  
        <h2 className="-mb-2 text-base font-bold sm:text-lg">
          Interesting topics to explore
        </h2>
  
        <div className="flex w-full flex-wrap gap-x-2 gap-y-3">
          {data.categories.data.map((category) => (
            <Link 
              key={category.id}
              href={`/search?topic=${category.attributes.slug}`}
            >
              <CategoryCard
                categoryName={category.attributes.name}
                includeHover
                isSmaller
              />
            </Link>
          ))}
        </div>
      </>
    );
  }
}