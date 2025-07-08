import { motion } from "framer-motion";
import {
  FaTrophy,
  FaBuilding,
  FaRobot,
  FaWheelchair,
  FaLaptopCode,
  FaGraduationCap,
  FaMicrophone,
  FaAward,
  FaCode
} from "react-icons/fa";

const items = [
  {
    section: "🏆 SIH Projects"
  },
  {
    year: "2022",
    title: "SIH Winner – Tongue Operated Wheelchair",
    desc: "Won SIH 2022 with a mobility aid for physically challenged users using Arduino + sensors.",
    icon: <FaWheelchair className="text-blue-600" />,
    link: "https://drive.google.com/file/d/1XPqF3VVvu2KijPYVCjZAlpGZaR-U6MHH/view"
  },
  {
    year: "2023",
    title: "SIH Winner – Drone Surveillance System",
    desc: "Built a Raspberry Pi-based drone solution with real-time threat detection and mapping.",
    icon: <FaTrophy className="text-green-600" />
  },
  {
    year: "2024",
    title: "SIH Winner – UrbanSafeFlow AI Traffic System",
    desc: "Built real-time traffic control system using YOLOv9, OpenCV, and WebSocket logic.",
    icon: <FaTrophy className="text-blue-500" />
  },

  {
    section: "💼 Work Experience & Projects"
  },
  {
    year: "2022–2023",
    title: "Alexa Skill Developer – Snovel Creations Pvt. Ltd.",
    desc: "Created voice-based Alexa skill for literature content. Worked with AWS Lambda & Alexa Console.",
    icon: <FaRobot className="text-purple-600" />
  },
  {
    year: "2023",
    title: "DeepSan Travel Website Launch",
    desc: "Built and deployed a travel planner website using HTML, CSS, JS, and PHP.",
    icon: <FaCode className="text-pink-500" />,
    link: "https://deepsantravel.netlify.app"
  },
  {
    year: "2024–2025",
    title: "Internship – PowerX Pvt. Ltd.",
    desc: "Worked on live traffic simulations, emergency vehicle detection, and geofencing with OpenCV & Python.",
    icon: <FaLaptopCode className="text-orange-600" />,
    link: "https://drive.google.com/file/d/1lUKmTjzEd4PvTNcGn2hylc_4i4NZZ9Dl/view"
  },
  {
    year: "2024",
    title: "Co-Founder – PowerX Pvt. Ltd.",
    desc: "Founded startup focused on Smart City and AI-based traffic management solutions.",
    icon: <FaBuilding className="text-gray-600" />
  },

  {
    section: "🎓 Education & Awards"
  },
  {
    year: "2022–2025",
    title: "B.Tech in CSE – MGM University",
    desc: "Pursued Computer Science & Engineering at JNEC with active hackathon participation.",
    icon: <FaGraduationCap className="text-indigo-600" />
  },
  {
    year: "2023",
    title: "Govt. Grant – ₹2.5 Lakh for Smart Wheelchair",
    desc: "Received funding from ALIMCO + MoSJ&E for AI-powered tongue-controlled wheelchair prototype.",
    icon: <FaWheelchair className="text-yellow-500" />,
    link: "https://drive.google.com/file/d/1LdBdNc8gUWhXYoWTeB2e7ZcZQy_E6eHE/view"
  },
  {
    year: "2025",
    title: "Speaker – International Research Conclave",
    desc: "Presented UrbanSafeFlow project at Chitkara University’s academic symposium.",
    icon: <FaMicrophone className="text-red-500" />,
    link: "https://drive.google.com/file/d/1uVh33TzkHeC1zEDBWD3SzNDXZQ9HbcZJ/view"
  },
  {
    year: "2022–2025",
    title: "Winner – Anveshan (University + Zonal + National)",
    desc: "Won at university and state level with interdisciplinary projects. Finalist at national conventions.",
    icon: <FaAward className="text-yellow-600" />
  }
];

const Timeline = () => {
  return (
    <motion.ol
      className="relative ml-10 border-l-2 border-blue-500 mt-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
    >
      {items.map((item, i) =>
        item.section ? (
          <motion.li
            key={i}
            className="text-center text-xl font-bold text-blue-600 py-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            {item.section}
          </motion.li>
        ) : (
          <motion.li
            key={i}
            className="mb-10 relative pl-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Icon left of the timeline */}
            <span className="absolute -left-10 top-1 w-8 h-8 flex items-center justify-center bg-white dark:bg-gray-900 border-2 border-blue-500 rounded-full shadow">
              {item.icon}
            </span>

            <time className="text-sm font-semibold text-gray-700 dark:text-gray-300 block mb-1">{item.year}</time>
            <h3 className="text-lg font-bold text-blue-600">{item.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{item.desc}</p>

            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-sm text-blue-600 hover:underline hover:text-blue-800 transition"
              >
                🔗 View Proof
              </a>
            )}
          </motion.li>
        )
      )}
    </motion.ol>
  );
};

export default Timeline;
