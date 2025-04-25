document.addEventListener("DOMContentLoaded", () => {
    // Referencias a elementos del DOM
    const menuToggle = document.getElementById("menu-toggle");
    const sidebar = document.querySelector(".sidebar");
    const content = document.querySelector(".content");
    const downloadCV = document.getElementById("download-cv");

    // Validamos existencia antes de asignar eventos
    if (menuToggle && sidebar && content) {
        menuToggle.addEventListener("click", () => {
            sidebar.classList.toggle("active");
            content.classList.toggle("sidebar-open");
        });
    }

    if (downloadCV) {
        downloadCV.addEventListener("click", (e) => {
            e.preventDefault(); // Previene el comportamiento por defecto del enlace
            const link = document.createElement("a");
            link.href = "assets/fonts/CVesm.pdf";
            link.download = "mi_zeke.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }
});
