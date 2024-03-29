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
    <div className="w-5/12 text-center p-8 shadow-lg justify-center border border-slate-600 rounded-md backdrop-brightness-110">
      <div>
        <Image
          height="400"
          width="400"
          src={image}
          alt={title}
          className="h-[250px]:"
        />
      </div>
      <div className="mt-4">
        <p className="font-bold">{title}</p>
        <p>{text}</p>
        <div className="flex justify-between mt-4">
          <div>
            <Link href={git}>
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
    </div>
  );
};

export default ProjectCard;
