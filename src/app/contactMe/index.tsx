"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { contactMeOption } from "../../constants";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface IFormData {
  name: string;
  email: string;
  subject: string;
  comment: string;
}

interface ICustomAlert {
  showAlert: boolean;
  alertText?: string;
}

const ContactMePage = () => {
  const [formData, setFormData] = useState<IFormData>({
    name: "",
    email: "",
    subject: "",
    comment: "",
  });
  const [customAlert, setCustomAlert] = useState<ICustomAlert>({
    showAlert: false,
    alertText: "",
  });
  const [isFocused, setIsFocused] = useState({
    name: false,
    email: false,
    subject: false,
    comment: false,
  });

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleSubmit = (event: any) => {
    event.preventDefault();

    const { name, email, subject, comment } = formData;
    if (name.length === 0 || email.length === 0 || subject.length === 0) {
      setCustomAlert({
        showAlert: true,
        alertText: "⚠️ Please fill all the required fields!",
      });
      setTimeout(() => setCustomAlert({ showAlert: false }), 3000);
    } else {
      // Here you would typically send the form data to your backend
      setCustomAlert({
        showAlert: true,
        alertText: "✅ Form submitted successfully! I'll get back to you soon.",
      });
      setTimeout(() => setCustomAlert({ showAlert: false }), 3000);
      
      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        subject: "",
        comment: "",
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const alertVariants = {
    hidden: { opacity: 0, y: -20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.2 },
    },
  };

  return (
    <div className="h-full pb-10 pt-10 px-4" ref={ref}>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-bold text-3xl max-sm:text-xl bg-gradient-to-r from-[#0E1B18] to-[#70BDAB] dark:from-white dark:to-[#70BDAB] bg-clip-text text-transparent">
          CONTACT ME
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Let's discuss your next project or just say hello!
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="mt-8 flex flex-wrap gap-10 justify-between max-sm:gap-8 max-sm:mt-6 max-sm:justify-between"
      >
        {/* Contact Information Section */}
        <motion.div
          variants={itemVariants}
          className="w-5/12 max-sm:w-full space-y-6"
        >
          <div className="space-y-4">
            {contactMeOption.map((ele, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ x: 10, scale: 1.02 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/50 dark:bg-[#0E1B1B]/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-md hover:shadow-lg transition-all duration-300 group"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-[#70BDAB] to-[#3A9C84] text-white shadow-lg"
                >
                  <FontAwesomeIcon icon={ele.icon} className="h-5" />
                </motion.div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-semibold">
                    {ele.medium}
                  </p>
                  <p className="text-base font-medium text-gray-800 dark:text-gray-200">
                    {ele.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-[#70BDAB]/10 to-[#3A9C84]/10 backdrop-blur-sm border border-[#70BDAB]/20"
          >
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Feel free to reach out with any questions, project ideas, or just
              to say hello. You can contact me through the form, email, or
              phone. <span className="font-semibold text-[#70BDAB]">I'll respond within 24 hours.</span>
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-6 flex gap-4 flex-wrap"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-white/70 dark:bg-[#0E1B1B]/70 backdrop-blur-sm rounded-lg border border-gray-200 dark:border-gray-700 shadow-md"
            >
              <span className="text-sm font-semibold text-[#70BDAB]">⚡ Quick Response</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-white/70 dark:bg-[#0E1B1B]/70 backdrop-blur-sm rounded-lg border border-gray-200 dark:border-gray-700 shadow-md"
            >
              <span className="text-sm font-semibold text-[#3A9C84]">💼 Open to Work</span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Contact Form Section */}
        <motion.div
          variants={itemVariants}
          className="w-5/12 max-sm:w-full"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <label className="block text-sm font-semibold leading-6 text-gray-700 dark:text-gray-300 mb-2">
                Name <span className="text-red-500">*</span>
              </label>
              <motion.div
                animate={{
                  scale: isFocused.name ? 1.02 : 1,
                }}
                transition={{ duration: 0.2 }}
                className="relative"
              >
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  className="block w-full border-0 bg-white/70 dark:bg-[#0E1B1B]/70 backdrop-blur-sm h-12 py-3 px-4 text-gray-900 dark:text-white placeholder:text-gray-400 focus:ring-2 focus:ring-[#70BDAB] rounded-xl shadow-md hover:shadow-lg transition-all duration-300 outline-none"
                  placeholder="John Doe"
                  onFocus={() => setIsFocused({ ...isFocused, name: true })}
                  onBlur={() => setIsFocused({ ...isFocused, name: false })}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </motion.div>
            </motion.div>

            {/* Email Field */}
            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <label className="block text-sm font-semibold leading-6 text-gray-700 dark:text-gray-300 mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <motion.div
                animate={{
                  scale: isFocused.email ? 1.02 : 1,
                }}
                transition={{ duration: 0.2 }}
                className="relative"
              >
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  className="block w-full border-0 bg-white/70 dark:bg-[#0E1B1B]/70 backdrop-blur-sm h-12 py-3 px-4 text-gray-900 dark:text-white placeholder:text-gray-400 focus:ring-2 focus:ring-[#70BDAB] rounded-xl shadow-md hover:shadow-lg transition-all duration-300 outline-none"
                  placeholder="johndoe@example.com"
                  onFocus={() => setIsFocused({ ...isFocused, email: true })}
                  onBlur={() => setIsFocused({ ...isFocused, email: false })}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </motion.div>
            </motion.div>

            {/* Subject Field */}
            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <label className="block text-sm font-semibold leading-6 text-gray-700 dark:text-gray-300 mb-2">
                Subject <span className="text-red-500">*</span>
              </label>
              <motion.div
                animate={{
                  scale: isFocused.subject ? 1.02 : 1,
                }}
                transition={{ duration: 0.2 }}
                className="relative"
              >
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  className="block w-full border-0 bg-white/70 dark:bg-[#0E1B1B]/70 backdrop-blur-sm h-12 py-3 px-4 text-gray-900 dark:text-white placeholder:text-gray-400 focus:ring-2 focus:ring-[#70BDAB] rounded-xl shadow-md hover:shadow-lg transition-all duration-300 outline-none"
                  placeholder="Project Discussion"
                  onFocus={() => setIsFocused({ ...isFocused, subject: true })}
                  onBlur={() => setIsFocused({ ...isFocused, subject: false })}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                />
              </motion.div>
            </motion.div>

            {/* Comment/Message Field */}
            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <label className="block text-sm font-semibold leading-6 text-gray-700 dark:text-gray-300 mb-2">
                Message
              </label>
              <motion.div
                animate={{
                  scale: isFocused.comment ? 1.02 : 1,
                }}
                transition={{ duration: 0.2 }}
                className="relative"
              >
                <textarea
                  id="comment"
                  name="comment"
                  rows={5}
                  value={formData.comment}
                  className="block w-full border-0 bg-white/70 dark:bg-[#0E1B1B]/70 backdrop-blur-sm py-3 px-4 text-gray-900 dark:text-white placeholder:text-gray-400 focus:ring-2 focus:ring-[#70BDAB] rounded-xl shadow-md hover:shadow-lg transition-all duration-300 outline-none resize-none"
                  placeholder="Tell me about your project or inquiry..."
                  onFocus={() => setIsFocused({ ...isFocused, comment: true })}
                  onBlur={() => setIsFocused({ ...isFocused, comment: false })}
                  onChange={(e) =>
                    setFormData({ ...formData, comment: e.target.value })
                  }
                ></textarea>
              </motion.div>
              <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                Describe your requirements in detail
              </p>
            </motion.div>

            {/* Submit Button and Alert */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-start gap-4"
            >
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-8 py-3 bg-gradient-to-r from-[#70BDAB] to-[#3A9C84] text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Send Message
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#3A9C84] to-[#70BDAB]"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              {/* Alert Messages */}
              <AnimatePresence>
                {customAlert.showAlert && (
                  <motion.div
                    variants={alertVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className={`w-full p-4 rounded-xl backdrop-blur-sm border ${
                      customAlert?.alertText?.toLowerCase().includes("success")
                        ? "bg-green-100/90 dark:bg-green-900/30 text-green-800 dark:text-green-200 border-green-200 dark:border-green-700"
                        : "bg-red-100/90 dark:bg-red-900/30 text-red-800 dark:text-red-200 border-red-200 dark:border-red-700"
                    }`}
                  >
                    <p className="text-sm font-semibold flex items-center gap-2">
                      {customAlert.alertText}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </form>
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
        className="absolute right-0 bottom-0 w-64 h-64 bg-gradient-to-br from-[#70BDAB] to-[#3A9C84] rounded-full blur-3xl -z-10"
      />
    </div>
  );
};

export default ContactMePage;
