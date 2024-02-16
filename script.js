"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    // document.querySelector(".message").textContent = "No Number ⛔";
    displayMessage("No Number ⛔");
  } else if (guess === secretNumber) {
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;
    displayMessage("Correct Number 🤩");
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "Too High 😞" : "Too Low 😞");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector("body").style.backgroundColor = "#ff0000";
      displayMessage("You Lost The Game 😶");
    }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "#692eb6";

  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  displayMessage("Start guessing...");
});
