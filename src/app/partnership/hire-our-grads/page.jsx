"use client";
import CustomButtonComp from "@/lib/CustomButtonComp";
import { motion } from "framer-motion";
import Image from "next/image"; // Import Image from next/image for optimized loading
import Script from "next/script";
import { useRef } from "react";
import BG_IMAGE from "../../../assets/banner_img/bg_banner.png"; // Import your image

export default function PartnershipPage() {
  const registrationRef = useRef(null);

  const handleScrollToRegistration = () => {
    registrationRef.current?.scrollIntoView({ behavior: "smooth" });
  };

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
    <div className="container">
      {/* banner */}
      <div className="relative h-96">
        <Image
          priority={true}
          src={BG_IMAGE}
          alt="Banner Image"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />

        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white p-6 rounded-lg">
          <h1 className="text-3xl md:text-4xl text-center font-bold mb-4">
            Connect With Top Talent
          </h1>
          <p className="text-lg mb-6 md:w-[40%] text-center ">
            Our graduates are equipped with cutting-edge skills ready to make an
            immediate impact in your organization.
          </p>
          <div onClick={handleScrollToRegistration}>
            <CustomButtonComp>Hire Our Grads</CustomButtonComp>
          </div>
        </div>
      </div>

      {/*  forms starts  */}
      <div ref={registrationRef} className="text-center">
        <h3 className="font-bold text-4xl w-full mx-auto my-12">
          Hire our Grads
        </h3>

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
            // overflow: "hidden", // Ensures rounded corners apply to iframe
          }}
          whileHover={{
            scale: 1.01,
            boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
          }}
        >
          {/* Embed Cognito Forms iframe */}
          <motion.iframe
            src="https://www.cognitoforms.com/f/R16GRqSqDUauWo4ldCNybw/3"
            allow="payment"
            height="582"
            style={{
              border: "0",
              width: "100%",
              // height: "900px",
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
            // src="https://www.cognitoforms.com/f/iframe.js"
            strategy="lazyOnload" // Loads script only when the page has loaded
          />
        </motion.div>
      </div>
      {/*  forms ends */}
    </div>
  );
}
