import Link from "next/link";

import logo from "@/assets/img/logo.jpeg";
import AsideProvider from "@/context/AsideContext";

import AsideOpener from "./components/AsideOpener";
import Searchbar from "./components/Searchbar";
import Aside from "./Aside";

export default function Layout({ children }) {
  return (
    <AsideProvider>
      <div className="mx-auto flex w-full max-w-[1600px] items-start">
        <main className="min-h-screen w-full min-w-0 p-4 pb-12 sm:p-6">
          <div className="flex w-full items-center gap-x-3 sm:gap-x-5">
            <Link 
              className="w-[40px] shrink-0 sm:w-[48px]"
              href="/"
            >
              <img 
                src={logo.src} 
                alt="Blog App Logo" 
                className="h-auto w-full rounded-md"
              />
            </Link>

            <Searchbar />

            <AsideOpener />
          </div>

          <div className="my-5 h-[1px] w-full bg-gray-300"/>

          {children}
        </main>

        <Aside />
      </div>
    </AsideProvider>
  );
}