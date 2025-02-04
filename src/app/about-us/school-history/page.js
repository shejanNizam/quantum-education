import Image from "next/image";
import SCHOOL_HISTORY_IMAGE from "../../../assets/about_us/school_history_img.webp";

import { getMetadata } from "@/lib/utils";
export async function generateMetadata() {
  return getMetadata({ title: "SchoolHistory - Quantum Institute" });
}

export default function SchoolHistoryPage() {
  const schoolHistory = [
    {
      id: 1,
      heading: "History of Quantum Institute of Science and Technology",
      description:
        "Welcome to Quantum Institute of Science and Technology – a hub of innovation, education, and transformation that has been shaping the future since its inception in 2015. Our journey began with a clear vision and an unwavering commitment to bridging the gap in American education and vocational systems. Recognizing the alarming need to address the challenges in understanding AI, we set out to create an institution that would empower underrepresented communities through accessible and impactful education.",
    },
    {
      id: 2,
      heading: "A Purpose-Driven Inception",
      description:
        "At the heart of our institution's inception is the recognition that education should be an equalizer, a catalyst for change, and a bridge to opportunity. This vision found its embodiment in the establishment of Bright Path in 2015, a transformative subsidiary aimed at providing high-quality education to individuals from diverse backgrounds. Our mission was clear: equip learners with the digital skills that the modern job market demands, while simultaneously contributing to the economic growth of the United States.",
    },
    {
      id: 3,
      heading: "Empowering Through Skill Development",
      description:
        "Quantum Institute of Science and Technology is built on the belief that education is most impactful when it is inclusive and tailored to individual learning styles. We understood that success in the rapidly evolving landscape necessitated addressing the skill gap that was preventing countless individuals from accessing meaningful opportunities. This led us to develop pathways that encompassed a diverse range of skills, including Business, Coding, Analytical, and Leadership, providing our students with a comprehensive toolkit that would position them as leaders in their chosen fields.",
    },
    {
      id: 4,
      heading: "Embracing the Age of Artificial Intelligence",
      description:
        "As the world embraced the era of Artificial Intelligence, we recognized its potential to reshape industries and redefine the way we live and work. Quantum Institute boldly pivoted to make AI a core focus. By directing our energies toward AI education, we aimed to produce graduates who could not only understand and navigate this transformative technology but also actively shape its future. Our specialized training in AI and related disciplines positions our students at the forefront of technological advancement, ready to tackle the challenges and opportunities of the digital age.",
    },
    {
      id: 5,
      heading: "Guided by Excellence and Vision",
      description:
        "Quantum Institute of Science and Technology operates as a Limited Liability Company (LLC), with official certification from the state corporation commission of the Commonwealth of Virginia and the state council of higher education for Virginia. Our institution's management is overseen by co-managers who meticulously guide its operations, ensuring financial stability, academic excellence, administrative efficiency, and the holistic success of our students.",
    },
    {
      id: 6,
      heading: "A Glimpse into the Future",
      description:
        "As we journey forward, Quantum Institute remains steadfast in its commitment to pushing the boundaries of education. Our dedication to fostering a diverse, skilled, and empowered workforce has transformed us into a beacon of opportunity for students nationwide. With an innovative curriculum, accomplished faculty, and forward-looking approach, Quantum is not just shaping careers – it's shaping the very fabric of industries and society.",
    },
    {
      id: 7,
      heading: "A Story of Transformation",
      description:
        "The narrative of Quantum Institute of Science and Technology is one of resilience, innovation, and an unyielding dedication to revolutionizing education. From our humble beginnings as a response to a national educational gap to our current position as pioneers in AI-focused training, our journey is a testament to the profound impact education can have in bridging divides and forging a brighter tomorrow.",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-white rounded-xl w-[90%] p-4 m-8 lg:w-[70%] lg:p-40 mx-auto ">
        <div className="flex justify-center">
          <Image
            objectFit="cover"
            priority={true}
            src={SCHOOL_HISTORY_IMAGE}
            alt="COO_IMAGE"
          />
        </div>
        <div>
          {schoolHistory.map((history) => (
            <div key={history.id}>
              <h3 className="text-xl text-primary font-bold">
                {" "}
                {history.heading}{" "}
              </h3>
              <p className="pb-12"> {history.description} </p>
            </div>
          ))}
        </div>
        <p className=" font-semibold ">
          {" "}
          Join us as we continue to make history, shape futures, and ignite
          change.{" "}
        </p>
      </div>
    </>
  );
}
