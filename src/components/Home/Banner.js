import Image from "next/image";
import BANNER_ING from "../../assets/banner_img1.webp";

export default function Banner() {
  return (
    <>
      <div className="container flex flex-col-reverse md:flex-row lg:flex-row p-4 space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex-1">
          <h1 className="text-8xl text-primary font-bold mt-8 mb-20">
            Welcome To Quantum
          </h1>
          <p className="mb-12">
            Discover an affordable, fast-track path to professional success at
            our accelerated higher-learning institution.
          </p>
          <p>
            Experience the fusion of academia and industry firsthand. Secure
            your spot on our waiting list for the Summer Semester of 2024.
          </p>
          <div className="flex items-center gap-4 my-8">
            <button className="customButton">Apply Today</button>
            <button className="customButton">Learn More -- </button>
          </div>
        </div>
        <div className="flex-1 lg:relative">
          <Image src={BANNER_ING} alt="banner_img" fill={true} />
        </div>
      </div>
    </>
  );
}
