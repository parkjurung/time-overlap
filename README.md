#install
```
npm install time-overlap
```
#test
```
npm test
```
#usage
```javascript
var timeOverlap = require('time-overlap');

timeOverlap.cross([1,3,5,7],[2,4,6,8]); // return [2,3,6,7]

// --1--2--3--4--5--6--7--8--9--        //
//   1-----3     5-----7                //arg0
//      2-----4     6-----8             //arg1 
//      2--3        6--7                //result

timeOverlap.crossAll(); 
//same as cross(), but can receive multiple operand

timeOverlap.integrate([1,2,3,4,5,6]);   // return 3
// --1--2--3--4--5--6--7--8--9--
//   1--2  3--4  5--6
```

#other examples
```
--1--2--3--4--5--6--7--8--9--  //
  1-----3  4-----6             //arg0 [1,3,4,6]
        3--4  5--------8       //arg1 [3,4,5,8]
        3  4  5--6             //result [3,3,4,4,5,6]
        
        
--1--2--3--4--5--6--7--8--9--  //
  1-----3        6-----------  //arg0 [1,3,6] 
     2--------------7          //arg1 [2,7]
  1--2        5--------8       //arg2 [1,2,5,8]
     2           6--7          //result [2,2,6,7]
```
