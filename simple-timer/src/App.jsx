import Timer from "./components/Timer";
import TimerControls from "./components/TimerControls";
import TimerDisplay from "./components/TimerDisplay";
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
    <Timer
      time={time}
      isRunning={isRunning}
      toggleTimer={toggleTimer}
    >
      <TimerDisplay time={time} />
      <TimerControls isRunning={isRunning} toggleTimer={toggleTimer} />
    </Timer>
  );
}

export default App;