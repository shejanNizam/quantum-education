import ContactUsComp from "@/lib/ContactUsComp";
import { getMetadata } from "@/lib/utils";
export async function generateMetadata() {
  return getMetadata({ title: "TuitionFees - Quantum Institute" });
}

const tuitionOptions = [
  {
    id: 1,
    title: "Option 1:",
    // heading: "$0 Tuition Fee - Creating Equal Opportunities",
    heading: "One-Time Payment,          Regular Tuition: $5,000",
    // description: `At Quantum, we stand firmly by our founder’s unwavering commitment to giving back to the community and ensuring equal educational opportunities for all. Our founder’s vision is rooted in the belief that financial constraints should never hinder anyone’s pursuit of a world-class education. In alignment with this noble vision, we are thrilled to announce that eligible students will not bear the burden of any tuition fees.`,
    description: ` If you’re paying out of pocket in one lump sum, you automatically qualify for a $500 scholarship. This brings your total cost down to $4,500. `,
  },
  {
    id: 2,
    title: "Option 2:",
    heading: "Flex Payment Plan",
    // description: `If you’re part of InsightIQ or proceed with signing an active contract with them, you’re in for substantial scholarship! While our regular tuition is $9,600, eligible students associated with InsightIQ can enjoy a reduced tuition of just $3,800. That’s an instant scholarship of $5,800, making your education significantly more affordable.
    // Please note that all students are eligible for a full refund, with specific refund details outlined in the enrollment document. Additionally, a $100 non-refundable enrollment fee applies to all students.`,
    description: ` If you prefer to spread out your payments, you can pay $1,000 upfront and then cover the remaining $4,000 within 6 months. `,
  },
  {
    id: 3,
    title: "Option 3:",
    // heading: "$7,600 Tuition with Scholarships",
    heading: "Creating Equal Opportunities – $0 Tuition",
    // description: `Instead of the regular $9,600 tuition, you can pay just $7,600 through two fantastic scholarship options: - Early Payment Scholarship: Pay your full tuition upfront or in two payments within 30 days to qualify for a $2,000 scholarship. Please note that this scholarship doesn’t apply to company or corporate-funded training programs.
    // - Academic Achievement Scholarship: Maintain a GPA of 3.5 or higher and pay your tuition in two installments to receive a $2,000 scholarship. You’ll also have an extended 60 days to complete your payment.
    // Please note that all students are eligible for a full refund, with specific refund details outlined in the enrollment document. Additionally, a $100 non-refundable enrollment fee applies to all students.`,

    description: ` Our founder’s vision is deeply rooted in giving back and ensuring that financial barriers never stand in the way of receiving a world-class education. If you meet the eligibility criteria, you won’t pay any tuition fees at all. Additionally, if you’re funded by an eligible government-approved program, you automatically qualify for a $0 tuition fee.
 `,
  },
  {
    id: 4,
    title: "Option 4:",
    // heading: "$9,600 Tuition (Pay $4,800 Upfront)",
    heading: "InsightIQ Partnership – $3,800 Tuition",
    // description: `Choose flexibility with our payment plan. Pay just half of your tuition, which is $4,800, at the beginning. The remaining amount can be paid in smaller installments over 18 months. For more information or any questions about this option, feel free to contact us at tuition@qust.education.
    // Please note that all students are eligible for a full refund, with specific refund details outlined in the enrollment document. Additionally, a $100 non-refundable enrollment fee applies to all students.`,
    description: ` If you are already part of InsightIQ or sign an active contract with them, you’ll receive a $1,200 scholarship. This reduces your tuition from $5,000 to just $3,800, making your education significantly more affordable. `,
  },
];

const highlights = [
  {
    title: "Refunds:",
    description:
      "All students are eligible for a full refund, with specific details outlined in the enrollment document.",
  },
  {
    title: "Enrollment Fee:",
    description:
      " A $100 non-refundable enrollment fee applies to all students.",
  },
  {
    title: "Scholarship Opportunities",
    description:
      "Our dedicated team is here to guide you through the latest scholarship opportunities. We are committed to helping you stand out and seize the chance to upskill in emerging fields. Your success is our priority.",
  },
  {
    title: "Our Mission",
    description:
      "Quantum was founded with the mission of empowering individuals to build their lives through education, upskilling, and securing employment in emerging fields. Our goal is to alleviate the financial burden associated with education and ensure that your path to success is as smooth as possible.",
  },
  {
    title: "No Burdensome Debt",
    description:
      "We understand the importance of financial stability, and we’re here to help you avoid burdensome educational debt. With our tuition payment plans and options, you can pursue your dreams without overwhelming financial stress.",
  },
];

export default function TuitionFeesPage() {
  return (
    <>
      <div className="min-h-screen bg-white rounded-xl w-[90%] p-4 m-8 lg:w-[70%] lg:p-40 mx-auto ">
        <div>
          <h1 className="customHeading my-4">
            Explore Tuition and Fees at Quantum
          </h1>
          <p className=" font-bold">
            {" "}
            At Quantum, we believe that education should be accessible to all,
            regardless of your financial background. That’s why we offer a range
            of scholarships and flexible payment plans designed to accommodate
            individual needs.
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
          {tuitionOptions.map((option) => (
            <div
              key={option.id}
              className="p-6 bg-white shadow-lg rounded-lg border border-gray-200"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {option.title}
              </h3>
              <h4 className="customSubHeading mb-4">{option.heading}</h4>
              <p className="text-gray-600 whitespace-pre-line leading-relaxed">
                {option.description}
              </p>
            </div>
          ))}
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-lg rounded-lg border border-gray-200"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {highlight.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
        {/* contact */}
        <ContactUsComp heading={"Contact Us"} />
      </div>
    </>
  );
}
