import { motion } from "framer-motion";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const projects = [
    
  {
    title: "UrbanSafeFlow",
    year: "2024",
    description: "AI-powered adaptive traffic control system deployed in Aurangabad Smart City zone.",
    tech: ["YOLOv9", "OpenCV", "WebSockets"],
    link: "https://github.com/sdeepanshu002"
  },
  {
    title: "Smart Wheelchair",
    year: "2023",
    description: "Voice and tongue-operated AI wheelchair funded by ₹2.5L DST grant.",
    tech: ["Python", "Flask", "Arduino"],
    link: "https://github.com/sdeepanshu002"
  },
  {
    title: "Drone Surveillance",
    year: "2022",
    description: "Real-time drone patrol with incident reporting for defense & disaster zones.",
    tech: ["Python", "YOLOv5", "GPS"],
    link: "https://github.com/sdeepanshu002"
  },
  {
    title: "DeepSan Travel",
    year: "2023",
    description: "A travel planner with route mapping using Google Maps API and React.",
    tech: ["HTML", "CSS", "PHP"],
    link: "https://deepsantravel.netlify.app"
  }
];

const ProjectsPage = () => {
    const navigate = useNavigate();
  return (
    <>
      <main className="max-w-6xl mx-auto px-4 py-12 text-gray-800 dark:text-gray-200">
        <motion.h1
          className="text-4xl font-bold text-blue-600 mb-6 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Full Project Portfolio
        </motion.h1>

        <motion.div
          className="grid md:grid-cols-2 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 }
            }
          }}
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="bg-white dark:bg-gray-800 border-l-4 border-blue-500 p-6 rounded-lg shadow hover:shadow-md transition"
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: { opacity: 1, x: 0 }
              }}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-1">
                {project.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{project.year}</p>
              <p className="mb-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 text-sm mt-2">
                {project.tech.map((t, j) => (
                  <span key={j} className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded text-blue-600 dark:text-blue-300">
                    {t}
                  </span>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  className="block mt-4 text-blue-600 hover:underline text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🔗 View Project
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>

        
      </main>
      {/* Go Back Button */}
      <div className="mt-12 flex justify-center">
        <button
          onClick={() => navigate("/")}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          ⬅️ Go Back
        </button>
      </div>
      <Footer />
    </>
  );
};

export default ProjectsPage;
