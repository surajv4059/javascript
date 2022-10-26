//OPERATORS
// +,-,*,/,%,=
// ==,===,>,<.<=,>=,!=

//if-else

let ice = Number(prompt("type a number"));
1;

if (ice === 10) {
  console.log("ice is everywhere");
} else if (ice == 30) {
  console.log("ice is too much");
} else {
  console.log("ice is nowhere");
}

//SWITCH statement
switch (ice) {
  case 10:
    console.log("ice is everywhere");
    break;
  case 30:
    console.log("ice is too much");
    break;
  default:
    console.log("ice is nowhere");
}

//LOOPS
//for loop
for (let i = 0; i < 10; i++) {
  console.log("HIIIII");
}

//while loop
let i = 0;
while (i < 10) {
  console.log("ice is everywhere");
  i++;
}

//do while loop

do {
  console.log("ice is everywhere");
  i++;
} while (i < 10);
