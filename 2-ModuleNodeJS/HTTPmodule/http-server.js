const http = require("http");
const server = http.createServer(function (req, res) {
  if (req.url == "/") {
    res.write("You are at home page");
    res.end();
  }
});
server.on("connection", function (socket) {
  console.log("Client connected");
});
server.listen(3000);
console.log("Listening from port 3000");
