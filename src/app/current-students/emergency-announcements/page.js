import { FaEnvelope, FaPhone } from "react-icons/fa";

import { getMetadata } from "@/lib/utils";
export async function generateMetadata() {
  return getMetadata({ title: "EmergencyAnnouncements - Quantum Institute" });
}

export default function EmergencyAnnouncementsPage() {
  return (
    <>
      <div className="min-h-screen bg-white rounded-xl w-[90%] p-4 m-8 lg:w-[70%] lg:p-40 mx-auto ">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* First Section */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Welcome to Quantums Emergency Announcements Page
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              Currently, there are no emergency announcements to report. Your
              safety and well-being are important to us, and we want to ensure
              you’re informed and prepared for any unexpected events.
            </p>
          </div>

          {/* Second Section */}
          <div>
            <h6 className="text-xl font-semibold text-gray-800 mb-4">
              Emergency Updates Directly to Your Portal
            </h6>
            <p className="text-gray-600 text-lg leading-relaxed">
              In the event of an emergency, rest assured that you will receive
              important updates and instructions directly through your student
              portal. This ensures that you have immediate access to critical
              information.
            </p>
          </div>
        </div>
        {/*  */}
        <div className="bg-gray-50 p-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Section */}
            <div>
              <h4 className="text-3xl font-bold text-gray-800 mb-4">
                Urgent Inquiries
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
              <FaPhone className="text-6xl text-primary mb-4" />
              <p className="text-2xl font-bold text-gray-800">
                +1 (555) 123-4567
              </p>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Stay Informed
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            We encourage you to periodically check this Emergency Announcements
            page for updates, even when there are no current emergencies. Being
            informed and prepared is crucial for your safety and well-being.
          </p>
        </div>
        <p className="my-8">
          At Quantum, your safety is a top priority, and we’re here to support
          you in any situation. Thank you for being proactive in your approach
          to safety and for choosing Quantum as your educational partner.
        </p>
      </div>
    </>
  );
}
