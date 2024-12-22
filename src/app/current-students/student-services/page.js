import {
  FaBook,
  FaBriefcase,
  FaDollarSign,
  FaEnvelope,
  FaRegClipboard,
  FaTools,
  FaUsers,
} from "react-icons/fa";

import { getMetadata } from "@/lib/utils";
export async function generateMetadata() {
  return getMetadata({ title: "StudentServices - Quantum Institute" });
}

const helpItems = [
  {
    title: "Academic Guidance",
    description:
      "Have questions about your courses, assignments, or academic progress? Our team can provide guidance and connect you with the right resources to excel in your studies.",
    icon: FaBook,
  },
  {
    title: "Enrollment Assistance",
    description:
      "Need help with the enrollment process? We’re here to walk you through it, step by step.",
    icon: FaRegClipboard,
  },
  {
    title: "Technical Support",
    description:
      "Encountering technical issues with our platforms or tools? Reach out to us, and we’ll help you troubleshoot and get back on track.",
    icon: FaTools,
  },
  {
    title: "Financial Aid",
    description:
      "If you have questions about scholarships, payment plans, or financial assistance options, we can provide information and guidance.",
    icon: FaDollarSign,
  },
  {
    title: "Career Services",
    description:
      "Looking to kickstart your career or explore job opportunities? Our team can provide insights and resources to help you achieve your professional goals.",
    icon: FaBriefcase,
  },
  {
    title: "Student Community",
    description:
      "Connect with fellow students, join clubs, and participate in extracurricular activities to make the most of your student life.",
    icon: FaUsers,
  },
];

export default function StudentServicesPage() {
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
            How We Can Help
          </h2>

          {/* Help Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {helpItems.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-white shadow-md rounded-lg border border-gray-200"
              >
                {/* Icon */}
                <div className="text-4xl text-primary mb-4">
                  <item.icon />
                </div>
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {item.title}
                </h3>
                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* contact */}
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

        {/*  */}
        <p>
          At Quantum, your success is our success. Let’s make your educational
          journey a memorable and fulfilling one together! 🚀📚
        </p>
      </div>
    </>
  );
}
