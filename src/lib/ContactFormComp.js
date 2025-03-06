import Script from "next/script";

import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function ContactFormComp() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20 px-4">
        <div>
          <h3 className="customSubHeading mb-4">
            Feel free to contact us for any questions and doubts
          </h3>
          <p className="text-base my-4 md:text-lg">
            We’re here to connect with you and provide the information you need
            to embark on your educational journey with Quantum. Here’s how you
            can reach us:
          </p>
          <div className="flex justify-start gap-8 space-x-8 pt-6">
            <Link
              href="https://www.linkedin.com/company/quantumuniversity/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="w-16 h-16 hover:text-primary" />
            </Link>
            <Link
              href="https://www.instagram.com/quantum.uni/#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="w-16 h-16 hover:text-primary" />
            </Link>
            <Link
              href="https://www.facebook.com/quantum.uni"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="w-16 h-16 hover:text-primary" />
            </Link>
          </div>
        </div>

        {/* Form Section */}
        <div className="flex justify-center">
          <div className="bg-white p-6 rounded-lg border border-gray-300 shadow-lg w-full max-w-md md:max-w-lg lg:max-w-2xl">
            <iframe
              src="https://www.cognitoforms.com/f/R16GRqSqDUauWo4ldCNybw/2"
              className="w-full h-[500px] md:h-[600px] rounded-lg"
              style={{
                border: "0",
              }}
            ></iframe>
            <Script
              src="https://www.cognitoforms.com/f/seamless.js"
              data-form="2"
              strategy="lazyOnload"
            />
          </div>
        </div>
      </div>
    </>
  );
}
