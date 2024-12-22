import Image from "next/image";
import { FaEnvelope } from "react-icons/fa";
import SCHOOL_CATALOG_IMG from "../../../assets/academics/school_catalog/school_catalog_img.webp";

import { getMetadata } from "@/lib/utils";
export async function generateMetadata() {
  return getMetadata({ title: "SchoolCatalog - Quantum Institute" });
}

export default function SchoolCatalogPage() {
  return (
    <>
      <div className="min-h-screen bg-white rounded-xl w-[90%] p-4 m-8 lg:w-[70%] lg:p-40 mx-auto ">
        <div className="bg-gray-50 p-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Image Section */}
            <div className="flex justify-center">
              <Image
                src={SCHOOL_CATALOG_IMG}
                alt="SCHOOL_CATALOG_IMG"
                width={500}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>

            {/* Text Section */}
            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-6">
                Explore Quantums Academic Catalog
              </h1>
              <p className="text-gray-600 leading-relaxed mb-4">
                We appreciate your interest in Quantum and your desire to
                explore our academic offerings. To access the most current
                academic year catalog, please reach out to us at{" "}
                <span className="font-bold text-gray-800">
                  info@qust.education
                </span>
                . Your inquiry is valuable to us, and we are dedicated to
                assisting you with the information you seek.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our catalog is a comprehensive resource that provides detailed
                insights into our programs, courses, faculty, and everything you
                need to know about your educational journey at Quantum. Whether
                you’re considering enrollment, planning your courses, or simply
                curious about what we offer, our catalog is your go-to
                reference.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We look forward to connecting with you and providing the latest
                catalog to support your academic pursuits. Your educational path
                begins here, and we’re excited to be part of your journey.
              </p>
            </div>
          </div>
        </div>

        {/*  */}
        <div className="bg-gray-50 p-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Section */}
            <div>
              <h4 className="text-3xl font-bold text-gray-800 mb-4">
                Contact us
              </h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have questions or require more information about our
                programs or potential future graduate offerings, please don’t
                hesitate to reach out to us at{" "}
                <span className="font-bold text-gray-800">
                  info@qust.education
                </span>
                . Our team is here to assist you and provide the guidance you
                need to make the best educational choices.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Quantum is dedicated to your educational success and growth. We
                appreciate your interest in our institution and look forward to
                supporting you on your educational journey, whether through our
                existing programs or future possibilities.
              </p>
            </div>

            {/* Right Section */}
            <div className="flex flex-col items-center justify-center text-center">
              <FaEnvelope className="text-6xl text-primary mb-4" />
              <p className="text-2xl font-bold text-gray-800">
                info@qust.education
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
