"use client";

import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";

export default function Searchbar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [formState, setFormState] = useState({
    q: searchParams.get("q") || ""
  });

  function onSubmit(e) {
    e.preventDefault();
    router.push(`/search?q=${formState.q}`);
  }

  useEffect(() => {
    if(searchParams.get("q")) {
      setFormState({
        q: searchParams.get("q")
      });
    } 
  }, [searchParams]);

  return (
    <form onSubmit={onSubmit} className="flex w-full max-w-[500px] items-center gap-x-2 rounded-full border border-solid border-gray-300">
      <input 
        type="text" 
        className="w-full border-none bg-transparent pl-4 text-sm outline-none sm:text-base" 
        value={formState.q}
        onChange={e => setFormState({ q: e.target.value })}
        placeholder="Search for a post..."
        autoComplete="off"
        required
      />

      <button type="submit" className="shrink-0 rounded-full p-2 transition hover:bg-gray-300">
        <BsSearch size={20} className="text-black"/>
      </button>
    </form>
  );
}