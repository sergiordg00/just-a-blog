import test from "@/assets/img/test.jpg";
import test2 from "@/assets/img/test2.jpg";

export default function ComponentName() {
  return (
    <div className="mx-auto min-h-screen w-full max-w-[700px] py-10">
      <img 
        src={test.src} 
        alt="test" 
        className="mb-5 w-full shadow" 
      />
    </div>
  );
}