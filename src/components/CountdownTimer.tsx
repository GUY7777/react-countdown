import { useState, useEffect, useRef } from "react";
import "./CountdownTimer.css";

type borderStyleOptions = "solid" | "double" | "dotted" | "dashed";

interface props {
  targetTime: Date;
  timerSize?: string;
  textColor?: string;
  backgroundColor?: string;
  borderRadius?: string;
  borderThickness?: string;
  borderStyle?: borderStyleOptions;
}

export default function CountdownTimer({
  targetTime,
  timerSize = "4rem",
  textColor = "rgb(246, 159, 39)",
  backgroundColor = "black",
  borderRadius = "0",
  borderThickness = "0.2rem",
  borderStyle = "solid",
}: props) {
  const deltaTimeSec = useRef<number>(
    (targetTime.getTime() - Date.now()) / 1000
  );
  const [timeLeftSec, setTimeLeftSec] = useState<number>(deltaTimeSec.current);

  useEffect(() => {
    if (timeLeftSec <= 0) {
      setTimeLeftSec(0);
      return;
    }

    const interval = setInterval(() => {
      setTimeLeftSec(timeLeftSec - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeftSec]);

  const currentTime = (): string => {
    const hours = ("0" + Math.floor(timeLeftSec / 60 / 60)).slice(-2);
    const minutes = ("0" + Math.floor((timeLeftSec / 60) % 60)).slice(-2);
    const seconds = ("0" + Math.floor(timeLeftSec % 60)).slice(-2);
    return hours + ":" + minutes + ":" + seconds;
  };

  const styleTimerContainer = {
    backgroundColor: backgroundColor,
    border: `${borderThickness} ${borderStyle} ${textColor}`,
    borderRadius: borderRadius,
  };
  const styleAnimatedBackgound = {
    backgroundColor: textColor,
    animation: `loading ${deltaTimeSec.current}s linear`,
  };

  return (
    <div id="timer-container" style={styleTimerContainer}>
      <div id="animated-background" style={styleAnimatedBackgound}>
        <div
          id="backTimerText"
          className="timer-text"
          style={{ fontSize: timerSize, color: textColor }}
        >
          {currentTime()}
        </div>
        <div
          id="frontTimerText"
          className="timer-text"
          style={{ fontSize: timerSize, color: backgroundColor }}
        >
          {currentTime()}
        </div>
      </div>
    </div>
  );
}
