import Pagetransitions from "./components/animations/Pagetransitions";
import { BrowserRouter as Router } from "react-router-dom";
import Atas from "./components/Atas";
import Firstload from "./components/firstload/Firstload";
import AnimatedCursor from "react-animated-cursor";
import { MdCancelScheduleSend } from "react-icons/md";
import { useEffect, useState } from "react";
import { SiChatbot } from "react-icons/si";
import gsap from "gsap";
import { useRef } from "react";
import Chatbot from "./components/Chatbot";

function App() {
  const [firstload, setfirstload] = useState(true);
  const [chatactivate, setchatactivate] = useState(false);
  const icon = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setfirstload(false);
    }, 3000);
  }, [chatactivate]);

  const mouseenter = () => {
    setchatactivate(true);
    gsap.to(icon.current, {
      x: 0,
      duration: 0.5,
      opacity: 1,
      display: "flex",
      ease: "power2",
    });
  };

  const mouseleave = () => {
    setchatactivate(false);
    gsap.to(icon.current, {
      x: 100,
      duration: 0.5,
      opacity: 0,
      display: "none",
      ease: "power2",
    });
  };

  return (
    <Router>
      <div className="fixed duration-500 bottom-20 z-20 flex flex-col gap-y-2 items-end right-20 overflow-hidden ">
        <div
          ref={icon}
          className={`mb-16 w-72 h-[500px] ${chatactivate ? '' : 'hidden'} `}
        >
          <Chatbot  chatactivate={chatactivate} />
        </div>

        <button
          onClick={chatactivate ?  mouseleave : mouseenter}
          className={`duration-500 bg-black w-12 h-12 text-white flex items-center justify-center text-lg rounded-full`}
        >
          {chatactivate ? <MdCancelScheduleSend /> : <SiChatbot />  }
        </button>
      </div>
      {firstload && <Firstload />}
      {/* <AnimatedCursor
        innerStyle={{
          backgroundColor: "var(--cursor-color)",
        }}
        trailingSpeed={0.2}
        innerSize={8}
        outerSize={10}
        color="0, 0, 0"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
          {
            target: ".custom",
            options: {
              innerSize: 12,
              outerSize: 12,
              color: "255, 255, 255",
              outerAlpha: 0.3,
              innerScale: 0.7,
              outerScale: 5,
            },
          },
        ]}
      /> */}
      <Atas />

     
      <Pagetransitions />
    </Router>
  );
}

export default App;
