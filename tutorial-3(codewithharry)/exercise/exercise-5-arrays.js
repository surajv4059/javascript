let arr = new Array(1, 2, 3, 4, 5, 6, 7);

let input;
do {
  input = input = Number.parseInt(prompt("enter a number"));
  arr.push(input);
} while (input != 0);

console.log(arr);

arr = [10, 20, 12, 50, 80, 85];

console.log(
  arr.filter((value) => {
    return value % 10 == 0;
  })
);

console.log(
  arr.map((value) => {
    return value * value;
  })
);

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
console.log(
  arr.reduce((x1, x2) => {
    return x1 * x2;
  })
);
