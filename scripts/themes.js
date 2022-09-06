const colorBtns = document.getElementsByClassName('color');
const currentTheme = document.getElementsByClassName('current-theme');

function changeTheme(event) {
    const html = document.querySelector('html');
    const selectedBtn = event.target;
    const selectedTheme = selectedBtn.dataset.color;
    
    html.dataset.theme = selectedTheme;
    
    for (const element of colorBtns) {
        element.classList.remove('current-theme');
    };
    selectedBtn.classList.add('current-theme');
};

for (const button of colorBtns) {
    button.addEventListener('click', changeTheme);
};