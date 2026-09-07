document.addEventListener("DOMContentLoaded", () => {

    const formReserva = document.getElementById("form-reserva");

    const seccionReserva = document.getElementById("seccion-reserva");

    const mensajeConfirmacion =
        document.getElementById("mensaje-confirmacion");

    const btnNuevaReserva =
        document.getElementById("btn-nueva-reserva");


    /* =====================================================
       ELEMENTOS DEL FORMULARIO
    ===================================================== */

    const nombre = document.getElementById("nombre");

    const correo = document.getElementById("correo");

    const asistentes = document.getElementById("asistentes");

    const fecha = document.getElementById("fecha");

    const hora = document.getElementById("hora");

    const tipoVisita = document.getElementById("tipo-visita");


    /* =====================================================
       FECHA MÍNIMA: HOY
    ===================================================== */

    const hoy = new Date();

    const año = hoy.getFullYear();

    const mes = String(hoy.getMonth() + 1).padStart(2, "0");

    const dia = String(hoy.getDate()).padStart(2, "0");

    fecha.min = `${año}-${mes}-${dia}`;


    /* =====================================================
       FUNCIONES DE ERROR
    ===================================================== */

    function mostrarError(campo, mensaje) {

        campo.classList.add("error");

        const elementoError =
            document.getElementById(`error-${campo.id}`);

        if (elementoError) {
            elementoError.textContent = mensaje;
        }
    }


    function limpiarError(campo) {

        campo.classList.remove("error");

        const elementoError =
            document.getElementById(`error-${campo.id}`);

        if (elementoError) {
            elementoError.textContent = "";
        }
    }


    /* =====================================================
       VALIDACIÓN DEL FORMULARIO
    ===================================================== */

    formReserva.addEventListener("submit", (evento) => {

        evento.preventDefault();

        let formularioValido = true;


        /* Limpiar errores anteriores */

        const campos = [
            nombre,
            correo,
            asistentes,
            fecha,
            hora,
            tipoVisita
        ];

        campos.forEach(limpiarError);


        /* -----------------------------
           NOMBRE
        ----------------------------- */

        if (nombre.value.trim().length < 3) {

            mostrarError(
                nombre,
                "Introduce un nombre válido."
            );

            formularioValido = false;
        }


        /* -----------------------------
           CORREO
        ----------------------------- */

        const emailValido =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailValido.test(correo.value.trim())) {

            mostrarError(
                correo,
                "Introduce un correo electrónico válido."
            );

            formularioValido = false;
        }


        /* -----------------------------
           ASISTENTES
        ----------------------------- */

        const numeroAsistentes =
            Number(asistentes.value);

        if (
            numeroAsistentes < 1 ||
            numeroAsistentes > 5 ||
            !Number.isInteger(numeroAsistentes)
        ) {

            mostrarError(
                asistentes,
                "El número de asistentes debe estar entre 1 y 5."
            );

            formularioValido = false;
        }


        /* -----------------------------
           FECHA
        ----------------------------- */

        if (!fecha.value) {

            mostrarError(
                fecha,
                "Selecciona una fecha para la visita."
            );

            formularioValido = false;
        }


        /* -----------------------------
           HORA
        ----------------------------- */

        if (!hora.value) {

            mostrarError(
                hora,
                "Selecciona una hora."
            );

            formularioValido = false;
        }


        /* -----------------------------
           TIPO DE VISITA
        ----------------------------- */

        if (!tipoVisita.value) {

            mostrarError(
                tipoVisita,
                "Selecciona el tipo de visita."
            );

            formularioValido = false;
        }


        /* =================================================
           SI TODO ES CORRECTO
        ================================================= */

        if (formularioValido) {

            const datosReserva = {

                nombre: nombre.value.trim(),

                correo: correo.value.trim(),

                asistentes: numeroAsistentes,

                fecha: fecha.value,

                hora: hora.value,

                tipoVisita: tipoVisita.value

            };


            console.log(
                "Reserva válida:",
                datosReserva
            );


            /* Mostrar confirmación */

            seccionReserva.hidden = true;

            mensajeConfirmacion.hidden = false;
        }

    });


    /* =====================================================
       NUEVA RESERVA
    ===================================================== */

    btnNuevaReserva.addEventListener("click", () => {

        formReserva.reset();

        camposSinError();

        mensajeConfirmacion.hidden = true;

        seccionReserva.hidden = false;

    });


    function camposSinError() {

        const campos = [
            nombre,
            correo,
            asistentes,
            fecha,
            hora,
            tipoVisita
        ];

        campos.forEach((campo) => {

            limpiarError(campo);

        });

    }

});