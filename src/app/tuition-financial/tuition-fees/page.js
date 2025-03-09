import ContactUsComp from "@/lib/ContactUsComp";
import { getMetadata } from "@/lib/utils";
export async function generateMetadata() {
  return getMetadata({ title: "TuitionFees - Quantum Institute" });
}

const tuitionOptions = [
  {
    id: 1,
    title: "Option 1:",
    heading: `$4,500 One-Time Payment`,
    description: `If you plan to pay your entire tuition in one lump sum, you’ll automatically qualify for a $500 scholarship. This reduces your total cost from $5,000 to $4,500.`,
  },
  {
    id: 2,
    title: "Option 2:",
    heading: `$5,000 Flex Payment Plan`,
    description: `If you prefer a flexible approach, you can pay $1,000 upfront and then spread the remaining $4,000 over eight months.`,
  },
  {
    id: 3,
    title: "Option 3:",
    heading: `$0 Creating Equal Opportunities`,
    description: `Our founder’s vision is to remove financial barriers, ensuring everyone has access to a world-class education. If you meet the eligibility criteria, you pay no tuition at all. Additionally, if you’re funded by an eligible government-approved program, you automatically qualify for a $0 tuition fee.`,
  },
  {
    id: 4,
    title: "Option 4:",
    heading: `$3,800 InsightIQ Partnership`,
    description: `If you’re already part of InsightIQ or sign an active contract with them, you’ll receive a $1,200 scholarship. This brings your tuition down from $5,000 to $3,800.`,
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
