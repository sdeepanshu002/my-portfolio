import { useEffect, useState } from "react";

const ScrollProgress = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scroll = (scrollTop / docHeight) * 100;
      setScrollPercent(scroll);
    };

    window.addEventListener("scroll", updateProgress);
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-[9999] bg-transparent">
      <div
        className={`h-full transition-all duration-300 ease-out ${
          scrollPercent > 99 ? "rounded-none" : "rounded-r-full"
        } bg-blue-600 dark:bg-blue-400`}
        style={{ width: `${scrollPercent}%` }}
      />
    </div>
  );
};

export default ScrollProgress;
