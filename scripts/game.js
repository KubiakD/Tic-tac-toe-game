function changeActivePlayer() {
    if(activePlayer === 0) {
        activePlayer = 1
    } else {
        activePlayer = 0
    }
};

function selectField(event) {
    const selectedField = event.target;
    if(selectedField.innerText === ''){
    selectedField.innerText = players[activePlayer].symbol;
    selectedField.classList.add('disabled');
    changeActivePlayer();
    }
    return
}