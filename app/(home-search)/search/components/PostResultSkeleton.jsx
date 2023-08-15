export default function PostResultSkeleton() {
  return (
    <article className="flex w-full items-center gap-x-4 overflow-hidden">
      <div className="aspect-square w-[150px] shrink-0 rounded-md bg-gray-300 md:w-[190px] lg:w-[220px]"/>

      <div className="flex w-full flex-col gap-y-5 md:gap-y-6">
        <div className="hidden h-3 w-48 bg-gray-300 md:block"/>
    
        <div className="h-4 w-full bg-gray-300 md:h-6"/>

        <div className="flex w-full flex-col gap-y-2">
          <div className="h-2 w-full bg-gray-300 md:h-3"/>
          <div className="h-2 w-full bg-gray-300 md:h-3"/>
          <div className="h-2 w-full bg-gray-300 md:h-3"/>
        </div>

        <div className="h-6 w-24 rounded-full bg-gray-300 sm:h-7"/>

      </div>
    </article>
  );
}