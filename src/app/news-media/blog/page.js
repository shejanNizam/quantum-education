import ContactUsComp from "@/lib/ContactUsComp";
import { getMetadata } from "@/lib/utils";
import Link from "next/link";
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
              <h1 className="customHeading mb-4">
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
              <Link href={"/"} className="customButton">
                {" "}
                Explore{" "}
              </Link>

              <Link href={"/"} className="customButton">
                {" "}
                Learn{" "}
              </Link>

              <Link href={"/"} className="customButton">
                {" "}
                Connect{" "}
              </Link>
            </div>
          </div>

          {/* Grid Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="customSubHeading mb-4">
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
              <h2 className="customSubHeading mb-4">
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
              <h2 className="customSubHeading mb-4">
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
              <h2 className="customSubHeading mb-4">
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

        {/* contact */}
        <ContactUsComp heading={"Questions or Concerns"} />
      </div>
    </>
  );
}
