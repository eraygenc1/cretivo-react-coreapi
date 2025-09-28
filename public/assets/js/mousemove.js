const title = document.querySelector('.movement-png-1');
const title2 = document.querySelector('.movement-png-2');

if (title) {
    title.style.transition = 'transform 0.6s ease';
}
if (title2) {
    title2.style.transition = 'transform 0.1s ease';
}

document.addEventListener('mousemove', function (e) {
    if (title && title2) {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        const windowWidth = window.innerWidth / 2;
        const windowHeight = window.innerHeight / 2;

        const offsetX = (mouseX - windowWidth) / windowWidth;
        const offsetY = (mouseY - windowHeight) / windowHeight;

        const maxMovement = 10;

        const translateX = maxMovement * offsetX;
        const translateY = maxMovement * offsetY;

        title.style.transform = `translate(${translateX}px, ${translateY}px)`;
        title2.style.transform = `translate(${translateX}px, ${translateY}px)`;
    }
});