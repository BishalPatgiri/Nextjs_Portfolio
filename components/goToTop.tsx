// GoTop.js
import React from 'react';

const GoTop = (props:any) => {
  return (
    <div className={props.showGoTop} onClick={props.scrollUp}>
      <button className="fixed bottom-8 right-8 border-0 w-16 h-16 rounded-full drop-shadow-md bg-indigo-500 text-white text-3xl font-bold  hover:bg-indigo-600">
        <i className="goTop__text fas fa-chevron-up" />
      </button>
    </div>
  );
};

export default GoTop;
