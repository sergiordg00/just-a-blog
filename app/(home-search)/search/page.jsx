// WILL HAVE: q? param and category? param
"use client";

import { useEffect } from "react";

export default function Search() {
  useEffect(() => {
    console.log(window.location.search);

    setTimeout(() => {
      console.log(window.location.search);
    }, 5000);
  }, []);
  return (
    <div className="">
      This is a component template
    </div>
  );
}