import { useRef } from "react";

export default function HomePage() {

  const hello2Rev = useRef(null);

  const scrollToHello2 = () => {
    hello2Rev.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className='bg-white dark:bg-black w-full'>
      <div onClick={scrollToHello2} className="h-screen">
        Helllllo
      </div>
      <div className="mt-auto" ref={hello2Rev}>
        Helloo tooo.
      </div>
    </div>
  );
}