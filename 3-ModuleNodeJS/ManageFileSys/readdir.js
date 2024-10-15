const fs = require("fs"); // โหลด module File System โดยใช้ require เพื่อ import ฟังก์ชันจาก module 'fs' และเก็บลงในตัวแปร 'fs'

fs.readdir("./", function (err, files) {
  // เรียกใช้ method readdir() โดยมีพารามิเตอร์แรกคือ "./" หมายถึง path ของโฟลเดอร์ปัจจุบัน ส่วนพารามิเตอร์ที่สองคือ callback function ที่จะถูกเรียกหลังจากเสร็จสิ้นการอ่านเนื้อหาในโฟลเดอร์
  if (err) {
    // ตรวจสอบว่ามีข้อผิดพลาด (err) หรือไม่ หากเกิดข้อผิดพลาดจะมีการจัดการภายในบล็อกนี้
    console.log("We got this error: ", err); // แสดงข้อผิดพลาดบนหน้าจอ console
  } else {
    // หากไม่มีข้อผิดพลาด
    console.log("List of files are: ", files); // แสดงรายการไฟล์ทั้งหมดที่อยู่ในโฟลเดอร์ปัจจุบัน โดยตัวแปร 'files' เป็น array ที่เก็บชื่อไฟล์ทั้งหมดในโฟลเดอร์นี้
  }
});
