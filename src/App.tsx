import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AchievementsPage from "./pages/AchievementsPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/achievements" element={<AchievementsPage />} />
      </Routes>
    </>
  );
}

export default App;
