"use client";
import React, { useEffect, useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ProjectsList } from "../../constants";
import styles from "./index.module.css";

const Projects = () => {
  const [highlightedIndex, setHighlightedIndex] = useState<number>(1); // Start with the second item
  const sliderRef = useRef<Slider | null>(null);
  const itemsCount = Projects.length;


  const hadleSlideButtonClick = (slideType: string) => {
    let index = highlightedIndex;
    if (sliderRef.current) {
      index = (index + 1) % itemsCount;
      slideType == "next" && sliderRef.current.slickNext();
      slideType == "prev" && sliderRef.current.slickPrev();
      setHighlightedIndex(index);
    }
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={() => hadleSlideButtonClick("next")}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={() => hadleSlideButtonClick("prev")}
      />
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    centerMode: true,
    centerPadding: "0",
    };

  // useEffect(() => {
  //   if (sliderRef.current) {
  //     sliderRef.current.slickGoTo(2); // Change '2' to the index of the slide you want to focus initially
  //   }
  // }, []);

  return (
    // <div className="h-full">
    //   <div className="h-full">
    //     <p className="font-bold text-2xl max-sm:ml-4">PROJECTS</p>
    //     <div className="mt-8 flex justify-between align-middle flex-wrap gap-6 max-md:justify-center">
    // @ts-ignore
    <div className="slider-container" ref={sliderRef}>
      <Slider {...settings}>
        {ProjectsList.map((ele, index) => (
          <div
            // className={`${styles.panel} ${
            //   highlightedIndex === index ? styles.highlighted : ""
            // } h-[400px]`}
            className="h-[540px]"
            key={index}
          >
            <ProjectCard {...ele} />
          </div>
        ))}
      </Slider>
    </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Projects;
