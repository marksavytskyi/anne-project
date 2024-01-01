import React, { useState, useEffect } from 'react';
const Countdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer);
  });

  const timeUnits = Object.keys(timeLeft);

  return (
    <div className="flex justify-center items-center space-x-4 lg:space-x-10 text-white h-20 rounded-lg">
      {timeUnits.map((unit, index) => (
        <React.Fragment key={unit}>
          <div className="flex flex-col items-center justify-center">
            <span className="text-5xl md:text-7xl font-bold relative">
              {timeLeft[unit]}
              <span className="text-sm uppercase absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full">
              {unit}
            </span>
            </span>

          </div>
          {index < timeUnits.length - 1 && ( // Only add colons between time units
            <span className="text-3xl lg:text-7xl  font-bold">:</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default function CountDown() {
  return (
    <div className="App">
      <Countdown targetDate="2024-02-24T09:00:00" />
    </div>
  );
}
