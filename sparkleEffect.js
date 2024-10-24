function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = `${x}px`;
    sparkle.style.top = `${y}px`;
    document.body.appendChild(sparkle);

    // Eliminar la chispa después de 0.8 segundos
    setTimeout(() => {
        sparkle.remove();
    }, 800);
}

// Detectar movimiento del mouse
document.addEventListener('mousemove', function (e) {
    createSparkle(e.pageX, e.pageY);
});