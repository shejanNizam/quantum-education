import Image from "next/image";
import { CgArrowTopRight } from "react-icons/cg";
import BANNER_ING from "../../assets/banner_img/image_2.webp";

export default function Banner() {
  return (
    <>
      <div className="container flex flex-col-reverse lg:flex-row lg:items-center">
        <div className="flex-1">
          <h1 className="text-8xl text-primary font-bold mt-8 mb-20">
            Welcome To Quantum
          </h1>
          <p className="font-semibold text-xl mb-12">
            Discover an affordable, fast-track path to professional success at
            our accelerated higher-learning institution.
          </p>
          <p className="font-semibold text-xl">
            Experience the fusion of academia and industry firsthand. Secure
            your spot on our waiting list for the Summer Semester of {"2024"}.
          </p>
          <div className="flex items-center gap-4 my-8">
            <button className="customButton">Apply Today</button>
            <button className="customButton flex items-center">
              Learn More <CgArrowTopRight />{" "}
            </button>
          </div>
        </div>

        <div className="flex-1 lg:relative mt-8  ">
          <Image
            src={BANNER_ING}
            alt="banner_img"
            className="w-full h-full lg:h-[700px] object-cover"
            sizes="100vw"
          />
        </div>
      </div>
    </>
  );
}
