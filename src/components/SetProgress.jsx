import React, { useState, useEffect } from "react";
import Button from "./Button/Button";

function SetProgress() {
  const [progress, setProgress] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 10));
    }, 1000);
    return () => clearInterval(timer);

    console.log("Time", timer);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prev) => {
        if (prev >= 10) {
          return 1;
        }
        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  const resetCount = () => {
    setCount(0);
  };
  const incrementCount = () => setCount((prev) => prev + 2);

  return (
    <div class="">
      <div style={{ width: "200px", background: "red", height: "60px" }}>
        {count}
        <div
          style={{ width: `${progress}%`, height: "40px", background: "blue" }}
        ></div>
      </div>
      <div className="flex gap-10 px-4 py-8 m-4">
        <button className="ring p-2 flex-1" onClick={resetCount}>
          Reset{" "}
        </button>
        <Button
          varient="secondary"
          className="ring p-2 flex-1"
          onClick={incrementCount}
        >
          Increment
        </Button>
      </div>
    </div>
  );
}

export default SetProgress;
