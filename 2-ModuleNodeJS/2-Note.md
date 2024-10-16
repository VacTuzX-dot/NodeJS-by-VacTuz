# Module Path

การโหลด Module ที่มาพร้อมกับNodeJS เรียกว่า Build-in Module ไม่ต้องระบุตำแหน่งfolderเนื่องจากNodeJS ทราบอยู่แล้วว่าคือ Build-in Module ซึ่งแตกต่างจากการโหลดModuleอื่นๆที่สร้างขึ้นมาใหม่ ที่ต้องกำหนดpathและระบุตำแหน่งFileของModule

<a href="./ModulePath/my-path.js">ModulePath</a>

```js
const path = require("path"); // โหลดModule path ที่เป็น build-in module
const path01 = require("./path"); // โหลด Module ที่เป็นFileชื่อว่า path.jsซึ่งอยู่ในfolderเดียวกัน
```

# Module OS

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

<a href="./ModulePath/my-path.js">ModuleOS</a>

# File System

ถ้าต้องการ เพิ่ม ลบ file เราสามารถใช้ methodต่างๆภายในmodule file system
ส่วนวิธีเรียกใช้ก็ง่ายๆ โดนผ่านค่า fs เข้าไปยัง require() ก็จะได้objectของmodule file systemมาใช้งาน

```js
const fs = require("fs");
```

ตัวอย่างการใช้method readdir() ของmodule file systemเพื่อดูว่าfolderที่สนใจอยู่นั้นมีfilesอะไรอยู่บ้าง ซึ่งresultจากการเรียกใช้methodนี้จะได้เป็นArrayแสดงชื่อFilesทั้งหมดในfolderนั้นๆ
method readdir()ต้องผ่านค่าparamsอย่างน้อย2ค่าโดยparamแรกคือpathของfolderที่ต้องการตรวจสอบ ส่วนparamค่าที่สองคือ callback function ซึ่งจะถูกเรียกใช้งานเมื่อเข้าไปยังfolderที่ต้องการเรียบร้อยแล้ว

```js
fs.readdit(path, callback);
```

path = pathของfolderที่สนใจ
callback = functionที่จะถูกเรียกใช้หลังจากเข้าไปยังpathที่กำหนดซึ่งอาจเข้าใช้งานสำเร็จหรือไม่สำเร็จก็ได้ ถ้าสำเร็จก็จะได้Arrayของfilesต่างๆที่อยู่ในfolderนั้นๆกลับา แต่ถ้าไม่สำเร็จก็จะได้ข้อผิดพลาดส่งกลับมาแทน

<a href="./ManageFileSys/readdir.js">ModuleFileSystem Readdir</a>

การตรวจสอบName Lists Folderในpath Module File systemจะมีใช้งานอยู่ 2 แบบคือแบบ Asynchronous กับแบบ Synchronous

## - Method readdir() จะมีลักษณะเป็นแบบ Asynchronous ซึ่งหมายถึง การเข้าไปดูFilesต่างๆในFolder ไม่จำเป็นต้องรอให้ได้resultก่อน ก็สามารถไปทำคำสั่งอื่น ซึ่งวิธีนี้จะไม่บล็อกการทำงานโดยรวมของApplication

## - Method readdirSync() จะมีลักษณะเป็นแบบ Synchronous ซึ่งหมายถึงเวลาเราเรียกใช้คำสั่งนี้จะต้องรอให้ได้resultก่อน จึงจะไปทำคำสั่งอื่นๆต่อไปได้

ตัวอย่างการใช้Method readdirSync ซึ่งเป็นMethodที่มีจุดประสงค์เดียวกับreaddirแต่เป็นCodeแบบSynchronous (สังเกตว่าไม่สามารถแสดงerrorได้)

<a href="./ManageFileSys/readdirSync.js">ModuleFileSystem ReaddirSync</a>

# Module Event

eventคือเหตุการณ์ที่เกิดขึ้นระหว่างใช้งานApp เช่น เมื่อClick mouse, เมื่อเปลี่ยนแปลงInputที่อยู่ในForm, เมื่อยกปุ่มKeyboard ฯลฯ การเขียนCodeเพื่อresponsกับEventเหล่านี้ สามารถใช้คำสั่งต่างๆที่อยู่ในModule Eventได้

การโหลดโมดูล Events Module จะได้class EventEmitter กลับมา (ไม่ใช่ObjectหรือFunction แต่เป็นClass) ดังนั้นหลังจากโหลดโมดูล Event จะต้องสร้างObjectจากคลาสEventEmitterอีกครั้งดังตัวอย่างต่อไปนี้

