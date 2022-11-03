// Use js to create a game of snake water and gun. The game should ask you to enter S,W or G. The computer should be able to randomly generate S,Wor G and declare win or loss using alert. Use confirm and prompt wherever required

let cpu = Math.floor(Math.random() * 3);

let user = prompt("enter stone or paper or scissor");

let cpumove = ["stone", "paper", "scissor"][cpu];

console.log(user, cpumove);

const match = (user, cpumove) => {
  if (user == cpumove) {
    return "draw";
  } else if (user == "stone" && cpumove == "paper") {
    return "you lost";
  } else if (user == "stone" && cpumove == "scissor") {
    return "you won";
  } else if (user == "paper" && cpumove == "scissor") {
    return "you lost";
  } else if (user == "paper" && cpumove == "stone") {
    return "you won";
  } else if (user == "scissor" && cpumove == "stone") {
    return "you lost";
  } else if (user == "scissor" && cpumove == "paper") {
    return "you won";
  }
};

alert(match(user, cpumove));
