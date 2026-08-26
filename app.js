document.addEventListener('DOMContentLoaded', () => {
    const formReserva = document.getElementById('form-reserva');
    const seccionReserva = document.getElementById('seccion-reserva');
    const mensajeConfirmacion = document.getElementById('mensaje-confirmacion');

    formReserva.addEventListener('submit', (evento) => {
        evento.preventDefault();
        seccionReserva.style.display = 'none';
        mensajeConfirmacion.style.display = 'block';
    });
});
