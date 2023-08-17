import Link from "next/link";

import { getMostVisitedPosts } from "@/services";
import FHSlider from "@/shared-components/ui/FHSlider";
import { urlFor } from "@/utils";

function TrendingPostCard({ data }) {
  return (
    <article 
      className="relative aspect-[3/5] w-[200px] overflow-hidden rounded-lg bg-gray-300 bg-cover bg-center bg-no-repeat" 
      style={{ backgroundImage: `url(${urlFor(data.cover).width(1000).url()})` }}
    >
      <div className="flex h-full w-full flex-col justify-between bg-black/30 p-4">
        <p className="text-xs text-white">
          {data.category.name}
        </p>

        <h2 className="my-4 text-xl font-bold text-white">
          {data.title}
        </h2>

        <Link 
          className="mt-auto w-fit rounded-md bg-white/20 p-2 px-4 text-sm font-semibold text-white backdrop-blur-[3px] transition hover:bg-black sm:p-3 sm:px-5"
          href={`/${data.slug.current}`}
        >
          View Details
        </Link>
      </div>
    </article>
  );
}

export default async function TrendingPosts() {
  const trendingPosts = await getMostVisitedPosts();

  return (
    <FHSlider>
      {trendingPosts.map((post) => (
        <TrendingPostCard key={post._id} data={post} />
      ))}
    </FHSlider>
  );
}