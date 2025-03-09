import ProfessionalStudiesComp from "@/lib/ProfessionalStudiesComp";
import { getMetadata } from "@/lib/utils";
import DIGITAL_ENGINEERING_IMG from "../../.././../assets/academics/professional-studies/digital_engineering_img.jpg";

export async function generateMetadata() {
  return getMetadata({ title: "DigitalEngineering - Quantum Institute" });
}

export default function DigitalEngineeringPage() {
  return (
    <div className="min-h-screen bg-white rounded-xl w-full sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] p-4 sm:p-8 md:p-12 lg:p-16 xl:p-24 mx-auto">
      <ProfessionalStudiesComp
        heading={"Digital Engineering / Software Engineering"}
        description={
          "Welcome to our Digital Engineering program. Where we offer a gateway for individuals seeking to embark on a promising career in engineering. Our comprehensive curriculum is thoughtfully crafted to equip you with coding expertise and mastery of technical skills. Throughout the program, we focus on cultivating daily soft skills, engaging in portfolio projects, and building a robust engineering foundation, with special emphasis on Security Fundamentals, Java, and Selenium. If you're eager to delve deeper into our curriculum, we would be delighted to furnish you with a detailed overview upon request."
        }
        image={DIGITAL_ENGINEERING_IMG}
      />
    </div>
  );
}
