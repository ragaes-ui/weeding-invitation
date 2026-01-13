import React, { useState, useEffect } from 'react';

const Countdown = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2026-08-25") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        Hari: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Jam: Math.floor((difference / (1000 * 60 * 60)) % 24),
        Menit: Math.floor((difference / 1000 / 60) % 60),
        Detik: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <div className="py-12 bg-stone-100 flex flex-col items-center">
      <h2 className="text-2xl font-serif mb-6 text-stone-700">Menuju Bahagia</h2>
      <div className="flex gap-4">
        {Object.keys(timeLeft).map((interval) => (
          <div key={interval} className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md w-20">
            <span className="text-2xl font-bold text-stone-800">{timeLeft[interval]}</span>
            <span className="text-xs text-stone-500 uppercase">{interval}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countdown;