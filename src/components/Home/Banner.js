"use client";

import CustomButtonComp from "@/lib/CustomButtonComp";
import { motion } from "framer-motion";
import { Russo_One } from "next/font/google";
import Link from "next/link";
import { CgArrowTopRight } from "react-icons/cg";
import BG_IMAGE from "../../assets/banner_img/bg-banner1.png"; // Import the background image
import styles from "./Banner.module.css"; // Import the CSS module

const russoOne = Russo_One({
  subsets: ["latin"],
  weight: "400",
});

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
      className={styles.wrapper}
      style={{
        backgroundImage: `url(${BG_IMAGE.src})`, // Apply the background image
      }}
    >
      {/* Semi-transparent overlay */}
      <div className={styles.overlay}></div>

      {/* Content Container */}
      <div className={styles.content}>
        {/* Animated SVG Heading */}
        <motion.svg
          variants={scrollVariants}
          initial="hidden"
          whileInView="visible"
          whileHover={{ scale: 1.1 }}
          viewport={{ once: true, amount: 0.8 }}
          className={`${styles.animatedSvg} ${russoOne.className}`} // Apply the font class here
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 150" // Adjust viewBox as needed
        >
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            className={`${styles.animatedText}`}
          >
            Kickstart Your Career with Experts
          </text>
        </motion.svg>

        {/* Paragraph with scroll animation */}
        <motion.p
          variants={scrollVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          className="text-lg md:text-xl text-gray-200 mb-8 customHeading" // Tailwind classes for paragraph
        >
          Discover an affordable, fast-track path to professional success at our
          accelerated higher-learning institution.
          <br />
          Experience the fusion of academia and industry firsthand. Secure your
          spot on our waiting list for the Summer Semester of 2024.
        </motion.p>

        {/* Buttons */}
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
              whileHover={{ scale: 1.05, rotate: 2 }}
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
              whileHover={{ scale: 1.05, rotate: -2 }}
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
          className="text-sm text-gray-200 mt-6" // Tailwind classes for text
        >
          Sponsored by:{" "}
          <span className="font-semibold">Your Sponsors Here</span>
        </motion.div>
      </div>
    </motion.div>
  );
}
