let a = new Array(91, 82, 63, 84);
console.log(a);

let marks = [82, 87, 85, 89, 81];
console.log(marks);

console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);
console.log(marks[3]);
console.log(marks[6]);
console.log(marks.length);

//ARRAY METHODS

console.log(marks.toString()); //converts array to string

console.log(marks.join("_")); //joins elements of array using joiner and returns string

let r = marks.pop(); //removes last element of array and returns the popped element
console.log(marks, r);

let x = marks.push(89); //push inserts an element at end and returns new array length
console.log(marks, x);

//shift and unshift are same as pop and push but work at front of the array
