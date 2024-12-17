import Image from "next/image";
import Link from "next/link";
import { CgArrowTopRight } from "react-icons/cg";
import logo1 from "../../assets/updates/update_icon_1.png";
import logo2 from "../../assets/updates/update_icon_2.png";
import logo3 from "../../assets/updates/update_icon_3.png";

export default function Updates() {
  return (
    <>
      <div className=" container my-32">
        <h2 className="text-center text-6xl font-bold mb-12">Latest Updates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-20">
          <div>
            <h3 className="text-3xl font-bold flex items-center gap-2 mb-4">
              <Image src={logo1} alt="logo1" width={50} height={50} />
              NEW PROGRAMS
            </h3>
            <ul className="ml-14 font-semibold">
              <li className="flex items-center text-primary">
                <CgArrowTopRight />
                <Link href={"/"}> Digital Health Workforce Accelerator </Link>
              </li>
              <li className="flex items-center text-primary">
                <CgArrowTopRight />
                <Link href={"/"}> FinTech Workforce Accelerator </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-3xl font-bold flex items-center gap-2 mb-4">
              <Image src={logo2} alt="logo1" width={50} height={50} />
              TOP PROGRAMS
            </h3>
            <ul className="ml-14 font-semibold">
              <li className="flex items-center text-primary">
                <CgArrowTopRight />
                <Link href={"/"}> Digital Business </Link>
              </li>
              <li className="flex items-center text-primary">
                <CgArrowTopRight />
                <Link href={"/"}> Digital Engineering </Link>
              </li>
              <li className="flex items-center text-primary">
                <CgArrowTopRight />
                <Link href={"/"}> Executive Mentorship </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-3xl font-bold flex items-center gap-2 mb-4">
              <Image src={logo3} alt="logo1" width={50} height={50} />
              MATERIALS
            </h3>
            <ul className="ml-14 font-semibold">
              <p>
                We offer an array of resources tailored exclusively for you,
                encompassing documents, PowerPoint presentations, videos,
                software, and certification preparation materials.
              </p>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
