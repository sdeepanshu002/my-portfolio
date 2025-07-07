import Lottie from "lottie-react";
import animationData from "../assets/lottie/tech-bg.json";

const AnimatedBackground = () => (
  <div className="fixed top-0 left-0 w-full h-full -z-10 opacity-20 pointer-events-none">
    <Lottie animationData={animationData} loop autoplay />
  </div>
);

export default AnimatedBackground;
