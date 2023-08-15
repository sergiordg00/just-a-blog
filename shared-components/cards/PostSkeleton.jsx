export default function PostSkeleton() {
  return (
    <div className="flex w-full flex-col gap-y-5 rounded-lg p-2">
      <div className="aspect-[3/2] w-full rounded-md bg-gray-300"/>

      <div className="h-5 w-full bg-gray-300"/>

      <div className="flex w-full flex-col gap-y-2">
        <div className="h-3 w-full bg-gray-300"/>
        <div className="h-3 w-full bg-gray-300"/>
        <div className="h-3 w-full bg-gray-300"/>
      </div>

      <div className="flex w-full items-center gap-x-2">
        <div className="h-5 w-5 bg-gray-300"/>

        <div className="h-3 w-24 bg-gray-300"/>
      </div>
    </div>
  );
}