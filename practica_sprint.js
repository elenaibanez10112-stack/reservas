// ELENA: Lógica de Prácticas, DOM, Eventos y Redirección del Listado

const recursosCastillo = [
    { id: 1, nombre: "Salón del Trono", capacidad: 150, tipo: "Interior" },
    { id: 2, nombre: "Patio de Armas", capacidad: 500, tipo: "Exterior" },
    { id: 3, nombre: "Torre del Homenaje", capacidad: 50, tipo: "Vistas" }
];

// Buscamos los botones en el DOM
const botones = document.querySelectorAll('.btn-seleccionar');

botones.forEach((boton, indice) => {
    boton.addEventListener('click', function() {
        const recurso = recursosCastillo[indice];
        
        // Guardamos los datos en localStorage
        localStorage.setItem("reservas_castillo", JSON.stringify(recurso));
        console.log(`Elena ha guardado en localStorage: ${recurso.nombre}`);
        
        // ¡Alerta obligatoria del Backlog!
        alert(`Has seleccionado: ${recurso.nombre}. Redirigiendo a la ficha de detalles técnicos...`);
        
        // ¡Magia! Enviamos al usuario a la página de detalle
        window.location.href = "detalle.html";
    });
});
