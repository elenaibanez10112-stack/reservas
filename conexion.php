<?php
// =========================================================================
// DESARROLLADO POR: ELENA (MIEMBRO 2 - CONEXIÓN PHP + MYSQL)
// MÓDULO CASTILLO: CONFIGURACIÓN DE CONEXIÓN SEGURA AL SERVIDOR DE DATOS
// =========================================================================

// Definición de las variables para el servidor local (XAMPP / WAMP)
$servidor = "localhost";
$usuario   = "root";
$password  = "";
$base_datos = "reservas_castillo"; // Nombre estructurado por el Miembro 1

// SINTAXIS PHP: Abrimos la conexión con la base de datos mediante la función mysqli_connect
$conexion = mysqli_connect($servidor, $usuario, $password, $base_datos);

// CONTROL DE ERRORES: Si la variable de conexión es falsa, detenemos el script de inmediato
if (!$conexion) {
    die("❌ Error de comunicación: Elena ha detectado un fallo en la conexión a MySQL: " . mysqli_connect_error());
}

// Configuración de codificación UTF-8 para procesar de forma correcta caracteres especiales
mysqli_set_charset($conexion, "utf8mb4");
?>
