const EventEmitter = require("events"); // โหลดโมดูล Event เก็บไว้ที่ตัวแปร EventEmitter ซึ่งมีลักษณะเป็นคลาส
const emitter = new EventEmitter(); //สร้าง Object จากclass EventEmitter จากนั้นนำObjectที่ได้เก็บไว้ที่ตัวแปร emitter
emitter.addListener("myEvent", function (args) {
  // เรียกMethod addListener() เพื่อกำหนด Event Listener
  console.log("Hello I found you: myEvent"); // แสดงtextบนconsole
});
emitter.emit("myEvent"); // ใช้Method emit() เพื่อปล่อยEventชื่อว่าmyEventออกมา

// คำสั่ง emitter.emit('myEvent'); หมายถึงสั่งให้ปล่อย (emit) eventที่ชื่อว่า myEvent ออกมาโดยEvent Listener ที่คอยดูEventต่างๆ อยู่แล้วพบeventชื่อว่า myEvent ก็จะทำคำสั่งที่อยู่ในEvent Listener ซึ่งในตัวอย่างนี้คือแสดงtext Hello I found you: myEvent ออกมาทาง console

//เราสามารถใช้Method on แทนการใช้Method addListener เพื่อกำหนดEvent

//Exam Code : The "ON" method replaces the "addListener" method
// emitter.on("myEvent", function (args) {
//   console.log("Hello I found you: myEvent");
// });
// emitter.emit("myEvent");
