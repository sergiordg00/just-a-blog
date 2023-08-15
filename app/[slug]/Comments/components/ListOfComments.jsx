"use client";

function CommentCard({ data }) {
  return (
    <div className="flex w-full items-start gap-x-3 pb-5">
      <div className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full bg-sky-400 text-lg font-bold">
        {data.name[0].toUpperCase()}
      </div>

      <div className="w-full">
        <p className="w-full text-sm">
          <span className="font-bold">
            {data.name}
          </span>

          &nbsp;on&nbsp;
           
          {new Date(data.createdAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        <p className="mt-1 text-[15px]">
          {data.message}
        </p>
      </div>
    </div>
  );
}

export default function ListOfComments({ comments }) {
  return (
    <div className="w-full rounded-lg bg-white p-4 pb-2 shadow-md">
      <p className="text-base font-bold">
        {comments.length} Comments
      </p>

      <div className="my-4 h-[1px] w-full bg-gray-300"/>

      {comments.map((comment) => (
        <CommentCard data={comment.attributes} key={comment.id}/>
      ))}
    </div>
  );
}