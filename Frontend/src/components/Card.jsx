import React from "react";
import { Link } from "react-router-dom";
const Card = ({ movie, index }) => {
  return (
    <Link
      to={`/movie/${movie.id}`}
      className=" drop-shadow-md hover:drop-shadow-xl h-[380px] w-[400px] ml-5 group rounded-xl hover:rounded-xl  cursor-pointer"
    >
      <img
        className="group-hover:scale-105 transition h-[300px] w-[450px] rounded-tl-md rounded-tr-md"
        src={`https://picsum.photos/200/30${index}`}
        alt=""
      />
      <div className=" px-5 py-5 text-xl font-medium bg-[#010D29] text-zinc-300  group-hover:opacity-100 group-hover:visible group-hover:scale-105 transition ">
        <h1>{movie.title}</h1>
        <h2 className=" flex items-center font-light gap-2">
          {movie.genre} <span className=" mb-3 font-medium">.</span>ARD
        </h2>
        <h2>
          <span className=" text-black bg-[#FFCB14] px-1 rounded-sm">
            {movie.rating}
          </span>
        </h2>
        <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:scale-105 transition">
          <h2 className=" font-light">Verfügbar bis 12.03.{movie.year} </h2>
          <h1 className=" flex gap-3 mt-2 text-xl font-bold  px-5 items-center ">
            <span className=" text-4xl">+</span>Merken
          </h1>
        </div>
      </div>
    </Link>
  );
};

export default Card;
