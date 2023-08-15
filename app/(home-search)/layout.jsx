import AsideProvider from "@/context/AsideContext";

import Aside from "./Aside";

export default function Layout({ children }) {
  return (
    <AsideProvider>
      <div className="mx-auto flex w-full max-w-[1600px] items-start">
        <main className="min-h-screen w-full min-w-0 p-6 pb-12 pt-4">
          {children}
        </main>

        <Aside />
      </div>
    </AsideProvider>
  );
}