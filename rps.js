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

function getHumanChoice() {
  let choice = String(prompt("rock, paper or scissors?")).toLowerCase();
  if (choice === "rock" || choice === "paper" || choice === "scissors") {
    return choice;
  } else {
    console.log("invalid input");
  }
}

let humanScore = 0;
let computerScore = 0;
function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "draw";
  } else if (
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "rock")
  ) {
    return "lose";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    return "win";
  }
}

function playGame() {
  for (let i = 1; i <= 5; i++) {
    let roundResult = playRound(getHumanChoice(), getComputerChoice());
    if (roundResult === "win") {
      humanScore++;
    } else if (roundResult === "lose") {
      computerScore++;
    } else if (roundResult === "draw") {
      humanScore++;
      computerScore++;
    }
    console.log(`Round ${i}: You ${roundResult}
Your score: ${humanScore}
Computer score: ${computerScore}`);
  }
  if (humanScore > computerScore) {
    console.log("Congratulations! You won.");
  } else if (humanScore < computerScore) {
    console.log("Sorry, you lose. Try again.");
  } else if (humanScore === computerScore) {
    console.log("Sorry, it's a tie. Try again.");
  }
}
playGame();
