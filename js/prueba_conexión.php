<?php
// =========================================================================
// DESARROLLADO POR: ELENA (MIEMBRO 2 - PÁGINA DE VERIFICACIÓN)
// MÓDULO CASTILLO: CONSULTA DINÁMICA DE RECURSOS PARA EVITAR HTML ESTÁTICO
// =========================================================================

// SINTAXIS PHP: Importamos el archivo lógico de conexión desarrollado previamente
include 'conexion.php';

// Escribimos la sentencia SQL para extraer los datos almacenados en la tabla de recursos
$sql = "SELECT id_recurso, nombre, descripción, capacidad, tipo FROM RECURSOS";
$resultado = mysqli_query($conexion, $sql);
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Prueba de Conexión de Elena - Castillo</title>
    <style>
        body { font-family: 'Segoe UI', sans-serif; background-color: #f4f6f7; color: #2c3e50; padding: 2rem; }
        .panel { max-width: 600px; margin: 0 auto; background: white; padding: 2rem; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); border-top: 5px solid #bfa15f; }
        .alerta-exito { background: #e8f5e9; color: #2e7d32; padding: 1rem; border-radius: 4px; font-weight: bold; text-align: center; margin-bottom: 1.5rem; }
        .tarjeta-recurso { background: #f8fafc; border: 1px solid #e2e8f0; padding: 1rem; margin-bottom: 1rem; border-radius: 6px; }
        h3 { margin-top: 0; color: #1a252f; }
    </style>
</head>
<body>

    <div class="panel">
        <h2>Módulo Castillo: Verificación del Servidor</h2>
        
        <!-- Mensaje en pantalla que confirma el éxito técnico de la conexión de Elena -->
        <div class="alerta-exito">
            ✅ ¡Conexión establecida con éxito por Elena en MySQL!
        </div>

        <h3>Espacios cargados dinámicamente desde la Base de Datos:</h3>

        <?php
        // Verificamos si la consulta SQL ha devuelto registros en las filas de la tabla
        if (mysqli_num_rows($resultado) > 0) {
            // SINTAXIS PHP: Recorremos los datos fila por fila mediante un bucle while y mysqli_fetch_assoc
            while($recurso = mysqli_fetch_assoc($resultado)) {
                echo "<div class='tarjeta-recurso'>";
                echo "<h3>" . htmlspecialchars($recurso['nombre']) . "</h3>";
                echo "<p>" . htmlspecialchars($recurso['descripción']) . "</p>";
                echo "<p><strong>👥 Capacidad:</strong> " . htmlspecialchars($recurso['capacidad']) . " personas | <strong>🏰 Tipo:</strong> " . htmlspecialchars($recurso['tipo']) . "</p>";
                echo "</div>";
            }
        } else {
            echo "<p>La conexión funciona correctamente, pero la tabla RECURSOS está vacía en este momento.</p>";
        }

        // Cerramos la conexión con el servidor de forma limpia al finalizar la carga
        mysqli_close($conexion);
        ?>
    </div>

</body>
</html>
