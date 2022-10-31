let a = prompt("hey what is your age?");
a = Number.parseInt(a); // converting the string to a number
//IF STATEMENT
// if (a > 0) {
//   alert("This is a valid age");
// }

// IF-ELSE STATEMENT

// if (a > 0) {
//   alert("This is a valid age");
// } else {
//   alert("Not valid age");
// }

//ELSE-if

if (a <= 9) {
  alert("you can not drive");
} else if (a > 9 && a < 18) {
  alert("Drive after 18");
} else {
  alert("you can drive");
}

//Ternary operator

console.log("you can", a < 18 ? "not drive" : "drive");

//SWITCH STATEMENT

switch (a) {
  case 12:
    alert("not drive");
    break;
  case 18:
    alert("drive");
    break;
  default:
    alert("not valid");
}
