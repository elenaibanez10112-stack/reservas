// =========================================================================
// INTERACTIVIDAD LÓGICA GENERAL UNIFICADA POR: ELENA
// MÓDULO CASTILLO: CONTROL DE COMPORTAMIENTO Y PERSISTENCIA (LOCALSTORAGE)
// =========================================================================

// ARRAY DE OBJETOS: Datos maestros de los espacios del castillo
const recursosCastillo = [
    { id: 1, nombre: "Salón del Trono", capacidad: 150, tipo: "Interior" },
    { id: 2, nombre: "Patio de Armas", capacidad: 500, tipo: "Exterior" },
    { id: 3, nombre: "Torre del Homenaje", capacidad: 50, tipo: "Vistas" }
];

// FUNCIÓN DE ARRANQUE: Se ejecuta de forma segura al cargar el documento
document.addEventListener("DOMContentLoaded", function() {
    configurarEventosCatalogo();
});

// ESCUCHADOR DE EVENTOS: Controla las acciones del usuario en el catálogo
function configurarEventosCatalogo() {
    // Capturamos todos los botones que tengan la clase de interacción
    const botonesSeleccionar = document.querySelectorAll('.btn-seleccionar, .btn-detalle');
    
    if (botonesSeleccionar.length > 0) {
        botonesSeleccionar.forEach((boton, indice) => {
            boton.addEventListener('click', function(evento) {
                // Obtenemos los datos correspondientes usando la posición de la tarjeta
                const recursoSeleccionado = recursosCastillo[indice];
                
                if (recursoSeleccionado) {
                    // Guardamos la información convirtiendo el objeto a texto para persistencia
                    localStorage.setItem("reservas_castillo", JSON.stringify(recursoSeleccionado));
                    
                    // Alerta interactiva del backlog
                    alert(`Has seleccionado: ${recursoSeleccionado.nombre}. Abriendo la ficha técnica...`);
                    
                    // Redirección dinámica automática a la ficha de detalles
                    window.location.href = "detalle.html";
                }
            });
        });
    }
}
