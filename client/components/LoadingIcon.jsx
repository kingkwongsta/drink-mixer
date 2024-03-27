import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const textArray = [
  "Gathering the ingredients...",
  "Measuring just the right amount...",
  "Mixing with care...",
  "Finalizing the recipe...",
];

const TextTransition = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % textArray.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex justify-center items-center">
      <motion.div
        key={currentIndex} // Key for performance
        animate={{ opacity: [0, 2, 0] }} // Animate opacity with keyframes
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }} // Control animation duration and repetition
      >
        {textArray[currentIndex]}
      </motion.div>
    </div>
  );
};

export default TextTransition;
