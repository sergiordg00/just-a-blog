import { getCategoryBySlug } from "@/services";
import PostCard from "@/shared-components/cards/PostCard";
import { urlFor } from "@/utils";

export default async function Page({ params }) {
  const { slug } = params;
  const categoryInfo = await getCategoryBySlug(slug);

  return (
    <section className="flex w-full flex-col gap-y-5 [&>*]:shrink-0">
      <h1 className="-mb-1 w-full text-center text-3xl font-bold sm:text-4xl">
        {categoryInfo.name}
      </h1>

      <p className="flex w-full items-center justify-center text-sm text-gray-500 sm:text-base">
        {categoryInfo.posts.length} posts &bull; {categoryInfo.totalViews} views &bull; {categoryInfo.totalComments} comments
      </p>
      
      <div 
        className="aspect-[8/3] w-full rounded-lg bg-gray-300 bg-cover bg-center" 
        style={{
          backgroundImage: `url(${urlFor(categoryInfo.banner).width(1400).url()})`,
        }}
      />

      <h2 className="-mb-3 text-lg font-bold sm:text-xl">
        Discover the category
      </h2>

      <div className="grid w-full grid-cols-2 gap-x-3 gap-y-6 lg:grid-cols-3 lg:gap-x-6">
        {categoryInfo.posts.map((post) => (
          <PostCard key={post._id} data={post} />
        ))}
      </div>
    </section>
  );
}