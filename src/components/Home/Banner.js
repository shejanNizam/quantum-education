import CustomButtonComp from "@/lib/CustomButtonComp";
import { motion } from "framer-motion";
import Link from "next/link";
import { CgArrowTopRight } from "react-icons/cg";

export default function Banner({ onApplyClick }) {
  // Variants for text animations
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
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
      className="relative w-full h-auto py-24 bg-white text-center"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          variants={textVariants}
          className="text-4xl md:text-5xl font-bold text-primary leading-tight mb-4"
        >
          Kickstart Your Career with Expert Guidance
        </motion.h1>
        <motion.p
          variants={textVariants}
          className="text-lg md:text-xl text-gray-600 mb-8"
        >
          Discover an affordable, fast-track path to professional success at our
          accelerated higher-learning institution.
          <br />
          Experience the fusion of academia and industry firsthand. Secure your
          spot on our waiting list for the Summer Semester of 2024.
        </motion.p>

        <div className="flex flex-col sm:flex-row items-center gap-4 my-8 justify-center ">
          {/* Enroll Now Button */}
          <motion.div
            whileHover={{ scale: 1.2, rotate: 2 }}
            whileTap={{ scale: 0.9 }}
          >
            <div onClick={onApplyClick}>
              <CustomButtonComp>Enroll Now</CustomButtonComp>
            </div>
          </motion.div>

          {/* Learn More Button */}
          <motion.div
            whileHover={{ scale: 1.2, rotate: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link href={`/about-us/faqs`}>
              <CustomButtonComp>
                <div className="flex items-center">
                  Learn More <CgArrowTopRight className="ml-2" />
                </div>
              </CustomButtonComp>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          className="text-sm text-gray-500 mt-6"
        >
          Sponsored by:{" "}
          <span className="font-semibold">Your Sponsors Here</span>
        </motion.div>
      </div>
    </motion.div>
  );
}
