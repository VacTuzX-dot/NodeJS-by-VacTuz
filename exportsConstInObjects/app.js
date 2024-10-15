const settings = require("./settings");
const databaseName = settings.dbName;
console.log(databaseName);

// โหลดModule Settingsโดยเก็บresultsไว้ที่ตัวแปร settings
// ประการตัวแปร databaseName เก็บค่าที่ได้จาก settings.dbName ซึ่งเป็นObjectที่อยู่ในModule Settings
// ลอง node app.js จะต้องได้result บน terminal = XsyDB
