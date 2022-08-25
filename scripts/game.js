function changeActivePlayer() {
    if(activePlayer === 0) {
        activePlayer = 1
    } else {
        activePlayer = 0
    }
};

function selectField(event) {
    const selectedField = event.target;
    const selectedRow = selectedField.dataset.row;
    const selectedColumn = selectedField.dataset.col;
    
    if(selectedField.innerText === ''){
    selectedField.innerText = players[activePlayer].symbol;
    selectedField.classList.add('disabled');
    changeActivePlayer();
    playerTurnSpan.innerText = players[activePlayer].name;

    gameBoardData[selectedRow][selectedColumn] = players[activePlayer].id;
    }
    return
}

function checkForWinner() {
    for (let i=0; i<3; i++) {
        if (gameBoardData[i][0] > 0 &&
            gameBoardData[i][0] === gameBoardData[i][1] &&
            gameBoardData[i][1] === gameBoardData[i][2]) {
            return gameBoardData[i][0];
        }
    } 
    for (let i=0; i<3; i++) {
        if (gameBoardData[0][i] > 0 &&
            gameBoardData[0][i] === gameBoardData[1][i] &&
            gameBoardData[1][i] === gameBoardData[2][i]) {
            return gameBoardData[0][i];

        }
    } 
    if (gameBoardData[0][0] > 0 &&
        gameBoardData[0][0] === gameBoardData[1][1] &&
        gameBoardData[1][1] === gameBoardData[2][2]) {
        return gameBoardData[0][0]

    }
    if (gameBoardData[0][2] > 0 &&
        gameBoardData[0][2] === gameBoardData[1][1] &&
        gameBoardData[1][1] === gameBoardData[2][0]) {
        return gameBoardData[0][2]
    }
    
}