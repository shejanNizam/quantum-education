import ProfessionalStudiesComp from "@/lib/ProfessionalStudiesComp";
import DIGITAL_BUSINESS_IMG from "../../.././../assets/academics/professional-studies/digital_business_img.webp";

import { getMetadata } from "@/lib/utils";
export async function generateMetadata() {
  return getMetadata({ title: "DigitalBusiness - Quantum Institute" });
}

export default function DigitalBusinessPage() {
  return (
    <>
      <div className="min-h-screen bg-white rounded-xl w-[90%] p-4 m-8 lg:w-[70%] lg:p-40 mx-auto ">
        <ProfessionalStudiesComp
          heading={"Digital Business / Product Management"}
          description={
            "Welcome to our Digital Engineering program, where we offer a gateway for individuals seeking to embark on a promising career in engineering. Our comprehensive curriculum is thoughtfully crafted to equip you with coding expertise and mastery of technical skills. Throughout the program, we focus on cultivating daily soft skills, engaging in portfolio projects, and building a robust engineering foundation, with special emphasis on Security Fundamentals, Java, and Selenium. If you’re eager to delve deeper into our curriculum, we would be delighted to furnish you with a detailed overview upon request."
          }
          image={DIGITAL_BUSINESS_IMG}
        />
      </div>
    </>
  );
}
