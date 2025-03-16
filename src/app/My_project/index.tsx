"use client"
import React, { useState } from 'react'
import Image from 'next/image';

const images = [
  '/Image1.jpg',
  '/Image2.jpg',
  '/Image3.jpg',
  '/Image4.jpg',
  '/Image5.jpg',
  '/Image6.jpg',
  '/Image1.jpg',
  '/Image2.jpg',
  '/Image3.jpg',

];

const MyProject = () => {
  const [startIndex, setStartIndex] = useState(0);

  const nextImages = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % (images.length - 2));
  };

  return (
    <div className="flex flex-col items-center gap-6 py-10">
      <div className="flex justify-center items-center gap-6">
        {images.slice(startIndex, startIndex + 3).map((img, index) => (
          <div
            key={index}
            className={`relative rounded-2xl shadow-lg overflow-hidden transition-all duration-300
              ${index === 1 ? 'w-[500px] h-96 scale-110' : 'w-[160px] h-80'}`}
          >
            <Image src={img} alt={`Image ${index + 1}`} layout="fill" objectFit="cover" />
          </div>
        ))}
      </div>
      <button onClick={nextImages} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">Next</button>
    </div>
  );
}

export default MyProject