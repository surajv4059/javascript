//explore includes , startswith ,endswith
let str = "surajverma";
let find = "suraj";
let sw = "s";
let ew = "a";
console.log(
  `The word ${find} ${str.includes(find) ? "is" : "is not"} in the sentence`
);

console.log(
  `our string ${
    str.startsWith(sw) ? "starts with" : "does not starts with"
  } the letter ${sw}`
);

console.log(
  `our string ${
    str.endsWith(ew) ? "ends with" : "does not ends with"
  } the letter ${ew}`
);

//write a program to convert a given string to upper case

str = str.toUpperCase();
console.log(str);

//extarct the amount of this string
// "please guve Rs 100"

let str1 = "please give Rs 1000";
console.log(Number.parseInt(str1.slice(15)));

//OR
console.log(Number.parseInt(str1.slice("please give Rs ".length)));
