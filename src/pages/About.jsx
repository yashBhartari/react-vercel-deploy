import { motion } from "framer-motion";
import personImg from "../assets/images/person.jpg";

const floatAnimation = {
  animate: {
    y: [0, -12, 0],
  },
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

const About = () => {
  return (
    <section
      id="about"
      className="
        relative min-h-screen flex items-center justify-center overflow-hidden
        bg-white dark:bg-black
        text-black dark:text-white
      "
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div
          className="
            absolute top-1/2 left-1/2 h-[500px] w-[500px]
            -translate-x-1/2 -translate-y-1/2 rounded-full
            bg-purple-500/20 dark:bg-purple-600/20
            blur-3xl
          "
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12 text-center md:text-left justify-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="space-y-6 flex flex-col items-center md:items-start"
        >
          <span
            className="
              inline-block rounded-full px-4 py-1 text-xs
              border border-black/20 dark:border-white/20
              text-gray-700 dark:text-gray-300
            "
          >
            👋 Hello, I’m
          </span>

          <h1 className="text-4xl md:text-6xl font-bold">
            Demo{" "}
            <span className="text-purple-500 dark:text-purple-400">
              Portfolio
            </span>
          </h1>

          <h2 className="text-xl md:text-2xl text-gray-700 dark:text-gray-300">
            Full Stack MERN Developer
          </h2>

          <p className="max-w-lg text-gray-600 dark:text-gray-400">
            I build scalable, high-performance web applications using MongoDB,
            Express, React, and Node.js.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto justify-center md:justify-start">
            <motion.a
              href="/resume.pdf"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="
                rounded-lg bg-black dark:bg-white
                text-white dark:text-black
                px-6 py-3 text-sm font-semibold
                text-center
              "
            >
              Download Resume
            </motion.a>

            {/* CONTACT SCROLL BUTTON */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="
                rounded-lg border border-black/20 dark:border-white/20
                px-6 py-3 text-sm font-semibold
                hover:bg-black/5 dark:hover:bg-white/10
                text-center
              "
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div className="flex justify-center mt-8 md:mt-0" {...floatAnimation}>
          <motion.div
            whileHover={{ rotateX: 12, rotateY: -12, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 120 }}
            style={{ perspective: 1000 }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-full bg-purple-500/30 blur-2xl" />
            <img
              src={personImg}
              alt="Yash Bhartari"
              className="
                relative w-60 h-60 md:w-80 md:h-80 rounded-full
                object-cover border border-black/20 dark:border-white/20
              "
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
