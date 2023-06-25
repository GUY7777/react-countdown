import { useState, useEffect, useRef } from "react";
import "./CountdownTimer.css";

interface props {
  targetTime: Date;
}

export default function CountdownTimer({ targetTime }: props) {
  const deltaTimeSec = useRef((targetTime.getTime() - Date.now()) / 1000);
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

  const displyTimer = (): string => {
    const hours = ("0" + Math.floor((timeLeftSec / 60 / 60) % 24)).slice(-2);
    const minutes = ("0" + Math.floor((timeLeftSec / 60) % 60)).slice(-2);
    const seconds = ("0" + Math.floor(timeLeftSec % 60)).slice(-2);
    return hours + ":" + minutes + ":" + seconds;
  };

  return (
    <div id="timer-container">
      <div
        id="animated-background"
        style={{
          animation: `loading ${deltaTimeSec.current}s linear`,
        }}
      >
        <div id="timer">{displyTimer()}</div>
      </div>
    </div>
  );
}
