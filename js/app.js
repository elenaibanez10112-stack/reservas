/**
 * @file app.js
 * @description Lógica global, formulario de reserva y dinamismo de detalles para index.html.
 */

document.addEventListener('DOMContentLoaded', () => {
    
    console.log('Módulo Castillo: Página de inicio cargada correctamente.');

    /*
     * FORMULARIO DE RESERVA (index.html)
     */
    // Selecciona el formulario aunque no tenga id="formularioReserva"
    const formulario = document.getElementById("formularioReserva") || document.querySelector("form");

    if (formulario) {
        formulario.addEventListener("submit", function(event) {
            event.preventDefault();

            // Buscar inputs por id o por tipo/posición si no tienen ID
            const inputNombre = document.getElementById("nombre") || formulario.querySelector('input[type="text"]');
            const inputFecha = document.getElementById("fecha") || formulario.querySelector('input[type="date"]');

            const nombre = inputNombre ? inputNombre.value.trim() : "";
            const fecha = inputFecha ? inputFecha.value : "";

            if (nombre === "" || fecha === "") {
                alert("Por favor, completa todos los campos del formulario.");
                return;
            }

            // Buscar o crear contenedor para el mensaje de confirmación
            let mensajeReserva = document.getElementById("mensajeReserva");

            if (!mensajeReserva) {
                mensajeReserva = document.createElement("div");
                mensajeReserva.id = "mensajeReserva";
                mensajeReserva.style.padding = "15px";
                mensajeReserva.style.marginTop = "15px";
                mensajeReserva.style.backgroundColor = "#d4edda";
                mensajeReserva.style.color = "#155724";
                mensajeReserva.style.borderRadius = "5px";
                mensajeReserva.style.fontWeight = "bold";
                mensajeReserva.style.textAlign = "center";
                
                formulario.appendChild(mensajeReserva);
            }

            // Insertar texto de confirmación y mostrar
            mensajeReserva.innerHTML = `¡Reserva solicitada con éxito para <strong>${nombre}</strong> el día <strong>${fecha}</strong>! Redirigiendo al catálogo...`;
            mensajeReserva.style.display = "block";

            // Redirigir al catálogo tras 2 segundos de visualización
            setTimeout(function() {
                window.location.href = "listado.html";
            }, 2000);
        });
    }

});

/*
 * CAMBIO DINÁMICO DEL DETALLE
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