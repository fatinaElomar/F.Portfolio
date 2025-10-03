import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const texts = [
  { text: "Hello, I'm Fatina", bold: true, serif: true },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0, 
    },
  },
};

const child = {
  hidden: { 
    opacity: 0, 
    y: 20, 
    scale: 0.95,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 2.5,
      ease: [0.33, 1, 0.68, 1],
    },
  },
};

export default function ExtendedPreloader({ onFinish }) {
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const totalDuration = 3000; 
    const timer = setTimeout(() => {
      setIsComplete(true);
      if (onFinish) onFinish();
    }, totalDuration);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.div
      className="fixed inset-0 z-50 grid place-items-center bg-white"
      initial={{ opacity: 1 }}
      animate={{ opacity: isComplete ? 0 : 1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      style={{ pointerEvents: isComplete ? "none" : "auto" }}
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="text-center space-y-4"
      >
        {texts.map((item, index) => (
          <motion.div
            key={index}
            variants={child}
            className={`${item.bold ? "text-5xl md:text-6xl font-extrabold" : "text-2xl md:text-3xl font-medium text-gray-600"} ${item.serif ? "font-serif" : "font-sans"} text-gray-800`}
          >
            {item.text}
          </motion.div>
        ))}
      </motion.div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: 200 }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
          className="h-1 bg-gray-300 rounded-full"
        >
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
            className="h-full bg-gray-700 rounded-full"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
