document.addEventListener("DOMContentLoaded", function () {
    // Toggle para el menú lateral
    const menuToggle = document.getElementById("menu-toggle");
    const sidebar = document.querySelector(".sidebar");
    const content = document.querySelector(".content");

    menuToggle.addEventListener("click", function () {
        sidebar.classList.toggle("active"); // Abre/cierra el menú
        content.classList.toggle("sidebar-open"); // Ajusta el contenido
    });

    // Función para descargar el CV
    document.getElementById("download-cv").addEventListener("click", function () {
        const link = document.createElement("a");
        link.href = "assets/fonts/CVesm.pdf";
        link.download = "mi_zeke.pdf"; // Nombre del archivo a descargar
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});
