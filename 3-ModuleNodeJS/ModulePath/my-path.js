const path = require("path"); // โหลดModule Path จากนั้นเก็บไว้ที่ตัวแปร Path
const pathObject = path.parse(__filename); // เรียกMethod parse โดยผ่านค่าparameter __filename(pathของไฟล์ปัจจุบัน) แล้วนำresultจากMethod parse ไปเก็บยังตัวแปร pathObject
console.log(pathObject); // แสดงresult pathObject ที่หน้าจอconsole

// เปิดterminal runตัว node my-path.js
// result จะได้เป็น json objectที่เก็บdataของfileปัจจุบัน
