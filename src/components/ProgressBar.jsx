import React, { useState, useEffect } from "react";

function ProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 1));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ width: "200px", background: "red", height: "40px" }}>
      <p>Progress</p>
      <div
        syle={{ width: `${progress}`, height: "40px", background: "blue" }}
      ></div>
    </div>
  );
}

export default ProgressBar;
