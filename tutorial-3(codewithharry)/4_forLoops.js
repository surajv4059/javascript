// program to add first n natural numbers
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}

console.log(sum);

//FOR IN loop

let obj = {
  suraj: 100,
  satya: 99,
  vindhyavi: 98,
  ayushi: 97,
  krishnendra: 96,
};

for (let a in obj) {
  console.log(`marks of ${a} are ${obj[a]}`);
}

//FOR OF LOOPS

for (let a of "SURAJ") {
  console.log(a);
}
