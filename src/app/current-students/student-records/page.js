import {
  FaCheckCircle,
  FaEdit,
  FaEnvelope,
  FaFileAlt,
  FaUnlock,
} from "react-icons/fa";

import { getMetadata } from "@/lib/utils";
import ContactUsComp from "@/lib/ContactUsComp";
export async function generateMetadata() {
  return getMetadata({ title: "StudentRecords - Quantum Institute" });
}

const services = [
  {
    number: 1,
    title: "Transcripts",
    description:
      "Need an official copy of your academic transcript? We can help you obtain and send transcripts for various purposes, including job applications, further education, or personal records.",
    icon: <FaFileAlt />,
  },
  {
    number: 2,
    title: "Record Updates",
    description:
      "Have changes to your personal information, contact details, or academic records? Let us know, and we’ll ensure your records are up to date.",
    icon: <FaEdit />,
  },
  {
    number: 3,
    title: "Verification Request",
    description:
      "If an organization or institution needs to verify your student status or academic achievements, we can provide official verification letters or documents.",
    icon: <FaCheckCircle />,
  },
  {
    number: 4,
    title: "Record Access",
    description:
      "Access your academic records and grades securely through our student portal, keeping you informed about your progress throughout your studies.",
    icon: <FaUnlock />,
  },
];

export default function StudentRecordsPage() {
  return (
    <>
      <div className="min-h-screen bg-white rounded-xl w-[90%] p-4 m-8 lg:w-[70%] lg:p-40 mx-auto ">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Heading */}
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
            Welcome to Quantums Student Services Hub!
          </h1>

          {/* Paragraph */}
          <p className="text-gray-600 leading-relaxed">
            At Quantum, our students are our top priority. We’re here to provide
            you with a range of essential services to enhance your educational
            experience. Whether you have questions, need support, or are looking
            for resources, our dedicated Student Services team is here to assist
            you.
          </p>
        </div>
        {/*  */}
        <div className="max-w-7xl mx-auto my-12">
          {/* Heading */}
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Services We Offer
          </h2>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-white shadow-md rounded-lg border border-gray-200"
              >
                {/* Number & Icon */}
                <div className="flex items-center gap-2 text-primary text-3xl font-bold">
                  <span>{service.number}.</span>
                  {service.icon}
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* contact */}
        <ContactUsComp heading={"Contact Us"} />

        {/*  */}
        <p>
          At Quantum, we value your academic journey, and we’re committed to
          helping you access and manage your student records with ease. Your
          success matters to us! 📜🎓
        </p>
      </div>
    </>
  );
}
