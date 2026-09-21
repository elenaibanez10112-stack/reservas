/**
 * @file app.js
 * @description Lógica global, formulario de reserva (Backend PHP) y dinamismo de detalles para index.html.
 */

document.addEventListener('DOMContentLoaded', () => {
    
    console.log('Módulo Castillo: Página de inicio cargada correctamente.');

    /*
     * FORMULARIO DE RESERVA (index.html) - Punto 2.1 Backend PHP
     */
    const formulario = document.getElementById("formularioReserva") || document.querySelector("form");

    if (formulario) {
        formulario.addEventListener("submit", function(event) {
            event.preventDefault(); // Evita el envío tradicional por HTML

            // Recoge los campos del formulario dinámicamente
            const datos = new FormData(formulario);

            // Envía los datos reales al script PHP procesar_reserva.php
            fetch('procesar_reserva.php', {
                method: 'POST',
                body: datos
            })
            .then(respuesta => respuesta.json())
            .then(resultado => {
                if (resultado.exito) {
                    alert(resultado.mensaje);
                    // Redirige al catálogo tras guardar la reserva en la base de datos
                    window.location.href = 'listado.html';
                } else {
                    alert('Error al registrar la reserva: ' + resultado.mensaje);
                }
            })
            .catch(error => {
                console.error('Error al conectar con el servidor PHP:', error);
                alert('No se pudo enviar la solicitud al servidor PHP.');
            });
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