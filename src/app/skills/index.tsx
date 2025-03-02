import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Skills } from "../../constants";

const SkillsDiv = () => {
  return (
    <div className="h-fit">
      <div>
        <p className="font-bold text-2xl max-sm:ml-4">SKILLS I HAVE</p>
      </div>
      <div className="mt-8 flex flex-wrap gap-10 justify-center max-sm:gap-0 max-sm:mt-2">
        {Skills.map((ele, index) => (
          <div
            key={index}
            className="p-6 flex flex-col justify-center align-middle text-center max-sm:p-5"
          >
            <FontAwesomeIcon icon={ele.src} className="h-14 max-sm:h-14" />
            <p>{ele.text}</p>
            <div className="h-1 bg-[#0E1B18] dark:bg-gray-400"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsDiv;
