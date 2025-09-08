const TimerControls = ({ isRunning, toggleTimer }) => {
    return (
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
     );
}

export default TimerControls;