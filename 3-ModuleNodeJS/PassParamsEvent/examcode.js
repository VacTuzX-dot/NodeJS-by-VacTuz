const EventEmitter = require("events");
const emitter = new EventEmitter();
emitter.on("myEvent", function (args) {
  console.log("You met myEvent with: ", args);
});
emitter.emit("myEvent", { id: 1, name: "Taweesak" });
emitter.emit("myEvent", {
  type: "response",
  content_type: "text/html",
  header: "200 OK",
});
