document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.navbar' );


    // Mostrar la navbar con la animación
    navbar.classList.add('show');

    // Función para añadir o quitar la clase scrolled al hacer scroll
    window.addEventListener('scroll', function () {
        if (window.scrollY > 2) { // Cuando hagas scroll más de 2px
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

 // JavaScript para añadir la animación
document.addEventListener('DOMContentLoaded', function () {
    const h1 = document.getElementById('animatedTitle');
    const p = document.getElementById('animatedParagraph');

    function addAnimation() {
        h1.classList.add('animate');
        p.classList.add('animate');
    }

    function removeAnimation() {
        h1.classList.remove('animate');
        p.classList.remove('animate');
    }

    // Añadir animación al cargar
    addAnimation();

    // Puedes añadir lógica aquí para remover la animación si es necesario
    // removeAnimation(); // Ejemplo de cómo quitar la animación
});

    // Genera partículas flotantes
    function generateParticles() {
        const body = document.querySelector('body');
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            particle.style.width = `${Math.random() * 10 + 5}px`;
            particle.style.height = particle.style.width;
            particle.style.top = `${Math.random() * 100}%`;
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.animationDuration = `${Math.random() * 5 + 5}s`;
            body.appendChild(particle);
        }
    }

    // Ejecutar las partículas al cargar la página
    generateParticles();

    // Función para desplazarse al contenido al hacer clic en el botón
    document.querySelector('.btn-bienvenida').addEventListener('click', function() {
        document.querySelector('#contenido').scrollIntoView({
            behavior: 'smooth'
        });
    });
});