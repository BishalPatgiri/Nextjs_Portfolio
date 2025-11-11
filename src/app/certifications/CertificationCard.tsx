"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt, faCertificate, faCalendar, faDownload } from "@fortawesome/free-solid-svg-icons";

interface CertificationCardProps {
  name: string;
  recognizedBy: string;
  imageUrl: string;
  link: string;
  issuedDate: string;
  credentialId: string;
  skills: string[];
  category: string;
  index: number;
}

const CertificationCard = ({
  name,
  recognizedBy,
  imageUrl,
  link,
  issuedDate,
  credentialId,
  skills,
  category,
  index
}: CertificationCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="relative group bg-white/70 dark:bg-[#0E1B1B]/70 backdrop-blur-xl rounded-2xl overflow-hidden border border-gray-200/50 dark:border-[#64FFDA]/30 shadow-lg hover:shadow-2xl dark:shadow-cyan-500/20 dark:hover:shadow-cyan-500/40 transition-all duration-300"
    >
      {/* Animated gradient background on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#70BDAB]/0 to-[#3A9C84]/0 group-hover:from-[#70BDAB]/10 group-hover:to-[#3A9C84]/10 transition-all duration-500"></div>

      {/* Certificate Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={imageUrl}
          alt={name}
          width={500}
          height={300}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        
        {/* Category Badge */}
        <div className="absolute top-4 right-4 bg-white/90 dark:bg-[#0E1B1B]/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg">
          <FontAwesomeIcon icon={faCertificate} className="h-4 text-[#70BDAB] mr-2" />
          <span className="text-xs font-semibold text-gray-800 dark:text-gray-200">{category}</span>
        </div>
      </div>

      {/* Card Content */}
      <div className="relative p-6 max-sm:p-4">
        {/* Certificate Name */}
        <h3 className="font-bold text-xl max-sm:text-lg mb-2 text-gray-900 dark:text-white line-clamp-2 group-hover:text-[#70BDAB] transition-colors duration-300">
          {name}
        </h3>

        {/* Issued By */}
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex items-center gap-2">
          <span className="font-semibold">By:</span> {recognizedBy}
        </p>

        {/* Date and Credential ID */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
            <FontAwesomeIcon icon={faCalendar} className="h-3" />
            <span>Issued: {issuedDate}</span>
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400 truncate">
            <span className="font-semibold">ID:</span> {credentialId}
          </div>
        </div>

        {/* Skills Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {skills.slice(0, 3).map((skill, idx) => (
            <motion.span
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 + idx * 0.05 }}
              className="px-3 py-1 bg-gradient-to-r from-[#70BDAB]/20 to-[#3A9C84]/20 dark:from-[#70BDAB]/30 dark:to-[#3A9C84]/30 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300 border border-[#70BDAB]/30"
            >
              {skill}
            </motion.span>
          ))}
          {skills.length > 3 && (
            <span className="px-3 py-1 bg-gray-200/50 dark:bg-gray-700/50 rounded-full text-xs font-medium text-gray-600 dark:text-gray-400">
              +{skills.length - 3} more
            </span>
          )}
        </div>

        {/* Download Certificate Button */}
        <Link href={link} target="_blank" rel="noopener noreferrer" download>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-2.5 px-4 bg-gradient-to-r from-[#70BDAB] to-[#3A9C84] text-white font-semibold rounded-lg shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group/btn"
          >
            <FontAwesomeIcon icon={faDownload} className="h-4" />
            <span>Download Certificate</span>
            <motion.div
              className="opacity-0 group-hover/btn:opacity-100 transition-opacity"
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <FontAwesomeIcon icon={faExternalLinkAlt} className="h-3" />
            </motion.div>
          </motion.button>
        </Link>
      </div>

      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#70BDAB]/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </motion.div>
  );
};

export default CertificationCard;
