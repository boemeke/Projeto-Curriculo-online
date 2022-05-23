const btnRight = window.document.querySelector('.button-arrow.-right');
const btnLeft = window.document.querySelector('.button-arrow.-left');
const elements = window.document.querySelector('.elements');
let pixels = 75;

btnRight.addEventListener('click', function () {
    pixels = pixels + 75;
    elements.style = `transform: translatex(${pixels}px)`;

})
btnLeft.addEventListener('click', function () {
    pixels = pixels - 75;
    elements.style = `transform: translatex(${pixels}px)`;

})

