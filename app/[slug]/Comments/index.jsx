"use client";

import { useState } from "react";

import LeaveAComment from "./components/LeaveAComment";
import ListOfComments from "./components/ListOfComments";

export default function Comments({ initialComments, id }) {
  const [comments, setComments] = useState(initialComments);

  return (
    <section className="w-full">
      <LeaveAComment id={id} setComments={setComments}/>

      <ListOfComments comments={comments}/>
    </section>
  );
}