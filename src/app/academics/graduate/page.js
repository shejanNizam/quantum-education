import AcademicGraUndCalComp from "@/lib/AcademicGraUndCalComp";
import GRADUATE_UNDERGRADUATE_IMG1 from "../../../assets/academics/graduate_under_graduate/graduate_under_graduate_img1.webp";
import GRADUATE_UNDERGRADUATE_IMG2 from "../../../assets/academics/graduate_under_graduate/graduate_under_graduate_img2.webp";

const sections = [
  {
    imageSrc: GRADUATE_UNDERGRADUATE_IMG1,
    imageAlt: "Notebook and Pen",
    heading: "Stay Informed",
    description:
      "We believe in transparency and will update our website and social media channels if and when we introduce any undergraduate programs in the future. We are dedicated to keeping you informed about any exciting developments on the horizon.",
  },
  {
    imageSrc: GRADUATE_UNDERGRADUATE_IMG2,
    imageAlt: "Streetlight near a cliff",
    heading: "Explore Professional Studies",
    description:
      "In the meantime, we invite you to explore our professional studies programs. These programs are thoughtfully designed to equip you with valuable skills and knowledge in emerging fields. They offer an excellent avenue for career advancement or embarking on a new educational journey.",
  },
];

export default function GraduatePage() {
  return (
    <>
      <div className="min-h-screen bg-white rounded-xl w-[90%] p-4 m-8 lg:w-[70%] lg:p-40 mx-auto ">
        <AcademicGraUndCalComp
          subHeading={`Graduate`}
          heading={`Exploring Graduate Programs at Quantum`}
          description={`At Quantum Institute of Science and Technology, we are committed to providing a range of educational opportunities to our students. While we currently do not offer any graduate programs, we are continuously evolving to meet the changing needs of our community.`}
          sections={sections}
        />
      </div>
    </>
  );
}
