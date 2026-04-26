"use client";

import { useEffect, useState } from "react";

export default function FlashSaleSection() {
  const targetTime = new Date().getTime() + 24 * 60 * 60 * 1000;

  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  function getTimeRemaining() {
    const now = new Date().getTime();
    const difference = targetTime - now;

    return {
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-gray-950 text-white py-20 px-4 md:px-12">
      
      {/* Container */}
      <div className="max-w-6xl mx-auto bg-gray-900 rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-800">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          
          {/* Left Content */}
          <div className="flex-1 space-y-5">
            <h2 className="text-3xl md:text-5xl font-bold">
              ⚡ Flash Sale is Live!
            </h2>

            <p className="text-gray-400 text-sm md:text-base">
              Limited time offer — grab your favorite products before the timer ends.
            </p>

            {/* Countdown */}
            <div className="flex gap-4 mt-6">
              <div className="bg-gray-800 px-5 py-3 rounded-xl text-center">
                <h3 className="text-2xl font-bold">{timeLeft.hours}</h3>
                <p className="text-xs text-gray-400">Hours</p>
              </div>

              <div className="bg-gray-800 px-5 py-3 rounded-xl text-center">
                <h3 className="text-2xl font-bold">{timeLeft.minutes}</h3>
                <p className="text-xs text-gray-400">Minutes</p>
              </div>

              <div className="bg-gray-800 px-5 py-3 rounded-xl text-center">
                <h3 className="text-2xl font-bold">{timeLeft.seconds}</h3>
                <p className="text-xs text-gray-400">Seconds</p>
              </div>
            </div>

            <button className="mt-6 bg-white text-gray-900 font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition">
              Shop Now
            </button>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center">
            <img
              src="banner/banner-2.png"
              alt="Flash Sale Product"
              className="w-full max-w-sm rounded-2xl shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}