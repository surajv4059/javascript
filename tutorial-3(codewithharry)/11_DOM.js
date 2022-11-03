const changeBgRed = () => {
  document.body.firstElementChild.style.background = "red";
};

let b = document.body;
console.log("first child of b is : ", b.firstChild);
console.log("first Element child of b is: ", b.firstElementChild);

//query selectors

let x = document.querySelectorAll(".card"); //returns all elements with given class
x[0].style.color = "red";
x[1].style.color - "blue";

let y = document.getElementById("first");
y.style.color = "green";

document.querySelector(".this"); //gives first element with matching class
document.querySelector("#this"); //gives first element with matching id
