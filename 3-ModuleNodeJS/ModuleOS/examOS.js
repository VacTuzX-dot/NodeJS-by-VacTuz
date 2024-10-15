const os = require("os");
let freeMemory = os.freemem();
console.log(freeMemory);
let user = os.userInfo();
console.log(user);

// 19851345920 แสดงจำนวนหน่วยความจำที่ว่างอยู่
// {
//     uid: -1,
//     gid: -1,
//     username: 'tawee',
//     homedir: 'C:\\Users\\tawee',
//     shell: null
// }
//line 2-6 เป็นobject ที่แสดงข้อมูลของUserคนปัจจุบัน
