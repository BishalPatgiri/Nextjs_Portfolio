"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const images = [
  '/Image1.jpg',
  '/Image2.jpg',
  '/Image3.jpg',
  '/Image4.jpg',
  '/Image5.jpg',
  '/Image6.jpg',
];

const MyProject = () => {
  const [startIndex, setStartIndex] = useState(0);

  const nextImages = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="flex flex-col items-center gap-6 py-10 border border-red-800">
      <div className="relative flex justify-center items-center gap-12 overflow-hidden w-[1080px] h-[440px]">
        <div className="relative w-full flex overflow-hidden">
          <motion.div
            key={startIndex}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="flex justify-center items-center gap-12"
            style={{ display: 'flex', width: '100%' }}
          >
            {[0, 1, 2].map((offset) => {
              const imgIndex = (startIndex + offset) % images.length;
              return (
                <div
                  key={imgIndex}
                  className={`relative rounded-2xl shadow-lg overflow-hidden transition-all duration-600 
                    ${offset === 1 ? 'w-[720px] h-[440px] scale-110' : 'w-[320px] h-96'}`}
                >
                  <Image src={images[imgIndex]} alt={`Image ${imgIndex + 1}`} layout="fill" objectFit="cover" />
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
      <button onClick={nextImages} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">Next</button>
    </div>
  );
};

export default MyProject;
