import Image from "next/image";
import { FaEnvelope } from "react-icons/fa";

export default function AcademicGraUndCalComp({
  subHeading,
  heading,
  description,
  sections,
}) {
  return (
    <>
      <div>
        <div className="max-w-4xl mx-auto mb-8">
          <h6 className="text-xl font-semibold text-gray-600 uppercase mb-2">
            {subHeading}
          </h6>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{heading}</h1>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
        <div className="max-w-7xl mx-auto space-y-16">
          {sections.map((section, index) => (
            <div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            >
              {/* Image */}
              <div
                className={`flex justify-center ${
                  index % 2 === 0 ? "lg:order-first" : "lg:order-last"
                }`}
              >
                <Image
                  src={section.imageSrc}
                  alt={section.imageAlt}
                  width={500}
                  height={300}
                  className="rounded-lg object-cover"
                />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {section.heading}
                </h3>
                <p className="text-gray-600">{section.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* contact us start */}
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
              <FaEnvelope className="text-6xl text-purple-800 mb-4" />
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
