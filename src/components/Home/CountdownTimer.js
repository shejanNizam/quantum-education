"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [deadline, setDeadline] = useState(null);

  const scrollVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

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
      <motion.div
        variants={scrollVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="flex justify-center gap-4 items-center text-xl font-bold"
      >
        <div className=" flex justify-center items-center mb-12">
          <div className="text-primary px-4 rounded">
            <span className="text-4xl"> {timeLeft.days} </span> <br />
            <span className="text-sm">days</span>
          </div>
          <div className="text-primary px-4 rounded">
            <span className="text-4xl"> {timeLeft.hours} </span> <br />
            <span className="text-sm">hours</span>
          </div>
          <div className="text-primary px-4 rounded">
            <span className="text-4xl"> {timeLeft.minutes} </span> <br />
            <span className="text-sm">minutes</span>
          </div>
          <div className="text-primary px-4 rounded">
            <span className="text-4xl"> {timeLeft.seconds} </span> <br />
            <span className="text-sm">seconds</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CountdownTimer;
