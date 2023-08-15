import Link from "next/link";
import { MdDateRange } from "react-icons/md";

export default function PostResultCard({ data }) {
  return (
    <Link 
      className="flex w-full items-center gap-x-3 rounded-lg p-2 transition hover:bg-gray-300 md:gap-x-5"
      href={`/${data.attributes.slug}`}
    >
      <img 
        src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${data.attributes.cover.data.attributes.formats.medium.url}`}  
        alt="Post Result Cover" 
        className="aspect-square w-[150px] shrink-0 rounded-md object-cover object-center md:w-[190px] lg:w-[220px]" 
      />

      <div className="flex w-full flex-col gap-y-2 md:gap-y-3">
        <p className="hidden w-full items-center gap-x-1 text-xs font-bold text-gray-900 md:flex">
          <MdDateRange size={16}/>
          {new Date(data.attributes.createdAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
            
        <h2 className="text-base font-bold sm:text-lg md:text-2xl">
          {data.attributes.title}
        </h2>

        <p className="line-clamp-3 w-full text-sm text-gray-500 opacity-75 md:text-[15px]">
          {data.attributes.content}
        </p>

        <div className="mt-2 w-fit shrink-0 rounded-full border border-solid border-gray-400 p-1 px-3 text-xs font-semibold sm:text-sm">
          {data.attributes.category.data.attributes.name}
        </div>
      </div>
    </Link>
  );
}