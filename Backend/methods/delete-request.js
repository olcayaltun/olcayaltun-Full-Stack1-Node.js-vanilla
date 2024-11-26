const fs = require("fs");

module.exports = (req, res) => {
  // CORS başlıklarını ekle
  res.setHeader("Access-Control-Allow-Origin", "*"); // Tüm originlere izin verir
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  ); // İzin verilen HTTP yöntemleri
  res.setHeader("Access-Control-Allow-Headers", "Content-Type"); // İzin verilen header'lar

  // Preflight (OPTIONS) isteği için yanıt döndür
  if (req.method === "OPTIONS") {
    res.writeHead(200);
    return res.end();
  }

  // URL'nin yol kısmını al
  const baseUrl = req.url.substring(0, req.url.lastIndexOf("/"));

  // URL'i parçalara ayır ve ID parametresini al
  const id = req.url.split("/")[3];

  if (baseUrl === "/api/movies" && id) {
    // Bütün filmleri al
    let data = fs.readFileSync("./data/movies.json", "utf-8");
    data = JSON.parse(data);

    // ID'li filmi bul ve diziden çıkar
    const foundItem = data.movies.find((item) => item.id == id);
    if (!foundItem) {
      res.writeHead(404);
      return res.end("ID geçersiz");
    }
    data.movies = data.movies.filter((item) => item.id != id);
    fs.writeFileSync("./data/movies.json", JSON.stringify(data));

    // Başarılı yanıt gönder
    res.writeHead(204, { "Content-Type": "application/json" });
    return res.end();
  }

  // URL bulunamazsa hata döndür
  res.writeHead(404);
  res.end("Yol Bulunamadı");
};
