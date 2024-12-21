import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import LOGO from "../../../assets/logo.png";

export default function FaqsPage() {
  return (
    <>
      <div className="min-h-screen bg-white rounded-xl w-[90%] p-4 m-8 lg:w-[70%] lg:p-40 mx-auto ">
        <div className="flex flex-col md:flex-row justify-start items-center space-y-4 md:space-y-0 md:space-x-4">
          <Image
            src={LOGO}
            alt="logo"
            className="w-32 h-32 md:w-32 md:h-32 lg:w-40 lg:h-40"
          />
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-center md:text-left">
            Frequently Asked Questions
          </h1>
        </div>

        <div className="mt-12">
          <h3 className="text-4xl font-semibold">
            About Quantum Institute of Science and Technology
          </h3>
          <p>
            Quantum is a distinguished higher learning institution dedicated to
            emerging fields, fostering collaboration between brilliant minds and
            the power of Artificial Intelligence.
          </p>
        </div>
        {/* Accordion faqs */}
        <div className=" text-center my-12 "> Accordion </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20 px-4">
          <div>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Feel free to contact us for any questions and doubts
            </h3>
            <p className="text-base md:text-lg">
              We’re here to connect with you and provide the information you
              need to embark on your educational journey with Quantum. Here’s
              how you can reach us:
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
      </div>
    </>
  );
}
