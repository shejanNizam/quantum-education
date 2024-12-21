import Script from "next/script";

import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function ContactForm() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20 px-4">
        <div>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Feel free to contact us for any questions and doubts
          </h3>
          <p className="text-base md:text-lg">
            We’re here to connect with you and provide the information you need
            to embark on your educational journey with Quantum. Here’s how you
            can reach us:
          </p>
          <div className="flex justify-start md:justify-start space-x-8 pt-6">
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 hover:text-primary" />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 hover:text-primary" />
            </Link>
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 hover:text-primary" />
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
