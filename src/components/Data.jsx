// import logo from "../img/logo.jpeg";
// import hro from "../img/hro.png";
import { FaReact, FaVuejs, FaLaravel, FaNodeJs } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";
import { VscJson } from "react-icons/vsc";
import { AiOutlineHtml5 } from "react-icons/ai";
import { DiJavascript1 } from "react-icons/di";
import port1 from "../assets/port2.jpg";
import port from "../assets/port.jpg";
import { SiMysql, SiMongodb  } from "react-icons/si";
import travel from "../assets/travel.jpg";
import ecomm from "../assets/ecomwithadmin.jpg";
import ig from "../assets/ig.png";
import wa from "../assets/wa.png";
import travelmobile from "../assets/travelmobile.png";




export const webapp = [
  {
    id: 1,
    Title: "https://zashop.netlify.app/",
    img: port1,
    judul: "E-Commerce",
    tek: [<FaReact className="bg-slate-900 p-1 " />, <SiFirebase className="bg-slate-900 p-1 h-10" />],
    tgl: "Sept, 2022",
  },
  {
    id: 2,
    Title: "https://kasirweb.netlify.app/",
    img: port,
    judul: "Kasir",
    tek: [<FaVuejs className="bg-slate-900 p-1" />, <VscJson className="bg-slate-900 p-1 h-10"/>],
    tgl: "Sept, 2022",
  },
  {
    id: 3,
    Title: "https://storaja.netlify.app/",
    img: ecomm,
    judul: "Ecommerce with Admin",
    tek: [<FaReact className="bg-slate-900 p-1"  />, <FaLaravel className="bg-slate-900 p-1 h-10"  />, <SiMysql className="bg-slate-900 p-1 "  />],
    tgl: "Nov, 2021",
  
  },
  {
    id: 4,
    Title: "https://jalantravel.netlify.app/",
    img: travel,
    judul: "Travel with Admin",
    tek: [<FaReact className="bg-slate-900 p-1"  />, <FaLaravel className="bg-slate-900 p-1 h-10"  />,  <SiMysql className="bg-slate-900 p-1 "  />],
    tgl: "Nov, 2021",
  
  },
 
  {
    id: 6,
    Title: "https://intagram-clonee.web.app/",
    img: ig,
    judul: "Instagram Clone",
    tek: [<FaReact className="bg-slate-900 p-1"  />, <SiFirebase className="bg-slate-900 p-1 h-10"  />],
    tgl: "Mei, 2022",
  
  },
  {
    id: 7,
    Title: "https://mypinterest-350113.web.app/",
    img: wa,
    judul: "WhatsApp Clone",
    tek: [<FaReact className="bg-slate-900 p-1"  />, <SiFirebase className="bg-slate-900 p-1 h-10"  />],
    tgl: "Juni, 2022",
  
  },
];

export const mobileapp = [
  {
    id: 1,
    Title: "https://play.google.com/store/apps/details?id=com.dealaja.prod",
    img: travelmobile,
    judul: "Dealaja App",
    tek: [<FaReact className="bg-slate-900 p-1" />, <FaNodeJs className="bg-slate-900 p-1 h-10"   />, <SiMongodb className="bg-slate-900 p-1" />],
    tgl: "Januari, 2023",

  },

];