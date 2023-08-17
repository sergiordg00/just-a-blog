"use client";

import Link from "next/link";
import { usePathname } from 'next/navigation';

import CategoryCard from "@/shared-components/cards/CategoryCard";

import LatestPostCard from "./components/LatestPostCard";
import SkeletonAside from "./components/SkeletonAside";

export default function AsideContent({ data }) {
  const pathname = usePathname();

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

        {data.latestPosts.map((post) => (
          <LatestPostCard
            key={post._id}
            data={post}
          />
        ))}
  
        <div className="mt-1 h-[1px] w-full shrink-0 bg-gray-300"/>
  
        <h2 className="-mb-2 text-base font-bold sm:text-lg">
          Interesting topics to explore
        </h2>
  
        <div className="flex w-full flex-wrap gap-x-2 gap-y-3">
          {data.categories.map((category) => (
            <Link 
              key={category._id}
              href={`/category/${category.slug.current}`}
            >
              <CategoryCard
                categoryName={category.name}
                isActive={pathname === `/category/${category.slug.current}`}
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