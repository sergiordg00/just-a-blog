"use client";

import { useEffect } from "react";

export default function RegisterVisit({ slug }) {
  useEffect(() => {
    fetch(`/api/${slug}/visit`, {
      method: "PUT",
    });
  }, []);
  
  return (
    <></>
  );
}