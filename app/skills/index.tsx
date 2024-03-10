import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Skills } from "../../constants/index";
// import  NextJs  from "../../assets/icons/nextjs.svg";

const SkillsDiv = () => {
  return (
    <div className="h-full pt-10">
      <div>
        <p className="font-bold text-2xl">SKILLS I HAVE</p>
      </div>
      <div className="mt-8 flex flex-wrap gap-10 justify-center">
        {Skills.map((ele, index) => (
          <div
            key={index}
            className="p-6 flex flex-col justify-center align-middle text-center"
          >
            <FontAwesomeIcon icon={ele.src} className="h-16" />
            <p>{ele.text}</p>
            <div className="h-1 bg-[#0E1B18] dark:bg-gray-400"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsDiv;
