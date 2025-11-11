"use client";
import Image from "next/image";
import { NavLinks } from "../../constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import Switcher from "../switcher";

const Header = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle dark mode
  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setDarkMode(isDark);
  }, []);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setDarkMode(!darkMode);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Main Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 dark:bg-[#0E1B1B]/95 backdrop-blur-lg shadow-lg"
            : "bg-white/80 dark:bg-[#0E1B1B]/80 backdrop-blur-md"
        }`}
      >
        <nav className="container mx-auto px-6 max-sm:px-4">
          <div className="flex items-center justify-between h-20 max-sm:h-16">
            {/* Logo */}
            <Link href="/" onClick={closeMobileMenu}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative w-14 h-14 max-sm:w-12 max-sm:h-12 cursor-pointer group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#70BDAB] to-[#3A9C84] rounded-lg opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
                <Image
                  src="/images/BrandLogoLight.png"
                  alt="Bishal Patgiri Logo"
                  width={56}
                  height={56}
                  className="relative z-10 rounded-lg"
                  priority
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {NavLinks.map((link, index) => {
                const isActive = pathname === link.href;
                return (
                  <Link key={index} href={link.href}>
                    <motion.div
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`relative px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                        isActive
                          ? "text-[#70BDAB] dark:text-[#70BDAB]"
                          : "text-gray-700 dark:text-gray-300 hover:text-[#70BDAB] dark:hover:text-[#70BDAB]"
                      }`}
                    >
                      {link.label}
                      {isActive && (
                        <motion.div
                          layoutId="activeNav"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#70BDAB] to-[#3A9C84]"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </motion.div>
                  </Link>
                );
              })}
            </div>

            {/* Right Section: Dark Mode + Mobile Menu */}
            <div className="flex items-center gap-4 max-sm:gap-3">
              {/* Dark Mode Toggle */}
                 <Switcher />
              {/* Mobile Menu Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleMobileMenu}
                className="lg:hidden w-10 h-10 max-sm:w-9 max-sm:h-9 flex items-center justify-center rounded-lg bg-gradient-to-r from-[#70BDAB] to-[#3A9C84] text-white shadow-md hover:shadow-lg transition-all duration-300"
                aria-label="Toggle menu"
              >
                <FontAwesomeIcon
                  icon={mobileMenuOpen ? faTimes : faBars}
                  className="h-5 max-sm:h-4"
                />
              </motion.button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              onClick={closeMobileMenu}
            />

            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-80 max-sm:w-full bg-white dark:bg-[#0E1B1B] shadow-2xl z-50 lg:hidden overflow-y-auto"
            >
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-800">
                <div className="flex items-center gap-3">
                  <Image
                    src="/images/BrandLogoLight.png"
                    alt="Logo"
                    width={40}
                    height={40}
                    className="rounded-lg"
                  />
                  <span className="font-bold text-xl bg-gradient-to-r from-[#70BDAB] to-[#3A9C84] bg-clip-text text-transparent">
                    Menu
                  </span>
                </div>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={closeMobileMenu}
                  className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <FontAwesomeIcon icon={faTimes} className="h-5 text-gray-700 dark:text-gray-300" />
                </motion.button>
              </div>

              {/* Mobile Navigation Links */}
              <div className="p-6 space-y-2">
                {NavLinks.map((link, index) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link key={index} href={link.href} onClick={closeMobileMenu}>
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileTap={{ scale: 0.95 }}
                        className={`relative px-6 py-4 rounded-xl font-semibold text-base transition-all duration-300 flex items-center justify-between ${
                          isActive
                            ? "bg-gradient-to-r from-[#70BDAB] to-[#3A9C84] text-white shadow-md"
                            : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                        }`}
                      >
                        <span>{link.label}</span>
                        {isActive && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-2 h-2 bg-white rounded-full"
                          />
                        )}
                      </motion.div>
                    </Link>
                  );
                })}
              </div>

              {/* Mobile Menu Footer */}
              <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200 dark:border-gray-800 bg-gradient-to-t from-gray-50 to-transparent dark:from-gray-900 dark:to-transparent">
                <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                  © 2025 Bishal Patgiri
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
