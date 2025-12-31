import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{
        rotateX: 8,
        rotateY: -8,
        scale: 1.04,
      }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      style={{ perspective: 1200 }}
      className="group relative rounded-2xl border border-white/10 
      bg-white/5 backdrop-blur-xl overflow-hidden shadow-xl"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold text-purple-300">
          {project.title}
        </h3>

        <p className="text-sm text-gray-400 leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech, index) => (
            <span
              key={index}
              className="rounded-full border border-white/10 
              bg-white/10 px-3 py-1 text-xs text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 pt-4">
          <a
            href={project.github}
            target="_blank"
            className="inline-flex items-center gap-2 text-sm 
            text-gray-300 hover:text-white transition"
          >
            <FaGithub /> GitHub
          </a>

          <a
            href={project.demo}
            target="_blank"
            className="inline-flex items-center gap-2 text-sm 
            text-purple-400 hover:text-purple-300 transition"
          >
            <FaExternalLinkAlt /> Live Demo
          </a>
        </div>
      </div>

      {/* Glow */}
      <div className="absolute inset-0 -z-10 rounded-2xl 
      bg-purple-600/10 opacity-0 group-hover:opacity-100 
      transition duration-500 blur-2xl" />
    </motion.div>
  );
};

export default ProjectCard;
