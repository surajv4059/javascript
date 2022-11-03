//create a button which is capable to redirect to google.com

document.getElementsByClassName("google")[0].addEventListener("click", () => {
  location = "https://www.google.com";
});

// write a javascript program to keep fetching contents of a website (every 5 seconds)

const fetchContent = async (url) => {
  con = await fetch(url);
  let a = await con.json();
  return a;
};

// setInterval(async function () {
//   let url = "https://jsonplaceholder.typicode.com/todos/1";
//   console.log(await fetchContent(url));
// }, 3000);

setInterval(async function () {
  document.querySelector("#bulb").classList.toggle("bulb");
}, 300);
