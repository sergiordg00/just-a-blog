"use client";

import { useEffect } from "react";

export default function RegisterVisit({ postId }) {
  useEffect(() => {
    fetch(`/api/${postId}/visit`, {
      method: "PUT",
    });
  }, []);
  
  return (
    <></>
  );
}