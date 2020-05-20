getId = (id) => {
  return document.getElementById(id);
};

compareGuesses = (humanguess, computerguess, tergetguess) => {
  const humanDifference = Math.abs(tergetguess - humanguess);
  const computerDifference = Math.abs(tergetguess - computerguess);
  return humanDifference <= computerDifference;
};

checkHumanIsWinner = () => {
  const currentHumanGuess = humanGuessInput.value;
  const humanIsWinner = compareGuesses(
    currentHumanGuess,
    computerGuess,
    target
  );
  return humanIsWinner;
};

checkHumanwin = () => {
  const winner = checkHumanIsWinner() ? "human" : "computer";
  return winner;
};

updateScore = (winner) => {
  if (winner === "human") {
    return humanScore++;
  } else if (winner === "computer") {
    return computerScore++;
  }
};

handleValueChange = (value) => {
  if (value > 0 && value <= 9) {
    subtractButton.removeAttribute("disabled");
    addButton.removeAttribute("disabled");
  } else if (value > 9) {
    addButton.setAttribute("disabled", true);
  } else if (value <= 0) {
    subtractButton.setAttribute("disabled", true);
  }
};

advanceRound = () => currentRoundNumber++;

showWinnertext = (human) => {
  if (human) {
    guessButton.innerText = "You Win!!!!!";
    guessButton.classList.toggle("winning-text");
  } else {
    computerWinsDisplay.innerText = "Computer Wins!!!";
  }
};
