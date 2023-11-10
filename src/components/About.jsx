import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useRef } from "react";
import DOTS from "vanta/dist/vanta.dots.min.js";
import AOS from "aos";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {MdWork} from 'react-icons/md';

function About() {
  const backref = useRef();
  const [backstate, setbackstate] = useState(0);

  useEffect(() => {
    AOS.init();
    if (!backstate) {
      setbackstate(
        DOTS({
          el: backref.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: true,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x0,
          color2: 0x0,
          backgroundColor: 0xffffff,
          size: 2.2,
          spacing: 55.0,
          showLines: false,
        })
      );
    }
  }, [backstate]);

  const items = [
    {
      background: "rgb(33, 150, 190)",
      color: "#fff",
      borderRight: "7px solid  rgb(33, 150, 190)",
      date:"2011 - present",
      backicon:  "rgb(33, 150, 170)",
      colicon: "#fff" ,
      icon: <MdWork />,
      profesi: "Full Stack Dev",
      lokasi: "Yogyakarta",
      tugas: "Membuat sistem "


    },
    {
      background: "rgb(33, 150, 190)",
      color: "#fff",
      borderRight: "7px solid  rgb(33, 150, 190)",
      date:"2011 - present",
      backicon:  "rgb(33, 150, 170)",
      colicon: "#fff" ,
      icon: <MdWork />,
      profesi: "Full Stack Dev",
      lokasi: "Yogyakarta",
      tugas: "Membuat sistem "


    },
  
  ];

  return (
    <>
      <section className="w-full h-full ">
        <div className="h-screen">
          <div
            ref={backref}
            className="w-full h-2/3 flex justify-center items-center"
          >
            <h2 className=" font-poppins text-7xl ">About Section</h2>
          </div>
        </div>
        <div>
          <VerticalTimeline lineColor={ 'black' } >
            {items.map((e, i) => (
                 <VerticalTimelineElement key={i}
                 className="vertical-timeline-element"
                 contentStyle={{ background: "7px solid  rgb(33, 150, 190)", color: "#fff" }}
                 contentArrowStyle={{
                   borderRight: "7px solid  rgb(33, 150, 190)",
                 }}
                 date="2011 - present"
                 iconStyle={{ background: "rgb(33, 150, 170)", color: "#fff" }}
                 icon={e.icon}
               >
                 <h3 className="vertical-timeline-element-title">
                   {e.profesi}
                 </h3>
                 <h4 className="vertical-timeline-element-subtitle">{e.lokasi}</h4>
                 <p>
                  {e.tugas}
                 </p>
               </VerticalTimelineElement>
            ))}
          
          </VerticalTimeline>
        </div>
      </section>
      <motion.div
        className="slide-in"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0, 1, 0.5, 1] }}
      ></motion.div>

      <motion.div
        className="slide-out"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0, 1, 0.5, 1] }}
      ></motion.div>
    </>
  );
}

export default About;
