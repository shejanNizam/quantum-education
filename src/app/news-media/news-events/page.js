import { FaEnvelope } from "react-icons/fa";

export default function NewsEventsPage() {
  return (
    <>
      <div className="min-h-screen bg-white rounded-xl w-[90%] p-4 m-8 lg:w-[70%] lg:p-40 mx-auto ">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Main Heading Section */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Stay Informed with Quantum
            </h1>
            <p className="text-gray-600 leading-relaxed">
              While there are currently no events or news to report on our
              website, we want to keep you well-informed about everything
              happening at Quantum Institute of Science and Technology.
            </p>
          </div>

          {/* Subheading Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Access Events and News:
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Currently, there are no press release announcements to report.
              However, this page serves as your primary source for staying
              updated on all the latest news, developments, and press releases
              related to Quantum.
            </p>
          </div>
        </div>
        {/*  */}
        {/* contact */}
        <div className="bg-gray-50 p-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Section */}
            <div>
              <h4 className="text-3xl font-bold text-gray-800 mb-4">
                Questions or Concerns:
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
