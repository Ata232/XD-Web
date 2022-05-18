const circle = document.querySelector('#circle');

circle.addEventListener('mouseenter', () =>{
    if (!circle.classList.contains('XD')) {
        circle.classList.add('XD');
    }
});

circle.addEventListener('mouseleave', () => {
    if (circle.classList.contains('XD')) {
        circle.classList.remove('XD');
    }
});

document.addEventListener('keydown', () => {
    if (!circle.classList.contains('XD')) {
        circle.classList.add('XD');
    }
});

document.addEventListener('keyup', () => {
    if (circle.classList.contains('XD')) {
        circle.classList.remove('XD');
    }
});

if (window.innerWidth > 374 && window.innerHeight > 800) {
    circle.addEventListener('onclick', () => {
        if (!circle.classList.contains('XD')) {
            circle.classList.add('XD');
        }
    });
};