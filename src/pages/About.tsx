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
      <h2 className="text-3xl font-bold text-blue-600 mb-4">About Me</h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
        I'm <strong>Deepanshu Sharma</strong>, a Computer Science graduate focused on
        building intelligent systems using Python, OpenCV, and modern web technologies.
        I've built real-time traffic systems, assistive AI tools, and won multiple national hackathons (SIH).
      </p>
      <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
        I was part of <strong>PowerX Pvt. Ltd.</strong> and enjoy solving real-world problems in different domains.
      </p>
      
      <div className="mt-12">
        <h3 className="text-2xl font-bold text-blue-600 mb-2">Experience Timeline</h3>
        
      </div>
    </motion.section>
  </>
);

export default About;