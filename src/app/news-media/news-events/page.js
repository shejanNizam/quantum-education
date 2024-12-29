import { FaEnvelope } from "react-icons/fa";

import { getMetadata } from "@/lib/utils";
import ContactUsComp from "@/lib/ContactUsComp";
export async function generateMetadata() {
  return getMetadata({ title: "NewsEvents - Quantum Institute" });
}

export default function NewsEventsPage() {
  return (
    <>
      <div className="min-h-screen bg-white rounded-xl w-[90%] p-4 m-8 lg:w-[70%] lg:p-40 mx-auto ">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Main Heading Section */}
          <div>
            <h1 className="customHeading mb-4">Stay Informed with Quantum</h1>
            <p className="text-gray-600 leading-relaxed">
              While there are currently no events or news to report on our
              website, we want to keep you well-informed about everything
              happening at Quantum Institute of Science and Technology.
            </p>
          </div>

          {/* Subheading Section */}
          <div>
            <h2 className="customSubHeading mb-4">Access Events and News:</h2>
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
        <ContactUsComp heading={"Questions or Concerns"} />
      </div>
    </>
  );
}
