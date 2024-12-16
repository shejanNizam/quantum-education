"use client";

import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-cover bg-center relative bg-[#FAF4F1]">
      <div className="container grid grid-cols-3 gap-4 ">
        <div>
          <h2 className=" text-2xl font-bold "> Visit Us: </h2>
          <p>3100 Clarendon Blvd #200</p>
          <p>Arlington, Virginia 22201</p>
          <p>United States</p>
          <p>(801) 889-3468</p>
          <div className="flex justify-start space-x-6 pt-2">
            <a
              href="https://facebook.com"
              target="_blank"
              className=":text-gray-400"
            >
              <FaFacebook className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              className=":text-gray-400"
            >
              <FaTwitter className="w-6 h-6" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              className=" hover:text-gray-400"
            >
              <FaInstagram className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div>
          <h2 className=" text-2xl font-bold ">Business Hours:</h2>
          <h6 className="font-semibold text-xl text-[#9B7B74]">
            Monday – Friday
          </h6>
          <p>8:00 am – 7:00 pm EST</p>
          <h6 className="font-semibold text-xl text-[#9B7B74] mt-4">
            Weekdays
          </h6>
          <p>9:30 am – 2:00 pm</p>
        </div>
        <div>
          <h2 className=" text-2xl font-bold ">Sessions:</h2>
          <h6 className="font-semibold text-xl text-[#9B7B74]">Weekdays</h6>
          <p>7:00 pm – 10:00 pm</p>
          <h6 className="font-semibold text-xl text-[#9B7B74] mt-4">
            Saturday & Sunday
          </h6>
          <p>9:00 am – 2 pm EST</p>
        </div>
      </div>
      <div className="bg-[#35244C] text-center text-white mt-12 py-16">
        <p>
          {" "}
          Copyright ©{"2024"} Quantum Institute of Science and Technology.{" "}
        </p>
      </div>
    </footer>
  );
}
