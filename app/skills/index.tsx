import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faAws,
  faNodeJs,
  faNode,
  faHtml5,
  faCss3Alt,
  faPython,
  faGit,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
// import  NextJs  from "../../assets/icons/nextjs.svg";

const Skills = () => {
  return (
    <div className="page-height">
      <div>
        <p className="font-bold text-2xl">SKILLS I HAVE</p>
      </div>
      <div className="mt-8 flex flex-wrap space-x-16 justify-center">
        <div>
          <FontAwesomeIcon icon={faReact} className="h-16" />
          <p>ReactJs</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faAws} className="h-16" />
          <p>AWS Lamda</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faNodeJs} className="h-16" />
          <p>Javascript</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faNode} className="h-16" />
          <p>NodeJS</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faHtml5} className="h-16" />
          <p>HTML</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faCss3Alt} className="h-16" />
          <p>CSS</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faPython} className="h-16" />
          <p>Python</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faGit} className="h-16" />{" "}
          <p>Git</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faGithub} className="h-16" />{" "}
          <p>Github</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
