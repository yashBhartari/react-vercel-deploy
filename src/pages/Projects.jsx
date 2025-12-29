import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import attendanceImg from "../assets/images/attendance.png";
import libraryImg from "../assets/images/library.png";
import resumeImg from "../assets/images/resume.png";
import weatherImg from "../assets/images/weather.png";

const projects = [
  {
    title: "Attendance Application",
    description:
      "A full-stack attendance management system with authentication and admin dashboard.",
    stack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    image: attendanceImg,
    github: "https://github.com/yourusername/attendance-app",
    demo: "#",
  },
  {
    title: "Library Management System",
    description:
      "Library system for managing books, users, and issue records.",
    stack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    image: libraryImg,
    github: "https://github.com/yourusername/library-management",
    demo: "#",
  },
  {
    title: "Resume Analyzer",
    description:
      "AI-powered resume analyzer based on ATS rules.",
    stack: ["React", "Node.js", "MongoDB"],
    image: resumeImg,
    github: "https://github.com/yourusername/resume-analyzer",
    demo: "#",
  },
  {
    title: "Weather App",
    description:
      "Real-time weather app with modern UI.",
    stack: ["React", "API", "Tailwind"],
    image: weatherImg,
    github: "https://github.com/yourusername/weather-app",
    demo: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects" // ⭐ REQUIRED FOR SCROLL
      className="
        relative min-h-screen py-24
        bg-white dark:bg-black
        text-black dark:text-white
      "
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            My <span className="text-purple-500">Projects</span>
          </h2>
          <p className="mt-4 text-gray-500">
            Real-world applications showcasing my skills
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
