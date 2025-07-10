import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const gallery = [
  {
    title: "Smart India Hackathon (2022)",
    file: "/certificates/sih2022.jpg",
  },
  {
    title: "Smart India Hackathon (2023)",
    file: "/certificates/sih2023.jpg",
  },
  {
    title: "Smart India Hackathon (2024)",
    file: "/certificates/sih2024.jpg",
  },
  {
    title: "IDE Bootcamp - NIE Mysuru",
    file: "/certificates/idemysuru.jpg",
  },
  {
    title: "IDE Bootcamp - NIT GOA",
    file: "/certificates/idegoa.jpg",
  },
  

];

const GalleryPage = () => {
    const navigate = useNavigate();
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  useEffect(() => {
    const disableContextMenu = (e: MouseEvent) => e.preventDefault();
    document.addEventListener("contextmenu", disableContextMenu);
    return () => document.removeEventListener("contextmenu", disableContextMenu);
  }, []);

  // Close lightbox on ESC
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxImage(null);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <>
      <main className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-blue-600 mb-10 text-center">
          🖼️ Gallery
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {gallery.map((cert, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg shadow hover:shadow-lg transition overflow-hidden cursor-pointer"
              onClick={() => setLightboxImage(cert.file)}
            >
              <div className="w-full aspect-square overflow-hidden">
                <img
                  src={cert.file}
                  alt={cert.title}
                  className="w-full h-full object-cover"
                  draggable={false}
                />
              </div>
              <div className="p-3 text-center">
                <h3 className="text-md font-semibold text-blue-600">{cert.title}</h3>
              </div>
            </div>
          ))}
        </div>
        
            </main>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-5 right-5 text-white bg-black/50 p-2 rounded-full hover:bg-black"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={lightboxImage}
            alt="Gallery preview"
            className="max-w-full max-h-[90vh] rounded-lg shadow-xl"
            onClick={(e) => e.stopPropagation()}
            draggable={false}
          />
        </div>
      )}

      {/* Go Back Button */}
      <div className="mt-12 flex justify-center">
        <button
          onClick={() => navigate("/")}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          ⬅️ Go Back
        </button>
      </div>

      <Footer />

    </>
  );
};

export default GalleryPage;
