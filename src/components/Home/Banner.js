"use client";

import CustomButtonComp from "@/lib/CustomButtonComp";
import { motion } from "framer-motion";
import { Russo_One } from "next/font/google";
import Link from "next/link";
import { CgArrowTopRight } from "react-icons/cg";
import BG_IMAGE from "../../assets/banner_img/bg_banner.png";
import styles from "./Banner.module.css";

import { useEffect, useState } from "react"; // added for dymanic

const russoOne = Russo_One({
  subsets: ["latin"],
  weight: "400",
});

export default function Banner({ onApplyClick }) {
  const [bannerText, setBannerText] = useState({ text1: "", text2: "" });

  useEffect(() => {
    fetch("/api/banner")
      .then((response) => response.json())
      .then((data) => {
        if (data.text1 && data.text2) {
          setBannerText(data); // Update state with fetched data
        }
      })
      .catch((error) => console.error("Failed to fetch banner text:", error));
  }, []);

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
      initial={initialVariants}
      animate="visible"
      className={styles.wrapper}
      style={{
        backgroundImage: `url(${BG_IMAGE.src})`,
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
          viewport={{ once: true, amount: 1 }}
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
        <button className="px-4 py-2 mb-4 bg-white text-primary disabled rounded-full  font-bold text-2xl shadow-2xl">
          UNITING MINDS AND AI
        </button>
        {/* Paragraph with scroll animation */}
        <motion.p
          variants={scrollVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          className="text-lg md:text-xl text-gray-200 mb-8 customHeading md:w-[50%] mx-auto " // Tailwind classes for paragraph
        >
          Discover an affordable, fast-track path to professional success at our
          accelerated higher-learning institution.
          <br />
          <br />
          Experience the fusion of academia and industry firsthand. Secure your
          spot on our waiting list for the
          {`Summer Semester of ${new Date().getFullYear()}`}.
        </motion.p>

        {/* dynamic  // added for dymanic */}

        <h1 className="text-2xl font-bold text-white">{bannerText.text1}</h1>
        <p className="text-lg text-white">{bannerText.text2}</p>
        {/* dynamic */}

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
      </div>
    </motion.div>
  );
}
