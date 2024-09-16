import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import NightModeIcon from "@mui/icons-material/NightsStay";
import LightModeIcon from "@mui/icons-material/LightMode";

import "./ToggleDarkMode.css";

const DARK_MODE_TEXT = "לילה";
const LIGHT_MODE_TEXT = "יום";

export default function ToggleDarkMode() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const handleClick = (): void => {
    setDarkMode((currentMode) => !currentMode);
  };

  const imgTransition = useSpring({
    x: darkMode ? -59.7 : 0,
  });
  const textTransition = useSpring({ x: darkMode ? 45 : 0 });
  return (
    <div id="toggle-mode-container" onClick={() => handleClick()}>
      <animated.div id="mode-img" style={imgTransition}>
        {darkMode ? <NightModeIcon /> : <LightModeIcon />}
      </animated.div>
      <animated.div id="mode-lable" style={textTransition}>
        {darkMode ? DARK_MODE_TEXT : LIGHT_MODE_TEXT}
      </animated.div>
    </div>
  );
}
