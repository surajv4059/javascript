// console.assert
// console.assert(5 > 2);

// console.clear()

let obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
};

console.table(obj);

console.error("hii");
console.warn("this is a friendly warning");

console.info("this is a info");
let limit = 4000;
console.time("forLOOP");
for (let i = 0; i < limit; i++) {
  continue;
}
console.timeEnd("forLOOP");

console.time("whileLOOP");
let i = 0;
while (i < limit) {
  i++;
}
console.timeEnd("whileLOOP");
