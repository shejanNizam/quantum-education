"use client";

import { motion } from "framer-motion";
import Script from "next/script";
import { useEffect, useState } from "react";

export default function RegistrationForm() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const scrollVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Countdown Timer Logic
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const deadline = new Date("2025-05-31T00:00:00"); // Set your deadline date and time here
    const updateTimer = () => {
      const now = new Date();
      const timeDifference = deadline - now;

      if (timeDifference <= 0) {
        // If time is over, stop the timer
        clearInterval(timerInterval);
      } else {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    const timerInterval = setInterval(updateTimer, 1000);
    return () => clearInterval(timerInterval);
  }, []);

  return (
    <motion.div
      className="py-24 bg-white text-center"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          variants={scrollVariants}
          initial="hidden"
          whileInView="visible"
          className="text-center my-12"
        >
          <motion.h2
            variants={scrollVariants}
            className="customHeading text-center"
            whileHover={{ scale: 1.1 }}
          >
            Register Now
          </motion.h2>
          <motion.p
            variants={scrollVariants}
            className="p-4 md:p-0 lg:p-0 text-lg text-gray-600 font-semibold"
          >
            It’s never too late to start a new career. Countdown is finished!
          </motion.p>
        </motion.div>

        {/* Timer Section */}
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

        {/* Iframe Container */}
        <motion.div
          variants={scrollVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="iframe-container"
          style={{
            backgroundColor: "#FFFFFF",
            padding: "30px",
            borderRadius: "12px",
            border: "1px solid #ccc",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            maxWidth: "850px",
            width: "100%",
            margin: "0 auto",
          }}
          whileHover={{
            scale: 1.01,
            boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
          }}
        >
          {/* Embed Cognito Forms iframe */}
          <motion.iframe
            src="https://www.cognitoforms.com/f/R16GRqSqDUauWo4ldCNybw/1"
            allow="payment"
            style={{
              border: "0",
              width: "100%",
              height: "900px",

              borderRadius: "12px",
            }}
            loading="lazy"
            title="Registration Form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          ></motion.iframe>

          {/* Dynamically load the Cognito iframe.js script */}
          <Script
            src="https://www.cognitoforms.com/f/iframe.js"
            strategy="lazyOnload"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
