"use client";

import { useSearchParams } from "next/navigation";

import useFetch from "@/hooks/useFetch";
import PostCard from "@/shared-components/cards/PostCard";
import PostSkeleton from "@/shared-components/cards/PostSkeleton";

export default function CategoryPosts() {
  const searchParams = useSearchParams();
  const { loading, data: posts } = useFetch(getEndpoint());

  function getEndpoint() {
    if(searchParams.get("category")) {
      return `*[_type == "post" && category->slug.current == "${searchParams.get("category")}"]`;
    } else {
      return `*[_type == "post"] [0..11]`;
    }
  }

  if(loading) {
    return (
      <div className="grid w-full grid-cols-2 gap-x-3 gap-y-6 lg:grid-cols-3 lg:gap-x-6">
        <PostSkeleton />
        <PostSkeleton />
        <PostSkeleton />
      </div>
    );
  } else {
    return (
      <div className="grid w-full grid-cols-2 gap-x-3 gap-y-6 lg:grid-cols-3 lg:gap-x-6">
        {posts.map(post => (
          <PostCard key={post._id} data={post} />
        ))}
      </div>
    );
  }
}