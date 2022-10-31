//use logical operator to determine whether the age of a persoon lies between 10 and 20

let a = Number.parseInt(prompt("Please enter your age"));
// if (a >= 10 && a <= 20) {
//   console.log("YES");
// } else console.log("NO");

//write a program to check divisibilty by 2 and 3
if (a % 6 == 0) {
  console.log("divisible by 2 and 3");
} else if (a % 2 == 0) {
  console.log("divisible by 2");
} else if (a % 3 == 0) {
  console.log("divisible by 3");
} else console.log("not divisble bye 2 or 3");

// use ternary operator to check if you can drive or not
console.log(a >= 18 ? "you can drive" : "you can't drive");
