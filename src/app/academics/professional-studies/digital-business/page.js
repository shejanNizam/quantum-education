import ProfessionalStudiesComp from "@/lib/ProfessionalStudiesComp";
import { getMetadata } from "@/lib/utils";
import Link from "next/link";
import DIGITAL_BUSINESS_IMG from "../../.././../assets/academics/professional-studies/digital_business_img.jpg";

export async function generateMetadata() {
  return getMetadata({ title: "DigitalBusiness - Quantum Institute" });
}

export default function DigitalBusinessPage() {
  return (
    <div className="min-h-screen bg-white rounded-xl w-full sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] p-4 sm:p-8 md:p-12 lg:p-16 xl:p-24 mx-auto">
      <ProfessionalStudiesComp
        heading={"Digital Business / Product Management"}
        description={
          <>
            At Quantum, we’re committed to making education both accessible and
            comprehensive for everyone. Unlock your potential with our tailored
            scholarships and flexible payment plans, designed to help you
            achieve your goals. Your success is our priority—let us empower you
            on your educational journey. For full details, please visit our{" "}
            <Link
              className=" text-2xl text-primary font-bold "
              href={`/tuition-financial/tuition-fees`}
            >
              Tuition and Fees
            </Link>{" "}
            page or reach out to learn more about available scholarships and
            payment options!
          </>
        }
        image={DIGITAL_BUSINESS_IMG}
      />
    </div>
  );
}
