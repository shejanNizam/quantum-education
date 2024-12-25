"use client";

import CustomButtonComp from "@/lib/CustomButtonComp";
import { motion } from "framer-motion";
import Link from "next/link";
import { CgArrowTopRight } from "react-icons/cg";
import BG_IMAGE from "../../assets/banner_img/bg-banner1.png"; // Import the background image

export default function Banner({ onApplyClick }) {
  // Variants for initial load animations
  const initialVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Variants for scroll-triggered animations
  const scrollVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="relative w-full h-auto py-24 bg-center bg-cover text-center"
      style={{
        backgroundImage: `url(${BG_IMAGE.src})`, // Apply the background image
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Optional: Add a semi-transparent overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-20"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading with scroll animation */}

        <motion.h1
          variants={scrollVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          className="text-4xl md:text-6xl lg:text-6xl  font-bold text-white leading-tight mb-4"
        >
          Kickstart Your Career with Expert Guidance
        </motion.h1>

        {/* Paragraph with scroll animation */}
        <motion.p
          variants={scrollVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          className="text-lg md:text-xl text-gray-200 mb-8" // Changed text color for better contrast
        >
          Discover an affordable, fast-track path to professional success at our
          accelerated higher-learning institution.
          <br />
          Experience the fusion of academia and industry firsthand. Secure your
          spot on our waiting list for the Summer Semester of 2024.
        </motion.p>

        <div className="flex flex-col sm:flex-row items-center gap-4 my-8 justify-center">
          {/* Enroll Now Button with scroll animation */}
          <motion.div
            variants={scrollVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
            className="flex"
          >
            <motion.div
              whileHover={{ scale: 1.2, rotate: 2 }}
              whileTap={{ scale: 0.9 }}
              className="cursor-pointer"
              onClick={onApplyClick}
            >
              <CustomButtonComp>Enroll Now</CustomButtonComp>
            </motion.div>
          </motion.div>

          {/* Learn More Button with scroll animation */}
          <motion.div
            variants={scrollVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
            className="flex"
          >
            <motion.div
              whileHover={{ scale: 1.2, rotate: -2 }}
              whileTap={{ scale: 0.9 }}
              className="cursor-pointer"
            >
              <Link href={`/about-us/faqs`}>
                <CustomButtonComp>
                  <div className="flex items-center">
                    Learn More <CgArrowTopRight className="ml-2" />
                  </div>
                </CustomButtonComp>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Sponsored by section with scroll animation */}
        <motion.div
          variants={scrollVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          className="text-sm text-gray-200 mt-6" // Changed text color for better contrast
        >
          Sponsored by:{" "}
          <span className="font-semibold">Your Sponsors Here</span>
        </motion.div>
      </div>
    </motion.div>
  );
}
