import ReactMarkdown from "react-markdown";

import "./styles/ArticleBody.css";

export default function ArticleBody({ data }) {
  return (
    <ReactMarkdown className="article-body my-6 flex flex-col gap-y-4 text-justify">
      {data.content}
    </ReactMarkdown>
    // <>
    //   <p className=" font-base mb-4 mt-6 text-justify">
    //     <span className="float-left mr-2 text-7xl font-extrabold">
    //       L
    //     </span>

  //     orem ipsum dolor sit amet consectetur adipisicing elit.
  //     orem ipsum dolor sit amet consectetur adipisicing elit.
  //     orem ipsum dolor sit amet consectetur adipisicing elit.
  //     orem ipsum dolor sit amet consectetur adipisicing elit.
  //     orem ipsum dolor sit amet consectetur adipisicing elit.
  //     orem ipsum dolor sit amet consectetur adipisicing elit.
  //     orem ipsum dolor sit amet consectetur adipisicing elit.
  //     orem ipsum dolor sit amet consectetur adipisicing elit.
  //     orem ipsum dolor sit amet consectetur adipisicing elit.
  //     orem ipsum dolor sit amet consectetur adipisicing elit.
  //     orem ipsum dolor sit amet consectetur adipisicing elit.
  //     orem ipsum dolor sit amet consectetur adipisicing elit.
  //     orem ipsum dolor sit amet consectetur adipisicing elit.
  //     orem ipsum dolor sit amet consectetur adipisicing elit.
  //     orem ipsum dolor sit amet consectetur adipisicing elit.
  //     orem ipsum dolor sit amet consectetur adipisicing elit.
  //   </p>

  //   <p className="font-base mb-4 text-justify">
  //     orem ipsum dolor sit amet consectetur adipisicing elit.
  //     orem ipsum dolor sit amet consectetur adipisicing elit.
  //     orem ipsum dolor sit amet consectetur adipisicing elit.
  //     orem ipsum dolor sit amet consectetur adipisicing elit.
  //     orem ipsum dolor sit amet consectetur adipisicing elit.
  //     orem ipsum dolor sit amet consectetur adipisicing elit.
  //     orem ipsum dolor sit amet consectetur adipisicing elit.
  //     orem ipsum dolor sit amet consectetur adipisicing elit.
  //     orem ipsum dolor sit amet consectetur adipisicing elit.
  //     orem ipsum dolor sit amet consectetur adipisicing elit.
  //     orem ipsum dolor sit amet consectetur adipisicing elit.
  //     orem ipsum dolor sit amet consectetur adipisicing elit.
  //     orem ipsum dolor sit amet consectetur adipisicing elit.
  //     orem ipsum dolor sit amet consectetur adipisicing elit.
  //     orem ipsum dolor sit amet consectetur adipisicing elit.
  //     orem ipsum dolor sit amet consectetur adipisicing elit.
  //   </p>

  //   <p className="font-base mb-4 text-justify">
  //     orem ipsum dolor sit amet consectetur adipisicing elit.
  //     orem ipsum dolor sit amet consectetur adipisicing elit.
  //     orem ipsum dolor sit amet consectetur adipisicing elit.
  //     orem ipsum dolor sit amet consectetur adipisicing elit.
  //     orem ipsum dolor sit amet consectetur adipisicing elit.
  //     orem ipsum dolor sit amet consectetur adipisicing elit.
  //     orem ipsum dolor sit amet consectetur adipisicing elit.
  //     orem ipsum dolor sit amet consectetur adipisicing elit.
  //     orem ipsum dolor sit amet consectetur adipisicing elit.
  //     orem ipsum dolor sit amet consectetur adipisicing elit.
  //     orem ipsum dolor sit amet consectetur adipisicing elit.
  //     orem ipsum dolor sit amet consectetur adipisicing elit.
  //     orem ipsum dolor sit amet consectetur adipisicing elit.
  //     orem ipsum dolor sit amet consectetur adipisicing elit.
  //     orem ipsum dolor sit amet consectetur adipisicing elit.
  //     orem ipsum dolor sit amet consectetur adipisicing elit.
  //   </p>
  // </>
  );
}