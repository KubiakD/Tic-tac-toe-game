function enableUserInput(event){
const editIcon = event.target;
const h3Element = editIcon.parentElement;
const userInput = h3Element.nextElementSibling;
const saveBtn = userInput.nextElementSibling;

h3Element.style.display ='none';
userInput.style.display = 'block';
saveBtn.style.display = 'block';
};

function showGameBoard(){
    gameBoard.style.display = 'grid'
};