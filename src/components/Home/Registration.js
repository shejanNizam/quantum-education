"use client";
import { motion } from "framer-motion";
import Script from "next/script";

export default function RegistrationForm() {
  // Variants for initial load animations
  const containerVariants = {
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
          viewport={{ once: true, amount: 0.8 }}
          className="text-center my-12"
        >
          <motion.h2
            variants={scrollVariants}
            className="text-6xl font-bold mb-4"
            whileHover={{ scale: 1.05 }}
          >
            Register Now
          </motion.h2>
          <motion.p
            variants={scrollVariants}
            className="p-4 md:p-0 lg:p-0 text-lg text-gray-600"
          >
            It’s never too late to start a new career
            <br />
            Countdown is finished!
            <br />
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s.
          </motion.p>
        </motion.div>

        {/* Iframe Container */}
        <motion.div
          variants={scrollVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
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
            overflow: "hidden", // Ensures rounded corners apply to iframe
          }}
          whileHover={{
            scale: 1.02,
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
              height: "800px", // Adjust height as needed
              backgroundColor: "#FAF4F1",
              borderRadius: "12px",
            }}
            loading="lazy" // Improves performance by lazy loading the iframe
            title="Registration Form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          ></motion.iframe>

          {/* Dynamically load the Cognito iframe.js script */}
          <Script
            src="https://www.cognitoforms.com/f/iframe.js"
            strategy="lazyOnload" // Loads script only when the page has loaded
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
