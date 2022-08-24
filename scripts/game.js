function changeActivePlayer() {
    if(activePlayer === 0) {
        activePlayer = 1
    } else {
        activePlayer = 0
    }
};

function selectField(event) {
    const selectedField = event.target;

    selectedField.innerText = players[activePlayer].symbol;
    changeActivePlayer();
    
}