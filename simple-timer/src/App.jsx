import Timer from "./components/Timer";
import TimerControls from "./components/TimerControls";
import TimerDisplay from "./components/TimerDisplay";
import { useState, useRef, useEffect } from "react";

const App = () => {
  const [time, setTime] = useState(() => {
    const savedTime = localStorage.getItem("timerValue");
    return savedTime ? parseInt(savedTime, 10) : 0;
  });
  const timerRef = useRef(null);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    localStorage.setItem("timerValue", time.toString());
  }, [time]);

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

  const resetTimer = () => {
    clearInterval(timerRef.current);
    setTime(0);
    setIsRunning(false);
    localStorage.removeItem("timerValue");
  }

  return (
    <Timer
      time={time}
      isRunning={isRunning}
      toggleTimer={toggleTimer}
      resetTimer={resetTimer}
    >
      <TimerDisplay time={time} />
      <TimerControls isRunning={isRunning} toggleTimer={toggleTimer} resetTimer={resetTimer} />
    </Timer>
  );
}

export default App;