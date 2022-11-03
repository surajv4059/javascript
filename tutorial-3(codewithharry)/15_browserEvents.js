let x = function (e) {
  document.body.style.background = "red";
};

let y = function (e) {
  alert("hello world2");
};

btn.addEventListener("click", x);

btn.addEventListener("click", y);

let a = prompt("what is your fav number?");
if (a == "2") {
  btn.removeEventListener("click", x);
}
