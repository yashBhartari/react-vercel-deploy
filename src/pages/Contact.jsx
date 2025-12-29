import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      formRef.current,
      "YOUR_PUBLIC_KEY"
    );

    e.target.reset();
  };

  return (
    <section
      id="contact"
      className="
        relative min-h-screen py-24
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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Get In{" "}
            <span className="text-purple-500 dark:text-purple-400">
              Touch
            </span>
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Let’s build something amazing 🚀
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Contact Me
            </h3>

            <p className="text-gray-600 dark:text-gray-400">
              Open to internships, freelance, and full-time roles.
            </p>

            <div className="flex gap-6">
              <a href="https://github.com/yashBhartari/react-vercel-deploy.git" target="_blank">
                <FaGithub className="text-2xl hover:text-purple-500" />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank">
                <FaLinkedin className="text-2xl hover:text-purple-500" />
              </a>
              <a href="mailto:your@email.com">
                <FaEnvelope className="text-2xl hover:text-purple-500" />
              </a>
            </div>
          </div>

          {/* Form */}
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="
              rounded-2xl p-8 space-y-6
              border border-black/10 dark:border-white/10
              bg-black/5 dark:bg-white/5
            "
          >
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-lg"
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-lg"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="w-full p-3 rounded-lg"
            />

            <button
              type="submit"
              className="w-full bg-purple-500 text-white py-3 rounded-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
