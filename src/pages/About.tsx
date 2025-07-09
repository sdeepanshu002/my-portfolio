import { motion } from "framer-motion";
import Skills from "../components/Skills";
import Timeline from "../components/Timeline";
import AnimatedBackground from "../components/AnimatedBackground";

const About = () => (
  <>
    <AnimatedBackground />
    <motion.section
      className="max-w-3xl mx-auto p-4 relative z-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">About Me</h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
  I’m <strong>Deepanshu Sharma</strong>, a passionate and performance-driven Computer Science engineer with a focus on AI, IoT, and intelligent automation. I specialize in building real-time, problem-solving systems that address real-world needs—ranging from adaptive traffic management to assistive mobility tech.
</p>

<p className="mt-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
  Over the last few years, I’ve had the privilege of working on impactful projects that won <strong>Smart India Hackathon</strong> three times at the national level organized by MoE (Ministry of Education), MoE's Innovation Cell, AICTE (All India Council of Technical Education). These included building a <strong>tongue-operated AI-powered wheelchair</strong> for specially-abled users, a <strong>traffic signal optimization system</strong> for Smart City zones, and an AI-enhanced <strong>drone surveillance system</strong> for security and disaster response. My work has been recognized with a <strong>₹2.5 lakh Government Innovation Grant</strong> and has been showcased at the <strong>International Research Convention</strong>.
</p>

<p className="mt-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
  I was an integral part of <strong>Team PowerX</strong>, where I contributed to the development of <strong>UrbanSafeFlow</strong> — a real-time, multi-camera traffic signal control system that utilizes computer vision and WebSocket communication for adaptive decision-making. My role included model deployment, OpenCV integration, geofencing logic, and testing with Smart City simulations.
</p>

<p className="mt-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
  In addition, I’ve worked on projects like <strong>DeepSan Travel</strong> — a travel planner with real-time route mapping — and an <strong>Alexa Skill</strong> for literature access. I’ve also been a finalist and award winner at events such as <strong>Anveshan (International + Zonal + University Level) organized by AIU (Association of Indian Universities)</strong>.
</p>

<p className="mt-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
  My tech stack includes <strong>Python, React, TypeScript, OpenCV, Firebase, Flask, TailwindCSS</strong>, and I’ve worked extensively with AI models, WebSocket systems, Arduino, and Raspberry Pi. I enjoy transforming complex challenges into elegant solutions and constantly look for opportunities to learn, collaborate, and contribute to meaningful change through technology.
</p>

      
      
    </motion.section>
  </>
);

export default About;