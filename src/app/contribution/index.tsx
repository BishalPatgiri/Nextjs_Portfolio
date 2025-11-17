"use client"
import React from 'react'
import GitHubCalendar from 'react-github-calendar';
import { motion } from "framer-motion";


const ContributionPage = () => {
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };
  return (
    <div className="h-full px-4">
      <div>
         <h2 className="font-bold text-3xl max-sm:text-xl bg-gradient-to-r from-[#0E1B18] to-[#70BDAB] dark:from-white dark:to-[#70BDAB] bg-clip-text text-transparent">
            My CONTRIBUTIONS
          </h2>
      </div>
      
      <div className="mt-8 flex flex-wrap gap-10 justify-center max-sm:gap-0 max-sm:mt-4">
      <GitHubCalendar username="BishalPatgiri"/>
      </div>
      <div>
               {/* Quick Stats */}
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-3 gap-4 mt-8 max-sm:gap-3"
        >
          <div className="text-center p-4 max-sm:p-3 rounded-xl bg-gradient-to-br from-white/70 to-gray-100/70 dark:from-[#0E1B1B]/70 dark:to-gray-900/70 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-md hover:shadow-lg transition-all duration-300">
            <div className="text-3xl max-sm:text-2xl font-bold text-[#70BDAB] mb-1">3+</div>
            <div className="text-xs text-gray-600 dark:text-gray-400 font-medium">Years Exp.</div>
          </div>
          <div className="text-center p-4 max-sm:p-3 rounded-xl bg-gradient-to-br from-white/70 to-gray-100/70 dark:from-[#0E1B1B]/70 dark:to-gray-900/70 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-md hover:shadow-lg transition-all duration-300">
            <div className="text-3xl max-sm:text-2xl font-bold text-[#3A9C84] mb-1">15+</div>
            <div className="text-xs text-gray-600 dark:text-gray-400 font-medium">Projects</div>
          </div>
          <div className="text-center p-4 max-sm:p-3 rounded-xl bg-gradient-to-br from-white/70 to-gray-100/70 dark:from-[#0E1B1B]/70 dark:to-gray-900/70 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-md hover:shadow-lg transition-all duration-300">
            <div className="text-3xl max-sm:text-2xl font-bold text-[#70BDAB] mb-1">50+</div>
            <div className="text-xs text-gray-600 dark:text-gray-400 font-medium">Tech Stack</div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ContributionPage