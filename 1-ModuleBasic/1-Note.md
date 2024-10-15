# Module In Node.js

module คือ package หรือ library ที่อยู่ใน Node.js โดยแต่ละModuleจะเป็นอิสระจากModuleอื่นๆ หากAppต้องการใช้งานModuleใด ก็โหลดModuleที่ต้องการมายังFileปัจจุบัน

เมื่อติดตั้งNode.jsลงบนPCเราจะได้Moduleติดมาพร้อมกับ Node.js จำนวนหนึ่งโดยเรียกModuleที่ติดตั้งมาตั้งแต่แรกนี้ว่า Build-in Module นอกจาก Module ที่มาพร้อมกับ Node.js เรายังสามารถสร้างModuleขึ้นใช้งานเอง (เรียกว่า Custom Module) และสามารถติดตั้งModuleอื่นๆที่มีDevสร้างไว้แล้วได้ (เรียกว่า Third-Party Module) เพิ่มลงไปในApplicationได้

# How to use Module

ก่อนจะใช้Moduleใด ต้องโหลดModuleนั้นมายังFileปัจจุบันก่อนโดยใช้คำสั่ง require() และกำหนดชื่อModuleที่ต้องการใช้งาน ซึ่งรูปแบบการใช้งานคำสั่ง require() จะเป็นแบบนี้

```js
const variableName = require("moduleName");
```

- const คือ keywordที่ใช้บอกว่าเป็นค่าคงที่
- variableName คือ ชื่อของตัวแปรที่เก็บโมดูล (Module)
- moduleName คือ ชื่อModuleที่เราต้องการโหลดมาใช้งาน โดยสังเกตว่าจะอยู่ภายในเครื่องหมาย Single Quote(' ') หรือ Double Quote (" ")

Code Exam การโหลดโมดูล fs , http

```js
const fs = require("fs"); //โหลดModule fs และเก็บไปยังตัวแปร fs
const http = require("http"); //โหลดModule http และเก็บไปยังตัวแปร http
```

ก่อนจะโหลดModuleมาใช้ ต้องมีการประกาศตัวแปรมารับค่าModule หลังจากนั้นจะสามารถเรียกใช้งานClass, Method หรือ etc function ที่อยู่ในModuleนั้นได้ เช่น ในModule fs มีmethod writeFileSync สำหรับเขียนDataลงบนFile เป็นต้น

```js
const fs = require("fs"); //โหลดModule fs และเก็บไปยังตัวแปร fs
fs.writeFileSync("data.txt", "Hello, Node.js App!"); //เรียกMethod writeFileSync เพื่อเขียนtextลงในfileโดย data.txt คือ ชื่อไฟล์ ส่วน Hello Node.js App! คือtextที่จะเขียนลงไปในfile
```
