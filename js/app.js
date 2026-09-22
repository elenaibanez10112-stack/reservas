// ------------------------------
// Gestión de Reservas - Castillo de la Guardia
// ------------------------------

const STORAGE_KEY = 'reservas';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-reserva');
    const mensajeConfirmacion = document.getElementById('mensaje-confirmacion');

    // Ocultamos el mensaje de confirmación al cargar la página
    mensajeConfirmacion.style.display = 'none';

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        manejarEnvioReserva();
    });

    function manejarEnvioReserva() {
        const nombre = document.getElementById('nombre').value.trim();
        const correo = document.getElementById('correo').value.trim();
        const asistentes = parseInt(document.getElementById('asistentes').value, 10);

        // Validación
        const errores = validarReserva(nombre, correo, asistentes);
        if (errores.length > 0) {
            alert('Por favor corrige lo siguiente:\n- ' + errores.join('\n- '));
            return;
        }

        // Comprobar si el correo ya tiene una reserva
        const reservas = obtenerReservas();
        const yaExiste = reservas.some(r => r.correo.toLowerCase() === correo.toLowerCase());
        if (yaExiste) {
            const continuar = confirm('Ya existe una reserva con este correo. ¿Deseas añadir otra de todas formas?');
            if (!continuar) return;
        }

        // Crear objeto de reserva
        const nuevaReserva = {
            id: generarId(),
            nombre,
            correo,
            asistentes,
            fecha: new Date().toISOString()
        };

        reservas.push(nuevaReserva);
        guardarReservas(reservas);

        mostrarConfirmacion(nuevaReserva);
        form.reset();
    }

    function validarReserva(nombre, correo, asistentes) {
        const errores = [];
        const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!nombre) errores.push('El nombre es obligatorio.');
        if (!correo || !regexCorreo.test(correo)) errores.push('Introduce un correo electrónico válido.');
        if (isNaN(asistentes) || asistentes < 1 || asistentes > 5) {
            errores.push('El número de asistentes debe estar entre 1 y 5.');
        }
        return errores;
    }

    function mostrarConfirmacion(reserva) {
        mensajeConfirmacion.innerHTML = `
            <p>¡Reserva procesada! Gracias, <strong>${reserva.nombre}</strong>.</p>
            <p>Hemos registrado ${reserva.asistentes} asistente(s) con el correo ${reserva.correo}.</p>
        `;
        mensajeConfirmacion.style.display = 'block';

        // Ocultarlo tras unos segundos (opcional)
        setTimeout(() => {
            mensajeConfirmacion.style.display = 'none';
        }, 6000);
    }

    function generarId() {
        return 'res_' + Date.now() + '_' + Math.floor(Math.random() * 1000);
    }
});

// ------------------------------
// Funciones de acceso a localStorage
// (exportadas de forma sencilla para que listado.html pueda reutilizarlas
//  si incluye este mismo archivo)
// ------------------------------

function obtenerReservas() {
    const datos = localStorage.getItem(STORAGE_KEY);
    return datos ? JSON.parse(datos) : [];
}

function guardarReservas(reservas) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(reservas));
}

function eliminarReserva(id) {
    const reservas = obtenerReservas().filter(r => r.id !== id);
    guardarReservas(reservas);
}