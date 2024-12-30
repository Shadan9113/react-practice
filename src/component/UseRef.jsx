import React, { useRef, useState } from 'react';

function Stopwatch() {
  const [time, setTime] = useState(0);
  const timerRef = useRef(null); // Locker for timer ID

  const start = () => {
    if (!timerRef.current) {
      timerRef.current = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000); // Increment every second
    }
  };

  const stop = () => {
    clearInterval(timerRef.current); // Stop the timer
    timerRef.current = null; // Empty the locker
  };

  const reset = () => {
    stop(); // Stop the timer first
    setTime(0); // Reset the time
  };

  return (
    <div>
      <h1>Time: {time}s</h1>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Stopwatch;
