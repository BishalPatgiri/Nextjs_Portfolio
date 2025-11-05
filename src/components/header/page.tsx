"use client";
import Image from "next/image";
import { NavLinks } from "../../constants";
import Switcher from "../switcher";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [hoverText, setHoverText] = useState("ABOUT ME");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: { duration: 0.2 }
    },
    open: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`header sticky top-0 left-0 right-0 px-16 z-40 text-[#0E1B18] rounded-md max-lg:px-4 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-[#0E1B1B]/90 backdrop-blur-xl shadow-lg dark:shadow-slate-600"
          : "bg-white/70 dark:bg-[#0E1B1B]/70 backdrop-blur-md shadow-md dark:shadow-slate-600"
      }`}
    >
      <nav className="flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          className="rounded-full py-1 dark:hidden cursor-pointer"
        >
          <Image
            src="/images/BrandLogoLight.png"
            alt="Brand Logo"
            width={400}
            height={400}
            style={{ height: "56px", width: "56px" }}
          />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05, rotate: -5 }}
          whileTap={{ scale: 0.95 }}
          className="rounded-full py-1 hidden dark:block cursor-pointer"
        >
          <Image
            src="/images/BrandLogoDark.jpg"
            alt="Brand Logo"
            width={400}
            height={400}
            style={{ height: "56px", width: "56px", borderRadius: "50%" }}
          />
        </motion.div>

        <div>
          <ul className="flex justify-center items-center align-middle gap-8 max-md:hidden md:gap-6 font-medium">
            {NavLinks.map((ele, index) => (
              <motion.li
                key={ele.label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href={ele.href}
                  className="relative group transition-colors duration-300 hover:text-[#70BDAB] dark:hover:text-[#70BDAB]"
                >
                  {ele.label.toUpperCase()}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#70BDAB] transition-all duration-300 group-hover:w-full"></span>
                </a>
              </motion.li>
            ))}
            <motion.li
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Switcher />
            </motion.li>
          </ul>
        </div>

        <motion.div
          className="hidden max-md:block"
          whileTap={{ scale: 0.9 }}
        >
          <Image
            src="/icons/hamburger.svg"
            alt="Menu"
            width={100}
            height={100}
            style={{ height: "28px", width: "44px", cursor: "pointer" }}
            onClick={() => setShowDropDown(!showDropDown)}
          />
        </motion.div>
      </nav>

      <AnimatePresence>
        {showDropDown && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="absolute top-20 right-4 bg-white/95 dark:bg-[#0E1B1B]/95 backdrop-blur-xl p-4 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700"
          >
            <ul className="text-sm">
              {NavLinks.map((ele, index) => (
                <motion.li
                  key={ele.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`py-2.5 px-6 my-1 rounded-lg cursor-pointer transition-all duration-200 ${
                    hoverText === ele.label.toUpperCase()
                      ? "bg-gradient-to-r from-[#70BDAB] to-[#3A9C84] text-white shadow-md"
                      : "hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                >
                  <a
                    href={ele.href}
                    className="block"
                    onMouseEnter={() => setHoverText(ele.label.toUpperCase())}
                    onClick={() => setShowDropDown(!showDropDown)}
                  >
                    {ele.label.toUpperCase()}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
