การโหลด Module ที่มาพร้อมกับNodeJS เรียกว่า Build-in Module ไม่ต้องระบุตำแหน่งfolderเนื่องจากNodeJS ทราบอยู่แล้วว่าคือ Build-in Module ซึ่งแตกต่างจากการโหลดModuleอื่นๆที่สร้างขึ้นมาใหม่ ที่ต้องกำหนดpathและระบุตำแหน่งFileของModule
```
const path = require('path') // โหลดModule path ที่เป็น build-in module
const path01 = require('./path') // โหลด Module ที่เป็นFileชื่อว่า path.jsซึ่งอยู่ในfolderเดียวกัน
```