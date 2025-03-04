import WorkforceAcceleratorComp from "@/lib/WorkforceAcceleratorComp";
import FINTECH_IMG from "../../../../assets/news_events/news_img.png";

import { getMetadata } from "@/lib/utils";
export async function generateMetadata() {
  return getMetadata({ title: "Fintech - Quantum Institute" });
}

export default function FintechPage() {
  return (
    <>
      <div className="min-h-screen bg-white rounded-xl w-[90%] p-4 m-8 lg:w-[70%] lg:p-40 mx-auto ">
        <WorkforceAcceleratorComp
          topHeading={`FinTech Workforce Accelerator`}
          description={`Unlock new opportunities with tailored consultation/mentorship and a strong focus on customer and clinical strategy. Discover the power of AI and human-centered journeys to revolutionize healthcare delivery. Exclusively available for digital business certified individuals or those with 3-7 years of professional experience, including Master’s degree holders in healthcare management, MDs, DOs, and PharmDs.
        
                  Nurses, doctors, pharmacists – ready to make the leap into the digital realm? This program is your ideal choice! Transform your career today!`}
          image={FINTECH_IMG}
        />
      </div>
    </>
  );
}
