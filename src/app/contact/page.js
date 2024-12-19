import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import CONTACT_IMAGE from "../../assets/about_us/contact_img.webp";

export default function ContactPage() {
  return (
    <>
      <div className="min-h-screen bg-white rounded-xl w-[90%] p-4 m-8 lg:w-[70%] lg:p-40 mx-auto ">
        <div className="flex justify-center">
          <Image src={CONTACT_IMAGE} alt="CONTACT_IMAGE" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="  text-4xl font-bold mb-4 ">
              Feel free to contact us for any questions and doubts
            </h3>
            <p>
              We’re here to connect with you and provide the information you
              need to embark on your educational journey with Quantum. Here’s
              how you can reach us:
            </p>
            <div className="flex justify-start lg:justify-start  space-x-16 pt-4">
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="w-20 h-20 hover:text-primary" />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="w-20 h-20 hover:text-primary" />
              </Link>
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="w-20 h-20 hover:text-primary" />
              </Link>
            </div>
          </div>
          <div>form</div>
        </div>
      </div>
    </>
  );
}
