การโหลด Module ที่มาพร้อมกับNodeJS เรียกว่า Build-in Module ไม่ต้องระบุตำแหน่งfolderเนื่องจากNodeJS ทราบอยู่แล้วว่าคือ Build-in Module ซึ่งแตกต่างจากการโหลดModuleอื่นๆที่สร้างขึ้นมาใหม่ ที่ต้องกำหนดpathและระบุตำแหน่งFileของModule

<a href="./ModulePath/my-path.js">ModulePath</a>

```js
const path = require("path"); // โหลดModule path ที่เป็น build-in module
const path01 = require("./path"); // โหลด Module ที่เป็นFileชื่อว่า path.jsซึ่งอยู่ในfolderเดียวกัน
```

การเชื่อมข้อความกับตัวแปรใน JavaScript เราจะใช้เครื่องหมายบวก + เชื่อมระหว่างข้อความกับค่าที่ได้จากตัวแปร ดังตัวอย่างต่อไปนี้

<a href="./ModulePath/my-path.js">ModuleOS</a>

```js
const os = require("os");
let totalMemory = os.totalmem();
console.log("Total Memory is : " + totalMemory);
```

สำหรับ JS verใหม่ เช่นES6 (ECMAscript 2015) หรือverที่สูงกว่า เราสามารถใช้Codeต่อไปนี้แทนCodeที่ผ่านมาได้

```js
const os = require("os");
let totalMemory = os.totalmem();
console.log(`Total Memory is: ${totalMemory}`);
```

สังเกตว่าเราจะใช้เครื่องหมาย backtick(`)ครอบtextทั้งหมด ถ้าต้องการแสดงค่าจากตัวแปร ให้นำชื่อตัวแปรไปใส่ไว้ใน ${ } ด้วยวิธีนี้การแสดงtextพร้อมค่าจากตัวแปรจะสะดวกขึ้นมาก เพราะไม่ต้องใช้เครื่องหมาย + สลับระหว่างตัวแปรและtext

File System
ถ้าต้องการ เพิ่ม ลบ file เราสามารถใช้ methodต่างๆภายในmodule file system
ส่วนวิธีเรียกใช้ก็ง่ายๆ โดนผ่านค่า fs เข้าไปยัง require() ก็จะได้objectของmodule file systemมาใช้งาน

```js
const fs = require("fs");
```

ตัวอย่างการใช้method readdir() ของmodule file systemเพื่อดูว่าfolderที่สนใจอยู่นั้นมีfilesอะไรอยู่บ้าง ซึ่งresultจากการเรียกใช้methodนี้จะได้เป็นArrayแสดงชื่อFilesทั้งหมดในfolderนั้นๆ
method readdir()ต้องผ่านค่าparamอย่างน้อย2ค่าโดยparamแรกคือpathของfolderที่ต้องการตรวจสอบ ส่วนparamค่าที่สองคือ callback function ซึ่งจะถูกเรียกใช้งานเมื่อเข้าไปยังfolderที่ต้องการเรียบร้อยแล้ว

```js
fs.readdit(path, callback);
```

path = pathของfolderที่สนใจ
callback = functionที่จะถูกเรียกใช้หลังจากเข้าไปยังpathที่กำหนดซึ่งอาจเข้าใช้งานสำเร็จหรือไม่สำเร็จก็ได้ ถ้าสำเร็จก็จะได้Arrayของfilesต่างๆที่อยู่ในfolderนั้นๆกลับา แต่ถ้าไม่สำเร็จก็จะได้ข้อผิดพลาดส่งกลับมาแทน
