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

delete marks[2]; // deletes the element on given index but does not change the length of array
console.log(marks);

let marks2 = [13, 90, 76];
let marks3 = [9, 7, 6];
marks[2] = 3;
let mergedarray = marks.concat(marks2, marks3);
console.log(mergedarray);

//SORT METHOD
let compare = (a, b) => {
  return a - b;
};
mergedarray.sort(compare);
console.log(mergedarray);

//REVERSE
mergedarray.reverse();
console.log(mergedarray);

// Splice and Slice
let splicerrr = mergedarray.splice(1, 2, 101, 102, 103, 104); // .splice(index to start inserting, no.of elements tobe deleted, elements to be added) , returns the deleted elements
console.log(mergedarray, splicerrr);

//slice
console.log(mergedarray.slice(2, 8)); //first index is included , last index is excluded

//Array.from
let arr = Array.from("suraj");
console.log(arr);

//LOOPS with Arrays

for (let i = 0; i < mergedarray.length; i++) {
  console.log(mergedarray[i]);
}

//FOR IN LOOP
for (let n in mergedarray) {
  console.log(Number.parseInt(n));
}

//FOR EACH LOOP
mergedarray.forEach((element) => {
  console.log(element * element);
});

for (let x of mergedarray) {
  console.log("in", x);
}
