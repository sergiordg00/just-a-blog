"use client";

import { GiHamburgerMenu } from "react-icons/gi";

import { useAside } from "@/context/AsideContext";

export default function AsideOpener() {
  const { setIsAsideOpen } = useAside();

  return (
    <button 
      type="button" 
      className="ml-auto block rounded-full p-2 transition hover:bg-gray-300 md:hidden"
      onClick={() => setIsAsideOpen(true)}
    >
      <span className="sr-only">
        Open Aside
      </span>

      <GiHamburgerMenu size={22} />
    </button>
  );
}