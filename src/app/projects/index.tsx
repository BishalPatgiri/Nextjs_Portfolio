"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProjectCard from "./ProjectCard";
import { ProjectsList } from "../../constants";
import image from "next/image";

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
    timeoutRef.current = setTimeout(nextSlide, 4000);
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
    <div className="h-fit">
      <div>
        <p className="font-bold text-2xl max-sm:ml-4 max-sm:text-xl">MY PROJECTS</p>
      </div>
    <div className="mt-8 relative w-full max-w-full mx-auto overflow-hidden rounded-xl">
      <div className="relative h-[524px] sm:h-[420px] md:h-[524px] bg-gray-100">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
          >
            <ProjectCard {...ProjectsList[current]} />
          </motion.div>
        </AnimatePresence>

        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow"
        >
          <FontAwesomeIcon icon={faAngleLeft} className="h-8" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow"
        >
          <FontAwesomeIcon icon={faAngleRight} className="h-8" />
        </button>
      </div>
       <div className="mt-4 flex justify-center gap-4">
        {ProjectsList.map((ele, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`cursor-pointer p-2 rounded-md border transition transform hover:scale-105 text-sm w-[80px] text-center truncate ${
              index === current ? 'bg-blue-100 border-blue-500' : 'bg-white border-gray-300'
            }`}
          >
                  <img src={ele.image} alt="" />
          </div>
        ))}
        </div>
    </div>
    </div>
  );
}
