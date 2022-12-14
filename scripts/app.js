const gameBoardData = [
[0, 0, 0],
[0, 0, 0],
[0, 0, 0]
];

const players = [
    {
        name:'',
        id:1,
        symbol:'O'
    },
    {
        name:'',
        id:2,
        symbol:'X'
    }
]
let gameIsOver = false;
let activePlayer = 0;
let currentRound = 0;

const gameSection = document.getElementById('game');
const changeNameIcon = document.getElementsByClassName('material-symbols-rounded');
const nameInput = document.getElementsByClassName('player-name-input');
const formElements = document.querySelectorAll('form');
const saveNameBtn = document.getElementsByClassName('player-name-btn');
const errorOutput = document.getElementsByClassName('config-error');

const startNewGameBtn = document.getElementById('start-game-btn');
const gameBoard = document.getElementById('game-board');
const gameBoardFields = document.getElementsByClassName('cell');
const playerTurnParagraph = document.getElementById('turn');
const playerTurnSpan = document.getElementById('playerTurn');
const winnerArticle = document.getElementById('winner-article');

for (const icon of changeNameIcon) {
    icon.addEventListener('click', enableUserInput);
}
for (const form of formElements) {
    form.addEventListener('submit', savePlayerName)
}
startNewGameBtn.addEventListener('click', startNewGame);

for (const cell of gameBoardFields) {
    cell.addEventListener('click', selectField)  
}