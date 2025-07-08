import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AchievementsPage from "./pages/AchievementsPage";
import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import ProjectsPage from "./pages/ProjectsPage";
import Resume from "./pages/Resume"; // 👈 import

function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/achievements" element={<AchievementsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </>
  );
}

export default App;
