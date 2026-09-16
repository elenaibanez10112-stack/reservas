/**
 * @file app.js
 * @description Lógica global, formulario de reserva y dinamismo de detalles para index.html.
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // Mensaje de comprobación inicial
    console.log('Módulo Castillo: Página de inicio cargada correctamente.');

    /*
     * FORMULARIO DE RESERVA (index.html)
     */
    const formulario = document.getElementById("formularioReserva");

    if (formulario) {
        formulario.addEventListener("submit", function(event) {
            event.preventDefault();

            const nombre = document.getElementById("nombre").value.trim();
            const fecha = document.getElementById("fecha").value;

            if (nombre === "" || fecha === "") {
                alert("Por favor, completa todos los campos.");
                return;
            }

            const mensajeReserva = document.getElementById("mensajeReserva");
            if (mensajeReserva) {
                mensajeReserva.style.display = "block";
            }

            setTimeout(function() {
                const seccionReservas = document.getElementById("reservas");
                if (seccionReservas) {
                    seccionReservas.scrollIntoView({
                        behavior: "smooth"
                    });
                }
            }, 500);
        });
    }

});

/*
 * CAMBIO DINÁMICO DEL DETALLE
 * (Permanece fuera de DOMContentLoaded para atender llamadas onclick desde el HTML)
 */
function mostrarDetalle(espacio) {
    const descripcion = document.getElementById("detalleDescripcion");
    const aforo = document.getElementById("detalleAforo");

    if (!descripcion || !aforo) return;

    if (espacio === "Salón del Trono") {
        descripcion.textContent = "Estancia señorial de la alta nobleza decorada con tapices históricos tejidos a mano, escudos heráldicos familiares y arquitectura gótica original en techos altos.";
        aforo.textContent = "Máximo 150 personas de forma simultánea cumpliendo normativas estrictas de seguridad.";
    } 
    else if (espacio === "Patio de Armas") {
        descripcion.textContent = "Imponente espacio exterior rodeado por murallas medievales, ideal para conciertos, mercados y grandes eventos.";
        aforo.textContent = "Máximo 500 personas de forma simultánea, sujeto a las condiciones de seguridad del evento.";
    } 
    else if (espacio === "Torre del Homenaje") {
        descripcion.textContent = "Torre histórica situada en el punto más alto de la fortaleza, con vistas panorámicas y espacios especialmente indicados para fotografía.";
        aforo.textContent = "Máximo 50 personas de forma simultánea debido a las características y altura del espacio.";
    } 
    else if (espacio === "Jardines Reales") {
        descripcion.textContent = "Extensa zona ajardinada con fuentes históricas, diseñada para paseos exclusivos, recepciones y actividades al aire libre.";
        aforo.textContent = "Máximo 300 personas de forma simultánea, dependiendo de la distribución del evento.";
    } 
    else if (espacio === "Sala Histórica") {
        descripcion.textContent = "Sala dedicada a la conservación y exposición de elementos relacionados con la historia y patrimonio del Castillo de la Guardia.";
        aforo.textContent = "Máximo 100 personas de forma simultánea respetando las normas de seguridad y conservación.";
    }
}