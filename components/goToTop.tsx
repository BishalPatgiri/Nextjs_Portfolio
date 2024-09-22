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
     console.log("Hello")
     window.scrollTo({ top: 0, behavior: 'smooth' });
   };
  return (
    <div onClick={scrollUp}>
      <button className="fixed bottom-8 right-8 border-0 w-16 h-16 rounded-full drop-shadow-md bg-teal-400 text-white text-3xl font-bold  hover:bg-teal-600">
      <FontAwesomeIcon icon={faChevronUp} />
      </button>
    </div>
  );
};

export default GoTop;
