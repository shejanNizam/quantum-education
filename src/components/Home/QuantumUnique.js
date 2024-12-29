import { motion } from "framer-motion";
import Image from "next/image";
import logo1 from "../../assets/unique/unique_icon_1.webp";
import logo2 from "../../assets/unique/unique_icon_2.webp";
import logo3 from "../../assets/unique/unique_icon_3.webp";
import logo4 from "../../assets/unique/unique_icon_4.webp";
import UNIQUE_IMG from "../../assets/unique/unique_image.webp";

export default function QuantumUnique() {
  // Variants for the container to stagger child animations
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  // Variants for individual items
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Variant for the image
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="container my-32"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Heading Section */}
      <motion.h2
        className="customHeading text-center"
        variants={itemVariants}
        whileHover={{ scale: 1.1 }}
      >
        What Makes Quantum Unique?
      </motion.h2>

      {/* Content Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-center items-center gap-12"
        variants={containerVariants}
      >
        {/* Features List */}
        <motion.div className="p-4" variants={containerVariants}>
          {/* Feature 1 */}
          <motion.div className="mb-8" variants={itemVariants}>
            <h3 className="customSubHeading flex items-center gap-2">
              <Image
                src={logo1}
                alt="Dynamic Curriculum"
                width={40}
                height={40}
              />
              Dynamic Curriculum
            </h3>
            <p className="ml-14 font-semibold">
              Every session is different. We believe in providing up-to-date
              knowledge that matches current technology and trends.
            </p>
          </motion.div>

          {/* Feature 2 */}
          <motion.div className="mb-8" variants={itemVariants}>
            <h3 className="customSubHeading flex items-center gap-2">
              <Image
                src={logo2}
                alt="Real-World Projects"
                width={40}
                height={40}
              />
              Real-World Projects
            </h3>
            <p className="ml-14 font-semibold">
              Hands-on experience by working on a real project to simulate
              actual working experience.
            </p>
          </motion.div>

          {/* Feature 3 */}
          <motion.div className="mb-8" variants={itemVariants}>
            <h3 className="customSubHeading flex items-center gap-2">
              <Image src={logo3} alt="Career Support" width={40} height={40} />
              Career Support
            </h3>
            <p className="ml-14 font-semibold">
              Our team will work with students one-on-one. We will teach you
              tactics that give you a competitive edge and more.
            </p>
          </motion.div>

          {/* Feature 4 */}
          <motion.div className="mb-8" variants={itemVariants}>
            <h3 className="customSubHeading flex items-center gap-2">
              <Image src={logo4} alt="Outcomes First" width={40} height={40} />
              Outcomes First
            </h3>
            <p className="ml-14 font-semibold">
              Our graduates get hired in less than 3 months through our network
              of hiring partners.
            </p>
          </motion.div>
        </motion.div>

        {/* Unique Image */}
        <motion.div className="w-full" variants={imageVariants}>
          <Image src={UNIQUE_IMG} alt="Quantum Unique" className="mx-auto" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
