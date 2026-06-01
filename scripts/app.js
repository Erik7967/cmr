// JavaScript para mostrar/ocultar el botón
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const backButton = document.querySelector('.back-to-top');
    scrollY > 300 ? backButton.classList.add('show') : backButton.classList.remove('show');
});

window.addEventListener('scroll', function() {
    const header = document.querySelector('.compact-header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});