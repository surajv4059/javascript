// Create a variable of type string and try to add a number to it
let st = "suraj";
st = st + 1;
console.log(st);

//use typeof to determine the datatype of previous answer
console.log(typeof st);

//create a const object . can you change it to hold a number later?
const obj = {
  name: "suraj",
  surname: "verma",
};

// obj = 1 cannot be done

//try to add new key in previous object

obj["friend"] = "none";
console.log(obj);

//create a program to create a opposite word-meaning dictionary of 5 words
const dict = {
  hello: "bye",
  suraj: "verma",
  good: "bad",
  long: "short",
  far: "near",
};

console.log(dict.hello);
