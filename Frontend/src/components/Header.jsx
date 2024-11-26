import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className=" border-b-[6px] border-red-500 w-[1350px]  ml-[75px] mr-[90px] h-[95px] bg-[#010E29]  flex justify-between items-center px-12">
      <div className=" flex items-center gap-2 ">
        <img
          className=" h-[70px] rounded-md rounded-tr-[70px] rounded-br-[60px]"
          src={"/public/mov.png"}
          alt=""
        />
        <h1 className=" text-red-600 ">
          {" "}
          <span className=" font-semibold text-3xl">HD</span>Filmizle.com
        </h1>
      </div>
      <div className=" flex justify-center items-center gap-2 ">
        <input className=" p-2 rounded-md" placeholder="Film Ara"></input>
        <Link
          to={"/create"}
          className=" bg-red-600  text-white p-2 rounded-md  cursor-pointer hover:bg-red-500"
        >
          Film Olustur
        </Link>
      </div>
    </div>
  );
};

export default Header;
