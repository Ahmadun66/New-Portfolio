import { useEffect, useRef, useState } from "react";
import coba from "../assets/coba.jpg";
import gsap from "gsap";

import 'aos/dist/aos.css'; 
function Chatbot(chatactivate) {
  const [datadata, setdatadata] = useState('')
  const [chat, setchat] = useState([])
  const lah = useRef([]);
  const but1 = useRef();
  const but2 = useRef();
  const but3 = useRef();
  const data = [
    {
      id: 1,
      text: "Hello!",
    },
    {
      id: 2,
      text: "Welcome To Botji 😁",
    },
    {
      id: 3,
      text: "do you need any of the menus below?",
    },
   
  ];

  

  useEffect(() => {
    // setchatactivate(false)
    console.log(datadata);
    gsap
      .timeline({ paused: false})
      .from(lah[0], { y: 30, duration: 0.1, opacity: 0 })
      .from(lah[1], { y: 30, duration: 0.1, opacity: 0})
      .from(lah[2], { y: 30, duration: 0.1, opacity: 0 })
      .from(but1.current, { y: 30, duration: 0.1, opacity: 0 })
      .from(but2.current, { y: 30, duration: 0.1, opacity: 0 })
      .from(but3.current, { y: 30, duration: 0.1, opacity: 0 })
      .to(lah[0], { y: 0, duration: 0.1, opacity: 1 })
      .to(lah[1], { y: 0, duration: 0.1, opacity: 1})
      .to(lah[2], { y: 0, duration: 0.1, opacity: 1 })
      .to(but1.current, { y: 0, duration: 0.1, opacity: 1 })
      .to(but2.current, { y: 0, duration: 0.1, opacity: 1 })
      .to(but3.current, { y: 0, duration: 0.1, opacity: 1 })



  }, [chatactivate]);


  const send = () => {
    setchat([...chat, datadata])
    setdatadata('') 
  }
  console.log(chat);

  return (
    <div className="w-ful h-full  bg-transparent ">
      <div className="flex justify-start p-4 items-center bg-black text-white h-1/6 rounded-t-xl">
        <img
          src={coba}
          className="w-10 h-10 border-2 rounded-full object-fill"
          alt=""
        />
        <div className="ml-3  flex flex-col ">
          <h6 className="text-sm font-medium">ZSAN AJI</h6>
          <h6 className="font-thin text-[10px]">Silahkan diganggu....</h6>
        </div>
      </div>
      
      <div className="w-full h-5/6 px-2 text-sm  pt-1 bgglass gap-y-4 chatover">
        {data.map((d, i) => (
          <div         
            key={i}
            
            ref={(el) => (lah[i] = el)}
          >
            <p className="bg-black text-white  rounded-e-xl rounded-bl-xl mt-2 p-2 w-fit">{d.text}</p>
          </div>
        ))}
        <button ref={but1}  className="bg-black text-white  rounded-e-xl rounded-bl-xl mt-2 p-2 w-fit">I'm interested in you</button>
        <button ref={but2} className="bg-black text-white  rounded-e-xl rounded-bl-xl mt-2 p-2 w-fit">I'm interested in you</button>
        <button ref={but3} className="bg-black text-white  rounded-e-xl rounded-bl-xl mt-2 p-2 w-fit">I'm interested in you</button>
        {chat.map((d, i) => (
           <div         
           key={i}
           className="mb-2 flex justify-end"
          //  ref={(el) => (lah[i] = el)}
         >
           <p className="bg-white text-black  rounded-s-xl rounded-br-xl mt-2 p-2 w-fit">{d}</p>
         </div>
        ))}
      </div>
      <div className="w-full h-17 flex gap-2 justify-center glassbawah py-2 rounded-b-2xl ">
        <input type="text" placeholder="any questions?" value={datadata} onChange={(e) => setdatadata(e.target.value)} className=" rounded-xl p-2 h-10 outline-none hover:border-none"/>
        <button onClick={send} className="text-black font-poppins ">Send</button>
      </div>
          
    </div>
  );
}

export default Chatbot;
