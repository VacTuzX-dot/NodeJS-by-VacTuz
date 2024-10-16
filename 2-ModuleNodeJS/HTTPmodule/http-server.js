const http = require("http");
const server = http.createServer();
server.on("connection", function (socket) { // เพิ่มEvent connection และกำหนดให้ผ่านค่าparams socketด้วย
  console.log("Client connected");
});
server.listen(3000);
console.log("Listening form port 3000");
