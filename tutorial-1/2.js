//type conversion and string methods

let a = 56;
console.log(a);
let b = String(a);
console.log(typeof b, b);
let c = a.toString();
console.log(typeof c, c);

//Strings

let s = "My name is suraj";

console.log(s[0]);
console.log(s.length);
console.log(s.indexOf("s"));
console.log(s.lastIndexOf("s"));
console.log(s.indexOf("suraj"));
console.log(s.charAt(11));
console.log(s.endsWith("suraj"));
console.log(s.startsWith("My"));
console.log(s.includes("is suraj"));
console.log(s.substring(0, 5)); // returns My na
console.log(s.slice(1, 5)); //returns y na
console.log(s.substr(3, 4)); //returns name
console.log(s.split(" ")); // split the string on spaces and makes a array list
console.log(s.replace("is", "was"));
console.log(s.toLowerCase);
console.log(s.toUpperCase);
