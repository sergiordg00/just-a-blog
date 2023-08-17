import { notFound } from "next/navigation";
import { MdDateRange } from "react-icons/md";

import { getPostBySlug } from "@/services";
import { urlFor } from "@/utils";

import ArticleBody from "./components/ArticleBody";
import RegisterVisit from "./components/RegisterVisit";
import SocialsButtons from "./components/SocialButtons";
import Comments from "./Comments";

export default async function Page({ params }) {
  const post = await getPostBySlug(params.slug);

  if(!post) {
    return notFound();
  }

  return (
    <div className="min-h-screen w-full">
      <RegisterVisit postId={post._id}/>

      <header className="relative h-[400px] w-full">
        <img 
          src={urlFor(post.cover).url()} 
          alt="test" 
          className="h-full w-full object-cover object-center" 
        />

        <div className="absolute bottom-0 left-0 h-[100px] w-full bg-gradient-to-t from-gray-100 to-transparent"/>
      </header>

      <main className="mx-auto w-full max-w-[800px] p-5 pt-6">
        <h1 className="mb-6 w-full text-3xl font-extrabold">
          {post.title}
        </h1>

        <div className="h-[1px] w-full bg-gray-300"/>

        <div className="my-3 flex w-full items-center justify-between">
          <p className="flex w-fit items-center gap-x-1 text-sm font-semibold text-gray-500 opacity-75">
            <span className="hidden md:inline">
              {post.category.name} &bull;
            </span>

            <MdDateRange size={16}/>
            {new Date(post._createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>

          <SocialsButtons data={post}/>
        </div>

        <div className="h-[1px] w-full bg-gray-300"/>

        <ArticleBody data={post}/>

        <Comments
          initialComments={post.comments}
          id={post._id}
        /> 
      </main>
    </div>
  );
}