// Obtener la modal y el elemento de la imagen
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const captionText = document.getElementById("caption");
const closeModal = document.getElementById("closeModal");

// Obtener todas las imágenes de certificaciones
const certificacionImages = document.querySelectorAll(".certificacion-image");

// Agregar evento de clic a cada imagen
certificacionImages.forEach((img) => {
    img.onclick = function() {
        modal.style.display = "block"; // Mostrar modal
        modalImage.src = this.src; // Establecer la imagen del modal
        captionText.innerHTML = this.nextElementSibling.innerText; // Mostrar la descripción
    }
});

// Cerrar modal al hacer clic en la 'X'
closeModal.onclick = function() {
    modal.style.display = "none"; // Ocultar modal
}

// Cerrar modal al hacer clic en cualquier parte de la ventana
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none"; // Ocultar modal
    }
}
