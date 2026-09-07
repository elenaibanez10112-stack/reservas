document.addEventListener('DOMContentLoaded', () => {
    const formReserva = document.getElementById('form-reserva');
    const seccionReserva = document.getElementById('seccion-reserva');
    const mensajeConfirmacion = document.getElementById('mensaje-confirmacion');

    formReserva.addEventListener('submit', (evento) => {
        evento.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const correo = document.getElementById('correo').value;
        const asistentes = document.getElementById('asistentes').value;

        console.log('Reserva Recibida:', { nombre, correo, asistentes });

        seccionReserva.style.display = 'none';
        mensajeConfirmacion.style.display = 'block';
    });
});
