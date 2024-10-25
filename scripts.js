// Función para crear un efecto flotante en la página
document.addEventListener('DOMContentLoaded', () => {
    const btnFlotante = document.querySelector('.btn-flotante');

    btnFlotante.addEventListener('click', () => {
        alert("¡Gracias por explorar más sobre mí!");
    });

    // Efecto de entrada para los elementos del contenido
    const content = document.querySelector('.content');
    content.style.opacity = 0;
    content.style.transform = 'translateY(50px)';

    window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY;
        if (scrollPos > 100) {
            content.style.opacity = 1;
            content.style.transform = 'translateY(0)';
        }
    });
});
