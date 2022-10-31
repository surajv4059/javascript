//print student and marks from an object using loops

const marks = {
  suraj: 98,
  verma: 87,
  kumar: 91,
};

for (let x in marks) {
  console.log(`${x} got ${marks[x]} marks`);
}

for (let i = 0; i < Object.keys(marks).length; i++) {
  console.log(
    `the marks of ${Object.keys(marks)[i]} = ${marks[Object.keys(marks)[i]]}`
  );
}

//enter a program to print try again until the user enters correct number

let a = Number.parseInt(prompt("Enter a number between 10 to 20"));

console.log(a);
while (!(a <= 20 && a >= 10)) {
  a = Number.parseInt(prompt("Try again"));
}

alert("successful");

const fun1 = (a, b, c, d, e) => {
  return (a + b + c + d + e) / 5;
};

console.log(fun1(1, 2, 3, 4, 5));
