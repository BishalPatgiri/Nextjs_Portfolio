"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProjectCard from "./ProjectCard";
import { ProjectsList } from "../../constants";

export default function Projects() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % ProjectsList.length);
  const prevSlide = () =>
    setCurrent(
      (prev) => (prev - 1 + ProjectsList.length) % ProjectsList.length
    );

  useEffect(() => {
    timeoutRef.current = setTimeout(nextSlide, 5000);
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  const variants = {
    enter: { opacity: 0, scale: 0.95 },
    center: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  return (
    <div className="h-fit w-full max-sm:px-4">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
          <h2 className="font-bold text-3xl max-sm:text-xl bg-gradient-to-r from-[#0E1B18] to-[#70BDAB] dark:from-white dark:to-[#70BDAB] bg-clip-text text-transparent">
            PROJECTS
          </h2>
      </motion.div>
      
      <div className="mt-8 max-sm:mt-6 relative w-full mx-auto overflow-visible rounded-xl">
        {/* Main Carousel Container */}
        <div className="relative min-h-[450px] max-md:min-h-[550px] max-sm:min-h-[600px] bg-transparent flex items-center justify-center px-12 max-md:px-8 max-sm:px-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full flex items-center justify-center"
            >
              <ProjectCard {...ProjectsList[current]} />
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons - Desktop */}
          <button
            onClick={prevSlide}
            aria-label="Previous project"
            className="absolute top-1/2 -left-2 max-md:left-0 max-sm:-left-1 transform -translate-y-1/2 bg-white/95 dark:bg-[#0E1B1B]/95 hover:bg-white dark:hover:bg-[#0E1B1B] p-3 max-sm:p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-20 border border-gray-200 dark:border-gray-700 hover:scale-110"
          >
            <FontAwesomeIcon icon={faAngleLeft} className="h-6 max-sm:h-4 text-[#70BDAB]" />
          </button>
          
          <button
            onClick={nextSlide}
            aria-label="Next project"
            className="absolute top-1/2 -right-2 max-md:right-0 max-sm:-right-1 transform -translate-y-1/2 bg-white/95 dark:bg-[#0E1B1B]/95 hover:bg-white dark:hover:bg-[#0E1B1B] p-3 max-sm:p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-20 border border-gray-200 dark:border-gray-700 hover:scale-110"
          >
            <FontAwesomeIcon icon={faAngleRight} className="h-6 max-sm:h-4 text-[#70BDAB]" />
          </button>
        </div>
        
        {/* Thumbnail Navigation */}
        <div className="mt-8 max-sm:mt-6 flex justify-center gap-3 max-sm:gap-2 flex-wrap px-4">
          {ProjectsList.map((ele, index) => (
            <motion.div
              key={index}
              onClick={() => setCurrent(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`cursor-pointer p-2 max-sm:p-1.5 rounded-lg border-2 transition-all duration-300 transform hover:shadow-lg w-[110px] max-sm:w-[70px] overflow-hidden ${
                index === current 
                  ? 'bg-gradient-to-r from-[#70BDAB] to-[#3A9C84] border-[#70BDAB] shadow-lg scale-105' 
                  : 'bg-white/70 dark:bg-[#0E1B1B]/70 border-gray-300 dark:border-gray-600 backdrop-blur-sm hover:border-[#70BDAB]/50'
              }`}
            >
              <img 
                src={ele.image} 
                alt={ele.title} 
                className={`rounded object-cover h-16 max-sm:h-10 w-full transition-all duration-300 ${
                  index === current ? 'opacity-90' : 'opacity-100'
                }`}
              />
            </motion.div>
          ))}
        </div>

        {/* Progress Indicator */}
        <div className="mt-4 flex justify-center items-center gap-2">
          <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
            {current + 1} / {ProjectsList.length}
          </span>
        </div>
      </div>
    </div>
  );
}
