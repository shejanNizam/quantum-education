"use client";

import Image from "next/image";

import ContactFormComp from "@/lib/ContactFormComp";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import CONTACT_IMAGE from "../../assets/about_us/contact_img.webp";

// import { getMetadata } from "@/lib/utils";
// export async function generateMetadata() {
//   return getMetadata({ title: "Contact - Quantum Institute" });
// }

export default function ContactPage() {
  return (
    <>
      <div className="min-h-screen bg-white rounded-xl w-[90%] p-4 m-8 lg:w-[70%] lg:p-40 mx-auto ">
        <div className="customHeading"> Contact Us </div>
        <div className="flex justify-center">
          <Image
            objectFit="cover"
            priority={true}
            src={CONTACT_IMAGE}
            alt="CONTACT_IMAGE"
          />
        </div>

        <ContactFormComp />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 bg-gray-50 my-12">
          {/* Address Section */}
          <a
            href="https://www.google.com/maps/search/?api=1&query=3100+Clarendon+Blvd,+%23200+Arlington,+VA"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4"
          >
            <div className="w-16 h-16 flex items-center justify-center bg-primary/80 hover:bg-primary text-white rounded-3xl">
              <FaMapMarkerAlt className="text-2xl" />
            </div>
            <div>
              <h3 className="customSubHeading">Address</h3>
              <p className="text-sm text-gray-600">
                3100 Clarendon Blvd, #200 Arlington, VA
              </p>
            </div>
          </a>

          {/* Email Section */}
          {/* <a
            href="mailto:info@qust.education"
            className="flex items-center gap-4"
          >
            <div className="w-16 h-16 flex items-center justify-center bg-primary/80 hover:bg-primary text-white rounded-3xl">
              <FaEnvelope className="text-2xl" />
            </div>
            <div>
              <h3 className="customSubHeading">Email us</h3>
              <p className="text-sm text-gray-600">info@qust.education</p>
            </div>
          </a> */}

          <a
            href="mailto:info@qust.education"
            onClick={(e) => {
              window.location.href = "mailto:info@qust.education";
            }}
            className="flex items-center gap-4"
          >
            <div className="w-16 h-16 flex items-center justify-center bg-primary/80 hover:bg-primary text-white rounded-3xl">
              <FaEnvelope className="text-2xl" />
            </div>
            <div>
              <h3 className="customSubHeading">Email us</h3>
              <p className="text-sm text-gray-600">info@qust.education</p>
            </div>
          </a>

          {/* Phone Section */}
          <a href="tel:801-889-3468" className="flex items-center gap-4">
            <div className="w-16 h-16 flex items-center justify-center bg-primary/80 hover:bg-primary text-white rounded-3xl">
              <FaPhone className="text-2xl" />
            </div>
            <div>
              <h3 className="customSubHeading">Call us</h3>
              <p className="text-sm text-gray-600">801-889-3468</p>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
