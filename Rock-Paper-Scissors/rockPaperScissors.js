const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === "bomb" || userInput === "rock" || userInput === "paper" || userInput === "scissors") {
    return userInput
  } else {
    console.log("Error");
  }
};

const getComputerChoice = () => {
  const numRandom = Math.floor(Math.random() * 3);
  switch (numRandom) {
    case 0:
      return 'rock'
    case 1:
      return 'paper'
    case 2:
      return 'scissors'
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === "bomb") return "User won";
  if (userChoice === computerChoice) {
    return "The game is a tie";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Computer won";
    }
    return "User won";
  }
  if (userChoice === "paper") {
    if (computerChoice === "rock") {
      return "User won";
    }
    return "Computer won";
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "Computer won";
    }
    return "User won";
  }
};
const playGame = () => {
  const userChoice = getUserChoice("paper");
  const computerChoice = getComputerChoice();
  console.log(
    `user choice is ${userChoice} and computer choice is ${computerChoice}`
  );
  console.log(determineWinner(userChoice, computerChoice));
};
playGame();