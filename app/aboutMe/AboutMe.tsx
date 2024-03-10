import React from "react";
import Image from "next/image";
import BishalPic from "../../assets/images/Bishal.jpg";
import { SocialMedia } from "@/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AboutMe = () => {
  return (
    <div className="pt-16 h-[100vh] flex align-middle items-center gap-x-20 max-md:gap-x-10 max-sm:gap-x-6">
      <div className="h-2/3 w-1/3 max-lg:h-1/2 max-md:h-2/5 max-sm:h-1/3">
        <Image
          src={BishalPic}
          alt=""
          width={"400"}
          height={600}
          style={{ height: "96%", width: "100%", borderRadius: "50%" }}
        />
      </div>
      <div className="w-2/3">
        <p className=" font-bold text-4xl font-mono">Hi, I am Bishal</p>
        <p className="mt-4">
          A dynamic Full Stack Developer with a flair for innovation and a
          dedicated towards work. I bring a blend of passion and expertise to
          drive holistic development, actively contributing to key solutions
          using microservices architecture. A collaborative team player, I
          thrive in accelerating development through active participation.
          Always at the forefront of tech trends, I ensure every platform I
          built remains cutting-edge. Love to code. Elevate your team with a
          developer dedicated to excellence and innovation.
        </p>
        <div className="flex space-x-4 mt-4">
          {SocialMedia.map((ele, index) => (
            <div key={index}>
              <FontAwesomeIcon icon={ele.src} className="h-8" />
            </div>
          ))}
        </div>
        <div className="mt-6">
          <button className="px-4 border-2 border-gray-600 rounded-sm  shadow-lg">
            RESUME
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
