import Image from "next/image";
import logo1 from "../../assets/unique/unique_icon_1.webp";
import logo2 from "../../assets/unique/unique_icon_2.webp";
import logo3 from "../../assets/unique/unique_icon_3.webp";
import logo4 from "../../assets/unique/unique_icon_4.webp";
import UPDATE_IMG from "../../assets/unique/unique_image.webp";

export default function QuantumUnique() {
  return (
    <>
      <div className="container my-32">
        <h2 className="text-center text-6xl font-bold mb-12">
          {" "}
          What Makes Quantum Unique?{" "}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 items-center">
          <div className="p-8">
            <div className="mb-8">
              <h3 className="text-3xl font-bold flex items-center gap-2 mb-4">
                <Image src={logo1} alt="logo1" width={40} height={40} />
                Dynamic Curriculum
              </h3>
              <ul className="ml-14 font-semibold">
                <p>
                  Every session is different. We believe in providing up-to-date
                  knowledge that matches current technology and trends.
                </p>
              </ul>
            </div>
            <div className="mb-8">
              <h3 className="text-3xl font-bold flex items-center gap-2 mb-4">
                <Image src={logo2} alt="logo1" width={40} height={40} />
                Real-World Projects
              </h3>
              <ul className="ml-14 font-semibold">
                <p>
                  Hands-on experience by working on a real project to simulate
                  actual working experience.
                </p>
              </ul>
            </div>
            <div className="mb-8">
              <h3 className="text-3xl font-bold flex items-center gap-2 mb-4">
                <Image src={logo3} alt="logo1" width={40} height={40} />
                Career support
              </h3>
              <ul className="ml-14 font-semibold">
                <p>
                  Our team will work with students one on one. We will teach you
                  tactics that gives you a competitive edge and more.
                </p>
              </ul>
            </div>
            <div className="mb-8">
              <h3 className="text-3xl font-bold flex items-center gap-2 mb-4">
                <Image src={logo4} alt="logo1" width={40} height={40} />
                Outcomes First
              </h3>
              <ul className="ml-14 font-semibold">
                <p>
                  Our graduates get hired in less than 3 months through our
                  network of hiring partners.
                </p>
              </ul>
            </div>
          </div>
          <Image
            src={UPDATE_IMG}
            alt="UPDATE_IMG"
            className="w-full h-full lg:h-[650px] object-cover"
            sizes="100vw"
          />
        </div>
      </div>
    </>
  );
}
