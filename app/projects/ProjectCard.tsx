import React from "react";
import Image from "next/image";
import Link from "next/link";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons/faLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Styles from "./projectcard.module.css";

interface InputData {
  image: string;
  git: string;
  text: string;
  deployed: string;
  title: string;
}

const ProjectCard = ({ image, git, text, deployed, title }: InputData) => {
  return (
    <div
      className="h-80 flex justify-center gap-8 p-6 shadow-lg border-2 border-gray-1200 rounded-md backdrop-brightness-110"
      style={{ alignItems: "center" }}
    >
      <div className="w-1/3 h-5/6 border-x-8 border-gray-140">
        <Image
          height="400"
          width="400"
          src={image}
          alt={title}
          className="h-full w-full"
        />
      </div>
      <div className="w-2/3 h-max text-center">
        <p className="font-bold">{title}</p>
        <p>{text}</p>
        <div className="flex justify-around mt-4 gap-8">
          <div className="border border-gray-800 py-2 px-10 rounded-md cursor-pointer">
            <Link href={git}>
              <FontAwesomeIcon icon={faGithub} className="h-5" />
            </Link>
          </div>
          <div className="border border-gray-800 py-2 px-10 rounded-md cursor-pointer">
            <Link href={deployed}>
              <FontAwesomeIcon icon={faLink} className="h-5" />
            </Link>
          </div>
        </div>
      </div>
        <div className="absolute right-8 top-0 z-[1]">
          <svg
            width="238"
            height="431"
            viewBox="0 0 280 531"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              opacity="0.3"
              x="422.819"
              y="-70.8145"
              width="196"
              height="541.607"
              rx="2"
              transform="rotate(51.2997 422.819 -70.8145)"
              fill="url(#paint0_linear_83:2)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_83:2"
                x1="517.152"
                y1="-251.373"
                x2="517.152"
                y2="459.865"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#70BDAB" />
                <stop offset="1" stopColor="#70BDAB" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
    </div>
  );
};

export default ProjectCard;
