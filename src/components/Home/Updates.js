import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CgArrowTopRight } from "react-icons/cg";
import logo1 from "../../assets/updates/update_icon_1.png";
import logo2 from "../../assets/updates/update_icon_2.png";
import logo3 from "../../assets/updates/update_icon_3.png";

export default function Updates() {
  // Variants for animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
      <motion.div
        className="container my-20"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h2
          className="customHeading text-center"
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
        >
          Latest Updates
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 md:px-12 lg:px-12"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <h3 className="customSubHeading flex items-center gap-2">
              <Image src={logo1} alt="logo1" width={50} height={50} />
              NEW PROGRAMS
            </h3>
            <ul className="ml-14 font-semibold">
              <li className="flex items-center text-primary">
                <CgArrowTopRight />
                <Link href={"/academics/workforce-accelerator/digital-health"}>
                  {" "}
                  Digital Health Workforce Accelerator{" "}
                </Link>
              </li>
              <li className="flex items-center text-primary">
                <CgArrowTopRight />
                <Link href={"/academics/workforce-accelerator/fintech"}>
                  {" "}
                  FinTech Workforce Accelerator{" "}
                </Link>
              </li>
            </ul>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h3 className="customSubHeading flex items-center gap-2">
              <Image src={logo2} alt="logo1" width={50} height={50} />
              TOP PROGRAMS
            </h3>
            <ul className="ml-14 font-semibold">
              <li className="flex items-center text-primary">
                <CgArrowTopRight />
                <Link
                  href={"/academics/professional-studies/digital-engineering"}
                >
                  {" "}
                  Digital Engineering{" "}
                </Link>
              </li>
              <li className="flex items-center text-primary">
                <CgArrowTopRight />
                <Link href={"/academics/professional-studies/digital-business"}>
                  {" "}
                  Digital Business{" "}
                </Link>
              </li>

              <li className="flex items-center text-primary">
                <CgArrowTopRight />
                <Link
                  href={"/academics/workforce-accelerator/executive-mentorship"}
                >
                  {" "}
                  Executive Mentorship{" "}
                </Link>
              </li>
            </ul>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h3 className="customSubHeading flex items-center gap-2">
              <Image src={logo3} alt="logo1" width={50} height={50} />
              MATERIALS
            </h3>
            <ul className="ml-14 font-semibold">
              <motion.p variants={itemVariants}>
                We offer an array of resources tailored exclusively for you,
                encompassing documents, PowerPoint presentations, videos,
                software, and certification preparation materials.
              </motion.p>
            </ul>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}