```js
const EventEmitter = require("events"); //โหลดโมดูลEvent จากนั้นนำresultไปเก็บยังตัวแปรEventEmitter สังเกตว่าจะตั้งชื่อตัวแปรด้วยอักษรตัวใหญ่ เพื่อบอกให้ทราบว่าตัวแปรนี้เก็บชื่อClass
const emitter = new EventEmitter(); // สร้างObjectจากคลาส EventEmitter แล้วนำresultไปเก็บยังตัวแปร emitter
```

เมื่อสร้างObject emitterแล้ว เราจะใช้Methodต่างๆที่อยู่ในobject emitterเพื่อสร้างEvent Listener(หรือเรียกว่าEvent Handler)เป็นตัวสังเกตการณ์ คอยดูว่ามีEventตามที่กำหนดหรือไม่
ถ้ามีEventตรงกับที่กำหนด ให้ทำคำสั่งที่เตรียมไว้ต่อไปเช่น สร้างผู้สังเกตการณ์ (Listener) เพื่อรอคอยการClick Mouse หากผู้สังเกตุการณ์ตรวจพบการClick Listenerก็จะทำคำสั่งตามที่เตรียมเอาไว้ เป็นต้น

## Steps 1 : เตรียม Event Listener เอาไว้ล่วงหน้า

ต้องกำหนดEventขึ้นมา หากเกิดEventแบบนี้ จะให้runคำสั่งอะไร เช่น หากUserส่ง HTTP Request มาที่ Server ก็สั่งให้ส่ง HTTP Response กลับไปด้วยtextว่า "Status OK" เป็นต้น

ต่อมากำหนดEvent Listenerเป็นเหมือนกับคนที่คอยดักฟังว่ามีEventนี้เกิดขึ้นหรือไม่ ถ้ามีก็จะให้ไปทำอะไร

```js
emitter.addListener("myEvent", function (args) {
  console.log("Hello I found you: myEvent");
});
```

จากCode Examกำหนดชื่อeventว่า myEvent โดยเมื่อเกิดeventนี้เกิดขึ้น ก็จะสั่งให้แสดงtextออกมาว่า Hello I found you: myEvent

addListener() คือการเพิ่มEventเข้าไปในObjectเป็นการเตรียมEventเอาไว้ล่วงหน้า หากเกิดEventตรงกับที่กำหนดก็จะRunชุดคำสั่งที่ได้เตรียมไว้

## Steps 2 : Assign Event

Eventที่เกิดขึ้นในAppมีหลายรูปแบบ เช่น เมื่อUserกรอกURL ที่ BrowserจะเกิดEvent HTTP Request เพื่อร้องขอDataจาก Server หรือขณะที่Userแตะหน้าจอมือถือแล้วยกนิ้วขึ้น ก็จะเกิดEvent Touched Up Inside เป็นต้น

    Eventที่จะเกิดขึ้นในระหว่างที่Userกำลังใช้งานAppหรือเกิดจากCodeที่เราCodingขึ้นมาก็ได้ เช่น Eventแตะหน้าจอ Eventลากนิ้วที่หน้าจอ EventจากการDouble Click ฯลฯ หากEventที่สร้างขึ้นหรือที่ปล่อยมานั้นตรงกับEventที่Event Listener มองหาอยู่ ก็จะทำคำสั่งตามที่กำหนดไว้ล่วงหน้าทันที

Code Exam เพื่อกำหนดEventขึ้นมาเองโดยใช้Method emit() ดังตัวอย่างต่อไปนี้
<a href="./ModuleEvent/my-event.js">MyEvent</a>

# Passing parameters into an Event

การเพิ่มEventไปยัง Event Listener เราสามารถผ่านค่าparameterเข้าไปยังfunctionได้ โดยนิยมผ่านค่าเป็น Object

## Steps 1 : เตรียมEventไว้ล่วงหน้า

ให้เพิ่ม Event Listener พร้อมกับผ่านค่าparamsเข้าไป

```js
const EventEmitter = require("events");
const emitter = new EventEmitter();
emitter.on("myEvent", function (args) {
  console.log("You met myEvent with: ", args);
});
```

จากCodeตัวอย่าง เราได้ผ่านค่าparams args เข้าไปในEvent myEventเมื่อEventนี้เกิดขึ้น ก็จะสั่งให้แสดงtextออกมาว่า You met myEvent พร้อมแสดงค่าparamsออกมาที่หน้าจอconsole

## Steps 2 : ปล่อยEvent พร้อมผ่านค่าparams

