import Image from "next/image";

import ContactFormComp from "@/lib/ContactFormComp";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import CONTACT_IMAGE from "../../assets/about_us/contact_img.webp";

import { getMetadata } from "@/lib/utils";
export async function generateMetadata() {
  return getMetadata({ title: "Contact - Quantum Institute" });
}

export default function ContactPage() {
  return (
    <>
      <div className="min-h-screen bg-white rounded-xl w-[90%] p-4 m-8 lg:w-[70%] lg:p-40 mx-auto ">
        <div className="customHeading"> Contact Us </div>
        <div className="flex justify-center">
          <Image src={CONTACT_IMAGE} alt="CONTACT_IMAGE" />
        </div>

        <ContactFormComp />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 bg-gray-50 my-12">
          {/* Address Section */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 flex items-center justify-center bg-primary/80 hover:bg-primary text-white rounded-3xl">
              <FaMapMarkerAlt className="text-2xl" />
            </div>
            <div>
              <h3 className="customSubHeading">Address</h3>
              <p className="text-sm text-gray-600">
                3100 Clarendon Blvd, #200 Arlington, VA
              </p>
            </div>
          </div>

          {/* Email Section */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 flex items-center justify-center bg-primary/80 hover:bg-primary text-white rounded-3xl">
              <FaEnvelope className="text-2xl" />
            </div>
            <div>
              <h3 className="customSubHeading">Email us</h3>
              <p className="text-sm text-gray-600">info@qust.education</p>
            </div>
          </div>

          {/* Phone Section */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 flex items-center justify-center bg-primary/80 hover:bg-primary text-white rounded-3xl">
              <FaPhone className="text-2xl" />
            </div>
            <div>
              <h3 className="customSubHeading">Call us</h3>
              <p className="text-sm text-gray-600">801-889-3468</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
