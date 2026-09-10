// ELENA: Interactividad del listado mediante JavaScript, DOM y eventos.

// 1. DOM: Seleccionamos todos los botones de las tarjetas que tienen
// la clase "btn-seleccionar" para poder trabajar con ellos.
const botones = document.querySelectorAll('.btn-seleccionar');

// 2. EVENTOS: Recorremos todos los botones y añadimos un evento "click"
// para detectar cuándo el usuario pulsa sobre uno de ellos.
botones.forEach(boton => {
    boton.addEventListener('click', function(evento) {
        
        // 3. DOM: Buscamos la tarjeta (<article>) que contiene
        // el botón que ha pulsado el usuario.
        const tarjeta = evento.target.closest('.tarjeta');
        
        // 4. DOM: Obtenemos el nombre del espacio buscando el encabezado
        // <h3> que se encuentra dentro de la tarjeta seleccionada.
        const nombreEspacio = tarjeta.querySelector('h3').textContent;
        
        // 5. INTERACTIVIDAD: Añadimos o quitamos la clase
        // "tarjeta-seleccionada" para cambiar el estado de la tarjeta.
        tarjeta.classList.toggle('tarjeta-seleccionada');
        
        // 6. MODIFICACIÓN DEL DOM: Comprobamos si la tarjeta está seleccionada.
        // Si está seleccionada, cambiamos el texto, el color y mostramos
        // un mensaje en la consola.
        if (tarjeta.classList.contains('tarjeta-seleccionada')) {
            evento.target.textContent = 'Espacio Seleccionado ✓';
            evento.target.style.backgroundColor = '#28a745'; // Color verde de éxito
            evento.target.style.color = '#ffffff';
            
            // Mostramos en la consola qué espacio ha seleccionado Elena.
            console.log(`Elena ha registrado la selección de: ${nombreEspacio}`);
            
        } else {
            // Si la tarjeta deja de estar seleccionada, recuperamos
            // el texto y los estilos originales del botón.
            evento.target.textContent = 'Seleccionar Espacio';
            evento.target.style.backgroundColor = ''; // Restablece al color original de Manuel
            evento.target.style.color = '';
            
            // Mostramos en la consola qué espacio ha deseleccionado Elena.
            console.log(`Elena ha cancelado la selección de: ${nombreEspacio}`);
        }
    });
});
