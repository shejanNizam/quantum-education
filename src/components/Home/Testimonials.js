"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import React from "react";
import image1 from "../../assets/testimonial/testimonial_image_1.png";
import image2 from "../../assets/testimonial/testimonial_image_2.png";
import image3 from "../../assets/testimonial/testimonial_image_3.png";
import image4 from "../../assets/testimonial/testimonial_image_4.png";

export default function Testimonials() {
  const studentData = [
    {
      image: image1,
      name: "Kavin Vides",
      description:
        "What I really liked about Quantum is that they go straight to what you need to know about the job. Is not like your traditional college where you have to take coursers that'll not help you with your career. And the money you pay for this education is extremely different. Abhishek and Said will make sure that you'll be ready for the job. Training you one on one, preparing you for interviews and to perform the job efficiently. If you're interested I highly recommend it. I come from a construction background so you don't need a coding experience to this take this course.",
    },
    {
      image: image2,
      name: "Long Nguyen",
      description:
        "I was recommended to join Quantum Institute of Science and Technology by a friend and did not know what to expect when I signed up. But so far, it has been the best career decisions I have ever made. I came here with no background or any knowledge about IT industry and with only one desire to change for the better. And Bright Path makes it possible. You will be surprised by how much you will learn in just a few months following this program...",
    },
    {
      image: image3,
      name: "Erick Estrada",
      description:
        "I would without a doubt recommend Quantum Institute of Science and Technology to anyone looking for a career change or wanting to try something different. My background is construction, and I heard about BPT through a well-known family friend. Bright Path is much more different than your traditional college, in the sense that a college will make you pay such high tuition fees for only a small fraction of what someone needs to know going into IT. I have been in the course for a couple months and I can easily say that I've learned so much in the little time I've been here.",
    },
    {
      image: image4,
      name: "Puneet Goel",
      description:
        "I highly recommend Quantum Institute of Science and Technology to anyone who is interested in changing their career to Information Technology or those who are interested in taking a different path within IT sector. BPT's instructor is full of knowledge and experience. His teaching style is way easier to understand and you get to learn based on actual projects. On top of that, you get to practice with development tools, techniques and business strategies. If you are looking into any coding boot camps, do NOT pay the high cost of $10,000 plus dollars elsewhere. Join BPT to take advantage of the affordable cost and best coding instructor in the DMV area. ...",
    },
  ];

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const hoverVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  // State to handle text visibility
  const [expandedIndex, setExpandedIndex] = React.useState(null);

  const handleCardClick = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index); // Toggle visibility
  };

  return (
    <motion.section
      className="container py-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Section Heading with Scroll Animation */}
      <motion.h2
        className="customHeading text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Authentic Student Testimonials
      </motion.h2>

      {/* Swiper Carousel */}
      <Swiper
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        modules={[Autoplay, Navigation, Pagination]}
        className="relative"
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 10 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
      >
        {studentData.map(({ image, name, description }, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            {/* Motion Wrapper for Each Card */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover="hover"
              className="w-full max-w-[350px] mx-auto p-4"
            >
              <motion.div
                className="cursor-pointer"
                variants={hoverVariants}
                whileHover="hover"
                onClick={() => handleCardClick(index)} // Toggle text visibility on click
              >
                <Card className="w-full h-full">
                  <CardContent className="bg-white rounded-2xl flex flex-col items-center text-center px-2">
                    <Image
                      objectFit="cover"
                      priority={true}
                      className="rounded-full my-6"
                      width={80}
                      height={80}
                      src={image}
                      alt={`${name} testimonial`}
                      quality={100}
                    />
                    <p className="font-semibold text-gray-800">{name}</p>
                    <p
                      className={`text-gray-600 mt-4 px-4 transition-all duration-300 ${
                        expandedIndex === index ? "max-h-none" : "max-h-[120px]"
                      }`}
                      style={{
                        overflow:
                          expandedIndex === index ? "visible" : "hidden",
                      }}
                    >
                      {description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.section>
  );
}
