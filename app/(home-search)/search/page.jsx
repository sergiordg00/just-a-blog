"use client";

import { useSearchParams } from "next/navigation";

import useFetch from "@/hooks/useFetch";

import PostResultCard from "./components/PostResultCard";
import PostResultSkeleton from "./components/PostResultSkeleton";

export default function Search() {
  const searchParams = useSearchParams();
  const { loading, data: results } = useFetch(getSearchQuery());

  function getSearchQuery() {
    const searchTerm = searchParams.get("q") || "";

    return (`*[_type == "post" && (title match "${searchTerm}" || content[].children[].text match "${searchTerm}")]{
      ...,
      category->
    }`);
  }

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
          results.length === 0 ?
            <p className="mb-4 w-full text-sm font-semibold sm:text-base">
              No results found for &quot;{searchParams.get("q")}&quot;
            </p> 
            :
            <>
              <p className="-mb-2 w-full text-sm font-semibold sm:text-base">
                {results.length} results found for &quot;{searchParams.get("q")}&quot;
              </p> 

              {results.map((result) => (
                <PostResultCard key={result._id} data={result} />
              ))}
            </>
        }
      </div>
    );
  }

}