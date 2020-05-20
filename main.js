let target = Math.floor(Math.random() * 10);
let computerGuess = Math.floor(Math.random() * 10);
let currentRoundNumber = 1;
let humanScore = 0;
let computerScore = 0;

const humanGuessInput = getId("human-guess");
const roundNumberDisplay = getId("round-number");
const humanScoreDisplay = getId("human-score");
const computerScoreDisplay = getId("computer-score");
const computerGuessDisplay = getId("computer-guess");
const targetNumberDisplay = getId("target-number");
const computerWinsDisplay = getId("computer-wins");
const guessButton = getId("guess");
const nextRoundButton = getId("next-round");
const addButton = getId("add");
const subtractButton = getId("subtract");

guessButton.addEventListener("click", () => {
  const check = checkHumanwin();
  const human = checkHumanIsWinner();

  updateScore(check);
  showWinnertext(human);

  computerGuessDisplay.innerText = computerGuess;
  targetNumberDisplay.innerText = target;
  humanScoreDisplay.innerText = humanScore;
  computerScoreDisplay.innerText = computerScore;
  guessButton.setAttribute("disabled", true);
  nextRoundButton.removeAttribute("disabled");
});

nextRoundButton.addEventListener("click", () => {
  advanceRound();
  roundNumberDisplay.innerText = currentRoundNumber;
  nextRoundButton.setAttribute("disabled", true);
  guessButton.removeAttribute("disabled");
  targetNumberDisplay.innerText = "?";
  guessButton.innerText = "Make a Guess";
  humanGuessInput.value = "";
  computerGuessDisplay.innerText = "?";
  computerWinsDisplay.innerText = "";
  guessButton.classList.remove("winning-text");
});

addButton.addEventListener("click", () => {
  humanGuessInput.value = +humanGuessInput.value + 1;
  handleValueChange(humanGuessInput.value);
});

subtractButton.addEventListener("click", () => {
  humanGuessInput.value = +humanGuessInput.value - 1;
  handleValueChange(humanGuessInput.value);
});

humanGuessInput.addEventListener("input", (e) => {
  handleValueChange(e.target.value);
});
