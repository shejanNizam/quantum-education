import AccordionComp from "@/lib/AccordionComp";
import ContactFormComp from "@/lib/ContactFormComp";
import Image from "next/image";
import LOGO from "../../../assets/logo.png";

import { getMetadata } from "@/lib/utils";
export async function generateMetadata() {
  return getMetadata({ title: "FAQs - Quantum Institute" });
}

export default function FaqsPage() {
  return (
    <>
      <div className="min-h-screen bg-white rounded-xl w-[90%] p-4 m-8 lg:w-[70%] lg:p-40 mx-auto ">
        <div className="flex flex-col md:flex-row justify-start items-center space-y-4 md:space-y-0 md:space-x-4">
          <Image
            objectFit="cover"
            priority={true}
            src={LOGO}
            alt="logo"
            className="w-32 h-32 md:w-32 md:h-32 lg:w-40 lg:h-40"
          />
          <h1 className="customHeading">Frequently Asked Questions</h1>
        </div>

        <div className="mt-12">
          <h3 className="customSubHeading">
            About Quantum Institute of Science and Technology
          </h3>
          <p>
            Quantum is a distinguished higher learning institution dedicated to
            emerging fields, fostering collaboration between brilliant minds and
            the power of Artificial Intelligence.
          </p>
        </div>

        {/* Accordion faqs */}
        <div className="w-[70%] mx-auto my-8 text-2xl">
          <AccordionComp
            accordionTrigger={`Why Choose Quantum?`}
            accordionContent={`Unlike conventional boot camps and universities, Quantum Institute of Science and Technology is a certified and accelerated higher learning institution authorized by the State Council of Higher Education for Virginia. Whether you are an organization or an individual seeking to upskill, Quantum offers an expedited path to expertise in a matter of weeks, bypassing the traditional years-long educational route.

Our tailor-made programs focus on bridging skill gaps for students, professionals, and organizations alike.

We equip individuals and organizations to collaborate across diverse domains, from FinTech to digital health, leveraging customer and clinician insights to enable a coordinated and personalized technology-driven experience, elevating digital transformation to new heights.


Our mission is to deliver high-quality interactive training for individuals from diverse technical and non-technical backgrounds, transforming them into valuable assets for society and filling the current job market’s skill void. Our programs empower scholars with skills in Product Development, Business Management, Coding, Analytics, and Leadership, positioning them for a prosperous future.

              Recognizing that everyone learns at their own pace, we provide additional support and mentorship for struggling students to ensure they stay on track. Our commitment to this vision is unwavering, and we genuinely desire success for all our students.`}
          />
          <AccordionComp
            accordionTrigger={`Do I Need Prior IT Experience or Coding Skills?`}
            accordionContent={`Our courses are designed to welcome individuals without prior IT experience or coding knowledge. 

Real-Life Projects:

You will gain hands-on experience with industry-standard tools and software applications, including our in-house projects.

Training Materials:

Yes, we provide a comprehensive array of materials, including documents, presentations, videos, software, and certification preparation materials.

Career Support:

We offer robust career development support to all students and alumni, including resume enhancement, 1:1 interview preparation mentorship, job-searching workshops, and networking events. We continue to support graduates until they secure employment.

Post-Graduation Job Assistance:

Our commitment to your success extends beyond graduation:

In-class training on networking, resumes, interviews, portfolio development, LinkedIn, and more.
Guidance on building an impressive portfolio.
Opportunities to connect with potential employers.
Personalized post-graduation support, including resume and portfolio critiques.
Access to a regularly updated digital job board.
Monthly job preparation workshops for alumni and current students.
              While we cannot guarantee immediate job placement, your success hinges largely on your dedication to the curriculum and the effort you invest.`}
          />
          <AccordionComp
            accordionTrigger={`Financial Support`}
            accordionContent={`Don’t let finances hinder your education. We offer various financing options. For inquiries, contact us at accounts@qust.education.`}
          />
        </div>

        <ContactFormComp />
      </div>
    </>
  );
}
