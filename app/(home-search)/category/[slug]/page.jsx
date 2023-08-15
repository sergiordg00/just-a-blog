import { getCategoryInfo } from "@/services";
import PostCard from "@/shared-components/cards/PostCard";

export default async function Page({ params }) {
  const { slug } = params;
  const categoryInfo = await getCategoryInfo(slug);

  return (
    <div className="flex w-full flex-col gap-y-5 [&>*]:shrink-0">
      <h1 className="-mb-1 w-full text-center text-3xl font-bold sm:text-4xl">
        {categoryInfo.name}
      </h1>

      <p className="flex w-full items-center justify-center text-sm text-gray-500 sm:text-base">
        {categoryInfo.posts.length} posts &bull; {categoryInfo.totalViews} views &bull; {categoryInfo.totalComments} comments
      </p>
      
      <div 
        className="aspect-[8/3] w-full rounded-lg bg-gray-300 bg-cover bg-center" 
        style={{
          backgroundImage: `url(${process.env.NEXT_PUBLIC_IMAGE_URL}${categoryInfo.banner})`,
        }}
      />

      <h2 className="-mb-3 text-lg font-bold sm:text-xl">
        Discover the category
      </h2>

      <div className="grid w-full grid-cols-2 gap-x-3 gap-y-6 lg:grid-cols-3 lg:gap-x-6">
        {categoryInfo.posts.map((post) => (
          <PostCard key={post.id} data={post} />
        ))}
      </div>
    </div>
  );
}