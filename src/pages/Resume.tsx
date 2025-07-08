import { useNavigate } from "react-router-dom";

const Resume = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen p-4 bg-white dark:bg-gray-900 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">📄 My Resume</h1>

      <div className="w-full max-w-4xl h-[90vh] shadow-lg border rounded overflow-hidden mb-6">
        <iframe
          src="/resume.pdf"
          title="Resume"
          className="w-full h-full"
          style={{ border: "none" }}
        ></iframe>
      </div>

      <button
        onClick={() => navigate(-1)}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        ⬅️ Go Back
      </button>
    </div>
  );
};

export default Resume;
