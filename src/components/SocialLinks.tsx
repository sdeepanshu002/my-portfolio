const SocialLinks = () => {
  return (
    <div className="flex flex-wrap gap-6 justify-center mt-6 text-xl">
      <a href="https://www.linkedin.com/in/deepanshu-sharma-3621a921b" target="_blank" rel="noreferrer" className="hover:text-blue-600">🔗 LinkedIn</a>
      <a href="https://github.com/sdeepanshu002" target="_blank" rel="noreferrer" className="hover:text-blue-600">💻 GitHub</a>
      <a href="mailto:sdeepanshu002@gmail.com" className="hover:text-blue-600">✉️ Email</a>
      <a href="https://linktr.ee/sdeepanshu002" className="hover:text-blue-600">✉️ LinkTree</a>
      <a href="/resume.pdf" download className="hover:text-purple-600">📄 Download Resume</a>
    </div>
  );
};

export default SocialLinks;