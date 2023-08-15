"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

import CategoryCard from "@/shared-components/cards/CategoryCard";
import FHSlider from "@/shared-components/ui/FHSlider";

export default function CategoriesSlider({ data }) {
  const searchParams = useSearchParams();

  return (
    <FHSlider>
      <Link
        href="/"
        scroll={false}
      >
        <CategoryCard
          categoryName="For you"
          isActive={!searchParams.get("category")}
          includeHover
        />
      </Link>

      {data.map((category) => (
        <Link
          key={category.id}
          href={`/?category=${category.attributes.slug}`}
          scroll={false}
        >
          <CategoryCard
            categoryName={category.attributes.name}
            isActive={searchParams.get("category") === category.attributes.slug}
            includeHover
          />
        </Link>
      ))}
    </FHSlider>
  );
}