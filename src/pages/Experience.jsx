import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap, FaCertificate } from "react-icons/fa";

const experiences = [
  {
    title: "Full Stack Developer (Freelance)",
    subtitle: "Remote",
    date: "2024 – Present",
    description:
      "Developed full-stack web applications using MERN stack, implemented authentication, REST APIs, dashboards, and modern UI.",
    icon: <FaBriefcase />,
  },
  {
    title: "Web Development Intern",
    subtitle: "Internship",
    date: "2023",
    description:
      "Worked on frontend and backend modules, improved UI using React and Tailwind, integrated APIs, and fixed production bugs.",
    icon: <FaBriefcase />,
  },
];

const education = [
  {
    title: "Bachelor of Computer Applications (BCA)",
    subtitle: "3rd Year",
    date: "2022 – 2025",
    description:
      "Studying core computer science subjects including Data Structures, DBMS, Operating Systems, and Web Technologies.",
    icon: <FaGraduationCap />,
  },
];

const certifications = [
  {
    title: "Full Stack Web Development",
    subtitle: "Online Certification",
    date: "2024",
    description:
      "Completed hands-on training in React, Node.js, MongoDB, Express, REST APIs, and deployment.",
    icon: <FaCertificate />,
  },
];

const Card = ({ item }) => (
  <motion.div
    whileHover={{ rotateX: 6, rotateY: -6, scale: 1.03 }}
    transition={{ type: "spring", stiffness: 180, damping: 14 }}
    style={{ perspective: 1200 }}
    className="
      relative rounded-2xl p-6 shadow-xl backdrop-blur-xl
      border border-black/10 dark:border-white/10
      bg-black/5 dark:bg-white/5
    "
  >
    <div className="flex items-start gap-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl
        bg-purple-500/20 text-purple-500 dark:text-purple-400 text-xl">
        {item.icon}
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-black dark:text-white">
          {item.title}
        </h3>
        <p className="text-sm text-purple-600 dark:text-purple-300">
          {item.subtitle}
        </p>
        <p className="text-xs text-gray-600 dark:text-gray-400">
          {item.date}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>

    {/* Glow */}
    <div className="
      absolute inset-0 -z-10 rounded-2xl
      bg-purple-500/10 dark:bg-purple-600/10
      opacity-0 hover:opacity-100
      transition duration-500 blur-2xl
    " />
  </motion.div>
);

const Experience = () => {
  return (
    <section
      id="experience"
      className="
        relative min-h-screen py-24 overflow-hidden
        bg-white dark:bg-black
        text-black dark:text-white
      "
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div
          className="
            absolute top-1/2 left-1/2 h-[600px] w-[600px]
            -translate-x-1/2 -translate-y-1/2 rounded-full
            bg-purple-500/20 dark:bg-purple-600/20
            blur-3xl
          "
        />
      </div>

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
            Experience &{" "}
            <span className="text-purple-500 dark:text-purple-400">
              Education
            </span>
          </h2>
          <p className="mt-4 text-sm md:text-base text-gray-600 dark:text-gray-400">
            My professional journey and academic background
          </p>
        </motion.div>

        {/* Experience */}
        <div className="mb-16">
          <h3 className="mb-6 text-2xl font-semibold text-purple-500 dark:text-purple-300">
            💼 Experience
          </h3>
          <div className="grid gap-8 md:grid-cols-2">
            {experiences.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card item={item} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="mb-6 text-2xl font-semibold text-purple-500 dark:text-purple-300">
            🎓 Education
          </h3>
          <div className="grid gap-8 md:grid-cols-2">
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card item={item} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="mb-6 text-2xl font-semibold text-purple-500 dark:text-purple-300">
            📜 Certifications
          </h3>
          <div className="grid gap-8 md:grid-cols-2">
            {certifications.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card item={item} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
