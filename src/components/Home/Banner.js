import CustomButtonComp from "@/lib/CustomButtonComp";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CgArrowTopRight } from "react-icons/cg";
import BANNER_ING from "../../assets/banner_img/image_2.webp";

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

  // Variants for image animations
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/path-to-your-background-image.jpg')" }}
    >
      {/* Fancy Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-70"></div>
      <div className="absolute inset-0 bg-black bg-opacity-40 mix-blend-multiply"></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-center items-center gap-12 h-full">
        {/* Text Section */}
        <motion.div
          variants={textVariants}
          className="text-center md:text-left"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary font-extrabold mt-8 mb-10 tracking-wide">
            Elevate Your Career to New Heights
          </h1>
          <p className="font-semibold text-base sm:text-lg md:text-xl mb-6 leading-relaxed text-gray-200">
            Discover an affordable, fast-track path to professional success at
            our accelerated higher-learning institution.
          </p>
          <p className="font-semibold text-base sm:text-lg md:text-xl leading-relaxed text-gray-200">
            Experience the fusion of academia and industry firsthand. Secure
            your spot on our waiting list for the{" "}
            {`Summer Semester of ${new Date().getFullYear()}`}.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 my-8 justify-center md:justify-start">
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
        </motion.div>

        {/* Image Section */}
        <motion.div
          variants={imageVariants}
          className="relative flex justify-center items-center rounded-xl overflow-hidden shadow-2xl"
        >
          <Image
            src={BANNER_ING}
            alt="banner_img"
            className="w-full h-60 sm:h-80 md:h-full lg:h-[700px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-50"></div>
        </motion.div>
      </div>
    </motion.div>
  );
}
