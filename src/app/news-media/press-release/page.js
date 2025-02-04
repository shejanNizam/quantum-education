import Image from "next/image";
import NEWS_IMG from "../../../assets/news_events/news_img.jpg";

import { getMetadata } from "@/lib/utils";
export async function generateMetadata() {
  return getMetadata({ title: "PressRelease - Quantum Institute" });
}

export default function PressReleasePage() {
  return (
    <>
      <div className="min-h-screen bg-white rounded-xl w-[90%] p-4 m-8 lg:w-[70%] lg:p-40 mx-auto ">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Header Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h1 className="customSubHeading mb-4">
                Welcome to Quantums Press Release Page
              </h1>
              <p className="text-gray-600 leading-relaxed">
                Currently, there are no press release announcements to report.
                However, this page serves as your primary source for staying
                updated on all the latest news, developments, and press releases
                related to Quantum.
              </p>
            </div>
            <div>
              <h2 className="customSubHeading mb-4">
                Stay Informed through Your Portal
              </h2>
              <p className="text-gray-600 leading-relaxed">
                To ensure you are always in the know about Quantums latest press
                releases, we will deliver these updates directly to your student
                portal. This way, you can conveniently access all the essential
                information right from your digital hub.
              </p>
            </div>
          </div>

          {/* "What to Expect" Section */}
          <div>
            <h2 className="customSubHeading mb-4">What to Expect</h2>
            <p className="text-gray-600 leading-relaxed">
              When there are newsworthy events, accomplishments, or important
              updates about Quantum, you can expect to find:
            </p>
          </div>

          {/* Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Press Releases */}
            <div className="text-center">
              <Image
                objectFit="cover"
                priority={true}
                src={NEWS_IMG}
                alt="Press Releases"
                width={400}
                height={300}
                className="rounded-lg object-cover mx-auto"
              />
              <h3 className="customSubHeading mt-4">Press Releases</h3>
              <p className="text-gray-600 leading-relaxed">
                Access to official statements and announcements from Quantum.
              </p>
            </div>

            {/* News Highlights */}
            <div className="text-center">
              <Image
                objectFit="cover"
                priority={true}
                src={NEWS_IMG}
                alt="Press Releases"
                width={400}
                height={300}
                className="rounded-lg object-cover mx-auto"
              />
              <h3 className="customSubHeading mt-4">News Highlights</h3>
              <p className="text-gray-600 leading-relaxed">
                A collection of noteworthy news articles and features related to
                Quantum and our community.
              </p>
            </div>

            {/* Media Coverage */}
            <div className="text-center">
              <Image
                objectFit="cover"
                priority={true}
                src={NEWS_IMG}
                alt="Press Releases"
                width={400}
                height={300}
                className="rounded-lg object-cover mx-auto"
              />
              <h3 className="customSubHeading mt-4">Media Coverage</h3>
              <p className="text-gray-600 leading-relaxed">
                Links to media coverage featuring Quantum, our students,
                faculty, and staff.
              </p>
            </div>
          </div>

          {/* Footer Section */}
          <div>
            <h2 className="customSubHeading mb-4">
              Stay Tuned for Exciting Updates
            </h2>
            <p className="text-gray-600 leading-relaxed">
              While there are no current press releases to share, we encourage
              you to check this page periodically for updates. We’re committed
              to keeping you informed about Quantum’s achievements, milestones,
              and contributions to the world of education and beyond.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
