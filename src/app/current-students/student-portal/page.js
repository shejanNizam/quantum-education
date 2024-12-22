import { FaEnvelope } from "react-icons/fa";

import {
  FaBook,
  FaBullhorn,
  FaClipboard,
  FaComments,
  FaGraduationCap,
} from "react-icons/fa";

import { getMetadata } from "@/lib/utils";
export async function generateMetadata() {
  return getMetadata({ title: "StudentPortal - Quantum Institute" });
}

const infoCards = [
  {
    title: "Course Access",
    description:
      "Access your courses, assignments, and study materials 24/7, from anywhere with an internet connection",
    icon: <FaBook />,
  },
  {
    title: "Grades and Progress",
    description:
      "Stay updated on your academic progress with real-time access to your grades and feedback from instructors",
    icon: <FaGraduationCap />,
  },
  {
    title: "Communication",
    description:
      "Connect with your instructors and fellow students through built-in communication tools, making collaboration a breeze",
    icon: <FaComments />,
  },
  {
    title: "Resource Library",
    description:
      "Explore a wealth of resources, including lecture notes, textbooks, and supplementary materials to support your learning",
    icon: <FaClipboard />,
  },
  {
    title: "Announcements",
    description:
      "Stay in the loop with important announcements, deadlines, and updates from Quantum.",
    icon: <FaBullhorn />,
  },
];

export default function StudentPortalPage() {
  return (
    <>
      <div className="min-h-screen bg-white rounded-xl w-[90%] p-4 m-8 lg:w-[70%] lg:p-40 mx-auto ">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Heading */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 md:mb-0">
            Welcome to Quantums Student Portal
          </h1>

          {/* Subheading and Description */}
          <div>
            <h4 className="text-xl md:text-2xl font-semibold text-gray-700 mb-4">
              Your Gateway to Success!
            </h4>
            <p className="text-gray-600 leading-relaxed">
              Congratulations on your enrollment at Quantum! Our Student Portal
              is your digital haven, designed to simplify and enhance your
              educational journey.
            </p>
          </div>
        </div>
        {/*  */}
        {/* all cards */}
        <div className="max-w-7xl mx-auto my-12">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Heres what you need to know
          </h2>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {infoCards.map((card, index) => (
              <div
                key={index}
                className="p-6 bg-white shadow-md rounded-lg border border-gray-200 flex items-start gap-4"
              >
                {/* Icon */}
                <div className="text-4xl text-primary">{card.icon}</div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/*  */}
        <div>
          <h3 className="text-6xl font-bold">Accessing Your Portal</h3>
          <p>
            Upon successful enrollment, you will automatically receive access to
            our Student Portal via email. It’s that simple! Just check your
            inbox for your login details.
          </p>
        </div>

        {/*  */}

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 my-12 items-center">
          {/* Text Section */}
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
              Need Help?
            </h1>
            <p className="text-gray-600 leading-relaxed">
              In the rare event that you haven’t received access to the Student
              Portal or encounter any issues, our Student Services team is here
              to assist you promptly. Please reach out to{" "}
              <span className="font-bold text-gray-800">
                studentservices@qust.com
              </span>
              , and we’ll get you on track.
            </p>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <FaEnvelope className="text-6xl text-primary mb-4" />
            <p className="text-lg font-bold text-gray-800">
              studentservices@qust.com
            </p>
          </div>
        </div>
        {/*  */}
        <p>
          At Quantum, your success is our priority, and our Student Portal is
          designed to empower you on your educational journey. Get ready to
          explore, learn, and thrive in the digital realm of knowledge! 🚀📚
        </p>
      </div>
    </>
  );
}
