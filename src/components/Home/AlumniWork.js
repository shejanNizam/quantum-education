"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import image1 from "../../assets/alumni_work/alumni_work_image_1.png";
import image2 from "../../assets/alumni_work/alumni_work_image_2.png";
import image5 from "../../assets/alumni_work/alumni_work_image_5.png";

export default function AlumniWork() {
  const data = [
    { _id: 1, image: image1 },
    { _id: 2, image: image2 },
    { _id: 3, image: image5 },
    { _id: 4, image: image1 },
    { _id: 5, image: image2 },
    { _id: 6, image: image5 },
  ];

  // Animation variants for the section
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Animation variants for each card
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Animation variants for hover effects
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
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      whileHover={{ scale: 1.1 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Section Heading with Scroll Animation */}
      <motion.h2
        className="text-6xl text-center mb-12 font-bold"
        variants={sectionVariants}
      >
        Where Our Alumni Work
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
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
      >
        {data.map(({ _id, image }, index) => (
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
                  <CardContent className="bg-white rounded flex items-center justify-center text-center p-4">
                    <div className="w-full h-full relative">
                      <Image
                        src={image}
                        alt={`Alumni work ${index + 1}`}
                        layout="responsive"
                        width={350}
                        height={250}
                        className="object-cover rounded-md"
                        priority={false}
                      />
                    </div>
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
