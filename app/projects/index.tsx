import React from "react";
import ProjectCard from "./ProjectCard";
import { ProjectsList } from "@/constants";

const Projects = () => {
  return (
    <div className="h-full">
      <div className="h-full">
        <p className="font-bold text-2xl max-sm:ml-4">PROJECTS</p>
        <div className="mt-8 flex justify-between align-middle flex-wrap gap-6 max-md:justify-center">
          {ProjectsList.map((ele,index) => (
            <ProjectCard
              key={index}
              image={ele.image}
              git={ele.git}
              text={ele.text}
              deployed={ele.deployed}
              title={ele.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
