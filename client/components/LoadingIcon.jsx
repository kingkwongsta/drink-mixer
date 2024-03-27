import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const textArray = ["Text 1", "Text 2", "Text 3", "And so on..."]; // Replace with your text

const TextTransition = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % textArray.length);
    }, 2000); // Update index every 2 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex justify-center items-center">
      <motion.div
        key={currentIndex} // Key for performance
        animate={{ opacity: [0, 1, 0] }} // Animate opacity with keyframes
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }} // Control animation duration and repetition
      >
        {textArray[currentIndex]}
      </motion.div>
    </div>
  );
};

export default TextTransition;
