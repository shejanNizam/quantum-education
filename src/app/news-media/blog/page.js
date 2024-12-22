import { FaEnvelope } from "react-icons/fa";

import { getMetadata } from "@/lib/utils";
export async function generateMetadata() {
  return getMetadata({ title: "Blog - Quantum Institute" });
}

export default function BlogPage() {
  return (
    <>
      <div className="min-h-screen bg-white rounded-xl w-[90%] p-4 m-8 lg:w-[70%] lg:p-40 mx-auto ">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Main Heading Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Stay Connected with Quantum
              </h1>
              <p className="text-gray-600 leading-relaxed">
                At Quantum Institute of Science and Technology, we understand
                that staying connected is a vital part of your educational
                journey. Whether you’re a current student or an alum, we have a
                wealth of resources and opportunities waiting for you. Here’s
                how you can make the most of your Quantum experience:
              </p>
            </div>
            <div className="flex flex-col space-y-4">
              <button className="customButton">Explore</button>
              <button className="customButton">Learn</button>
              <button className="customButton">Connect</button>
            </div>
          </div>

          {/* Grid Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Follow Us on Social Media
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Our social media accounts are your gateway to the latest news,
                updates, and insights from Quantum. Be sure to follow us on
                platforms like Facebook, Twitter, LinkedIn, and Instagram. It’s
                a fantastic way to stay in the loop about campus happenings,
                events, and important announcements. Plus, you’ll be part of a
                vibrant online community of fellow students, alumni, and
                faculty.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Explore Our Website Resources
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Our website is a treasure trove of information, resources, and
                support. Whether you’re looking for academic guidance, career
                advice, or just curious about Quantum’s latest achievements, our
                website has you covered. Check out our blogs, news articles, and
                program information. It’s all designed to help you navigate your
                educational journey with ease.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Access Our Secure Portal
              </h2>
              <p className="text-gray-600 leading-relaxed">
                For current students, our secure portal is your go-to hub for
                everything related to your studies. From class schedules to
                academic resources, it’s your personalized space for success.
                Stay up to date with the latest coursework, connect with your
                professors, and collaborate with your peers.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Stay Engaged, Stay Informed
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We encourage you to actively engage with Quantum’s online
                presence. It’s not just about staying informed; it’s also about
                building connections, gaining insights, and making the most of
                your educational experience.
              </p>
            </div>
          </div>
        </div>
        {/*  */}
        {/* contact */}
        <div className="bg-gray-50 p-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Section */}
            <div>
              <h4 className="text-3xl font-bold text-gray-800 mb-4">
                Questions or Concerns:
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
