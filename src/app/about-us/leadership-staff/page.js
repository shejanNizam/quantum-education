import Image from "next/image";
import { IoIosMailOpen } from "react-icons/io";
import image3 from "../../../assets/about_us/coo_single_img.png";
import image1 from "../../../assets/about_us/founder_single_img.png";
import image2 from "../../../assets/about_us/president_single_img.webp";
import image4 from "../../../assets/about_us/vice_president_single_img.png";

import { getMetadata } from "@/lib/utils";
export async function generateMetadata() {
  return getMetadata({ title: "LeadershipStaff - Quantum Institute" });
}

export default function LeadershipStaffPage() {
  const members = [
    {
      id: 1,
      name: "Engineer, Syed Tasin Ahmed",
      position: "Founder and Chancellor",
      image: image1,
    },
    {
      id: 2,
      name: "Attorney, Thomas E. Seartz",
      position: "President",
      image: image2,
    },
    {
      id: 3,
      name: "USN Veteran, Igin Ismat | MBA – Health Care Management",
      position: "Chief Operating Officer",
      image: image3,
    },
    {
      id: 4,
      name: "Professor, Arlene Larsen | MBA – Technology Management",
      position: "Vice President",
      image: image4,
    },
    {
      id: 5,
      name: "Doctor, Vallery Shematov",
      position: "Vice President",
      image: image4,
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-white rounded-xl w-[90%] p-4 m-8 lg:w-[70%] lg:p-40 mx-auto ">
        <h2 className="customSubHeading"> Leadership and Staff </h2>
        <br />
        <p>
          At Quantum Institute of Science and Technology, our dynamic leadership
          team brings a wealth of knowledge and experience to the forefront,
          serving as a vital bridge between the world of industry and the realm
          of academia. Our dedicated team is here to support you on your
          educational journey, equipping you with the essential skills required
          in the fields of technology and artificial intelligence.{" "}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 m-4">
          {members.map((member) => (
            <div key={member.id} className="flex">
              {/* Card container with flex-grow to equalize height */}
              <div className="flex flex-col items-center bg-white rounded-lg shadow-xl overflow-hidden hover:drop-shadow-2xl transition-shadow duration-200 max-w-sm w-full flex-grow">
                <Image
                  objectFit="cover"
                  priority={true}
                  src={member.image}
                  alt={member.name}
                  className="object-cover"
                />
                <div className="p-4 text-center flex flex-col">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {member.name}
                  </h2>
                  <p className="text-gray-600">{member.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className=" flex flex-col lg:flex-row w-full gap-12">
          <p className=" w-[70%] ">
            For a comprehensive list of our esteemed faculty and staff members,
            please visit the student portal or reach out to us via email at
            <span className="font-bold text-xl text-primary">
              {"  "} faculty@qust.education
            </span>
          </p>
          <div className=" w-[30%] ">
            <IoIosMailOpen className="w-[50px] h-[50px]" />

            <p className="text-2xl text-primary font-bold ">
              faculty@qust.education
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
