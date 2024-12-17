"use client";

import { Card, CardContent } from "@/components/ui/card";
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

  return (
    <section className="container py-16">
      <h2 className="text-4xl sm:text-5xl md:text-6xl text-center mb-12 font-bold">
        Authentic Student Testimonials
      </h2>

      <Swiper
        pagination={{ type: "bullets", clickable: true }}
        autoplay={true}
        loop={true}
        // navigation={true}  // Uncomment if you need navigation arrows
        modules={[Autoplay, Navigation, Pagination]}
        className="relative"
        slidesPerView={1} // Default to 1 slide per view for mobile
        spaceBetween={20}
        breakpoints={{
          640: {
            slidesPerView: 1, // 1 slide per view on small screens (mobile)
            spaceBetween: 10, // Reduced space between cards for small screens
          },
          768: {
            slidesPerView: 2, // 2 slides per view on tablets
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3, // 3 slides per view on larger screens (desktop)
            spaceBetween: 30, // Slightly more space between slides
          },
        }}
      >
        {data.map(({ _id, image, name, description }) => (
          <SwiperSlide key={_id} className="flex justify-center items-center">
            <Card className="w-full max-w-[350px] mx-auto p-4">
              <CardContent className="bg-white rounded flex flex-col items-center text-center p-2">
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
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
