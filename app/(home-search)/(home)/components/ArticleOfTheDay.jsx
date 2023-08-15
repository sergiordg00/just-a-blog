import clsx from "clsx";
import Link from "next/link";

import { getArticleOfTheDay } from "@/services";

export default async function ArticleOfTheDay() {
  const articleOfTheDay = await getArticleOfTheDay();

  return (
    <article className="flex w-full flex-col overflow-hidden rounded-md shadow-lg lg:flex-row">
      <div className="order-2 flex w-full flex-col justify-center bg-black p-6 lg:order-none lg:py-16">
        <h2 className="mb-8 w-full text-xl font-semibold text-white lg:text-3xl">
          {articleOfTheDay.attributes.post.data.attributes.title}
        </h2>

        <p className="mb-5 text-sm text-white opacity-50">
          {articleOfTheDay.attributes.excerpt}
        </p>

        <Link 
          className="w-fit rounded-full bg-white px-5 py-[6px] text-sm font-semibold text-black hover:opacity-75 lg:text-base"
          href={`/${articleOfTheDay.attributes.post.data.attributes.slug}`}
        >
          Read now
        </Link>
      </div>

      <div className="relative w-full">
        <img 
          src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${articleOfTheDay.attributes.post.data.attributes.cover.data.attributes.formats.medium.url}`} 
          alt="Test Card Image"
          className="h-full max-h-[250px] w-full object-cover object-center lg:max-h-none " 
        />

        <div className={clsx(
          "absolute left-0 from-black to-transparent",
          "bottom-0 h-48 w-full bg-gradient-to-t",
          "lg:h-full lg:w-48 lg:bg-gradient-to-r"
        )}/>
      </div>
    </article>
  );
}