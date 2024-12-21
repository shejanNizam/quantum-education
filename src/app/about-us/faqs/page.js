import ContactForm from "@/lib/ContactForm";
import Image from "next/image";
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

        <ContactForm />
      </div>
    </>
  );
}
