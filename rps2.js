const div = document.querySelector("div");
const message = document.querySelector(".message");
const humanScore = document.querySelector(".human-score");
const compScore = document.querySelector(".computer-score");
const main = document.querySelector("main");
const reset = document.querySelector("#reset");

let hScore = 0;
let cScore = 0;

function getComputerChoice() {
  let index = Math.ceil(Math.random() * 3);
  if (index === 1) {
    return "rock";
  } else if (index === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

div.addEventListener("click", playGame);

function playGame(e) {
  message.textContent = "";
  let computerChoice = getComputerChoice();
  let choice = e.target.id;
  if (choice === computerChoice) {
    message.textContent = "draw";
  } else if (
    (choice === "rock" && computerChoice === "paper") ||
    (choice === "paper" && computerChoice === "scissors") ||
    (choice === "scissors" && computerChoice === "rock")
  ) {
    message.textContent = "lose";
    cScore++;
  } else if (
    (choice === "rock" && computerChoice === "scissors") ||
    (choice === "paper" && computerChoice === "rock") ||
    (choice === "scissors" && computerChoice === "paper")
  ) {
    message.textContent = "win";
    hScore++;
  }
  humanScore.textContent = `Your score is : ${hScore}`;
  compScore.textContent = `Computer score is: ${cScore}`;
  if (hScore === 5 || cScore === 5) {
    const winner = document.createElement("p");
    if (hScore === 5) {
      winner.textContent = "you won";
    } else {
      winner.textContent = "you lose";
    }

    main.appendChild(winner);
    div.removeEventListener("click", playGame);
  }
}
reset.addEventListener("click", () => {
  hScore = 0;
  cScore = 0;
  humanScore.textContent = "";
  compScore.textContent = "";
  message.textContent = "";
});
