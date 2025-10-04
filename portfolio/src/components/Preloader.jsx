import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import PreloaderGif from "../assets/images/loading.gif"; // your GIF path

const texts = [
  { text: "Hello, I'm Fatina", bold: true, serif: true },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.3 } },
};

const child = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: { duration: 1.5, ease: [0.33, 1, 0.68, 1] } 
  },
};

export default function ExtendedPreloader({ onFinish }) {
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const totalDuration = 3000; // hide after 3s
    const timer = setTimeout(() => {
      setIsComplete(true);
      if (onFinish) onFinish();
    }, totalDuration);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="fixed inset-0 z-50 grid place-items-center bg-white"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="text-center space-y-4"
          >

            {/* Text below GIF */}
            {texts.map((item, index) => (
              <motion.div
                key={index}
                variants={child}
                className={`${item.bold ? "text-5xl md:text-6xl font-extrabold" : "text-2xl md:text-3xl font-medium text-gray-600"} ${item.serif ? "font-serif" : "font-sans"} text-gray-800 mt-4`}
              >
                {item.text}
              </motion.div>
            ))}

            {/* GIF Image */}
            <motion.img
              src={PreloaderGif}
              alt="Loading..."
              variants={child}
              className="w-32 md:w-40 mx-auto"
            />

            
          </motion.div>

         
        </motion.div>
      )}
    </AnimatePresence>
  );
}
