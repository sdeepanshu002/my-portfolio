import AnimatedBackground from "../components/AnimatedBackground";

const NotFound = () => {
  return (
    <>
      <AnimatedBackground />
      <div className="min-h-screen flex flex-col items-center justify-center relative z-10">
        <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
        <p className="text-xl text-gray-300">Oops! The page you're looking for doesn't exist.</p>
      </div>
    </>
  );
};

export default NotFound;
