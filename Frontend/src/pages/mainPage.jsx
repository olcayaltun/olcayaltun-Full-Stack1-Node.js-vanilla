import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";
import Sleider from "../components/Sleider";
const MainPage = () => {
  const [movies, setMovies] = useState([]); // Filmler için state tanımladık

  useEffect(() => {
    axios
      .get("http://127.0.0.1:4098/api/movies") // URL formatı düzeltildi
      .then((response) => {
        console.log("Veri geldi:", response.data);
        setMovies(response.data.movies); // Gelen veriyi state'e kaydediyoruz
      })
      .catch((error) => {
        console.error("Hata oluştu:", error);
      });
  }, []);

  return (
    <div className="  w-[1400px] ml-6  relative  ">
      <ul className=" grid grid-cols-3 gap-[300px]  ml-8 mr-[250px] ">
        {movies.map((movie, i) => (
          <Card index={i} movie={movie} />
        ))}{" "}
        {/* Filmleri liste halinde gösteriyoruz */}
      </ul>
      <div className=" absolute flex  justify-between top-[520px] gap-[60px] mx-[150px] cursor-pointer">
        {movies.map((movie, i) => (
          <Sleider index={i} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
