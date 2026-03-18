import React, { useState, useRef } from "react";
import "./Stopwatch.css";

const Stopwatch: React.FC = () => {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [running, setRunning] = useState(false);
  const timerRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(0);

  const formatTime = (ms: number) => {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
    const seconds = String(totalSeconds % 60).padStart(2, "0");
    const milliseconds = String(Math.floor((ms % 1000) / 10)).padStart(2, "0");
    return `${minutes}:${seconds}:${milliseconds}`;
  };

  const update = () => {
    const now = Date.now();
    setElapsedTime(now - startTimeRef.current);
    timerRef.current = requestAnimationFrame(update);
  };

  const start = () => {
    if (!running) {
      startTimeRef.current = Date.now() - elapsedTime;
      timerRef.current = requestAnimationFrame(update);
      setRunning(true);
    }
  };

  const stop = () => {
    if (running) {
      if (timerRef.current) cancelAnimationFrame(timerRef.current);
      setElapsedTime(Date.now() - startTimeRef.current);
      setRunning(false);
    }
  };

  const reset = () => {
    if (timerRef.current) cancelAnimationFrame(timerRef.current);
    setElapsedTime(0);
    setRunning(false);
  };

  return (
    <div className="stopwatch-container">
      <h1 id="stopwatch">{formatTime(elapsedTime)}</h1>
      <div className="buttons">
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;