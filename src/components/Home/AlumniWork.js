"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

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

  return (
    <section className="container py-16">
      <h2 className="text-4xl sm:text-5xl md:text-6xl text-center mb-12 font-bold">
        Where Our Alumni Work
      </h2>

      <Swiper
        // pagination={{ type: "bullets", clickable: true }}
        // navigation={true}
        autoplay={true}
        loop={true}
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
            <Card className="w-full sm:w-[250px] md:w-[300px] lg:w-[350px] mx-auto p-4">
              <CardContent className="bg-white rounded flex items-center justify-center text-center p-4">
                <div className="w-full h-full relative">
                  <Image
                    src={image}
                    alt={`Alumni work ${index + 1}`}
                    layout="responsive"
                    width={index % 2 === 0 ? 350 : 300}
                    height={index % 2 === 0 ? 250 : 200}
                    className="object-cover rounded-md"
                  />
                </div>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
