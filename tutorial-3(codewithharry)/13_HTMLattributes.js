let first = document.getElementById("first");
console.log(first);
let a = first.getAttribute("class");
console.log(a);

console.log(first.hasAttribute("class")); //returns true

// first.setAttribute("hidden", "true");
// first.setAttribute("class", "class1 class2");

// first.removeAttribute("class");

console.log(first.attributes);

// you want to add custom attributes, always use data-
// eg

{
  /* <div id  = "abc"  data-game = "a" data-player = "b"></div>
 now you can access your custom attribute using .dataset

eg 
abc.dataset
abc.dataset.game  will return a
abc.dataset.player will return b */
}
