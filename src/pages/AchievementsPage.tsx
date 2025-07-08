import { motion } from "framer-motion";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";


const AchievementsPage = () => {
    const navigate = useNavigate();
  return (
    <><main className="max-w-4xl mx-auto px-4 py-12 text-gray-800 dark:text-gray-200">
          <motion.h1
              className="text-4xl font-bold text-blue-600 mb-6 text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
          >
              Full Achievements
          </motion.h1>

          <motion.ul
              className="space-y-6"
              initial="hidden"
              animate="visible"
              variants={{
                  hidden: {},
                  visible: {
                      transition: {
                          staggerChildren: 0.2
                      }
                  }
              }}
          >
              {[
                  {
                      title: "1st Place - Smart India Hackathon",
                      details: "Built a real-time traffic signal system using YOLOv9 + OpenCV. Deployed pilot in Aurangabad Smart City zone.",
                      year: "2022"
                  },
                  {
                      title: "Government Innovation Grant",
                      details: "Awarded ₹2.5 lakh for an AI-powered wheelchair with tongue and voice control. Recognized by DST-Govt. of India.",
                      year: "2023"
                  },
                  {
                      title: "Presented at International Research Conclave",
                      details: "Showcased UrbanSafeFlow project with live simulations and AI dashboard analytics.",
                      year: "2024"
                  },
                  {
                      title: "Founder - PowerX Pvt. Ltd.",
                      details: "Launched a startup solving Smart City and Traffic Safety problems through AI, ML, and IoT.",
                      year: "2024"
                  }
              ].map((ach, i) => (
                  <motion.li
                      key={i}
                      className="border-l-4 border-blue-500 pl-4 py-2"
                      variants={{
                          hidden: { opacity: 0, x: -30 },
                          visible: { opacity: 1, x: 0 }
                      }}
                  >
                      <h3 className="text-xl font-semibold text-blue-600">{ach.title}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{ach.year}</p>
                      <p className="mt-1">{ach.details}</p>
                  </motion.li>
              ))}
          </motion.ul>
          <button
        onClick={() => navigate(-1)}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        ⬅️ Go Back
      </button>
      </main><Footer /></>

  );
};

export default AchievementsPage;
