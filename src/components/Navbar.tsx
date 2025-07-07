import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Moon, Sun } from "lucide-react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    return localStorage.getItem("theme") === "dark" || window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (sectionId: string) => {
    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      // Wait for page to load then scroll
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        el?.scrollIntoView({ behavior: "smooth" });
      }, 200);
    } else {
      const el = document.getElementById(sectionId);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white dark:bg-gray-950 text-gray-800 dark:text-white shadow-md sticky top-0 z-50">
      <div className="text-2xl font-bold text-blue-500 cursor-pointer" onClick={() => handleNavClick("home")}>
        Deepanshu
      </div>
      <div className="flex items-center gap-6">
        <button onClick={() => handleNavClick("home")} className="hover:text-blue-500 transition">Home</button>
        <button onClick={() => handleNavClick("about")} className="hover:text-blue-500 transition">About</button>
        <button onClick={() => handleNavClick("skills")} className="hover:text-blue-500 transition">Skills</button>
        <button onClick={() => handleNavClick("achievements")} className="hover:text-blue-500 transition">Achievements</button>
        <button onClick={() => handleNavClick("projects")} className="hover:text-blue-500 transition">Projects</button>
        <button onClick={() => handleNavClick("contact")} className="hover:text-blue-500 transition">Contact</button>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="ml-4 p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800 transition"
          aria-label="Toggle Theme"
        >
          {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
