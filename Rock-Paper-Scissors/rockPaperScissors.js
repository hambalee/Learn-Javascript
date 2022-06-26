const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === "bomb") {
      return "bomb";
    } else if (userInput === "rock") {
      return "rock";
    } else if (userInput === "paper") {
      return "paper";
    } else if (userInput === "scissors") {
      return "scissors";
    } else {
      console.log("Error");
    }
  };
  
  const getComputerChoice = () => {
    const numRandom = Math.floor(Math.random() * 3);
    if (numRandom === 0) {
      return "rock";
    } else if (numRandom === 1) {
      return "paper";
    } else if (numRandom === 2) {
      return "scissors";
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