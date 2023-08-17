import { PortableText } from '@portabletext/react';

import "./styles/ArticleBody.css";

export default function ArticleBody({ data }) {
  return (
    <div className="article-body my-6 flex w-full flex-col gap-y-4 text-justify">
      <PortableText
        value={data.content}
      />
    </div>
  );
}