// File: src/sections/Projects.tsx
import { motion } from "framer-motion";

const projects = [
  {
    title: "UrbanSafeFlow",
    desc: "AI-based adaptive traffic control system with real-time camera feeds.",
    tech: ["Python", "OpenCV", "WebSocket", "YOLOv9"]
  },
  {
    title: "AI Wheelchair",
    desc: "Voice- and tongue-controlled assistive mobility device powered by ML.",
    tech: ["Arduino", "ML", "IoT"]
  },
  {
    title: "TravelNow Website",
    desc: "Responsive travel planner with React and Firebase backend.",
    tech: ["React", "Firebase", "Tailwind"]
  }
];

const Projects = () => {
  return (
    <motion.section
      className="min-h-screen px-6 py-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold text-blue-500 mb-12 text-center">Projects</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md"
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="text-xl font-semibold text-blue-600 mb-2">{proj.title}</h3>
            <p className="mb-3">{proj.desc}</p>
            <div className="flex flex-wrap gap-2 text-sm text-gray-600 dark:text-gray-300">
              {proj.tech.map((tech, i) => (
                <span key={i} className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">{tech}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
