"use client";

import React, { useEffect, useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ProjectsList } from "../../constants";
import {faAngleLeft,faAngleRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./index.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Projects = () => {
  const [highlightedIndex, setHighlightedIndex] = useState<number>(1); // Start with the second item
  const sliderRef = useRef<Slider | null>(null);
  const itemsCount = Projects.length;
  const intervalId = useRef<NodeJS.Timeout | null>(null); // Use useRef for intervalId

  useEffect(() => {
    // if (sliderRef.current) {
    //   sliderRef.current.slickGoTo(0); // Start with the first slide
    // }

    return () => {
      // Cleanup interval on unmount
      if (intervalId.current) {
        clearInterval(intervalId.current);
      }
    };
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    cssEase: "linear",
    adaptiveHeight: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1424,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleHover = (index: number) => {
    setHighlightedIndex(index);
  };

  const handleAutoSlide = (slideType: string) => {
    let index = highlightedIndex

    intervalId.current = setInterval(() => {
      if (sliderRef.current) {
        index = (index + 1) % itemsCount
       slideType == "next" && sliderRef.current.slickNext();
        slideType == "prev" && sliderRef.current.slickPrev()

        setHighlightedIndex(index)
      }
    }, 3000) // Change slides every 3 seconds
  }

  const stopAutoSlide = () => {
    if (intervalId.current) {
      clearInterval(intervalId.current);
    }
  };

  return (
    <div className={styles.mainDiv}>
    <div
      className={styles.leftHover}
      onMouseEnter={() => {
        // stopAutoSlide()
        sliderRef?.current?.slickPrev()
        // handleAutoSlide("prev")
      }}
      onMouseLeave={stopAutoSlide}
    >
            <FontAwesomeIcon icon={faAngleLeft} className="h-14 max-sm:h-10" />
    </div>
    {/* @ts-ignore */}
    <div className="slider-container" ref={sliderRef}>
      <Slider {...settings}>
        {ProjectsList.map((ele, index) => (
          <div
            // className={`${styles.panel} ${
            //   highlightedIndex === index ? styles.highlighted : ""
            // } h-[400px]`}
            className="h-[480px]"
            key={index}
          >
            <ProjectCard {...ele} />
          </div>
        ))}
      </Slider>
    </div>
    <div
        className={styles.rightHover}
        onMouseEnter={() => {
          stopAutoSlide()
          sliderRef?.current?.slickNext()
          handleAutoSlide("next")
        }}
        onMouseLeave={stopAutoSlide}
      >
            <FontAwesomeIcon icon={faAngleRight} className="h-14 max-sm:h-10" />
            </div>
    </div>
  );
};

export default Projects;
