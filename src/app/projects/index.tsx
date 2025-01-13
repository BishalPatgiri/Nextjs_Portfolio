"use client"
import React from "react";
import ProjectCard from "./ProjectCard";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  return (
    <div className="h-full">
      <div className="h-full">
        <p className="font-bold text-2xl max-sm:ml-4">PROJECTS</p>
        <div className="mt-8 flex justify-between align-middle flex-wrap gap-6 max-md:justify-center">
          <div className="slider-container">
        <Slider {...settings}>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
