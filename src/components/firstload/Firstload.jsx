import { useEffect, useState } from "react";
import Typed from "react-typed";

function Firstload() {
  const [delay, setdelay] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setdelay(true)
    }, 2000);

  }, [])
  

  return (
    <div className="w-full h-screen text-stone-50">
      <div className={`bg-black h-1/2 flex justify-center items-end top-0 duration-1000 ${delay ? 'up' : ''}` }>
        <h1 className="text-5xl font-poppins">
          <b>Zulfikar Aji Santoso</b>
        </h1>
      </div>
      <div className={`bg-black h-1/2 flex justify-center duration-1000 bottom-0  ${delay ? 'down' : ''}` }>
        <Typed className="mt-3 font-serif text-3xl" strings={["Portfolio"]} typeSpeed={40} />
      
      </div>
    </div>
  );
}

export default Firstload;
