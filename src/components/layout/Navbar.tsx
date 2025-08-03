import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../common/Logo";

const navLinks = [
  { title: "Home", href: "#" },
  { title: "Features", href: "#" },
  { title: "Pricing", href: "#" },
  { title: "Blog", href: "#" },
  { title: "Contact", href: "#" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const mobileMenuVariants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: "tween" as const, duration: 0.3 } },
    exit: {
      x: "-100%",
      opacity: 0,
      transition: { type: "tween" as const, duration: 0.3 },
    },
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
      <nav className="flex items-center justify-between max-w-6xl px-4 py-4 mx-auto md:py-5">
        <Logo className="text-text-dark" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <li key={link.title}>
              <a
                href={link.href}
                className="font-medium text-text-dark hover:text-primary-blue transition-colors"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#"
          className="hidden md:inline-block px-6 py-2 font-semibold text-primary-blue border-2 border-primary-blue rounded-full hover:bg-primary-blue hover:text-white transition-all duration-300"
        >
          Contact Support
        </a>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Open menu">
            <FaBars className="w-6 h-6 cursor-pointer text-text-dark" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu (Sidebar) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-0 left-0 w-full h-screen bg-white md:hidden"
          >
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <Logo className="text-text-dark" />
              <button onClick={toggleMenu} aria-label="Close menu">
                <FaTimes className="w-6 h-6 cursor-pointer text-text-dark" />
              </button>
            </div>
            <ul className="flex flex-col items-center mt-8 space-y-6">
              {navLinks.map((link) => (
                <li key={link.title}>
                  <a
                    href={link.href}
                    onClick={toggleMenu}
                    className="text-xl font-medium text-text-dark hover:text-primary-blue transition-colors"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
              <li className="mt-4">
                <a
                  href="#"
                  className="inline-block px-8 py-3 font-semibold text-white bg-primary-blue rounded-full hover:bg-opacity-90 transition-all duration-300"
                >
                  Contact Support
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
