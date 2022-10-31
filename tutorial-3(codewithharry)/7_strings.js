let name = "suraj";
console.log(name.length);

let friend = "satya";
console.log(friend.length);
console.log(friend[0]);

//Template Literals

let boy1 = "suraj";
let boy2 = "verma";

let sentence = `${boy2} is a friend of ${boy1}`;
console.log(sentence);

//Escape sequence characters
// let fruit = "bana\"na";
// console.log(fruit);

let nam = "Suraj";
let withspace = "  imspace  ";
console.log(nam.toUpperCase());
console.log(nam.toLocaleLowerCase());
console.log(nam.slice(1, 3));
console.log(nam.replace("ur", "umr"));
console.log(nam.concat(" verma"));
console.log(withspace.trim()); //removes the spaces from start and end

nam = nam.toUpperCase();
