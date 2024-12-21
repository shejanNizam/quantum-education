import WorkforceAcceleratorComp from "@/lib/WorkforceAcceleratorComp";
import MENTOR_IMG from "../../../../assets/academics/workforce-accelerator/quantum_mentor_img.webp";

export default function ExecutiveMentorshipPage() {
  return (
    <>
      <div className="min-h-screen bg-white rounded-xl w-[90%] p-4 m-8 lg:w-[70%] lg:p-40 mx-auto ">
        <WorkforceAcceleratorComp
          description={`Unlock new opportunities with tailored consultation/mentorship and a strong focus on customer and clinical strategy. Discover the power of AI and human-centered journeys to revolutionize healthcare delivery. Exclusively available for digital business certified individuals or those with 3-7 years of professional experience, including Master’s degree holders in healthcare management, MDs, DOs, and PharmDs.
        
                  Nurses, doctors, pharmacists – ready to make the leap into the digital realm? This program is your ideal choice! Transform your career today!`}
          image={MENTOR_IMG}
        />
      </div>
    </>
  );
}
