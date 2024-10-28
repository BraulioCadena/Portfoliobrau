document.addEventListener("DOMContentLoaded", function() {
    const headerText = document.querySelector("header h1");
    headerText.style.opacity = 0;

    setTimeout(() => {
        headerText.style.opacity = 1;
        headerText.classList.add("float");
    }, 1000);
});
