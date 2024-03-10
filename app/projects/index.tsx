import React from "react";
import ProjectCard from "./ProjectCard";
import { ProjectsList } from "@/constants";

const Projects = () => {
  return (
    <div className="h-full">
      <div className="h-full" style={{ overflow: "auto" }}>
        <p className="font-bold text-2xl">PROJECTS</p>
        <div className="mt-8 flex justify-between align-middle flex-wrap gap-4">
          {ProjectsList.map((ele) => (
            <ProjectCard
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
