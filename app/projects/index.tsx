"use"
import React from "react";
import ProjectCard from "./ProjectCard";
import { ProjectsList } from "@/constants";
import dynamic from "next/dynamic";
import type SliderType from "react-slick";

const Slider = dynamic<SliderType>((() => import("react-slick").then((mod) => mod.default)) as any, {
  ssr: false,
});


const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="h-full">
      <div className="h-full">
        <p className="font-bold text-2xl max-sm:ml-4">PROJECTS</p>
        <div className="mt-8 flex justify-between align-middle flex-wrap gap-6 max-md:justify-center">
        <Slider {...settings}>
      
          <div>
            5555
          </div>
          <div>
            6666
          </div>
        </Slider>
        </div>
      </div>
    </div>
  );
};

export default Projects;
