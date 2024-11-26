import React from "react";

const Sleider = ({ movie, index }) => {
  return (
    <div className=" grid place-items-center  gap-1 ">
      <img
        className=" rounded-full w-[110px] h-[110px] border-4 border-rose-600"
        src={`https://picsum.photos/200/30${index + 9}`}
        alt=""
      />
      <h2 className=" text-white truncate w-[100px]">{movie.title}</h2>
    </div>
  );
};

export default Sleider;