การใช้Method emit paramแรกคือชื่อEvent และ paramที่สองคือ object ที่ต้องการผ่านเข้าไป เช่น

```js
const EventEmitter = require("events");
const emitter = new EventEmitter();
emitter.on("myEvent", function (args) {
  // กำหนดชื่อEventว่า myEvent และกำหนดfunctionที่ต้องผ่านparams args เข้าไป
  console.log("You met myEvent with: ", args);
});
emitter.emit("myEvent", { id: 1, name: "Taweesak" }); //ปล่อยEventโดยกำหนดชื่อEventว่า myEventและผ่านค่าparamsในแบบobjectเข้าไปด้วย (paramsนี้ก็คือ params args ที่กำหนดไว้ในline 3)
```

เราสามารถผ่านparamsเป็นแบบobject ที่มีรูปแบบที่แตกต่างกันออกไปได้ เช่น

```js
const EventEmitter = require("events");
const emitter = new EventEmitter();
emitter.on("myEvent", function (args) {
  console.log("You met myEvent with: ", args);
});
emitter.emit("myEvent", { id: 1, name: "Taweesak" });
emitter.emit("myEvent", {
  type: "response",
  content_type: "text/html",
  header: "200 OK",
});
```

ถ้าไม่ต้องการผ่านค่าเป็นแบบObjectเราสามารถกำหนดparamsหลายๆค่าได้ โดยระบุไว้ตั้งแต่ตอนสร้าง Event Listener เช่น

```js
const EventEmitter = require("events");
const emitter = new EventEmitter();
emitter.on("myEvent", function (args1, args2) {
  //กำหนดEvent Listener โดยผ่านparamsจำนวน2ค่าได้แก่ args1, args2
  console.log("You met myEvent with: ", args1, args2);
});
emitter.emit("myEvent", 1, "Taweesak"); // บังคับให้เกิดEventโดยparamsแรกคือชื่อ Event paramsสองและสามคือparamsที่ได้ออกแบบเอาไว้แล้ว (arg1 และ arg2)
```

# HTTP Module เบี้องต้น

เราสามารถassignให้Applicationทำหน้าที่เป็น Server หรือ Clientก็ได้ เช่น หากต้องการกำหนดให้เป็นServer ก็ให้ใช้Method createServer แต่ถ้าต้องการให้เป็นClientก็ให้ใช้Method createClient แทน

Exam การใช้Module HTTP โดยAssignให้Applicationมีหน้าที่เป็นWeb Server

## Steps 1 สร้างServerขึ้นมาก่อน

การสร้างServerจากModule HTTP จะได้เป็นObjectที่เป็นSubclassของEventEmitter ดังนั้น เราจึงสามารถกำหนด Event Listener และสร้างEventได้ด้วย

```js
const http = require("http");
const server = http.createServer();
```

## Steps 2 กำหนดPortที่ใช้Connect Server

เพิ่มMethod listen(3000) เพื่อสร้างEvent Listener รอการConnectต่อผ่านจากPort 3000

```js
const http = require("http");
const server = http.createServer();
server.listen(3000);
console.log("Listening form port 3000");
```

## Steps 3 ตรวจสอบว่าClientได้ConnectกับServerแล้ว

วิธีตรวจสอบเราต้องกำหนดEvent Listener ชื่อว่า connection ลงไปในobject Server ถ้ามีการเชื่อมต่อสำเร็จแล้วก็จะสั่งให้Runคำสั่งที่ได้เตรียมไว้

```js
const http = require("http");
const server = http.createServer();
server.on("connection", function (socket) {
  // เพิ่มEvent connection และกำหนดให้ผ่านค่าparams socketด้วย
  console.log("Client connected");
});
server.listen(3000);
console.log("Listening form port 3000");
```

## Steps 4 ทดสอบการ Connect ด้วยการเปิดWeb Browser

เมื่อClient(Browser)เชื่อมกับServer(HTTP Server)เรียบร้อยก็จะเกิด Event connection เมื่อ Event Listener พบEvent connection ก็จะพิมพ์text Client connected ที่console vscode
เปิดBrowserลองพิมพ์ url เป็น http://localhost:3000 แล้วกด <Enter>

**Note เมื่อClient ส่งHttp Request ร้องขอDataไปยังServer แต่Examนี้ยังไม่ได้เตรียมBodyที่จะresponseกลับไปที่Client ดังนั้นเมื่อกรอก http://localhost:3000 แล้วกด Enter จึงไม่พบtextใดๆบนBrowser**
