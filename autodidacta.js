// Abrir el modal al hacer clic en la imagen
document.querySelectorAll('.image-container img').forEach(img => {
    img.addEventListener('click', function() {
        const modal = document.getElementById('image-modal');
        const modalImg = document.getElementById('modal-image');
        modalImg.src = this.src;  // Poner la imagen seleccionada en el modal
        modal.style.display = 'flex';  // Mostrar el modal
    });
});

// Cerrar el modal al hacer clic fuera de la imagen
document.getElementById('image-modal').addEventListener('click', function(e) {
    if (e.target === this) {  // Verifica que el clic fue en el fondo y no en la imagen
        this.style.display = 'none';  // Ocultar el modal
    }
});
