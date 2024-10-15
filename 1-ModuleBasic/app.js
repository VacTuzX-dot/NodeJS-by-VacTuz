const bcrypt = require("bcryptjs");
const password = "password";
const myHash = "$2y$10$705MclWRPyZkkB/VMSR3.eNfJjdruWW3jGcX1AucQEgB0g7NQCV.y";

bcrypt.compare(password, myHash, function (err, res) {
  if (res == true) {
    console.log("password match");
  } else {
    console.log("mismatch please try again");
  }
});
