import Image from "next/image";
import { FaEnvelope } from "react-icons/fa";
import SCHOOL_CATALOG_IMG from "../../../assets/academics/school_catalog/school_catalog_img.webp";

import { getMetadata } from "@/lib/utils";
import ContactUsComp from "@/lib/ContactUsComp";
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
              <h1 className="customSubHeading mb-6">
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

        {/* Contact */}
        <ContactUsComp heading={"Contact Us"} />
      </div>
    </>
  );
}
