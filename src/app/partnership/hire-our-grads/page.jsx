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
          objectFit="cover"
          priority={true}
          src={BG_IMAGE} // Use Image component for Next.js image handling
          alt="Banner Image"
          className="absolute inset-0" // Position the image absolutely inside the div
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
          Connect With Top Talent
        </h3>
        <p className=" font-semibold mb-12 mx-auto md:w-[40%] ">
          Our graduates are equipped with cutting-edge skills ready to make an
          immediate impact in your organization
        </p>
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

      {/* Hire Our Grads Section */}
      {/* <div className="container mx-auto px-4 py-10">
        <h2 className="text-4xl font-semibold text-center mb-10">
          Why Hire Our Graduates
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold">Ready From Day One</h3>
              <p className="text-lg">
                Our graduates come equipped with the latest skills in tech, from
                data analytics to software engineering, ensuring they can
                contribute to your team immediately.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">Practical Experience</h3>
              <p className="text-lg">
                They have tackled real-world projects and challenges, honing
                their problem-solving and adaptability skills, making them ready
                to tackle the demands of the tech industry.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">Team Players</h3>
              <p className="text-lg">
                Educated in a collaborative environment, our alumni excel in
                teamwork and communication, seamlessly integrating into diverse
                work settings.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">Proven Track Record</h3>
              <p className="text-lg">
                Alumni have successfully transitioned to roles in leading tech
                companies, demonstrating their ability to make an immediate and
                lasting impact.
              </p>
            </div>

            <div className="flex justify-center">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
                Hire Our Grads
              </button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div
              className="h-32 bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: "url('https://via.placeholder.com/150')",
              }}
            ></div>
            <div
              className="h-32 bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: "url('https://via.placeholder.com/150')",
              }}
            ></div>
            <div
              className="h-32 bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: "url('https://via.placeholder.com/150')",
              }}
            ></div>
            <div
              className="h-32 bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: "url('https://via.placeholder.com/150')",
              }}
            ></div>
            <div
              className="h-32 bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: "url('https://via.placeholder.com/150')",
              }}
            ></div>
            <div
              className="h-32 bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: "url('https://via.placeholder.com/150')",
              }}
            ></div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
