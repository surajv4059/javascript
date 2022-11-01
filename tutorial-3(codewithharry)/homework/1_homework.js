//write a javascript program to generate a random number and store it in a variable. the program then takes an input from the user to tell them whether the guess was correct, greater than or less than the original number.

// (100- no. of guesses) is the score of the user . The program is expected to terminate once the number is guessed. Number must be between 1 - 100

// SOLUTION

let a = Number.parseInt(Math.random() * 100);
console.log(a);

let comp;

comp = Number.parseInt(prompt("enter your guess"));
let count = 1;
while (true) {
  if (comp > a) {
    comp = Number.parseInt(
      prompt("You guessed a greater number, please guess again")
    );
  } else if (comp < a) {
    comp = Number.parseInt(
      prompt("You guessed a smaller number, please guess again")
    );
  } else if (comp === a) {
    alert(
      `you won, the correct number was ${a} and your score is ${100 - count}`
    );
    break;
  }

  count++;
}
