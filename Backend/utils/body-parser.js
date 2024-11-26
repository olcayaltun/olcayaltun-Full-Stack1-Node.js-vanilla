module.exports = async (request) => {
  return new Promise((resolve, reject) => {
    try {
      let body = "";

      // Gelen veri parçalarını oku
      request.on("data", (chunk) => {
        body += chunk;
      });

      // Veri alımı tamamlandığında çalışır
      request.on("end", () => {
        if (!body) {
          return resolve({}); // Boş gövde
        }
        try {
          resolve(JSON.parse(body)); // JSON formatına dönüştür
        } catch (err) {
          reject(new Error("Geçersiz JSON formatı")); // JSON hatası
        }
      });

      // Hata durumunda reddet
      request.on("error", (err) => {
        reject(err);
      });
    } catch (err) {
      reject(err); // Genel hata
    }
  });
};
