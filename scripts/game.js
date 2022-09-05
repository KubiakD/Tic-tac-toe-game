function startNewGame() {
  if (players[0].name === "" && players[1].name === "") {
    alert("Please select names before starting the game!");
    return;
  }
  for (const cell of gameBoardFields) {
    cell.innerText = "";
    cell.className = "cell";
  }
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      gameBoardData[i][j] = 0;
    }
  }
  gameIsOver = false;
  currentRound = 0;
  activePlayer = 0;
  winnerArticle.firstElementChild.innerHTML =
    'You won, <span id="winner">Player name</span>!';
  winnerArticle.style.display = "none";
  playerTurnParagraph.style.display = "block";
  playerTurnSpan.innerText = players[activePlayer].name;
  gameBoard.style.display = "grid";
}

function changeActivePlayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  playerTurnSpan.innerText = players[activePlayer].name;
  currentRound++;
}

function selectField(event) {
  const selectedField = event.target;
  const selectedRow = selectedField.dataset.row;
  const selectedColumn = selectedField.dataset.col;

  if (selectedField.innerText !== "" || gameIsOver) {
    return;
  }
  selectedField.innerText = players[activePlayer].symbol;
  selectedField.classList.add("disabled");

  gameBoardData[selectedRow][selectedColumn] = players[activePlayer].id;

  changeActivePlayer();
  const winnerId = checkForWinner();
  if (winnerId !== 0) {
    endGame(winnerId);
  }
}

function checkForWinner() {
  for (let i = 0; i < 3; i++) {
    if (
      gameBoardData[i][0] > 0 &&
      gameBoardData[i][0] === gameBoardData[i][1] &&
      gameBoardData[i][1] === gameBoardData[i][2]
    ) {
      return gameBoardData[i][0];
    }
  }
  for (let i = 0; i < 3; i++) {
    if (
      gameBoardData[0][i] > 0 &&
      gameBoardData[0][i] === gameBoardData[1][i] &&
      gameBoardData[1][i] === gameBoardData[2][i]
    ) {
      return gameBoardData[0][i];
    }
  }
  if (
    gameBoardData[0][0] > 0 &&
    gameBoardData[0][0] === gameBoardData[1][1] &&
    gameBoardData[1][1] === gameBoardData[2][2]
  ) {
    return gameBoardData[0][0];
  }
  if (
    gameBoardData[0][2] > 0 &&
    gameBoardData[0][2] === gameBoardData[1][1] &&
    gameBoardData[1][1] === gameBoardData[2][0]
  ) {
    return gameBoardData[0][2];
  }
  if (currentRound === 9) {
    return -1;
  }
  return 0;
}

function endGame(winnerId) {
  gameIsOver = true;
  winnerArticle.style.display = "block";
  if (winnerId > 0) {
    winnerArticle.firstElementChild.firstElementChild.innerText =
      players[winnerId - 1].name;
  } else {
    winnerArticle.firstElementChild.innerHTML = "It's a draw!";
  }
  playerTurnParagraph.style.display = "none";
}
