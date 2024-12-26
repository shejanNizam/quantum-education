"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import image1 from "../../assets/testimonial/testimonial_image_1.png";
import image2 from "../../assets/testimonial/testimonial_image_2.png";
import image3 from "../../assets/testimonial/testimonial_image_3.png";
import image4 from "../../assets/testimonial/testimonial_image_4.png";

export default function Testimonials() {
  const data = [
    {
      _id: 1,
      image: image1,
      name: "STUDENT NAME",
      description:
        "I would without a doubt recommend Quantum Institute of Science and Technology to anyone looking for a career change or wanting to try something different. My background is construction, and I heard about BPT through a well-known family friend. Bright Path is much more different than your traditional college, in the sense that a college will make you pay such high tuition fees for only a small fraction of what someone needs to know going into IT. I have been in the course for a couple months and I can easily say that I've learned so much in the little time I've been here.",
    },
    {
      _id: 2,
      image: image2,
      name: "STUDENT NAME",
      description:
        "I would without a doubt recommend Quantum Institute of Science and Technology to anyone looking for a career change or wanting to try something different. My background is construction, and I heard about BPT through a well-known family friend. Bright Path is much more different than your traditional college, in the sense that a college will make you pay such high tuition fees for only a small fraction of what someone needs to know going into IT. I have been in the course for a couple months and I can easily say that I've learned so much in the little time I've been here.",
    },
    {
      _id: 3,
      image: image3,
      name: "STUDENT NAME",
      description:
        "I would without a doubt recommend Quantum Institute of Science and Technology to anyone looking for a career change or wanting to try something different. My background is construction, and I heard about BPT through a well-known family friend. Bright Path is much more different than your traditional college, in the sense that a college will make you pay such high tuition fees for only a small fraction of what someone needs to know going into IT. I have been in the course for a couple months and I can easily say that I've learned so much in the little time I've been here.",
    },
    {
      _id: 4,
      image: image4,
      name: "STUDENT NAME",
      description:
        "I would without a doubt recommend Quantum Institute of Science and Technology to anyone looking for a career change or wanting to try something different. My background is construction, and I heard about BPT through a well-known family friend. Bright Path is much more different than your traditional college, in the sense that a college will make you pay such high tuition fees for only a small fraction of what someone needs to know going into IT. I have been in the course for a couple months and I can easily say that I've learned so much in the little time I've been here.",
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
        className="text-5xl md:text-6xl lg:text-6xl text-center mb-12 font-bold"
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
        navigation={true}
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
        {data.map(({ _id, image, name, description }) => (
          <SwiperSlide key={_id} className="flex justify-center items-center">
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
              >
                <Card className="w-full">
                  <CardContent className="bg-white rounded flex flex-col items-center text-center p-4">
                    <Image
                      className="rounded-full mb-6"
                      width={100}
                      height={100}
                      src={image}
                      alt={`${name} testimonial`}
                      quality={100}
                    />
                    <p className="font-semibold text-gray-800">{name}</p>
                    <p className="text-gray-600 mt-4 px-4">{description}</p>
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
