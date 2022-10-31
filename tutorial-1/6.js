console.log(document.body.children);
const arr = document.body.children;
const newArr = Array.from(arr);
console.log(newArr);

console.log(document.getElementById("first"));
console.log(document.getElementsByClassName("second"));
let thisone = document.getElementsByTagName("span");

thisone[0].textContent = "newOne";
thisone[0].innerText = "again";
thisone[0].innerHTML = `<span class='myClass'>Nice</span>`;
thisone[0].style.backgroundColor = "red";
thisone[0].style.font = '100 1.5rem "Roboto"';

const myBtn = document.getElementById("myBtn");

myBtn.style.backgroundColor = "blue";
myBtn.style.color = "#fff";
myBtn.style.border = "fff";
myBtn.style.padding = "2vmax 4vmax";
myBtn.style.cursor = "pointer";

const x = document.querySelector(".ok");
x.innerHTML = "none";
