const changeBgRed = () => {
  document.body.firstElementChild.style.background = "red";
};

let b = document.body;
console.log("first child of b is : ", b.firstChild);
console.log("first Element child of b is: ", b.firstElementChild);
