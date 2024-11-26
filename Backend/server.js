const http = require("http");

// Dışarıdan modülleri içe aktarıyoruz
const deleteRequest = require("./methods/delete-request");
const getRequest = require("./methods/get-request");
const postRequest = require("./methods/post-request");

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  switch (req.method) {
    case "OPTIONS":
      res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, PATCH, OPTIONS"
      );

      res.end();
      break;
    case "GET":
      // GET isteği için ilgili modülü çağırıyoruz
      getRequest(req, res);
      return; // Akışı kesiyoruz

    case "POST":
      // POST isteği için ilgili modülü çağırıyoruz
      postRequest(req, res);
      return; // Akışı kesiyoruz

    case "DELETE":
      // DELETE isteği için ilgili modülü çağırıyoruz
      deleteRequest(req, res);
      return; // Akışı kesiyoruz

    default:
      // Geçersiz bir method isteği geldiğinde
      res.statusCode = 400; // 400 - Bad Request
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ message: "sayfa bulunamadı" }));
      return;
  }
});

server.listen(4098, "127.0.0.1", () => {
  console.log("Server 4098. portu dinliyor");
});
