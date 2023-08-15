"use client";

import { IoClose } from "react-icons/io5";

import { useAside } from "@/context/AsideContext";
import useFetch from "@/hooks/useFetch";
import Drawer from "@/shared-components/modals/Drawer";

import AsideContent from "./AsideContent";

export default function Aside() {
  const { data: latestPosts } = useFetch("/posts?sort=createdAt:desc&populate=cover&populate=category&pagination[limit]=2");
  const { data: categories } = useFetch("/categories?pagination[limit]=8");
  const { isAsideOpen, setIsAsideOpen } = useAside();

  return (
    <>
      <Drawer
        isOpen={isAsideOpen}
        onClose={() => setIsAsideOpen(false)}
        className="flex w-[350px] flex-col gap-y-5 bg-gray-100 p-6 pt-4"
      >
        <button 
          type="button" 
          className="absolute right-2 top-2 rounded-md text-black transition hover:bg-gray-300 focus:outline-gray-300 sm:right-4 sm:top-4" 
          onClick={() => setIsAsideOpen(false)}
        >
          <span className="sr-only">
            Close drawer
          </span>

          <IoClose className="h-auto w-6"/>
        </button>
        
        <AsideContent data={{ latestPosts, categories }}/> 
      </Drawer>

      <aside className="sticky top-0 hidden min-h-screen w-[350px] shrink-0 flex-col gap-y-5 border-l border-solid border-gray-300 p-6 pt-4 md:flex">
        <AsideContent data={{ latestPosts, categories }}/> 
      </aside>
    </>
  );
}