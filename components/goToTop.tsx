// GoTop.js
import React from 'react';
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const GoTop = (props:any) => {
  return (
    <div className={props.showGoTop} onClick={props.scrollUp}>
      <button className="fixed bottom-8 right-8 border-0 w-16 h-16 rounded-full drop-shadow-md bg-teal-400 text-white text-3xl font-bold  hover:bg-teal-600">
      <FontAwesomeIcon icon={faChevronUp} className="h-4" />
      </button>
    </div>
  );
};

export default GoTop;
