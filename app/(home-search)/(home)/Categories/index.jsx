import { getAllCategories } from "@/services";

import CategoriesSlider from "./components/CategoriesSlider";
import CategoryPosts from "./components/CategoryPosts";

export default async function Categories() {
  const categories = await getAllCategories();

  return (
    <>
      <div className="mb-5 w-full">
        <CategoriesSlider data={categories}/>
      </div>

      <CategoryPosts/>
    </>
  );
}