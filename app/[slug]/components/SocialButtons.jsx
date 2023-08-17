import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function SocialsButtons({ data }) {
  return (
    <div className="flex items-center gap-x-3">
      <a 
        href={`https://www.facebook.com/sharer/sharer.php?u=${process.env.NEXT_PUBLIC_DOMAIN}/${data.slug.current}`} 
        className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full bg-[#3b4ea9] text-white hover:opacity-75 sm:h-[35px] sm:w-[35px]"
        target="_blank"
        rel="noreferrer"
      >
        <FaFacebookF className="h-auto w-[17px] sm:w-[20px]"/>
      </a>

      <a 
        href={`https://twitter.com/intent/tweet?url=${process.env.NEXT_PUBLIC_DOMAIN}/${data.slug.current}`}
        className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full bg-[#5fb7fc] text-white hover:opacity-75 sm:h-[35px] sm:w-[35px]"
        target="_blank"
        rel="noreferrer"
      >
        <FaTwitter className="h-auto w-[17px] sm:w-[20px]"/>
      </a>

      <a 
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${process.env.NEXT_PUBLIC_DOMAIN}/${data.slug.current}`} 
        className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full bg-[#0173b2] text-white hover:opacity-75 sm:h-[35px] sm:w-[35px]"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin className="h-auto w-[17px] sm:w-[20px]"/>
      </a>
    </div>
  );
}