import Image from "next/image";
import { FaEnvelope, FaPlusCircle } from "react-icons/fa";

export default function WorkforceAcceleratorComp({
  heading,
  description,
  image,
}) {
  return (
    <>
      <div className="p-8 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Image Section */}
          <div className="flex justify-center">
            <Image
              src={image}
              alt={"image"}
              width={400}
              height={400}
              className="rounded-lg"
            />
          </div>

          {/* Text Section */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {heading ? heading : null}
            </h2>
            <p className="text-gray-600 leading-relaxed">{description}</p>
          </div>
        </div>

        {/* static section */}

        <div className="max-w-5xl mx-auto my-12">
          {/* Heading Section */}
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Unlock New Paths with Expert Mentorship!
          </h2>
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Reach out to us
          </h3>

          {/* List Section */}
          <ul className="space-y-4 text-gray-600">
            <li className="flex items-start gap-2">
              <FaPlusCircle className="text-purple-800 text-lg mt-1" />
              <span>
                <strong>
                  Group Consultation and Mentorship for Organizations:
                </strong>{" "}
                Reskill and upskill your associates with our top-notch program.
                Contact us for exclusive group rates.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <FaPlusCircle className="text-purple-800 text-lg mt-1" />
              <span>
                <strong>Personalized Mentorship for Individuals:</strong>{" "}
                Self-funded and seeking mentorship or consultation?
              </span>
            </li>
          </ul>

          {/* Contact Section */}
          <div className="mt-8 flex items-center gap-4">
            <FaEnvelope className="text-3xl text-purple-800" />
            <span className="text-lg font-bold text-gray-800">
              info@qust.education
            </span>
          </div>

          {/* Note Section */}
          <p className="mt-4 text-sm text-gray-500">
            <strong>Please note:</strong> This is a mentorship program, not a
            state-certified diploma or certificate. It’s designed to empower you
            on your unique journey!
          </p>
        </div>
      </div>
    </>
  );
}
