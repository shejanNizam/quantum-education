"use client";

import { motion } from "framer-motion";
import LOGO from "../assets/logo.png";
import FOOTER_IMG from "../assets/logo_bg.png";

import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaPhone, FaTwitter } from "react-icons/fa";

export default function Footer() {
  // Variants for the overall container
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  // Variants for individual sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Variant for social icons with hover effects
  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.2,
      transition: { type: "spring", stiffness: 300 },
    },
  };

  return (
    <motion.footer
      className="bg-cover bg-center relative"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Footer Background Image */}
      <motion.div
        className="flex justify-center m-8"
        variants={sectionVariants}
      >
        <Image
          objectFit="cover"
          priority={true}
          src={FOOTER_IMG}
          alt="Footer Background"
        />
      </motion.div>

      {/* Main Footer Content */}
      <motion.div className="bg-white text-black" variants={containerVariants}>
        <motion.div
          className="flex flex-col lg:flex-row justify-center items-start lg:items-center gap-y-8 lg:gap-x-64 p-6 lg:p-12"
          variants={containerVariants}
        >
          {/* Logo and Address Section */}
          <motion.div variants={sectionVariants}>
            <Link className="flex items-center justify-start " href="/">
              <Image
                objectFit="cover"
                priority={true}
                src={LOGO}
                alt="Quantum Logo"
                width={60}
                height={60}
              />
              <motion.h2
                className="customSubHeading"
                variants={sectionVariants}
              >
                Quantum
              </motion.h2>
            </Link>
            {/* Address (Click to open Google Maps) */}
            <motion.p variants={sectionVariants}>
              <a
                href="https://www.google.com/maps?q=3100+Clarendon+Blvd+%23200,+Arlington,+Virginia+22201,+United+States"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-primary hover:underline"
              >
                3100 Clarendon Blvd #200
              </a>
            </motion.p>
            <motion.p variants={sectionVariants}>
              <a
                href="https://www.google.com/maps?q=3100+Clarendon+Blvd+%23200,+Arlington,+Virginia+22201,+United+States"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-primary hover:underline"
              >
                Arlington, Virginia 22201, United States
              </a>
            </motion.p>
            {/* Updated Phone Section */}
            <motion.div
              variants={sectionVariants}
              aria-label="Contact Phone Number"
            >
              <a
                href="tel:+18018893468"
                className="flex items-center gap-2 text-lg hover:text-primary transition-colors duration-300"
              >
                <FaPhone className="text-xl" aria-hidden="true" />
                (801) 889-3468
              </a>
            </motion.div>

            <motion.div
              className="flex justify-start space-x-6 pt-4"
              variants={sectionVariants}
            >
              {/* Social Media Icons */}
              <motion.a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
                variants={iconVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, amount: 0.2 }}
              >
                <FaFacebook className="w-10 h-10" />
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
                variants={iconVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, amount: 0.2 }}
              >
                <FaTwitter className="w-10 h-10" />
              </motion.a>
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
                variants={iconVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, amount: 0.2 }}
              >
                <FaInstagram className="w-10 h-10" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Business Hours Section */}
          <motion.div variants={sectionVariants}>
            <motion.h2 className="customSubHeading" variants={sectionVariants}>
              Business Hours
            </motion.h2>
            <motion.h6
              className="font-semibold text-lg lg:text-xl text-[#9B7B74]"
              variants={sectionVariants}
            >
              Monday – Friday
            </motion.h6>
            <motion.p variants={sectionVariants}>
              8:00 am – 7:00 pm EST
            </motion.p>
            <motion.h6
              className="font-semibold text-lg lg:text-xl text-[#9B7B74] mt-4"
              variants={sectionVariants}
            >
              Weekdays
            </motion.h6>
            <motion.p variants={sectionVariants}>9:30 am – 2:00 pm</motion.p>
          </motion.div>

          {/* Sessions Section */}
          <motion.div variants={sectionVariants}>
            <motion.h2 className="customSubHeading" variants={sectionVariants}>
              Sessions
            </motion.h2>
            <motion.h6
              className="font-semibold text-lg lg:text-xl text-[#9B7B74]"
              variants={sectionVariants}
            >
              Weekdays
            </motion.h6>
            <motion.p variants={sectionVariants}>7:00 pm – 10:00 pm</motion.p>
            <motion.h6
              className="font-semibold text-lg lg:text-xl text-[#9B7B74] mt-4"
              variants={sectionVariants}
            >
              Saturday & Sunday
            </motion.h6>
            <motion.p variants={sectionVariants}>9:00 am – 2 pm EST</motion.p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Copyright Section */}
      <motion.div
        className="bg-[#35244C] text-center text-white py-4"
        variants={sectionVariants}
      >
        <motion.p variants={sectionVariants}>
          Copyright ©{new Date().getFullYear()} Quantum Institute of Science and
          Technology.
        </motion.p>
      </motion.div>
    </motion.footer>
  );
}
