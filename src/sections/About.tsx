// File: src/sections/About.tsx
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      className="min-h-screen flex flex-col justify-center items-center px-6 py-20 bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-white"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl font-bold text-blue-600 mb-6">About Me</h2>
      <p className="max-w-3xl text-lg leading-relaxed text-center">
        I'm a Computer Science graduate and the co-founder of PowerX. With a strong foundation in Python, AI, and full-stack development, I’ve led award-winning hackathon teams and secured government grants for AI-IoT innovations.
      </p>
    </motion.section>
  );
};

export default About;
