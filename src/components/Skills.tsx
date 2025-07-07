import { motion } from "framer-motion";

const skills = [
  { name: "HTML", icon: "/skills/html.png" },
  { name: "CSS", icon: "/skills/css.png" },
  { name: "JavaScript", icon: "/skills/js.png" },
  { name: "React", icon: "/skills/react.png" },
  { name: "Python", icon: "/skills/python.png" },
  { name: "OpenCV", icon: "/skills/opencv.png" },
  { name: "Firebase", icon: "/skills/firebase.png" },
  // Add more as needed
];

const iconVariants = {
  hidden: { opacity: 0, scale: 0.5, rotate: -45 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15
    }
  },
  hover: {
    scale: 1.2,
    rotate: 5,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 10
    }
  }
};

const Skills = () => {
  return (
    <>
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          className="flex flex-col items-center text-center"
          variants={iconVariants}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          viewport={{ once: true, amount: 0.2 }}
        >
          <img
            src={skill.icon}
            alt={skill.name}
            className="w-16 h-16 mb-2 rounded-xl shadow-lg"
          />
          <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{skill.name}</p>
        </motion.div>
      ))}
    </>
  );
};

export default Skills;
