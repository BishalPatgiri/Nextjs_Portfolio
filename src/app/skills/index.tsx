"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Skills } from "../../constants";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { faFilter, faChevronDown, faChevronUp, faStar, faWandSparkles } from "@fortawesome/free-solid-svg-icons";

const SkillsDiv = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);
  
  // Show top 12 most relevant skills initially
  const INITIAL_DISPLAY_COUNT = 12;

  // Get unique categories
  const categories = ["All", ...new Set(Skills.map(skill => skill.category))];

  // Define core/most relevant skills that should always show first
  const coreSkillNames = [
    "Next.js", "React.js", "TypeScript", "Node.js", 
    "Express.js", "MongoDB", "AWS", "Docker",
    "LLMs", "REST APIs", "Microservices", "Redux"
  ];

  // Sort skills: core skills first, then by priority within category
  const sortedSkills = [...Skills].sort((a, b) => {
    const aIsCore = coreSkillNames.includes(a.text);
    const bIsCore = coreSkillNames.includes(b.text);
    
    if (aIsCore && !bIsCore) return -1;
    if (!aIsCore && bIsCore) return 1;
    if (aIsCore && bIsCore) {
      return coreSkillNames.indexOf(a.text) - coreSkillNames.indexOf(b.text);
    }
    return a.priority - b.priority;
  });

  // Filter skills by category
  const allFilteredSkills = categoryFilter === "All" 
    ? sortedSkills 
    : sortedSkills.filter(skill => skill.category === categoryFilter);

  // Show only top skills initially
  const displayedSkills = showAll 
    ? allFilteredSkills 
    : allFilteredSkills.slice(0, INITIAL_DISPLAY_COUNT);

  const hasMoreSkills = allFilteredSkills.length > INITIAL_DISPLAY_COUNT;
  const remainingCount = allFilteredSkills.length - INITIAL_DISPLAY_COUNT;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  const handleShowMore = () => {
    setShowAll(!showAll);
    if (!showAll) {
      setTimeout(() => {
        window.scrollBy({ top: 200, behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <div className="h-fit max-sm:px-4" ref={ref}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
         <h2 className="font-bold text-3xl max-sm:text-xl bg-gradient-to-r from-[#0E1B18] to-[#70BDAB] dark:from-white dark:to-[#70BDAB] bg-clip-text text-transparent">
            SKILLS & EXPERTISE
          </h2>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
          Technologies and tools I work with professionally
        </p>
      </motion.div>

      {/* Quick Category Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-6 flex flex-wrap gap-2 items-center"
      >
        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mr-2">
          <FontAwesomeIcon icon={faFilter} className="h-3.5" />
          <span className="text-xs font-semibold">Quick Filter:</span>
        </div>
        {["All", "Frontend", "Backend", "AI/ML", "Cloud", "Database"].map((category, index) => (
          <motion.button
            key={category}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setCategoryFilter(category);
              setShowAll(false);
            }}
            className={`px-3 py-1.5 rounded-lg font-medium text-xs transition-all duration-300 ${
              categoryFilter === category
                ? "bg-gradient-to-r from-[#70BDAB] to-[#3A9C84] text-white shadow-md"
                : "bg-white/70 dark:bg-[#0E1B1B]/70 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:border-[#70BDAB]"
            }`}
          >
            {category}
          </motion.button>
        ))}
        
        {/* All Categories Dropdown Trigger */}
        {categoryFilter !== "All" && categories.length > 7 && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setCategoryFilter("All")}
            className="px-3 py-1.5 rounded-lg font-medium text-xs bg-gray-200/70 dark:bg-gray-700/70 text-gray-600 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all"
          >
            View All Categories
          </motion.button>
        )}
      </motion.div>

      {/* Skills Count & Core Badge */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        className="mb-6 flex justify-between items-center flex-wrap gap-3"
      >
        <span className="text-sm text-gray-600 dark:text-gray-400">
          Showing <span className="font-bold text-[#70BDAB]">{displayedSkills.length}</span> of{" "}
          <span className="font-bold">{allFilteredSkills.length}</span> skill{allFilteredSkills.length !== 1 ? 's' : ''}
          {categoryFilter !== "All" && <span className="ml-1">in {categoryFilter}</span>}
        </span>
        
        {!showAll && categoryFilter === "All" && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-[#70BDAB]/20 to-[#3A9C84]/20 dark:from-[#70BDAB]/30 dark:to-[#3A9C84]/30 rounded-lg border border-[#70BDAB]/40 dark:border-[#70BDAB]/50"
          >
            <FontAwesomeIcon icon={faWandSparkles} className="h-3.5 text-[#70BDAB] dark:text-[#70BDAB]" />
            <span className="text-xs font-semibold text-[#3A9C84] dark:text-[#70BDAB]">
              Core Technologies
            </span>
          </motion.div>
        )}
      </motion.div>

      {/* Skills Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={showAll ? "all" : "limited"}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          exit="hidden"
          className="flex flex-wrap gap-5 justify-center max-sm:gap-4"
        >
          {displayedSkills.map((ele, index) => {
            const isCore = coreSkillNames.includes(ele.text) && categoryFilter === "All" && !showAll;
            
            return (
              <motion.div
                key={`${ele.text}-${index}`}
                variants={itemVariants}
                whileHover={{
                  scale: 1.12,
                  y: -10,
                  rotate: [0, -3, 3, 0],
                  transition: { duration: 0.3 }
                }}
                className={`py-6 px-10 flex flex-col justify-center items-center text-center max-sm:py-5 max-sm:px-8 rounded-2xl bg-gradient-to-br from-white/80 to-gray-50/80 dark:from-[#0E1B1B]/80 dark:to-gray-900/80 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-300 group relative overflow-hidden min-w-[140px] max-w-[150px] max-sm:min-w-[110px] max-sm:max-w-[120px] ${
                  isCore 
                    ? 'border-2 border-[#70BDAB]/60 dark:border-[#70BDAB]/70 ring-2 ring-[#70BDAB]/20 dark:ring-[#70BDAB]/30' 
                    : 'border border-gray-200/50 dark:border-gray-700/50'
                }`}
              >
                {/* Core skill indicator */}
                {isCore && (
                  <motion.div 
                    className="absolute top-2 right-2 z-20"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3
                    }}
                  >
                    <FontAwesomeIcon icon={faStar} className="h-3.5 text-[#70BDAB]" />
                  </motion.div>
                )}

                {/* Animated gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#70BDAB]/20 to-[#3A9C84]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Skill Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="relative z-10 mb-3"
                >
                  <FontAwesomeIcon
                    icon={ele.src}
                    className={`h-16 max-sm:h-14 transition-colors duration-300 ${
                      isCore 
                        ? 'text-[#70BDAB] group-hover:text-[#3A9C84]' 
                        : 'text-[#70BDAB] group-hover:text-[#3A9C84]'
                    }`}
                  />
                </motion.div>
                
                {/* Skill Name */}
                <p className={`font-semibold relative z-10 text-base max-sm:text-sm leading-tight ${
                  isCore 
                    ? 'text-gray-900 dark:text-white' 
                    : 'text-gray-800 dark:text-gray-200'
                }`}>
                  {ele.text}
                </p>
                
                {/* Category Badge */}
                <div className={`mt-2 px-2.5 py-1 rounded-full text-[10px] max-sm:text-[9px] font-medium relative z-10 ${
                  isCore
                    ? 'text-[#3A9C84] dark:text-[#70BDAB] bg-[#70BDAB]/10 dark:bg-[#70BDAB]/20 border border-[#70BDAB]/30'
                    : 'text-gray-600 dark:text-gray-400 bg-gray-200/50 dark:bg-gray-700/50'
                }`}>
                  {ele.category}
                </div>
                
                {/* Progress Bar */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.03 }}
                  className={`h-1 w-full mt-3 rounded-full relative z-10 ${
                    isCore
                      ? 'bg-gradient-to-r from-[#70BDAB] to-[#3A9C84]'
                      : 'bg-gradient-to-r from-[#70BDAB]/70 to-[#3A9C84]/70'
                  }`}
                ></motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </AnimatePresence>

      {/* Show More/Less Button */}
      {hasMoreSkills && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-10 flex flex-col items-center gap-3"
        >
          {/* Info text */}
          {!showAll && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-sm text-gray-500 dark:text-gray-400 text-center"
            >
              <span className="font-semibold text-[#70BDAB]">{remainingCount} more skills</span> including DevOps, Architecture, Automation & more
            </motion.p>
          )}
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleShowMore}
            className="px-8 py-3 bg-gradient-to-r from-[#70BDAB] to-[#3A9C84] text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-3 group relative overflow-hidden"
          >
            <span className="relative z-10">
              {showAll ? "Show Less Skills" : `Explore All ${allFilteredSkills.length} Skills`}
            </span>
            <motion.div
              animate={{ y: showAll ? [-2, 2, -2] : [2, -2, 2] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="relative z-10"
            >
              <FontAwesomeIcon icon={showAll ? faChevronUp : faChevronDown} className="h-4" />
            </motion.div>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#3A9C84] to-[#70BDAB]"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>
      )}

      {/* Category suggestion when filtered */}
      {categoryFilter !== "All" && !showAll && hasMoreSkills && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 text-center"
        >
          <p className="text-xs text-gray-500 dark:text-gray-400">
            💡 Tip: Use <span className="font-semibold text-[#70BDAB]">All</span> filter to see core technologies across all categories
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default SkillsDiv;
