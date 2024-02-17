import React from "react";
import Image from "next/image";
import Link from "next/link";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons/faLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface InputData {
  image: string;
  git: string;
  text: string;
  deployed: string;
  title: string;
}

const ProjectCard = ({ image, git, text, deployed, title }: InputData) => {
  return (
    <div className="w-1/3">
      <div>
        <Image height="400" width="400" src={image} alt={title} />
      </div>
      <div>
        <p className="">{title}</p>
        <p>{text}</p>
        <div className="flex gap-x-6">
          <div>
            <Link href={git}>
              <FontAwesomeIcon icon={faGithub} className="h-6" />
            </Link>
          </div>
          <div>
            <Link href={git}>
              <FontAwesomeIcon icon={faLink} className="h-6" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
