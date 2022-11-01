//MAP method
let arr = [12, 24, 3, 1, 122, 90];

let a = arr.map((value) => {
  console.log(value);
  return value + 1;
});

console.log(a);

//FilterMethod

let x = arr.filter(() => {
  return a < 10;
});

//Reduce method

let res = arr.reduce((h1, h2) => {
  return h1 + h2;
});

console.log(res);
