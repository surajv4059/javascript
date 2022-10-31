//A fragment of code that produces a value is called an expression
// every value written literally is an expression for ex. 77 or "suraj"

//ARITHMETIC OPERATORS
let a = 12;
let b = 15;
console.log("a+b = ", a + b);
console.log("a-b = ", a - b);
console.log("a/b = ", a / b);
console.log("a*b = ", a * b);
console.log("a raised to power b = ", a ** b);
console.log("remainder of a/b = ", a % b);
console.log("post-increment on a", a++);
console.log("pre-increment on a", ++a);
// same goes for decrement --a , a--

//ASSIGNMENT OPERATORS
a = 10;
console.log(a);
a += 5;
console.log(a);
a -= 5;
console.log(a);
a *= 5;
console.log(a);
a /= 5;
console.log(a);
a **= 3;
console.log(a);

//COMPARISON OPERATORS
let comp1 = 5;
let comp2 = 6;
console.log("comp1 == comp2 is ", comp1 == comp2); //returns true if  both are equal
console.log("comp1 != comp2 is ", comp1 != comp2); //returns true if both are not equal
console.log("comp1 === comp2 is ", comp1 === comp2); //compares datatypes along with vlaues
console.log("comp1 !== comp2 is ", comp1 !== comp2);

//OTHER COMPARISON OPERATORS
// >,<,<=,>=,?

//LOGICAL OPERATORS
let p = 5;
let q = 6;
console.log(p < q && q == 5); // returns true only when both conditions are true
console.log(p < q || q == 6); //returns true even if one condition is true
console.log(!(p < q)); //inverts the result
