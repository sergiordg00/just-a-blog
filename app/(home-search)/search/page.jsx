"use client";

import { useSearchParams } from "next/navigation";

import useFetch from "@/hooks/useFetch";

import PostResultCard from "./components/PostResultCard";
import PostResultSkeleton from "./components/PostResultSkeleton";

export default function Search() {
  const searchParams = useSearchParams();
  const { loading, data: results } = useFetch(`/posts?filters[$or][0][title][$containsi]=${searchParams.get("q") || ""}&filters[$or][1][content][$containsi]=${searchParams.get("q") || ""}&populate[0]=cover&populate[1]=category`);

  if(loading) {
    return (
      <section className="flex w-full flex-col gap-y-5">
        <PostResultSkeleton />
        <PostResultSkeleton />
        <PostResultSkeleton />
        <PostResultSkeleton />
      </section>
    );
  } else {
    return (
      <div className="flex w-full flex-col gap-y-5">
        {
          results.data.length === 0 ?
            <p className="mb-4 w-full text-sm font-semibold sm:text-base">
              No results found for &quot;{searchParams.get("q")}&quot;
            </p> 
            :
            <>
              <p className="-mb-2 w-full text-sm font-semibold sm:text-base">
                {results.data.length} results found for &quot;{searchParams.get("q")}&quot;
              </p> 

              {results.data.map((result) => (
                <PostResultCard key={result.id} data={result} />
              ))}
            </>
        }
      </div>
    );
  }

}