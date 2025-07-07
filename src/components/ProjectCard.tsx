const ProjectCard = ({ title, description, link }: { title: string; description: string; link: string }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" className="border rounded-lg p-4 shadow hover:shadow-md transition">
    <h3 className="text-xl font-semibold text-blue-600 mb-2">{title}</h3>
    <p className="text-gray-700 dark:text-gray-300">{description}</p>
  </a>
);

export default ProjectCard;