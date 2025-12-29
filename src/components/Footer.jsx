import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="
        border-t
        border-black/10 dark:border-white/10
        bg-white dark:bg-black
        text-black dark:text-white
      "
    >
      <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Copyright */}
        <p className="text-xs text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Yash Bhartari. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/yashBhartari/react-vercel-deploy.git"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="
              text-gray-600 dark:text-gray-400
              hover:text-purple-500 dark:hover:text-purple-400
              transition
            "
          >
            <FaGithub size={18} />
          </a>

          <a
            href="https://linkedin.com/in/YOUR_LINKEDIN"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="
              text-gray-600 dark:text-gray-400
              hover:text-purple-500 dark:hover:text-purple-400
              transition
            "
          >
            <FaLinkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
