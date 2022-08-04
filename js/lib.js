function newData(startNum, endNumber) {
  let currentNum;
  currentNum = startNum;
  var sum = 0;

  while (currentNum <= endNumber) {
    sum += currentNum++;
  }
  return sum;
}

console.log("New Result", newData(10, 22));
//
var z = 0;
function a(){ 
    while (true) {
    if (z++ > 10) process.exit(0);
        b();
        console.log(z) }}
function b(){ 
    z++; }
a();
console.log("Hi");