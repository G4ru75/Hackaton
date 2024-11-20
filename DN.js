function mostrarGif(event) {
    event.preventDefault(); // Previene el envío del formulario y recarga de página

    // Oculta el formulario
    const formContainer = document.getElementById("form-container");
    formContainer.style.display = "none";

    // Muestra el GIF
    const overlay = document.getElementById("overlay");
    overlay.style.display = "flex";

    // Simula el proceso y recarga la página después de mostrar el GIF
    setTimeout(() => {
        alert("Su donación ha sido exitosa. ¡Gracias por su generosidad!");
        location.reload(); // Recarga la página
    }, 3000); // 3 segundos
}