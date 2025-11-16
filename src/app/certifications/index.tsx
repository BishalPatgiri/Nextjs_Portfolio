"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { certificates, achievements } from "../../constants";
import CertificationCard from "./CertificationCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward, faFilter, faTrophy, faDownload, faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Certifications = () => {
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [activeTab, setActiveTab] = useState("certifications");
  const [showAll, setShowAll] = useState(false);
  
  // Number of certificates to show initially
  const INITIAL_DISPLAY_COUNT = 6;

  // Extract unique categories for filtering
  const categories = ["All", ...new Set(certificates.map(cert => cert.category))];

  // Filter and sort certificates by priority
  const allFilteredCertificates = (categoryFilter === "All" 
    ? certificates 
    : certificates.filter(cert => cert.category === categoryFilter)
  ).sort((a, b) => a.priority - b.priority);

  // Show only top 6 initially, or all if showAll is true
  const displayedCertificates = showAll 
    ? allFilteredCertificates 
    : allFilteredCertificates.slice(0, INITIAL_DISPLAY_COUNT);

  const hasMoreCertificates = allFilteredCertificates.length > INITIAL_DISPLAY_COUNT;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const handleShowMore = () => {
    setShowAll(!showAll);
    // Smooth scroll to show new content
    if (!showAll) {
      setTimeout(() => {
        window.scrollBy({ top: 300, behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <div className="h-fit w-full max-sm:px-4">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <div className="flex items-center gap-3 mb-3">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          >
            <FontAwesomeIcon icon={faAward} className="h-8 text-[#70BDAB]" />
          </motion.div>
          <h2 className="font-bold text-3xl max-sm:text-xl bg-gradient-to-r from-[#0E1B18] to-[#70BDAB] dark:from-white dark:to-[#70BDAB] bg-clip-text text-transparent">
            CERTIFICATIONS & ACHIEVEMENTS
          </h2>
        </div>
        <p className="text-gray-600 dark:text-gray-400 max-sm:text-sm">
          Professional certifications and notable achievements throughout my journey
        </p>
      </motion.div>

      {/* Tab Switcher */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-6 flex gap-4 border-b border-gray-200 dark:border-gray-700"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            setActiveTab("certifications");
            setShowAll(false); // Reset when switching tabs
          }}
          className={`pb-3 px-4 font-semibold transition-all duration-300 relative ${
            activeTab === "certifications"
              ? "text-[#70BDAB]"
              : "text-gray-500 dark:text-gray-400"
          }`}
        >
          <FontAwesomeIcon icon={faAward} className="mr-2" />
          Certifications ({certificates.length})
          {activeTab === "certifications" && (
            <motion.div
              layoutId="activeTab"
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#70BDAB] to-[#3A9C84]"
            />
          )}
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setActiveTab("achievements")}
          className={`pb-3 px-4 font-semibold transition-all duration-300 relative ${
            activeTab === "achievements"
              ? "text-[#70BDAB]"
              : "text-gray-500 dark:text-gray-400"
          }`}
        >
          <FontAwesomeIcon icon={faTrophy} className="mr-2" />
          Achievements ({achievements.length})
          {activeTab === "achievements" && (
            <motion.div
              layoutId="activeTab"
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#70BDAB] to-[#3A9C84]"
            />
          )}
        </motion.button>
      </motion.div>

      {/* Certifications Tab Content */}
      {activeTab === "certifications" && (
        <>
          {/* Category Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex flex-wrap gap-3 items-center"
          >
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <FontAwesomeIcon icon={faFilter} className="h-4" />
              <span className="text-sm font-semibold">Filter by Category:</span>
            </div>
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setCategoryFilter(category);
                  setShowAll(false); // Reset when filtering
                }}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                  categoryFilter === category
                    ? "bg-gradient-to-r from-[#70BDAB] to-[#3A9C84] text-white shadow-lg"
                    : "bg-white/70 dark:bg-[#0E1B1B]/70 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-[#70BDAB] backdrop-blur-sm"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Certifications Count & Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-6 flex justify-between items-center flex-wrap gap-4"
          >
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Showing <span className="font-bold text-[#70BDAB]">{displayedCertificates.length}</span> of{" "}
              <span className="font-bold">{allFilteredCertificates.length}</span> certification{allFilteredCertificates.length !== 1 ? 's' : ''}
              {categoryFilter !== "All" && <span className="ml-1">in {categoryFilter}</span>}
            </span>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#70BDAB]/10 to-[#3A9C84]/10 rounded-lg border border-[#70BDAB]/30"
            >
              <FontAwesomeIcon icon={faDownload} className="h-4 text-[#70BDAB]" />
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                Click to download
              </span>
            </motion.div>
          </motion.div>

          {/* Certifications Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={showAll ? "all" : "limited"}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-sm:gap-6"
            >
              {displayedCertificates.map((cert, index) => (
                <CertificationCard
                  key={cert.credentialId}
                  {...cert}
                  index={index}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Show More/Less Button */}
          {hasMoreCertificates && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-10 flex justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleShowMore}
                className="px-8 py-3 bg-gradient-to-r from-[#70BDAB] to-[#3A9C84] text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-3 group relative overflow-hidden"
              >
                <span className="relative z-10">
                  {showAll ? "Show Less" : `Show ${allFilteredCertificates.length - INITIAL_DISPLAY_COUNT} More`}
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

          {/* Empty State */}
          {allFilteredCertificates.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20"
            >
              <div className="text-gray-400 dark:text-gray-600 text-6xl mb-4">📜</div>
              <p className="text-gray-600 dark:text-gray-400">No certifications found for this category.</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCategoryFilter("All")}
                className="mt-4 px-6 py-2 bg-gradient-to-r from-[#70BDAB] to-[#3A9C84] text-white rounded-lg font-semibold"
              >
                View All Certifications
              </motion.button>
            </motion.div>
          )}
        </>
      )}

      {/* Achievements Tab Content */}
      {activeTab === "achievements" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group bg-white/70 dark:bg-[#0E1B1B]/70 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 dark:border-[#64FFDA]/30 shadow-lg hover:shadow-2xl dark:shadow-cyan-500/20 dark:hover:shadow-cyan-500/40 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#70BDAB]/0 to-[#3A9C84]/0 group-hover:from-[#70BDAB]/10 group-hover:to-[#3A9C84]/10 transition-all duration-500 rounded-2xl"></div>
              
              <div className="relative z-10">
                <div className="text-5xl mb-4">{achievement.icon}</div>
                <h3 className="font-bold text-xl mb-2 text-gray-900 dark:text-white group-hover:text-[#70BDAB] transition-colors duration-300">
                  {achievement.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {achievement.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="px-3 py-1 bg-gradient-to-r from-[#70BDAB]/20 to-[#3A9C84]/20 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300">
                    {achievement.category}
                  </span>
                  <span className="text-sm font-semibold text-[#70BDAB]">
                    {achievement.year}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute right-0 top-20 w-64 h-64 bg-gradient-to-br from-[#70BDAB] to-[#3A9C84] rounded-full blur-3xl -z-10"
      />
    </div>
  );
};

export default Certifications;
