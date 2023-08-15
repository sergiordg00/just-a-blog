import { BiCategoryAlt, BiTrendingUp } from "react-icons/bi";
import { ImNewspaper } from "react-icons/im";

import ArticleOfTheDay from "./components/ArticleOfTheDay";
import TrendingPosts from "./components/TrendingPosts";
import Categories from "./Categories";

export default function Home() {
  return (
    <>
      <section className="w-full">
        <h2 className="mb-3 flex items-center gap-x-2 text-lg font-bold sm:text-xl">
          <ImNewspaper size={24} className="text-black"/>
          Article of the day
        </h2>

        <ArticleOfTheDay />
      </section>

      <section className="w-full">
        <h2 className="mb-3 mt-6 flex items-center gap-x-2 text-lg font-bold sm:text-xl">
          <BiTrendingUp size={28} className="text-red-500"/>
          Trending posts
        </h2>

        <TrendingPosts />
      </section>

      <section className="w-full">
        <h2 className="mb-5 mt-6 flex items-center gap-x-1 text-lg font-bold sm:text-xl">
          <BiCategoryAlt size={24} className="text-black"/>
          Categories
        </h2>

        <Categories />
      </section>
    </>
  );
}