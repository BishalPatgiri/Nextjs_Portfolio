"use client";
import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SocialMedia } from "../../constants";
import { motion } from "framer-motion";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const AboutMe = () => {
  const handleLinkClicked = (link: string) => {
    window.open(link, "_blank");
  };

  const handleResumeDownload = () => {
    window.open("/resume/Bishal_Patgiri_Resume.pdf", "_blank");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="h-full mt-20 flex align-middle items-center gap-x-20 max-md:gap-x-6 max-sm:gap-x-6 max-sm:flex-col max-sm:pb-20"
    >
      {/* Profile Image Section */}
      <motion.div
        variants={itemVariants}
        whileHover={{ scale: 1.05, rotate: 2 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="h-5/7 w-1/3 max-lg:h-1/2 max-md:h-2/5 max-sm:w-8/12 max-[420px]:h-2/4 max-[420px]:w-7/12 relative group"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#70BDAB] to-[#3A9C84] rounded-[54%_0%] opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"></div>
        <Image
          src="/images/Bishal.jpg"
          alt="Bishal Patgiri - Senior Software Engineer"
          width={400}
          height={600}
          style={{ height: "100%", width: "96%", borderRadius: "54% 0%" }}
          priority
          className="relative z-10 shadow-2xl"
        />
      </motion.div>

      {/* Content Section */}
      <div className="w-2/3 max-sm:w-full max-sm:mt-6 max-sm:px-4">
        {/* Name & Title */}
        <motion.div variants={itemVariants}>
          <h1 className="font-bold text-5xl font-mono max-sm:text-3xl max-[420px]:text-2xl bg-gradient-to-r from-[#0E1B18] to-[#70BDAB] dark:from-white dark:to-[#70BDAB] bg-clip-text text-transparent">
            Hi, I'm Bishal Patgiri
          </h1>
          <h2 className="text-xl max-sm:text-lg font-semibold text-[#70BDAB] dark:text-[#70BDAB] mt-3 mb-6">
            Senior Software Engineer | AI Solutions Architect
          </h2>
        </motion.div>

        {/* Main Description */}
        <motion.div variants={itemVariants} className="space-y-4 text-base max-sm:text-sm leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
          <p>
            Senior Software Engineer building <span className="font-semibold text-[#70BDAB]">production AI features</span>—document Q&A, summarization, transcription/translation, and workflow automation that reduce manual work and accelerate delivery.
          </p>
          
          <p>
            I specialize in <span className="font-semibold text-[#3A9C84]">end-to-end full-stack development</span> with Next.js, React, Node.js, Python, and AWS, turning ambiguous requirements into <span className="font-semibold">maintainable, scalable systems</span>. Currently shipping multi-tenant architectures, real-time notifications, and payment integrations.
          </p>
        </motion.div>

        {/* Key Expertise Tags */}
        <motion.div 
          variants={itemVariants}
          className="mb-8 flex flex-wrap gap-2"
        >
          {[
            "LLMs & AI Agents",
            "Microservices",
            "System Design",
            "DevOps",
            "Cloud Architecture",
            "API Development"
          ].map((skill, index) => (
            <motion.span
              key={index}
              whileHover={{ scale: 1.05 }}
              className="px-3 py-1.5 bg-white/70 dark:bg-[#0E1B1B]/70 border border-[#70BDAB]/30 rounded-lg text-xs font-semibold text-gray-700 dark:text-gray-300 backdrop-blur-sm hover:bg-[#70BDAB]/10 transition-all duration-200"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex space-x-5 mb-8 max-sm:space-x-4"
        >
          {SocialMedia.map((ele, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.2, rotate: 5, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="cursor-pointer relative group"
              onClick={() => handleLinkClicked(ele.link)}
            >
              <div className="absolute inset-0 bg-[#70BDAB] rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              <FontAwesomeIcon
                icon={ele.src}
                className="h-7 max-sm:h-6 relative z-10 transition-colors duration-300 text-gray-700 dark:text-gray-300 group-hover:text-[#70BDAB]"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          variants={itemVariants} 
          className="flex gap-4 mb-8 max-sm:flex-col"
        >
          {/* Download Resume Button */}
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(112, 189, 171, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            onClick={handleResumeDownload}
            className="px-8 py-3 max-sm:px-6 max-sm:py-2.5 bg-gradient-to-r from-[#70BDAB] to-[#3A9C84] text-white font-semibold rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group flex items-center justify-center gap-2"
          >
            <FontAwesomeIcon icon={faDownload} className="h-4 max-sm:h-3.5" />
            <span className="relative z-10">Download Resume</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#3A9C84] to-[#70BDAB] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.button>

          {/* Contact Button */}
          <motion.a
            href="#contact-me"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 max-sm:px-6 max-sm:py-2.5 border-2 border-[#70BDAB] text-[#70BDAB] dark:text-[#70BDAB] font-semibold rounded-lg shadow-md hover:shadow-xl hover:bg-[#70BDAB]/10 transition-all duration-300 flex items-center justify-center"
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutMe;
