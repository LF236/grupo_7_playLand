const menu_button = document.getElementById('menu_button');
const menu = document.getElementById('menu');

menu_button.addEventListener('click', () => {
    menu.classList.toggle('menu_animate');    
});