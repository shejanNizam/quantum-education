"use client";

import LOGO from "../assets/logo.png";
import FOOTER_IMG from "../assets/logo_bg.png";

import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-cover bg-center relative">
      <div className="flex justify-center">
        <Image src={FOOTER_IMG} alt="FOOTER_IMG" />
      </div>

      <div className="bg-white text-black">
        <div className="flex flex-col lg:flex-row justify-center items-start lg:items-center gap-y-8 lg:gap-x-64 p-6 lg:p-12">
          {/* Logo and Address Section */}
          <div className="">
            <Link
              className="flex items-center justify-start lg:justify-start pb-4 lg:pb-1"
              href="/"
            >
              <Image src={LOGO} alt="logo" width={60} height={60} />
              <h2 className="text-2xl lg:text-3xl text-primary font-semibold gap-2">
                Quantum
              </h2>
            </Link>
            <p>3100 Clarendon Blvd #200</p>
            <p>Arlington, Virginia 22201</p>
            <p>United States, (801) 889-3468</p>

            <div className="flex justify-start lg:justify-start space-x-6 pt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                className="hover:text-primary"
              >
                <FaFacebook className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                className="hover:text-primary"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                className="hover:text-primary"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Business Hours Section */}
          <div className="">
            <h2 className="text-xl lg:text-2xl font-bold">Business Hours:</h2>
            <h6 className="font-semibold text-lg lg:text-xl text-[#9B7B74]">
              Monday – Friday
            </h6>
            <p>8:00 am – 7:00 pm EST</p>
            <h6 className="font-semibold text-lg lg:text-xl text-[#9B7B74] mt-4">
              Weekdays
            </h6>
            <p>9:30 am – 2:00 pm</p>
          </div>

          {/* Sessions Section */}
          <div className="">
            <h2 className="text-xl lg:text-2xl font-bold">Sessions:</h2>
            <h6 className="font-semibold text-lg lg:text-xl text-[#9B7B74]">
              Weekdays
            </h6>
            <p>7:00 pm – 10:00 pm</p>
            <h6 className="font-semibold text-lg lg:text-xl text-[#9B7B74] mt-4">
              Saturday & Sunday
            </h6>
            <p>9:00 am – 2 pm EST</p>
          </div>
        </div>
      </div>

      <div className="bg-[#35244C] text-center text-white py-4">
        <p>
          {" "}
          Copyright ©{"2024"} Quantum Institute of Science and Technology.{" "}
        </p>
      </div>
    </footer>
  );
}
