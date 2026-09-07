// =========================================================================
// SPRINT JAVASCRIPT: EJERCICIO COMPLETO DE PRÁCTICA (ELENA)
// =========================================================================

// 1. ARRAYS Y OBJETOS: Representar los recursos como objetos dentro de una lista
const recursosCastillo = [
    { id: 1, nombre: "Salón del Trono", capacidad: 150, tipo: "Interior" },
    { id: 2, nombre: "Patio de Armas", capacidad: 500, tipo: "Exterior" },
    { id: 3, nombre: "Torre del Homenaje", capacidad: 50, tipo: "Vistas" }
];

// 2. FUNCIONES Y DOM: Función reutilizable para crear la estructura de una tarjeta
function crearTarjetaRecurso(recurso) {
    // Creamos el elemento contenedor en el DOM
    const li = document.createElement('li');
    
    // Modificamos el contenido dinámicamente usando textContent e innerHTML
    li.innerHTML = `
        <article class="tarjeta">
            <h3>${recurso.nombre}</h3>
            <p>Capacidad: ${recurso.capacidad} personas</p>
            <p>Tipo: ${recurso.tipo}</p>
            <button class="btn-detalle" data-id="${recurso.id}">Ver detalle</button>
        </article>
    `;
    return li;
}

// 3. RECORRER ARRAYS: Pintar el listado dinámicamente en la página
function inicializarListado() {
    // Buscamos el contenedor donde Manuel diseñó la lista
    const contenedor = document.querySelector('.tarjetas-container');
    
    // Si el contenedor existe en la página actual, lo limpiamos y pintamos el array
    if (contenedor) {
        contenedor.innerHTML = ''; // Limpiamos el HTML estático
        
        recursosCastillo.forEach(recurso => {
            const tarjetaHTML = crearTarjetaRecurso(recurso);
            contenedor.appendChild(tarjetaHTML); // Añadimos la tarjeta al DOM
        });
        
        // Activamos los eventos de los nuevos botones creados
        configurarEventosDetalle();
    }
}

// 4. MANEJO DE EVENTOS: Escuchar los clics para mostrar contenido dinámico
function configurarEventosDetalle() {
    const botonesDetalle = document.querySelectorAll('.btn-detalle');
    
    botonesDetalle.forEach(boton => {
        boton.addEventListener('click', function(evento) {
            const idRecurso = evento.target.getAttribute('data-id');
            // Buscamos el objeto específico dentro del array usando el ID
            const recursoSeleccionado = recursosCastillo.find(r => r.id == idRecurso);
            
            // Ejercicio Backlog: Mostrar un mensaje en consola y una alerta con el detalle
            console.log(`Elena ha pulsado el botón del recurso: ${recursoSeleccionado.nombre}`);
            alert(`Detalle extendido de ${recursoSeleccionado.nombre}\nCapacidad máxima autorizada: ${recursoSeleccionado.capacidad} personas.`);
            
            // 5. LOCALSTORAGE: Guardar una reserva de prueba
            hacerReservaPrueba(recursoSeleccionado.nombre);
        });
    });
}

// 6. LOCALSTORAGE: Guardar y leer datos con una clave única del módulo
function hacerReservaPrueba(nombreEspacio) {
    const datosReserva = {
        modulo: "reservas_castillo",
        espacio: nombreEspacio,
        fecha: "2026-10-12",
        usuario: "Elena"
    };
    
    // Guardamos convirtiendo el objeto a texto con JSON.stringify
    localStorage.setItem("reservas_castillo", JSON.stringify(datosReserva));
    console.log("Reserva de prueba guardada con éxito en localStorage por Elena.");
    
    // Leemos inmediatamente para demostrar el checklist de salida
    const reservaGuardada = JSON.parse(localStorage.getItem("reservas_castillo"));
    console.log("Datos recuperados de localStorage:", reservaGuardada);
}

// Ejecutamos la función principal al cargar el archivo
inicializarListado();
