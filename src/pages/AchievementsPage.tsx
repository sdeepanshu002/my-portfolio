import { motion } from "framer-motion";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const AchievementsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <main className="max-w-4xl mx-auto px-4 py-12 text-gray-800 dark:text-gray-200">
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
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {[
            {
              title: "🏆 Winner – Smart India Hackathon (2022, 2023, 2024)",
              year: "2022–2024",
              details:
                "Secured national-level wins at Smart India Hackathon three years in a row organized by MoE (Ministry of Education), MoE's Innovation Cell, AICTE (All India Council of Technical Education). Projects included a YOLOv9-powered real-time traffic management system, a defense-grade drone patrol using GPS+ML, and an agri-analytics platform. Each solution was judged on innovation, feasibility, and real-world impact by ministry panels.",
            },
            {
              title: "💰 Innovation Grant – Tongue Operated Smart Wheelchair",
              year: "2023",
              details:
                "Received ₹2.5 lakh funding from the Department of Science & Technology, Government of India, for an AI-powered assistive wheelchair. The system integrates voice and tongue controls with OpenCV-based obstacle detection, and supports fall detection and autonomous navigation in constrained indoor spaces.",
            },
            {
              title: "🌍 Anveshan Research Convention",
              year: "(2022–2025)",
              details:
                "Presented different solutions at the International Research Convention organized by AIU (Association of Indian Universities). Demonstrated live simulations using adaptive traffic control, multi-camera integration, and real-time analytics dashboard. The project was appreciated for urban scalability and AI-driven decision-making.",
            },
            {
              title: "🚀 Part of Team PowerX Pvt. Ltd.",
              year: "2023–2024",
              details:
                "Contributed to PowerX as a key team member. Involved in the UrbanSafeFlow system's pilot deployment for Aurangabad Smart City. Worked on YOLOv9 integration, WebSocket-based communication between edge devices and cloud dashboards, and conducted stakeholder demos with local authorities.",
            },
            {
              title: "👨‍💻 Hackathons & Challenges",
              year: "2022–2024",
              details:
                "Won multiple technical challenges, AI/ML Problem Solving Series for Governance hackathons. Delivered working MVPs within 36–48 hours of problem release, often combining web, mobile, ML, and hardware integration under pressure.",
            },
          ].map((ach, i) => (
            <motion.li
              key={i}
              className="border-l-4 border-blue-500 pl-4 py-2"
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <h3 className="text-xl font-semibold text-blue-600">
                {ach.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {ach.year}
              </p>
              <p className="mt-1">{ach.details}</p>
            </motion.li>
          ))}
        </motion.ul>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          

          <button
            onClick={() => navigate("/")}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            ⬅️ Go Back
          </button>


          <button
            onClick={() => navigate("/certificates")}
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
          >
            📄 View Certificates
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AchievementsPage;
