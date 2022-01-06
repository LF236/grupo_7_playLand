// document.addEventListener('DOMContentLoaded', () => {
//     const contentImages = document.getElementById('carousel-content-images');
//     let i = 1;

//     //Change of the color in the icons
//     const pivotingIconsOfCarousel = () => {
//         i++;
//         console.log(i);


//         if (i < 6) {
//             const idElementActual = `images-i-element-${i}`;
//             const auxElementActual = document.getElementById(idElementActual);
//             auxElementActual.style = 'color: #ffd100';
//             const idElementAnterior = `images-i-element-${i - 1}`;
//             const auxElementAnterior = document.getElementById(idElementAnterior);
//             auxElementAnterior.style = 'color: #fff';
//         }

//         if (i === 6) {
//             document.getElementById('images-i-element-5').style = 'color: #fff';
//             document.getElementById('images-i-element-1').style = 'color: #ffd100';
//             i = 1;
//         }
//     }

//     //Moving of the carousel
//     setInterval(() => {
//         let positionNow = getComputedStyle(contentImages).getPropertyValue('--positionNow');
//         positionNow = positionNow.slice(0, -1);
//         let aux = parseInt(positionNow);
//         aux -= 100;
//         if (aux >= -400) {
//             contentImages.style.setProperty('--positionNow', `${aux}%`);

//         }

//         if (aux === -500) {
//             aux = 0;
//             contentImages.style.setProperty('--positionNow', `${aux}%`);
//         }
//         pivotingIconsOfCarousel();
//     }, 5000);
// })
