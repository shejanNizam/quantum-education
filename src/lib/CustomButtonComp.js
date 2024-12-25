import { motion } from "framer-motion";

export default function CustomButtonComp({ children }) {
  return (
    <>
      <motion.button
        className="customButton"
        whileHover={{ scale: 1.2 }} // Animation when hovered
        whileTap={{ scale: 0.7 }} // Animation when clicked
        initial={{ opacity: 0, y: 20 }} // Initial animation on render
        animate={{ opacity: 1, y: 0 }} // Final state of the animation
        transition={{ duration: 0.3 }} // Animation duration
      >
        {children}
      </motion.button>
    </>
  );
}
