// File: src/pages/Projects.tsx
import { motion } from "framer-motion";

const projects = [
  {
    title: "UrbanSafeFlow",
    description: "AI-based smart traffic signal system using multi-camera analysis and adaptive timers.",
    tech: ["Python", "OpenCV", "WebSockets", "YOLOv9"],
    link: "#"
  },
  {
    title: "Smart Wheelchair",
    description: "Tongue-operated wheelchair with AI-powered navigation and fall detection.",
    tech: ["Python", "Flask", "Firebase"],
    link: "#"
  },
  {
    title: "TravelX Web App",
    description: "A responsive travel guide and planner built with React and Google Maps API.",
    tech: ["React", "Tailwind", "Google Maps API"],
    link: "#"
  }
];

const Projects = () => (
  <motion.section
    className="min-h-screen px-6 py-20 bg-white dark:bg-gray-950 text-gray-800 dark:text-white"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6 }}
  >
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-blue-500 mb-12">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="bg-gray-100 dark:bg-gray-900 rounded-xl p-6 shadow hover:shadow-xl transition duration-300"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl font-semibold text-blue-400 mb-2">{project.title}</h3>
            <p className="mb-3 text-sm text-gray-600 dark:text-gray-300">{project.description}</p>
            <div className="flex flex-wrap gap-2 text-sm text-blue-500">
              {project.tech.map((tech, i) => (
                <span key={i} className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
            <a href={project.link} className="block mt-4 text-blue-600 hover:underline text-sm">
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.section>
);

export default Projects;
