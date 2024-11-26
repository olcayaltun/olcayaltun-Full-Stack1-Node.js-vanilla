import React from "react";
import FormD from "../components/FormData";
import axios from "axios";
import { Link } from "react-router-dom";

const CreatePage = () => {
  // API token burada tanımlanıyor

  const HandleSubmit = (e) => {
    e.preventDefault();

    // Form verilerini nesneye dönüştürme
    const formData = new FormData(e.target);
    const dataObj = Object.fromEntries(formData.entries());

    console.log("Gelen veriler:", dataObj);

    // JSON formatında gönderim
    axios
      .post("http://127.0.0.1:4098/api/movies", dataObj, {
        headers: {
          "Content-Type": "application/json", // JSON formatı

          Accept: "application/json",
        },
        withCredentials: true, // Çerez ile birlikte gönderim
      })
      .then(() => console.log("Veri başarıyla eklendi"))
      .catch((err) => console.error("Hata oluştu:", err));
  };

  return (
    <div className="grid place-items-center mt-[160px]">
      <form
        onSubmit={HandleSubmit}
        className="grid bg-amber-400 w-[400px] py-3"
      >
        <FormD label="Filmin Adı" name="title" />
        <FormD label="Tür" name="genre" />
        <FormD label="Rating" name="rating" type="number" />
        <FormD label="Yıl" name="year" type="number" />
        <Link
          to={"/"}
          type="submit"
          className="bg-orange-600 text-white m-auto p-2 rounded hover:bg-orange-700"
        >
          Film Oluştur
        </Link>
      </form>
    </div>
  );
};

export default CreatePage;
