const fs = require("fs"); //โหลดModule File Systemมาเก็บยังตัวแปร fs
let files = fs.readdirSync("./"); //เรียกMethod readdirSync() โดยผ่านค่าpathเข้าไปและresultที่ได้จากMethodจะไปเก็บยังตัวแปร files
console.log("Result is: ", files); //แสดงresultที่อยู่ในตัวแปลfilesออกมาบนconsole

// Notes
// Devส่วนใหญ่นิยมใช้ readdir มากกว่า readdirSync เนื่องจากการโหลดข้อมูลfilesออกมาใช้งานนั้น จะใช้เวลาในการติดต่อช่วงหนึ่งที่ไม่ทราบเวลาที่แน่นอนสามารถสั่งให้Node.js ไปทำงานอื่นก่อนได้ เมื่อโหลดFilesเสร็จเรียบร้อยจึงค่อยนำเอาข้อมูลจากFilesไปใช้งานต่อไป
