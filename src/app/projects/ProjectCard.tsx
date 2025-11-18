import React from "react";
import Image from "next/image";
import Link from "next/link";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons/faLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

interface InputData {
  image: string;
  git: string;
  text: string;
  deployed: string;
  title: string;
}

const ProjectCard = ({ image, git, text, deployed, title }: InputData) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-6xl mx-auto flex justify-center items-center gap-8 p-8 px-12 rounded-2xl backdrop-blur-xl bg-white/70 dark:bg-[#0E1B1B]/70 border border-gray-200/50 dark:border-[#64FFDA]/30 shadow-xl hover:shadow-2xl dark:shadow-cyan-500/20 dark:hover:shadow-cyan-500/40 max-md:flex-col max-md:items-center max-md:w-11/12 max-md:p-6 max-sm:p-5 max-sm:gap-6 transition-all duration-300 relative overflow-hidden group"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#70BDAB]/10 to-[#3A9C84]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Image Section */}
      <motion.div
        className="w-7/12 max-md:w-full relative z-10"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="relative overflow-hidden rounded-xl shadow-lg group/image w-full aspect-video">
          <Image
            height={400}
            width={600}
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover/image:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300"></div>
        </div>
      </motion.div>

      {/* Content Section */}
      <div className="w-5/12 max-md:w-full relative z-10 flex flex-col justify-center items-center text-center">
        <motion.h3
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-bold text-2xl max-md:text-xl max-sm:text-lg mb-4 bg-gradient-to-r from-[#0E1B18] to-[#70BDAB] dark:from-white dark:to-[#70BDAB] bg-clip-text text-transparent"
        >
          {title}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-sm max-sm:text-xs leading-relaxed text-gray-700 dark:text-gray-300 mb-6 max-md:mb-5"
        >
          {text}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center gap-4 max-sm:gap-3 w-full"
        >
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 max-w-[140px] border-2 border-[#70BDAB] py-2.5 px-6 max-sm:px-4 max-sm:py-2 shadow-lg rounded-xl cursor-pointer bg-white/50 dark:bg-[#0E1B1B]/50 backdrop-blur-sm hover:bg-[#70BDAB] hover:text-white transition-all duration-300"
          >
            <Link target="_blank" href={git} className="flex items-center justify-center gap-2">
              <FontAwesomeIcon icon={faGithub} className="h-4 max-sm:h-3.5" />
              <span className="text-sm max-sm:text-xs font-semibold">Code</span>
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1, rotate: -5 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 max-w-[140px] border-2 border-[#3A9C84] py-2.5 px-6 max-sm:px-4 max-sm:py-2 shadow-lg rounded-xl cursor-pointer bg-white/50 dark:bg-[#0E1B1B]/50 backdrop-blur-sm hover:bg-[#3A9C84] hover:text-white transition-all duration-300"
          >
            <Link target="_blank" href={deployed} className="flex items-center justify-center gap-2">
              <FontAwesomeIcon icon={faLink} className="h-4 max-sm:h-3.5" />
              <span className="text-sm max-sm:text-xs font-semibold">Live</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
