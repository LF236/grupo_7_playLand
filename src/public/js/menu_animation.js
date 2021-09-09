const menu_button = document.getElementById('menu_button');
const menu = document.getElementById('menu');
const iconX = document.getElementById('icon-x');

menu_button.addEventListener('click', () => {
    menu.classList.add('menu_animate');    
});

iconX.addEventListener('click', () => {
    menu.classList.remove('menu_animate');
});