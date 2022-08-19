const changeNameIcon = document.getElementsByClassName('material-symbols-rounded');
const nameInput = document.getElementsByClassName('player-name-input');

const startNewGameBtn = document.getElementById('start-game-btn');
const gameBoard = document.getElementById('game-board');

for (const icon of changeNameIcon) {
    icon.addEventListener('click', enableUserInput);
}

startNewGameBtn.addEventListener('click', showGameBoard);