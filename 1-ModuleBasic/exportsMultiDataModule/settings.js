const Settings = {
  secretKey: "QVOsntgysB",
  userPass: "ALXOxtmvHQ",
  dbName: "XsyDB",
};
const getSecretKey = () => {
  return Settings.secretKey;
};
module.exports.getSecretKey = getSecretKey;
module.exports.userPass = Settings.userPass;
module.exports.dbName = Settings.dbName;

// line1 ประกาศตัวแปร Settings เก็บObject
// line6 ประกาศFunction getSecretKey()
// line9 สั่ง exports function getSecretKey
// line10 สั่ง exports Key userPass ที่อยู่ในObject Settings (line1)
// line11 สั่ง exports Key dbName ที่อยู่ในObject Settings (line1)
