import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" }, // ✅ SCROLL
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  const location = useLocation();
  const navigate = useNavigate();

  /* ---------------- THEME ---------------- */
  useEffect(() => {
    const root = document.documentElement;
    theme === "dark" ? root.classList.add("dark") : root.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  /* ---------------- SCROLL EFFECT ---------------- */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  /* ---------------- NAV CLICK ---------------- */
  const handleNavClick = (item) => {
    if (item.href.startsWith("#")) {
      const sectionId = item.href.substring(1);

      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          document
            .getElementById(sectionId)
            ?.scrollIntoView({ behavior: "smooth" });
        }, 300);
      } else {
        document
          .getElementById(sectionId)
          ?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(item.href);
    }

    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50
          ${
            isScrolled
              ? "bg-white/90 dark:bg-black/90 backdrop-blur-md border-b border-black/10 dark:border-white/10"
              : "bg-white dark:bg-black"
          }`}
      >
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div
              onClick={() => navigate("/")}
              className="flex items-center gap-3 cursor-pointer"
            >
              {/* <img
                src="./src/assets/images/code.png"
                alt="logo"
                className="w-7 h-7"
              /> */}
              <div>
                <span className="block text-lg font-bold">
                  Demo Portfolio
                </span>
                <span className="block -mt-1 text-xs text-gray-500">
                  Full Stack MERN
                </span>
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-2">
              {navItems.map((item) => (
                <motion.div
                  key={item.name}
                  onClick={() => handleNavClick(item)}
                  onMouseEnter={() => setHoveredItem(item.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className="relative cursor-pointer"
                >
                  <span
                    className={`px-4 py-2 rounded-lg text-sm font-medium
                      ${
                        hoveredItem === item.name
                          ? "text-purple-600"
                          : "text-black dark:text-white"
                      }`}
                  >
                    {(hoveredItem === item.name ||
                      location.pathname === item.href) && (
                      <motion.div
                        layoutId="navbar-hover"
                        className="absolute inset-0 rounded-lg bg-black/5 dark:bg-white/10"
                      />
                    )}
                    <span className="relative z-10">{item.name}</span>
                  </span>
                </motion.div>
              ))}
            </nav>

            {/* Right Controls */}
            <div className="flex items-center gap-3">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="flex h-9 w-9 items-center justify-center rounded-full
                  border border-black/20 dark:border-white/20"
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              {/* Mobile Menu */}
              <button
                className="lg:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* ================= MOBILE MENU ================= */}
     <AnimatePresence>
  {isMobileMenuOpen && (
    <>
      {/* Backdrop - Fixed with fade animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Menu - Fixed with explicit X-axis movement */}
      <motion.div
        initial={{ x: "110%", opacity: 0 }} // Starts completely off-screen to the right
        animate={{ x: 0, opacity: 1 }}      // Slides into the right-4 position
        exit={{ x: "110%", opacity: 0 }}    // Slides back out to the right
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed top-20 right-4 z-50 w-72 rounded-2xl
          bg-white dark:bg-zinc-900 p-4 shadow-2xl border border-zinc-200 dark:border-zinc-800"
      >
        <div className="flex flex-col gap-1">
          {navItems.map((item) => (
            <div
              key={item.name}
              onClick={() => handleNavClick(item)}
              className="px-4 py-3 rounded-xl cursor-pointer
                text-zinc-600 dark:text-zinc-300
                hover:bg-zinc-100 dark:hover:bg-zinc-800 
                hover:text-black dark:hover:text-white
                transition-colors"
            >
              {item.name}
            </div>
          ))}
        </div>
      </motion.div>
    </>
  )}
</AnimatePresence>
    </>
  );
};

export default NavBar;
