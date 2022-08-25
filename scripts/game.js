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