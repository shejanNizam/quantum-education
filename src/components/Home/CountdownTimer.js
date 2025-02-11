"use client";
import { useEffect, useState } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [deadline, setDeadline] = useState(null);

  useEffect(() => {
    const fetchDeadline = async () => {
      try {
        const response = await fetch("/api/deadline");
        const data = await response.json();
        if (data?.deadline) {
          setDeadline(new Date(data.deadline));
        }
      } catch (error) {
        console.error("Error fetching deadline:", error);
      }
    };

    fetchDeadline();
  }, []);

  useEffect(() => {
    if (!deadline) return;

    const updateTimer = () => {
      const now = new Date();
      const timeDifference = deadline - now;

      if (timeDifference <= 0) {
        clearInterval(timerInterval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(timeDifference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((timeDifference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((timeDifference / (1000 * 60)) % 60),
          seconds: Math.floor((timeDifference / 1000) % 60),
        });
      }
    };

    const timerInterval = setInterval(updateTimer, 1000);
    updateTimer();
    return () => clearInterval(timerInterval);
  }, [deadline]);

  return (
    <div>
      <h2>Countdown Timer</h2>
      <p>
        {timeLeft.days} Days {timeLeft.hours} Hours {timeLeft.minutes} Minutes{" "}
        {timeLeft.seconds} Seconds
      </p>
    </div>
  );
};

export default CountdownTimer;
