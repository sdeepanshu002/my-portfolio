import { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import Skills from "../components/Skills";
import Timeline from "../components/Timeline";
import SocialLinks from "../components/SocialLinks";
import ProjectCard from "../components/ProjectCard";
import AnimatedBackground from "../components/AnimatedBackground";
import { motion } from "framer-motion";
import Achievements from "../components/Achievements";
import { useState } from "react";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase";
import Footer from "../components/Footer";
import About from "./About";




const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
const [formData, setFormData] = useState({
  name: "",
  email: "",
  message: ""
});
const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  return (
    <>
      <AnimatedBackground />

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col justify-center px-4 text-center md:text-left relative z-10">
  <div className="flex flex-col md:flex-row items-center gap-8 max-w-5xl mx-auto">
    
    {/* 👤 Image Section */}
    <div className="flex-shrink-0">
      <img
        src="/photo.jpg" // ⬅️ Replace with your actual image path in /public
        alt="Deepanshu Sharma"
        className="w-48 h-48 rounded-full object-cover border-4 border-blue-500 shadow-lg"
      />
    </div>

    {/* 👋 Text Section */}
    <div className="flex flex-col items-center md:items-start text-center md:text-left">
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
        Hi, I'm <span className="text-blue-400">Deepanshu Sharma</span>
      </h1>

      <TypeAnimation
        sequence={[
          "Driven by Passion, powered by Technology",
          2000,
          "3× Smart India Hackathon Winner",
          2000,
          "Developer | Problem Solver | Team Player",
          2000
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
        className="text-lg md:text-xl text-gray-300"
      />

      <div className="mt-6">
        <SocialLinks />
      </div>

      <div className="mt-6">
        <a
          href="/resume.pdf"
          className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl text-lg hover:bg-gray-200 transition"
        >
          📄 Download Resume
        </a>
      </div>
    </div>
  </div>

  {/* ⬇️ Scroll prompt */}
  <div className="mt-20 animate-bounce text-center">
    <svg className="w-6 h-6 mx-auto text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
    <p className="text-sm text-gray-400 mt-2">Scroll down to explore more</p>
  </div>
</section>


      {/* About Section */}
      <section id="about" className="max-w-3xl mx-auto p-4 relative z-10">
       <About/>
        

        
      </section>

{/* Skills Section */}
<section id="skills" className="max-w-5xl mx-auto py-12 px-4 relative z-10">
  <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">Skills</h2>
  <motion.div
    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={{
      hidden: {},
      visible: {
        transition: {
          staggerChildren: 0.15
        }
      }
    }}
  >
    <Skills />
  </motion.div>
</section>

{/* Projects Section */}
      <section id="projects" className="max-w-5xl mx-auto py-12 px-4 relative z-10">
  <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">Projects</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <ProjectCard title="UrbanSafeFlow" description="AI-based adaptive traffic control system for Smart City." link="#" />
    <ProjectCard title="Smart Wheelchair" description="Tongue-controlled AI wheelchair using ML & IoT." link="#" />
    <ProjectCard title="Drone Surveillance" description="Real-time drone surveillance with automated incident reporting." link="#" />
  </div>

  <div className="mt-8 text-center">
    <a
      href="/projects"
      className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
    >
      📜 Read More
    </a>
  </div>
</section>


{/* Timeline Section */}
      <section id="timeline" className="max-w-3xl mx-auto p-4 relative z-10">
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-blue-600 mb-2">Experience Timeline</h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Timeline />
          </motion.div>
        </div>
      </section>


{/* Achievements Section */}
<section id="achievements" className="max-w-5xl mx-auto py-12 px-4 relative z-10">
  <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">Achievements</h2>
  <Achievements />

  <div className="mt-8 text-center">
    <a
      href="/achievements"
      className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
    >
      📜 Read More
    </a>
  </div>
</section>





      {/* Contact Section */}
<section id="contact" className="max-w-xl mx-auto py-12 relative z-10">
  <h2 className="text-3xl font-bold text-blue-600 mb-4 text-center">Contact Me</h2>

  <form
    onSubmit={async (e) => {
      e.preventDefault();
      setStatus("sending");
      try {
        await addDoc(collection(db, "messages"), {
          ...formData,
          timestamp: Timestamp.now()
        });
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } catch (err) {
        console.error(err);
        setStatus("error");
      }
    }}
    className="flex flex-col gap-4"
  >
    <input
      type="text"
      name="name"
      placeholder="Your Name"
      required
      value={formData.name}
      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      className="p-2 border rounded text-black dark:text-white bg-white dark:bg-gray-900"
    />
    <input
      type="email"
      name="email"
      placeholder="Your Email"
      required
      value={formData.email}
      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      className="p-2 border rounded text-black dark:text-white bg-white dark:bg-gray-900"
    />
    <textarea
      name="message"
      placeholder="Your Message"
      rows={5}
      required
      value={formData.message}
      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
      className="p-2 border rounded text-black dark:text-white bg-white dark:bg-gray-900"
    ></textarea>
    <button
      type="submit"
      disabled={status === "sending"}
      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
    >
      {status === "sending" ? "Sending..." : "Send"}
    </button>
  </form>

  {status === "success" && (
    <p className="mt-4 text-green-600 text-center">✅ Message sent successfully!</p>
  )}
  {status === "error" && (
    <p className="mt-4 text-red-600 text-center">❌ Something went wrong. Try again.</p>
  )}
</section>

<Footer />


    </>
  );
};

export default Home;
