import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostman,
} from "react-icons/si";

const skillsData = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: <FaReact />, level: 85 },
      { name: "HTML", icon: <FaHtml5 />, level: 90 },
      { name: "CSS", icon: <FaCss3Alt />, level: 85 },
      { name: "Tailwind", icon: <SiTailwindcss />, level: 80 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs />, level: 80 },
      { name: "Express", icon: <SiExpress />, level: 75 },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: <SiMongodb />, level: 80 },
      { name: "MySQL", icon: <SiMysql />, level: 75 },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt />, level: 85 },
      { name: "Postman", icon: <SiPostman />, level: 80 },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="
        relative min-h-screen py-24 overflow-hidden
        bg-white dark:bg-black
        text-black dark:text-white
      "
    >
      {/* Glow Effect */}
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
            My <span className="text-purple-500 dark:text-purple-400">Skills</span>
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Technologies I use to build scalable applications
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillsData.map((category, index) => (
            <motion.div
              key={index}
              whileHover={{ rotateX: 8, rotateY: -8, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 180 }}
              style={{ perspective: 1000 }}
              className="
                rounded-2xl p-6 shadow-xl backdrop-blur-lg
                border border-black/10 dark:border-white/10
                bg-black/5 dark:bg-white/5
              "
            >
              <h3 className="text-xl font-semibold mb-6 text-purple-500 dark:text-purple-300">
                {category.title}
              </h3>

              <div className="space-y-5">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-xl text-purple-500 dark:text-purple-400">
                          {skill.icon}
                        </span>
                        <span>{skill.name}</span>
                      </div>
                      <span className="text-xs text-gray-600 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="h-2 w-full rounded-full bg-black/10 dark:bg-white/10">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="
                          h-full rounded-full
                          bg-gradient-to-r from-purple-500 to-pink-500
                        "
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
