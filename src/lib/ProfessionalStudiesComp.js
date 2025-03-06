"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaBriefcase,
  FaCertificate,
  FaDollarSign,
  FaEnvelope,
  FaHandPaper,
  FaHourglassHalf,
  FaPhone,
} from "react-icons/fa";

const professionalStudyBenefits = [
  {
    id: 1,
    icon: <FaBriefcase className="text-3xl text-purple-800" />,
    heading: "Career Opportunities",
    description:
      "Upon successful completion of our program, a plethora of exciting career opportunities awaits you. You will qualify for diverse positions, including software engineer, cyber security and intelligence engineer, QA engineer, automation engineer, tester, developer, cloud engineer, devOPS and much more!",
  },
  {
    id: 2,
    icon: <FaDollarSign className="text-3xl text-purple-800" />,
    heading: "Earning Potential",
    description:
      "The earning potential for our esteemed graduates is promising. Many individuals begin with a competitive starting salary of $85,000, while others surpass the $150,000 mark, with an average starting salary of $95,680.",
  },
  {
    id: 3,
    icon: <FaHourglassHalf className="text-3xl text-purple-800" />,
    heading: "Duration",
    description:
      "Our program is thoughtfully designed to be completed within a span of 8 to 12 weeks, ensuring a comprehensive yet efficient learning experience for our students.",
  },
  {
    id: 4,
    icon: <FaCertificate className="text-3xl text-purple-800" />,
    heading: "Certification",
    description:
      "Our institution takes pride in being an esteemed higher learning establishment, recognized as a premier trade/vocational school. Our certification holds exceptional value, backed by recognition, approval, and endorsement from the eminent higher education governing body, the State Council of Higher Education for Virginia.",
  },
];

export default function ProfessionalStudiesComp({
  heading,
  description,
  image,
}) {
  return (
    <div>
      <h1 className="customHeading mb-8">{heading}</h1>
      <p className="mb-8">{description}</p>
      <Image
        className="w-full h-[60vh] object-cover"
        priority={true}
        src={image}
        alt="image"
      />

<<<<<<< HEAD
      {/* Professional Study Benefits Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 p-4 sm:p-8">
        {professionalStudyBenefits.map((benefit) => (
          <div
            key={benefit.id}
            className="flex items-start gap-4 p-4 bg-white shadow-lg rounded-lg"
          >
            <div className="flex-shrink-0">{benefit.icon}</div>
            <div>
              <h3 className="text-xl font-bold text-purple-800">
                {benefit.heading}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
=======
        <>
          <div className="bg-gray-50 p-8">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              {/* Left Section */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Tuition
                </h2>
                <p className="text-gray-600">
                  At Quantum, we are dedicated to providing accessible and
                  comprehensive education for all. Achieve your dreams with our
                  tailored scholarships and flexible payment plans. Your success
                  is our priority, empowering you on your educational journey.
                  Inquire about scholarships and tuition plans now!
                </p>
              </div>

              {/* Center Section */}
              <div className="space-y-4">
                <a href="tel:8018893468" className="flex items-center gap-4">
                  <FaPhone className="text-3xl text-gray-500" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">
                      (801) 889-3468
                    </h3>
                    <p className="text-sm text-gray-500">Call</p>
                  </div>
                </a>
                <a
                  href="mailto:scholarships@qust.education"
                  className="flex items-center gap-4"
                >
                  <FaHandPaper className="text-3xl text-gray-500" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">
                      scholarships@qust.education
                    </h3>
                    <p className="text-sm text-gray-500">Scholarship</p>
                  </div>
                </a>
              </div>
              {/* Right Section */}
              <div className="space-y-4">
                <a
                  href="mailto:tuition@qust.education"
                  className="flex items-center gap-4"
                >
                  <FaEnvelope className="text-3xl text-gray-800" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">
                      tuition@qust.education
                    </h3>
                  </div>
                </a>
                <Link href={`/`}>
                  <button className="customButton mt-8">Enroll Now</button>
                </Link>
              </div>
>>>>>>> 0917d52e503c8e3fb2c511204a1d8f0179e25a09
            </div>
          </div>
        ))}
      </div>

      {/* Tuition Section */}
      <div className="bg-gray-50 p-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2  gap-8 items-start">
          {/* Left Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Tuition</h2>
            <p className="text-gray-600">
              At Quantum, we are dedicated to providing accessible and
              comprehensive education for all. Achieve your dreams with our
              tailored scholarships and flexible payment plans. Your success is
              our priority, empowering you on your educational journey. Inquire
              about scholarships and tuition plans now!
            </p>
          </div>

          {/* Center Section */}
          <div className="space-y-4">
            <a href="tel:8018893468" className="flex items-center gap-4">
              <FaPhone className="text-3xl text-gray-500" />
              <div>
                <h3 className="text-lg font-bold text-gray-800">
                  (801) 889-3468
                </h3>
                <p className="text-sm text-gray-500">Call</p>
              </div>
            </a>
            <a
              href="mailto:scholarships@qust.education"
              className="flex items-center gap-4"
            >
              <FaHandPaper className="text-3xl text-gray-500" />
              <div>
                <h3 className="text-lg font-bold text-gray-800">
                  scholarships@qust.education
                </h3>
                <p className="text-sm text-gray-500">Scholarship</p>
              </div>
            </a>
            <a
              href="mailto:tuition@qust.education"
              className="flex items-center gap-4"
            >
              <FaEnvelope className="text-3xl text-gray-500" />
              <div>
                <h3 className="text-lg font-bold text-gray-800">
                  tuition@qust.education
                </h3>
              </div>
            </a>
            <Link href="/registration">
              <button className="customButton mt-8 w-full md:w-auto">
                Enroll Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
