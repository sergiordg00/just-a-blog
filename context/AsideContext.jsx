"use client";

import { createContext, useContext, useState } from "react";

const AsideContext = createContext();

export default function AsideProvider({ children }) {
  const [isAsideOpen, setIsAsideOpen] = useState(false);

  return (
    <AsideContext.Provider value={{ isAsideOpen, setIsAsideOpen }}>
      {children}
    </AsideContext.Provider>
  );
}

export function useAside() {
  return useContext(AsideContext);
}