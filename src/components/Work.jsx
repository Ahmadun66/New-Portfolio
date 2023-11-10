import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import DOTS from "vanta/dist/vanta.dots.min.js";
import { webapp, mobileapp } from "./Data.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import gsap from "gsap";
import { BsLaptop } from "react-icons/bs";
import { FiSmartphone } from "react-icons/fi";

const Work = () => {
  const [usethis, setusethis] = useState(0);
  const [datanya, setdatanya] = useState([]);
  const [setactivate, setsetactivate] = useState(false);
  const [req, setreq] = useState("web");
  const myref = useRef(null);

  useEffect(() => {
    AOS.init();
    if (!usethis) {
      setusethis(
        DOTS({
          el: myref.current,
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

    switch (req) {
      case "web":
        setdatanya(webapp);
        setsetactivate(false);
        break;
      case "ip":
        setdatanya(mobileapp);
        setsetactivate(true);
        break;
      default:
        setdatanya(webapp);
        break;
    }
  }, [usethis, req]);

  const mouseenter = (e) => {
    gsap.to(e.current, {
      rotateY: 360,
      duration: 0.5,
      ease: "power1",
    });
  };

  const mouseleave = (e) => {
    gsap.to(e.current, {
      rotateY: 0,
      duration: 0.5,
      ease: "power2",
    });
  };

  return (
    <>
      <div className="w-full h-screen scrollhide">
        <div
          ref={myref}
          className="w-full h-2/3 flex justify-center items-center"
        >
          <h2 className=" font-poppins text-7xl ">Work Section</h2>
        </div>
        <div className="w-full flex h-full justify-center items-center">
          <div
            className={`w-2/12 flex flex-col gap-28 items-center justify-start`}
            onClick={() => setreq("web")}
          >
            <p
              className={` p-5 bg-black duration-500 ${
                setactivate
                  ? "text-white"
                  : "bg-white text-black border-2 border-slate-900 "
              }`}
            >
              <BsLaptop />
            </p>
            <h6
              className="font-poppins text-5xl tracking-wide"
              style={{ transform: "Rotate(90deg)" }}
            >
              Dekstop
            </h6>
          </div>
          <div className="w-8/12 h-full grid grid-cols-3 gap-2 gap-y-6 text-center font-inter ">
            {datanya.map((data, i) => (
              <div
                key={i}
                className="relative w-full h-72  rounded-md  shadow-lg  bg-slate-800   "
                data-aos="fade-left"
                data-aos-delay={i * 200}
                data-aos-once={true}
                onMouseEnter={(e) => mouseenter(e)}
                onMouseLeave={(e) => mouseleave(e)}
              >
                <img
                  src={data.img}
                  alt=""
                  className="p-1 w-full h-full rounded-md object-cover"
                />
                <div className="absolute z-10 top-0 left-0 justify-center flex items-center w-full h-full">
                  <a
                    className="opacity-0 w-full h-full flex justify-center items-center bg-slate-800 bg-opacity-80 text-white font-medium duration-500 hover:opacity-100"
                    href={data.Title}
                  >
                    View Site
                  </a>
                </div>
                <div className="absolute z-0 w-full bottom-4 flex  items-center ">
                  <h6 className="w-full bg-slate-900 text-white p-1 text-base">
                    {data.judul}
                  </h6>
                  <div className="tek w-full flex justify-center items-end text-white text-2xl gap-2 ">
                    {data.tek}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div
            className="w-2/12 flex flex-col gap-28 items-center justify-start"
            onClick={() => setreq("ip")}
          >
            <p
              className={` p-5 duration-500 bg-black ${
                setactivate
                  ? "bg-white text-black border-2 border-slate-900 "
                  : "text-white"
              }`}
            >
              <FiSmartphone />
            </p>
            <h6
              className="font-poppins text-5xl tracking-wide"
              style={{ transform: "Rotate(90deg)" }}
            >
              Mobile
            </h6>
          </div>
        </div>
      </div>
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
};

export default Work;
