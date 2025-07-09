import { useState, useEffect } from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Github,
  Link,
  Mail,
  Phone,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleSection = (section: string) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  const SectionTitle = ({
    title,
    id,
  }: {
    title: string;
    id: string;
  }) => (
    <div
      className="flex items-center justify-between cursor-pointer md:cursor-default"
      onClick={() => isMobile && toggleSection(id)}
    >
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      {isMobile &&
        (openSection === id ? (
          <ChevronUp className="w-5 h-5" />
        ) : (
          <ChevronDown className="w-5 h-5" />
        ))}
    </div>
  );

  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Quick Links */}
        <div>
          <SectionTitle title="Quick Links" id="quick" />
          {(openSection === "quick" || !isMobile) && (
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:text-blue-400 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/#about" className="hover:text-blue-400 transition">
                  About Me
                </a>
              </li>
              <li>
                <a href="/#projects" className="hover:text-blue-400 transition">
                  Projects
                </a>
              </li>
            </ul>
          )}
        </div>

        {/* Extra Links */}
        <div>
          <SectionTitle title="Extra Links" id="extra" />
          {(openSection === "extra" || !isMobile) && (
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/#skills" className="hover:text-blue-400 transition">
                  Skills
                </a>
              </li>
              <li>
                <a href="/#timeline" className="hover:text-blue-400 transition">
                  Timeline
                </a>
              </li>
              <li>
                <a
                  href="/#achievements"
                  className="hover:text-blue-400 transition"
                >
                  Achievements
                </a>
              </li>
              <li>
                <a href="/#contact" className="hover:text-blue-400 transition">
                  Contact
                </a>
              </li>
            </ul>
          )}
        </div>

        {/* Contact Info */}
        <div>
          <SectionTitle title="Contact Info" id="contact" />
          {(openSection === "contact" || !isMobile) && (
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-green-400" />
                <a href="tel:+917385061843">+91 73850 61843</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-green-400" />
                <a href="mailto:sdeepanshu002@gmail.com">
                  sdeepanshu002@gmail.com
                </a>
              </li>
            </ul>
          )}
        </div>

        {/* Social Links */}
        <div>
          <SectionTitle title="Follow Me" id="social" />
          {(openSection === "social" || !isMobile) && (
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-pink-400" />
                <a
                  href="https://www.instagram.com/deepanshu_sharma24?igsh=MWlzNWgzYnJ2NnBmZw=="
                  target="_blank"
                  className="hover:text-blue-400 transition"
                >
                  Instagram
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Linkedin className="w-4 h-4 text-blue-500" />
                <a
                  href="https://www.linkedin.com/in/deepanshu-sharma-241202ds"
                  target="_blank"
                  className="hover:text-blue-400 transition"
                >
                  LinkedIn
                </a>
              </li>
              <li className="flex items-center gap-2">
  <Github className="w-4 h-4 text-gray-300" />
  <a
    href="https://github.com/sdeepanshu002"
    target="_blank"
    className="hover:text-blue-400 transition"
  >
    GitHub
  </a>
</li>
              <li className="flex items-center gap-2">
                <Link className="w-4 h-4 text-green-400" />
                <a
                  href="https://linktr.ee/sdeepanshu002"
                  target="_blank"
                  className="hover:text-blue-400 transition"
                >
                  LinkTree
                </a>
              </li>
            </ul>
          )}
        </div>
      </div>

      <div className="text-center mt-10 text-xs text-gray-400 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Deepanshu Sharma. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
