// GoTop.js
import React, { useEffect, useState } from 'react';
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const GoTop = (props:any) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
   // Determine whether to show the button based on scroll position
   const showGoTop = scrollPosition > 200 ? 'block' : 'hidden';

   // Handle the scroll to top action
   const scrollUp = () => {
     window.scrollTo({ top: 0, behavior: 'smooth' });
   };
  return (
    <div onClick={scrollUp}>
      <button className="fixed bottom-8 right-8 border-0 w-12 h-12 rounded-full drop-shadow-md bg-theme-color-200 text-white text-3xl font-bold  hover:bg-theme-color-300">
      <FontAwesomeIcon icon={faChevronUp} />
      </button>
    </div>
  );
};

export default GoTop;
