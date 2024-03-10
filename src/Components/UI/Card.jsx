import React from "react";

const Card = (props) => {
  return (
    <>
      <div onClick={(e) => e.stopPropagation(e)} className={`bg-slate-600 p-6 rounded-md w-full max-w-2xl ${props.className}`}>
        {props.children}
      </div>
    </>
  );
};

export default Card;
