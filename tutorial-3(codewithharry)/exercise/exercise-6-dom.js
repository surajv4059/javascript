// create a navbar and change the color of its first element to red

let fi = document.getElementsByTagName("nav")[0].firstElementChild;

fi.firstElementChild.style.color = "red";

//create am element with 3 children and change properties of first and last children

let fc = document.getElementsByTagName("ul")[0];

fc.firstElementChild.style.border = "2px solid red";
fc.lastElementChild.style.border = "2px solid red";

// write a javascript to change background  of all <li> tags to cyan

Array.from(document.getElementsByTagName("li")).forEach((element) => {
  element.style.background = "cyan";
});
