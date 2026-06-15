window.addEventListener("load", () => {
    console.log("Sitio MYF cargado correctamente 🚀");
});

// EFECTO CLICK EN BOTONES
document.querySelectorAll(".btn").forEach(boton => {
    boton.addEventListener("click", () => {
        console.log("Botón presionado");
    });
});