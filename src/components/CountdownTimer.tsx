import React, { useState, useEffect, useRef } from "react";
import "./CountdownTimer.css";

const DEFUALT = {
  FONT_SIZE: "4rem",
  MAIN_COLOR: "yellow",
  SECONDARY_COLOR: "black",
  BORDER_THICKNESS: "1rem",
};

interface props {
  targetTime: Date;
  mainColor?: string;
  secondaryColor?: string;
  fontSize?: string;
  containerStyle?: React.CSSProperties;
}

export default function CountdownTimer({
  targetTime,
  fontSize = DEFUALT.FONT_SIZE,
  mainColor = DEFUALT.MAIN_COLOR,
  secondaryColor = DEFUALT.SECONDARY_COLOR,
  containerStyle,
}: props) {
  const deltaTimeSec = useRef<number>(
    Math.max(Math.min((targetTime.getTime() - Date.now()) / 1000, 359999), 0)
  );

  const [timeLeftSec, setTimeLeftSec] = useState<number>(deltaTimeSec.current);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (timeLeftSec - 1 >= 0) {
        setTimeLeftSec(timeLeftSec - 1);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeftSec]);

  const currentTime = (): string => {
    const hours = ("0" + Math.floor(timeLeftSec / 60 / 60)).slice(-2);
    const minutes = ("0" + Math.floor((timeLeftSec / 60) % 60)).slice(-2);
    const seconds = ("0" + Math.floor(timeLeftSec % 60)).slice(-2);
    return hours + ":" + minutes + ":" + seconds;
  };

  const defaultContainerStyle = {
    backgroundColor: secondaryColor,
    border: `${DEFUALT.BORDER_THICKNESS} solid ${mainColor}`,
  };
  const styleAnimatedBackgound = {
    backgroundColor: mainColor,
    animation: `loading ${deltaTimeSec.current}s linear`,
  };

  return (
    <div
      id="timer-container"
      style={Object.assign(defaultContainerStyle, containerStyle)}
    >
      <div
        id="backTimerText"
        className="timer-text"
        style={{ fontSize: fontSize, color: mainColor }}
      >
        {currentTime()}
      </div>
      <div id="animated-background" style={styleAnimatedBackgound}>
        <div
          id="frontTimerText"
          className="timer-text"
          style={{ fontSize: fontSize, color: secondaryColor }}
        >
          {currentTime()}
        </div>
      </div>
    </div>
  );
}
