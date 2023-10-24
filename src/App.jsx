import Pagetransitions from "./components/animations/Pagetransitions";
import { BrowserRouter as Router } from "react-router-dom";
import Atas from "./components/Atas";
import Firstload from "./components/firstload/Firstload";
import AnimatedCursor from "react-animated-cursor";

import { useEffect, useState } from "react";
function App() {
  const [firstload, setfirstload] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setfirstload(false);
    }, 3000);
  }, []);

  return (
    <Router>
      {firstload && <Firstload />}
      <AnimatedCursor
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
      />
      <Atas />
      {/* <Flyout /> */}
      <Pagetransitions />
    </Router>
  );
}

export default App;
