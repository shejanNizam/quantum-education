import { FaEnvelope } from "react-icons/fa";

export default function ContactUsComp({ heading }) {
  return (
    <>
      <div className="bg-gray-50 p-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Section */}
          <div>
            <h4 className="customSubHeading mb-4">
              {heading}
              {/* Contact us */}
            </h4>
            <p className="text-gray-600 leading-relaxed mb-4">
              If you have questions or require more information about our
              programs or potential future graduate offerings, please don’t
              hesitate to reach out to us at{" "}
              <span className="font-bold text-gray-800">
                info@qust.education
              </span>
              . Our team is here to assist you and provide the guidance you need
              to make the best educational choices.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Quantum is dedicated to your educational success and growth. We
              appreciate your interest in our institution and look forward to
              supporting you on your educational journey, whether through our
              existing programs or future possibilities.
            </p>
          </div>

          {/* Right Section */}
          <a href="mailto:info@qust.education">
            <div className="flex flex-col items-center justify-center text-center">
              <FaEnvelope className="text-6xl text-primary mb-4" />
              <p className="text-2xl font-bold text-gray-800">
                info@qust.education
              </p>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
