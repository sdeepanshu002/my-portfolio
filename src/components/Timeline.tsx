const Timeline = () => {
  const items = [
    { year: "2022–2024", title: "SIH Winner (3x)", desc: "Built AI/IoT systems for defense, traffic & agri." },
    { year: "2023", title: "PowerX Pvt. Ltd.", desc: "Developed UrbanSafeFlow with YOLOv9 + WebSockets." },
    { year: "2024", title: "₹2.5 Lakh Grant", desc: "Tongue-controlled wheelchair using OpenCV & Arduino." },
  ];
  return (
    <ol className="border-l-2 border-blue-500 ml-2 mt-6">
      {items.map((item, i) => (
        <li key={i} className="mb-8 ml-4">
          <div className="absolute w-3 h-3 bg-blue-600 rounded-full mt-1.5 -left-1.5 border border-white"></div>
          <time className="text-sm font-semibold text-gray-700 dark:text-gray-300">{item.year}</time>
          <h3 className="text-lg font-bold text-blue-600">{item.title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">{item.desc}</p>
        </li>
      ))}
    </ol>
  );
};

export default Timeline;
