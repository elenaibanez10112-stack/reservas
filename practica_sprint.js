/**
 * @file practica_sprint.js
 * @description Gestión de selección de recursos del castillo, almacenamiento local y navegación.
 * @author Elena
 * @date Septiembre 2026
 */

// ELENA: Lógica de Prácticas, DOM, Eventos y Redirección del Listado

/* 
   Desarrollado por Elena: 
   Definición del modelo de datos. Array de objetos que simula la base de datos 
   de los espacios disponibles en el castillo con sus propiedades básicas.
*/
const recursosCastillo = [
    { id: 1, nombre: "Salón del Trono", capacidad: 150, tipo: "Interior" },
    { id: 2, nombre: "Patio de Armas", capacidad: 500, tipo: "Exterior" },
    { id: 3, nombre: "Torre del Homenaje", capacidad: 50, tipo: "Vistas" }
];

// Hecho por Elena: Buscamos y capturamos todos los botones de selección en el DOM mediante su clase
const botones = document.querySelectorAll('.btn-seleccionar');

/* 
   Desarrollado por Elena:
   Bucle forEach para recorrer cada uno de los botones obtenidos y asignarles de forma 
   dinámica un escuchador de eventos para el clic del usuario.
*/
botones.forEach((boton, indice) => {
    boton.addEventListener('click', function() {
        // Vinculamos el botón pulsado con el objeto correspondiente del array usando su índice de posición
        const recurso = recursosCastillo[indice];
        
        /* 
           Hecho por Elena: Guardamos los datos en localStorage.
           Se utiliza JSON.stringify porque localStorage solo admite cadenas de texto plano.
        */
        localStorage.setItem("reservas_castillo", JSON.stringify(recurso));
        console.log(`Elena ha guardado en localStorage: ${recurso.nombre}`);
        
        // ¡Alerta obligatoria del Backlog! - Notificación visual para que el usuario sepa qué ha seleccionado
        alert(`Has seleccionado: ${recurso.nombre}. Redirigiendo a la ficha de detalles técnicos...`);
        
        // ¡Magia! Enviamos al usuario a la página de detalle actualizando la localización de la ventana
        window.location.href = "detalle.html";
    });
});
