import { FaEnvelope } from "react-icons/fa";

import { getMetadata } from "@/lib/utils";
import ContactUsComp from "@/lib/ContactUsComp";
export async function generateMetadata() {
  return getMetadata({ title: "CancellationRefundPolicy - Quantum Institute" });
}

export default function CancellationRefundPolicyPage() {
  return (
    <>
      <div className="min-h-screen bg-white rounded-xl w-[90%] p-4 m-8 lg:w-[70%] lg:p-40 mx-auto ">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left Section */}
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-6">
              Cancellation and Refund Policy
            </h1>
            <p className="text-gray-600 leading-relaxed">
              At Quantum, your satisfaction is our utmost priority, and we are
              committed to providing you with a seamless educational journey.
              Our straightforward agreement includes a comprehensive refund
              policy designed to ensure your peace of mind.
            </p>
          </div>

          {/* Right Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Full Refund Policy
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We offer a full refund policy to address any unforeseen
              circumstances or changes in your educational plans.
            </p>
          </div>
        </div>
        {/* contact */}
        <ContactUsComp heading={"Contact Us"} />
      </div>
    </>
  );
}
