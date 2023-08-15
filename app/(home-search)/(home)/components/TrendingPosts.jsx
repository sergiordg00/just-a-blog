import Link from "next/link";

import { getTrendingPosts } from "@/services";
import FHSlider from "@/shared-components/ui/FHSlider";

function TrendingPostCard({ data }) {
  return (
    <article 
      className="relative aspect-[3/5] w-[200px] overflow-hidden rounded-lg bg-gray-300 bg-cover bg-center bg-no-repeat" 
      style={{ backgroundImage: `url(${process.env.NEXT_PUBLIC_IMAGE_URL}${data.attributes.cover.data.attributes.formats.medium.url})` }}
    >
      <div className="flex h-full w-full flex-col justify-between bg-black/30 p-4">
        <p className="text-xs text-white">
          {data.attributes.category.data.attributes.name}
        </p>

        <h2 className="my-4 text-xl font-bold text-white">
          {data.attributes.title}
        </h2>

        <Link 
          className="mt-auto w-fit rounded-md bg-white/20 p-2 px-4 text-sm font-semibold text-white backdrop-blur-[3px] transition hover:bg-black sm:p-3 sm:px-5"
          href={`/${data.attributes.slug}`}
        >
          View Details
        </Link>
      </div>
    </article>
  );
}

export default async function TrendingPosts() {
  const trendingPosts = await getTrendingPosts();

  return (
    <FHSlider>
      {trendingPosts.map((post) => (
        <TrendingPostCard key={post.id} data={post} />
      ))}
    </FHSlider>
  );
}