import { FaEnvelope } from "react-icons/fa";

const tuitionOptions = [
  {
    id: 1,
    title: "Option 1:",
    heading: "$0 Tuition Fee - Creating Equal Opportunities",
    description: `At Quantum, we stand firmly by our founder’s unwavering commitment to giving back to the community and ensuring equal educational opportunities for all. Our founder’s vision is rooted in the belief that financial constraints should never hinder anyone’s pursuit of a world-class education. In alignment with this noble vision, we are thrilled to announce that eligible students will not bear the burden of any tuition fees.`,
  },
  {
    id: 2,
    title: "Option 2:",
    heading: "$3,800 Tuition with InsightIQ Partnership",
    description: `If you’re part of InsightIQ or proceed with signing an active contract with them, you’re in for substantial scholarship! While our regular tuition is $9,600, eligible students associated with InsightIQ can enjoy a reduced tuition of just $3,800. That’s an instant scholarship of $5,800, making your education significantly more affordable.
    Please note that all students are eligible for a full refund, with specific refund details outlined in the enrollment document. Additionally, a $100 non-refundable enrollment fee applies to all students.`,
  },
  {
    id: 3,
    title: "Option 3:",
    heading: "$7,600 Tuition with Scholarships",
    description: `Instead of the regular $9,600 tuition, you can pay just $7,600 through two fantastic scholarship options:
    - Early Payment Scholarship: Pay your full tuition upfront or in two payments within 30 days to qualify for a $2,000 scholarship. Please note that this scholarship doesn’t apply to company or corporate-funded training programs.
    - Academic Achievement Scholarship: Maintain a GPA of 3.5 or higher and pay your tuition in two installments to receive a $2,000 scholarship. You’ll also have an extended 60 days to complete your payment.
    Please note that all students are eligible for a full refund, with specific refund details outlined in the enrollment document. Additionally, a $100 non-refundable enrollment fee applies to all students.`,
  },
  {
    id: 4,
    title: "Option 4:",
    heading: "$9,600 Tuition (Pay $4,800 Upfront)",
    description: `Choose flexibility with our payment plan. Pay just half of your tuition, which is $4,800, at the beginning. The remaining amount can be paid in smaller installments over 18 months. For more information or any questions about this option, feel free to contact us at tuition@qust.education.
    Please note that all students are eligible for a full refund, with specific refund details outlined in the enrollment document. Additionally, a $100 non-refundable enrollment fee applies to all students.`,
  },
];

const highlights = [
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
          <h1 className="text-6xl font-bold my-4">
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
              <h4 className="text-2xl font-bold text-gray-800 mb-4">
                {option.heading}
              </h4>
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
        <div className="bg-gray-50 p-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Section */}
            <div>
              <h4 className="text-3xl font-bold text-gray-800 mb-4">
                Contact us
              </h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have questions or require more information about our
                programs or potential future graduate offerings, please don’t
                hesitate to reach out to us at{" "}
                <span className="font-bold text-gray-800">
                  info@qust.education
                </span>
                . Our team is here to assist you and provide the guidance you
                need to make the best educational choices.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Quantum is dedicated to your educational success and growth. We
                appreciate your interest in our institution and look forward to
                supporting you on your educational journey, whether through our
                existing programs or future possibilities.
              </p>
            </div>

            {/* Right Section */}
            <div className="flex flex-col items-center justify-center text-center">
              <FaEnvelope className="text-6xl text-primary mb-4" />
              <p className="text-2xl font-bold text-gray-800">
                info@qust.education
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
