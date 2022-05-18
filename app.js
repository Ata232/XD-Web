const circle = document.querySelector('#circle');

circle.addEventListener('mouseenter', () =>{
    if (!circle.classList.contains('zort')) {
        circle.classList.add('zort');
    }
});

circle.addEventListener('mouseleave', () => {
    if (circle.classList.contains('zort')) {
        circle.classList.remove('zort');
    }
});

document.addEventListener('keydown', () => {
    if (!circle.classList.contains('zort')) {
        circle.classList.add('zort');
    }
});

document.addEventListener('keyup', () => {
    if (circle.classList.contains('zort')) {
        circle.classList.remove('zort');
    }
});
