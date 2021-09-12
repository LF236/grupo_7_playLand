const buttonSort = document.getElementById('button-sort');
const buttonSortClose = document.getElementById('menu-sort-icon-close');
const menuSort = document.getElementById('menu-sort');
buttonSort.addEventListener('click', () => {
    menuSort.classList.add('menu-sort-appear');
});

buttonSortClose.addEventListener('click', () => {
    menuSort.classList.remove('menu-sort-appear');
});