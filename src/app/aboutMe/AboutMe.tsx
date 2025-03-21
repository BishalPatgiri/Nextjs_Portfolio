"use client";
import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { aboutMe, SocialMedia } from "../../constants";

const AboutMe = () => {
  const handleLinkClicked = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <div className="h-full flex align-middle items-center gap-x-20 max-md:gap-x-6 max-sm:gap-x-6 max-sm:flex-col">
      <div className="h-5/7 w-1/3 max-lg:h-1/2 max-md:h-2/5 max-sm:h-2/3 max-sm:w-5/12 max-[420px]:h-1/4 max-[420px]:w-1/2">
        <Image
          src="/images/Bishal.jpg"
          alt=""
          width={"400"}
          height={600}
          style={{ height: "100%", width: "96%", borderRadius: "54% 0%" }}
          priority
        />
      </div>
      <div className="w-2/3 max-sm:w-11/12 max-sm:mt-4">
        <p className="font-bold text-4xl font-mono max-sm:text-3xl">Hi, I am Bishal ...</p>
        <p className="mt-4">{aboutMe}</p>
        <div className="flex space-x-4 mt-4">
          {SocialMedia.map((ele, index) => (
            <div
              key={index}
              className="cursor-pointer transition ease-in-out delay-20 hover:-translate-y-0.5 hover:scale-110 duration-300"
              onClick={(e) => handleLinkClicked(ele.link)}
            >
              <FontAwesomeIcon icon={ele.src} className="h-8 max-sm:h-6" />
            </div>
          ))}
        </div>
        <div className="mt-6 max-sm:mt-4">
          <button className="px-4 border-2 border-gray-600 rounded-sm shadow-lg hover:shadow-xl transition ease-in-out delay-20 hover:-translate-y-0.5 hover:scale-110 duration-300 dark:hover:shadow-[#70BDAB] dark:hover:shadow-lg">
            RESUME
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
