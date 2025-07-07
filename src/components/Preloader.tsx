import { motion } from "framer-motion";

const Preloader = () => (
  <motion.div
    initial={{ opacity: 1 }}
    animate={{ opacity: 0 }}
    transition={{ delay: 1.5, duration: 0.5 }}
    className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-900 z-50"
  >
    <h1 className="text-3xl font-bold text-blue-600 animate-pulse">Deepanshu Sharma</h1>
  </motion.div>
);

export default Preloader;
