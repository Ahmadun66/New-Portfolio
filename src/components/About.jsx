import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      className="home w-full h-screen bg-orange-700"
      initial={{ height: 0 }}
      animate={{ height: "100vh" }}
      exit={{ y: window.innerHeight }}
      transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
    >
      <div>About</div>
    </motion.div>
  );
}

export default About;
