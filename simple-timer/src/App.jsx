import { useState, useRef } from "react";

const App = () => {
  const [time, setTime] = useState(0);
  const timerRef = useRef(null);
  const [isRunning, setIsRunning] = useState(false);

  const toggleTimer = () => {
    if (isRunning) {
      clearInterval(timerRef.current);
      console.log(timerRef);
    } else {
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    setIsRunning(!isRunning);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-lg text-center bg-gray-100">
      <h2 text-4xl font-semibold mt-4>⏳Timer: {time}</h2>
      <button
      onClick={toggleTimer}
        className="mt-3
        bg-green-500
        text-white
        px-4
        py-2
        rounded-md
        hover:bg-green-600"
      >
        {isRunning ? "Pause" : "Start"}
      </button>
    </div>
  );
}

export default App;