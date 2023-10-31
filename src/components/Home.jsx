import { motion } from "framer-motion";
import Typed from "react-typed";
import fotoprofil from "../assets/hro.png";
import { Tilt } from "react-tilt";
import bgroler from "../assets/bgcolor.png";
import { IoIosArrowDropright } from "react-icons/io";
import cv from "../assets/aji.pdf";
import { Link } from "react-router-dom";

function Home() {
  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 35, // max tilt rotation (degrees)
  };

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center ">
        <div className="w-full flex h-5/6 mx-10  flex-nowrap">
          <div className="m-5  w-1/2 flex items-start flex-col justify-center">
            <h1 className="font-poppins text-9xl mb-10">
              Zulfikar Aji Santoso
            </h1>
            <Typed
              className="font-poppins text-3xl font-thin mb-10 "
              strings={[
                "Fullstack Developer",
                "Web Developer",
                "FrontEnd Developer",
                "BackEnd Developer",
              ]}
              typeSpeed={40}
              loop={true}
            />
            <p className="w-3/4">
              Nama saya Zulfikar Aji Santoso berdomisili di Yogyakarta. Saya
              telah menjadi seorang Front End Developer selama 2 tahun dan juga
              Full Stack Developer selama satu tahun.
            </p>
            <div className="flex items-center">
              <Link
                type="button"
                to="/contact"
                className="warna but text-decoration-none"
              >
                Hire me
                <span></span>
                <span></span>
                <span></span> <span></span>
              </Link>
              <a
                href={cv}
                download
                className="text-4xl tooltip-right text-black"
                data-tooltip="Download CV"
              >
                <IoIosArrowDropright />
              </a>
            </div>
          </div>
          <motion.div className="md-w-full w-1/2 flex justify-center items-center">
            <img src={bgroler} className="absolute w-[600px] z-0" alt="" />
            <Tilt
              options={defaultOptions}
              className="shadow-lg rounded-2xl z-[1]"
            >
              <img className="w-72 " src={fotoprofil} />
            </Tilt>
          </motion.div>
        </div>
      </div>
      <motion.div
        className="slide-in"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.7, ease: [0, 1, 0.5, 1] }}
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

export default Home;
