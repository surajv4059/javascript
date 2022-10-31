//ARRAYS
let arr = [12, 13, 44, 66];
let arr2 = ["suraj", "verma"];
let arr3 = [12, "suraj", 13, [43, 34]];
console.log(arr);
console.log(arr2);
console.log(arr3);

let arr4 = [];
arr4[0] = 1;
arr4[1] = 3;
arr4[2] = 8;
console.log(arr4);

let arr5 = new Array(4);
console.log(arr5);

let arr6 = new Array(1, 2, 3, 4);
console.log(arr6);

let arr7 = [1, 2, 3, 4];
arr7.push(5); // adds element in end
console.log(arr7);

arr7.pop(); // delete element from end

arr7.shift(); //removes from front
arr7.unshift(21); //adds element in front

arr.splice(2, 5); // used to delete specific number of elements from an array. splice(start_index, number of elements to be deleted)

arr.reverse();

let arr8 = [];

for (let i = 1; i <= 100; i++) {
  arr8[i - 1] = i;
}
console.log(arr8);

//OBJECTS
const myObj2 = {
  name: "suraj",
  surname: "verma",
  income: 100000,
  male: true,
};

myObj2.newData = "something";
myObj2.date = "who knows";

console.log(myObj2);
