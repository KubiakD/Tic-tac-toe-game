function enableUserInput(event){
const editIcon = event.target;
const h3Element = editIcon.parentElement;
const inputElementDiv = h3Element.nextElementSibling;
const saveBtn = inputElementDiv.nextElementSibling;

h3Element.style.display ='none';
inputElementDiv.style.display = 'block';
saveBtn.style.display = 'block';
};

function savePlayerName(event){
    const selectedPlayerId = +event.target.dataset.playerid;
    const formElement = event.target;
    const userName = formElement.children[0].lastElementChild;
    const h3Element = formElement.children[0];
    const inputElementDiv = formElement.children[1];
    const inputElement = formElement.children[1].children[0];
    const errorMessage = formElement.children[1].children[1];
    const saveBtn = formElement.children[2];

    
    event.preventDefault();
    const formData = new FormData(event.target);
    const enteredPlayerName = formData.get('username').trim();

    if(!enteredPlayerName){
        inputElement.classList.add('config-error');
        errorMessage.classList.add('error');
        errorMessage.innerText = 'Enter a valid name!'
        return
    }

    players[selectedPlayerId-1].name = enteredPlayerName;
    userName.innerText = enteredPlayerName;

    userName.style.display = 'inline';
    h3Element.style.display = 'block';
    saveBtn.style.display = 'none';
    inputElementDiv.style.display = 'none';

}

function showGameBoard() {
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
};
  currentRound = 0;
  activePlayer = 0;
  winnerArticle.firstElementChild.innerHTML =
    'You won, <span id="winner">Player name</span>!';
  winnerArticle.style.display = "none";
  playerTurnParagraph.style.display = "block";
  playerTurnSpan.innerText = players[activePlayer].name;
  gameBoard.style.display = "grid";
};