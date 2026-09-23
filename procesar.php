<?php
// Incluimos el archivo de conexión que hizo Elena
include("conexion.php");

// Recogemos el nombre y la fecha que se escriben en el formulario web
$nombre = $_POST['nombre'] ?? 'Invitado'; // Ajusta el nombre si en tu HTML se llama diferente
$fecha  = $_POST['fecha'] ?? null;

// Creamos la orden para guardar en la base de datos de XAMPP
$sql = "INSERT INTO reservas (fecha, estado) VALUES ('$fecha', 'pendiente')";

if (mysqli_query($conexion, $sql)) {
    echo "<h1>¡Felicidades! La reserva se ha guardado con éxito en phpMyAdmin.</h1>";
    echo "<a href='index.html'>Volver a la web</a>";
} else {
    echo "Error al guardar: " . mysqli_error($conexion);
}

// Cerramos la comunicación
mysqli_close($conexion);
?>
