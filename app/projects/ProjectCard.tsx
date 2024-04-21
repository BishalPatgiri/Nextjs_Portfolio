import React from "react";
import Image from "next/image";
import Link from "next/link";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons/faLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Styles from "./projectcard.module.css"

interface InputData {
  image: string;
  git: string;
  text: string;
  deployed: string;
  title: string;
}

const ProjectCard = ({ image, git, text, deployed, title }: InputData) => {
  return (
    <div className="h-80 flex justify-center gap-10 p-10 shadow-lg border border-slate-600 rounded-md backdrop-brightness-110" style={{alignItems:"center"}}>
      <div className="w-1/3 h-max">
        <Image
          height="400"
          width="400"
          src={image}
          alt={title}
          className="h-4/5 w-full"
        />
           <div className="flex justify-center mt-4 gap-8">
          <div>
            <Link href={git} >
              <FontAwesomeIcon icon={faGithub} className="h-5" />
            </Link>
          </div>
          <div>
            <Link href={deployed}>
              <FontAwesomeIcon icon={faLink} className="h-5" />
            </Link>
          </div>
        </div>
      </div>
      <div className="w-2/3 h-max text-center">
        <p className="font-bold">{title}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
