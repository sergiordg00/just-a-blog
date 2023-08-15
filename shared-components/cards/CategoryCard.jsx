"use client";

import clsx from "clsx";

export default function CategoryCard({ categoryName, isSmaller, isActive, includeHover }) {
  return (
    <div className={clsx(
      "w-fit shrink-0 rounded-full border border-solid border-gray-400 p-1 px-3 font-semibold transition",
      isSmaller ? "text-xs" : "text-xs sm:text-sm",
      includeHover && "cursor-pointer hover:bg-black hover:text-white",
      isActive && "bg-black text-white"
    )}>
      {categoryName}
    </div>
  );
}