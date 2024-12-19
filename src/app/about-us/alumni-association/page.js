import Image from "next/image";
import { FaChalkboardTeacher, FaHeadset, FaNetworkWired } from "react-icons/fa";
import { IoIosMailOpen } from "react-icons/io";
import ALUMNI_ASSOCIATION_IMAGE from "../../../assets/about_us/alumni_association_img.webp";

export default function AlumniAssociationPage() {
  const alumniBenefits = [
    {
      id: 1,
      icon: <FaNetworkWired />,
      heading: "Networking Opportunities",
      description:
        "Connect with fellow alumni who share your Quantum journey and leverage these connections for personal and professional growth.",
    },
    {
      id: 2,
      icon: <FaChalkboardTeacher />,
      heading: "Mentorship",
      description:
        "Give back by providing guidance and mentorship to current students, helping them navigate their educational path and career choices.",
    },
    {
      id: 3,
      icon: <FaHeadset />,
      heading: "Career Support",
      description:
        "Access exclusive job postings, career development resources, and workshops to enhance your professional journey.",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-white rounded-xl w-[90%] p-4 m-8 lg:w-[70%] lg:p-40 mx-auto ">
        <div className="flex justify-center">
          <Image
            src={ALUMNI_ASSOCIATION_IMAGE}
            alt="ALUMNI_ASSOCIATION_IMAGE"
          />
        </div>
        <div className="mt-4">
          <h3 className="text-4xl font-bold">Building Success Together</h3>
          <p className="mb-8">
            At Quantum Institute of Science and Technology, we consider our
            community to be one big family. We understand that networking is
            often the golden currency for success in today’s world. That’s why
            we’ve established our Alumni Association to foster connections,
            collaboration, and continued growth among our graduates.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
          {alumniBenefits.map((benefit) => (
            <div
              key={benefit.id}
              className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md hover:drop-shadow-2xl transition-shadow duration-200"
            >
              <div className="text-4xl text-primary mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {benefit.heading}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        <h3 className="text-4xl font-bold">
          Stay Connected Through Your Secure Portal
        </h3>
        <p className="mb-8">
          Current enrolled students have the unique opportunity to connect with
          our esteemed alumni through our secure portal. This access allows you
          to learn from their experiences, seek advice, and build valuable
          relationships.
        </p>
        <div className=" flex flex-col lg:flex-row w-full gap-12">
          <div className=" w-[70%]">
            <h3 className="text-4xl font-bold">Contact us</h3>
            <p>
              For all other inquiries or to learn more about our Alumni
              Association, please don’t hesitate to reach out to us{" "}
              <span className="font-bold text-xl text-primary">
                {" "}
                alumni@qust.education{" "}
              </span>{" "}
              We’re here to assist you and keep our Quantum family thriving.
            </p>
          </div>
          <div className=" w-[30%] ">
            <IoIosMailOpen className="w-[50px] h-[50px]" />
            <p className="text-2xl text-primary font-bold ">
              alumni@qust.education
            </p>
          </div>
        </div>
        <p className="font-semibold mt-8">
          Thank you for choosing Quantum, where accreditation and certification
          meet a passion for learning and growth.{" "}
        </p>
      </div>
    </>
  );
}
