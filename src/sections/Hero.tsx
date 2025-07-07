// File: src/sections/Hero.tsx
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import animationData from "../assets/lottie/tech-bg.json";

const Hero = () => {
  return (
    <motion.div
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-6 py-20 bg-white dark:bg-gray-900 text-center md:text-left"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex-1 space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400">
          Hi, I’m Deepanshu Sharma
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Driven by Passion, Powered by Technology.
        </p>
      </div>
      <div className="flex-1 max-w-md">
        <Lottie animationData={animationData} loop />
      </div>
    </motion.div>
  );
};

export default Hero;
