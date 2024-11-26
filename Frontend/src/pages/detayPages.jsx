import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const DetayPages = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate(); // useNavigate hook'u

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:4098/api/movies/${id}`)
      .then((response) => setMovie(response.data))
      .catch((err) => console.log("Hata:", err));
  }, [id]);

  const handleDelete = (e) => {
    e.preventDefault();
    // Silme isteğini gönder
    axios
      .delete(`http://127.0.0.1:4098/api/movies/${id}`)
      .then(() => {
        console.log("Veri silindi");
        navigate("/"); // Silme işlemi başarılı olursa ana sayfaya yönlendir
      })
      .catch((err) => {
        console.log("Silme hatası:", err); // Hata durumunda konsola yazdır
      });
  };

  if (!movie) {
    return <div>Loading...</div>; // Veri yüklenmeden önce bekleme
  }

  return (
    <div className="grid place-items-center h-[800px] md:flex md:justify-center md:gap-5 relative">
      <img
        className="w-[300px] rounded-md"
        src={`https://picsum.photos/200/300`}
        alt=""
      />
      <div className="mt-[-220px] text-white grid gap-3 md:mt-12">
        <h1 className="text-xl font-bold">{movie.title}</h1>
        <p>Genre: {movie.genre}</p>
        <p>Rating: {movie.rating}</p>
        <p>Year: {movie.year}</p>
      </div>
      <button
        onClick={handleDelete}
        className="absolute right-[120px] top-[200px] bg-pink-700 text-white p-2 w-[120px] rounded-md hover:bg-pink-500 max-md:top-[630px]"
      >
        Filmi Sil
      </button>
    </div>
  );
};

export default DetayPages;
