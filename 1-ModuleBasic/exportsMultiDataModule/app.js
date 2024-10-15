const { getSecretKey, dbName } = require("./settings"); // โหลด getSecretKey กับ dbName จากfile settings.js
const myObject = require("./settings"); // ประกาศตัวแปร myObject เก็บค่าที่ได้จากfile settings.js

console.log(getSecretKey()); // เรียกใช้function getSecretKey() แล้วแสดงresultบนconsole
console.log(dbName); // แสดงค่า dbName บน console

// สามารถโหลดdataมาเก็บไว้ในobjectได้ โดยการประกาศตัวแปรขึ้นมารับค่าจากนั้นอ้างอิงค่าต่างๆ เหมือนpropertyของobject
console.log(myObject.getSecretKey()); // เรียกใช้function getSecretKey ที่อยู่ในobject myObject
console.log(myObject.dbName); //อ้างไปยัง dbName ที่อยู่ในobject myObject
