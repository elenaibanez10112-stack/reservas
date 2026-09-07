// ELENA: Interactividad del listado (JavaScript + DOM + eventos)

// 1. DOM: Seleccionamos todos los botones de las tarjetas usando su clase
const botones = document.querySelectorAll('.btn-seleccionar');

// 2. EVENTOS: Escuchamos el evento 'click' en cada botón
botones.forEach(boton => {
    boton.addEventListener('click', function(evento) {
        
        // 3. DOM: Localizamos la tarjeta (<article>) que contiene al botón pulsado
        const tarjeta = evento.target.closest('.tarjeta');
        
        // 4. DOM: Obtenemos el nombre del espacio desde el encabezado h3
        const nombreEspacio = tarjeta.querySelector('h3').textContent;
        
        // 5. INTERACTIVIDAD: Alternamos el estado de selección
        tarjeta.classList.toggle('tarjeta-seleccionada');
        
        // 6. MODIFICACIÓN DEL DOM: Cambiamos el texto y diseño según esté seleccionado o no
        if (tarjeta.classList.contains('tarjeta-seleccionada')) {
            evento.target.textContent = 'Espacio Seleccionado ✓';
            evento.target.style.backgroundColor = '#28a745'; // Color verde de éxito
            evento.target.style.color = '#ffffff';
            console.log(`Elena ha registrado la selección de: ${nombreEspacio}`);
        } else {
            evento.target.textContent = 'Seleccionar Espacio';
            evento.target.style.backgroundColor = ''; // Restablece al color original de Manuel
            evento.target.style.color = '';
            console.log(`Elena ha cancelado la selección de: ${nombreEspacio}`);
        }
    });
});