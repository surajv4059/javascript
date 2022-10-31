function fun1(a, b) {
  let result = a * 10 + b * 10;
  console.log(result);
}

//calling the function
fun1(4, 6);

let myFunc = function (a = 0, b = 0, c = 0) {
  let ans = a + b + c;
  console.log(ans);
  return ans;
};

myFunc(1, 2, 3);

function func2(name) {
  console.log(`Hi ${name}! How are you?`);
}
func2("suraj");
function sum(arr = []) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

console.log(sum([1, 2, 3]));
