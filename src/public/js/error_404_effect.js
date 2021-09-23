const buttonBackHome = document.getElementById('back-home');

buttonBackHome.addEventListener('mouseover', () => {
    document.getElementById('title-404').classList.add('effect');
    document.getElementById('image-error').classList.add('effect');
});

buttonBackHome.addEventListener('mouseleave', () => {
    document.getElementById('title-404').classList.remove('effect');
    document.getElementById('image-error').classList.remove('effect');
});