document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.navbar').classList.add('show');
});

window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 2) { // Cambia el número según cuándo quieras que se aplique la transición
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
