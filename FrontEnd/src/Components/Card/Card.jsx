import React from "react";

function Card({ name, degree, about, img }) {
  console.log(img);
  return (
    <div className="bg-slate-700 w-full py-1 pr-2 ">
      <div className="flex bg-gray-200">
        <div className="left w-28 inline-block">
          <img className="w-full " src={img} alt="" />
        </div>
        <div className="right w-full pl-1 flex flex-col ">
          <p className="uppercase first-letter:text-b">{name}</p>
          <p>{degree}</p>
          <p>{about}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
