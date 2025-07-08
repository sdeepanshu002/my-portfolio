import { motion } from "framer-motion";
import { useState } from "react";

const achievements = [
  {
    title: "3x Smart India Hackathon Winner",
    year: "2022, 2023, 2024",
    description: "Won national-level hackathons with AI & Smart City solutions."
  },
  {
    title: "₹2.5 Lakh Govt Grant",
    year: "2023",
    description: "Received innovation funding for AI-powered assistive wheelchair."
  },
  {
    title: "International Research Conclave",
    year: "2024",
    description: "Presented UrbanSafeFlow traffic system to global academics."
  },
  
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5 }
  }),
  hover: {
    scale: 1.04,
    boxShadow: "0px 12px 25px rgba(59, 130, 246, 0.25)", // blue glow
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 15
    }
  },
  tap: {
    scale: 0.98
  }
};

const Achievements = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="grid gap-6">
      {achievements.map((ach, i) => (
        <motion.div
          key={i}
          className={`relative bg-white dark:bg-gray-800 p-6 rounded-lg border-l-[5px] shadow-md transition-all duration-300 ${
            hoveredIndex === i ? "border-blue-600" : "border-blue-500"
          }`}
          custom={i}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          whileTap="tap"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardVariants}
          onMouseEnter={() => setHoveredIndex(i)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <motion.h3
            className={`text-xl font-semibold transition-colors ${
              hoveredIndex === i ? "text-blue-600 underline" : "text-blue-500"
            }`}
          >
            {ach.title}
          </motion.h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{ach.year}</p>
          <p className="text-gray-700 dark:text-gray-300">{ach.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default Achievements;
