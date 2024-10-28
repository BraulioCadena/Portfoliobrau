// Smooth scroll to "Sobre Mí" section
function scrollToAbout() {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Hover effect for button (example)
document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.btn-flotante');
    button.addEventListener('mouseover', () => {
        button.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
    });
    button.addEventListener('mouseout', () => {
        button.style.boxShadow = 'none';
    });
});
