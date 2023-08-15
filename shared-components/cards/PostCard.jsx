import Link from "next/link";
import { MdDateRange } from "react-icons/md";

export default function PostCard({ data }) {
  return (
    <Link 
      className="flex w-full flex-col gap-y-3 rounded-lg p-2 transition hover:bg-gray-300"
      href={`/${data.attributes.slug}`}
    >
      <img 
        src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${data.attributes.cover.data.attributes.formats.medium.url}`} 
        alt="Post cover" 
        className="aspect-[3/2] w-full rounded-md bg-gray-300 object-cover object-center" 
      />

      <h2 className="text-base font-bold text-black md:text-lg">
        {data.attributes.title}
      </h2>

      <p className="line-clamp-3 text-sm font-medium text-gray-400">
        {data.attributes.content}
      </p>

      <p className="flex w-full items-center gap-x-1 text-xs font-medium  text-gray-900">
        <MdDateRange size={16}/>
        {new Date(data.attributes.createdAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
    </Link>
  );
}