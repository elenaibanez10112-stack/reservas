<?php
$servidor = "localhost";
$usuario = "root";
$password = "";
$base_datos = "reservas_castillo";

$conexion = mysqli_connect($servidor, $usuario, $password, $base_datos);

if (!$conexion) {
    die("Error de conexión a la base de datos: " . mysqli_connect_error());
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Sanitizar datos ingresados por el usuario
    $nombre = mysqli_real_escape_string($conexion, $_POST['nombre_usuario']);
    $apellidos = mysqli_real_escape_string($conexion, $_POST['apellidos_usuario']);
    $email = mysqli_real_escape_string($conexion, $_POST['email_usuario']);
    $telefono = mysqli_real_escape_string($conexion, $_POST['telefono_usuario'] ?? '');
    $fecha = mysqli_real_escape_string($conexion, $_POST['fecha']);
    $id_recurso = intval($_POST['id_recurso']);
    $estado_defecto = "pendiente";

    $tipos_evento = [
        1 => "Sesión Fotográfica",
        2 => "Boda / Matrimonio",
        3 => "Evento Corporativo"
    ];
    $nombre_evento = isset($tipos_evento[$id_recurso]) ? $tipos_evento[$id_recurso] : "Otro";

    if (!empty($nombre) && !empty($apellidos) && !empty($email) && !empty($fecha)) {
        
        // 1. Buscar si el usuario existe por email
        $consulta_usuario = "SELECT id_usuario FROM usuarios WHERE email = '$email' LIMIT 1";
        $resultado_usuario = mysqli_query($conexion, $consulta_usuario);
        
        if ($resultado_usuario && mysqli_num_rows($resultado_usuario) > 0) {
            $fila = mysqli_fetch_assoc($resultado_usuario);
            $id_usuario = $fila['id_usuario'];
        } else {
            // 2. Insertar nuevo usuario si no se encuentra registrado
            $insertar_usuario = "INSERT INTO usuarios (nombre, apellidos, email, telefono) 
                                VALUES ('$nombre', '$apellidos', '$email', '$telefono')";
            if (mysqli_query($conexion, $insertar_usuario)) {
                $id_usuario = mysqli_insert_id($conexion);
            } else {
                die("Error al registrar el usuario: " . mysqli_error($conexion));
            }
        }

        // 3. Insertar la reserva utilizando el INT id_usuario
        $sql_reserva = "INSERT INTO reservas (id_usuario, id_recurso, fecha, estado) 
                        VALUES ($id_usuario, $id_recurso, '$fecha', '$estado_defecto')";

        if (mysqli_query($conexion, $sql_reserva)) {
            $id_reserva = mysqli_insert_id($conexion);
            ?>
            <!DOCTYPE html>
            <html lang="es">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Reserva Confirmada</title>
                <style>
                    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f6f7; color: #2c3e50; margin: 0; padding: 40px 20px; }
                    .tarjeta-resumen { max-width: 600px; margin: 0 auto; background: #ffffff; padding: 2.5rem; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.08); border-top: 6px solid #27ae60; }
                    h2 { color: #27ae60; margin-top: 0; text-align: center; }
                    .detalle-item { display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid #edf2f7; }
                    .detalle-item:last-child { border-bottom: none; }
                    .etiqueta { font-weight: 700; color: #1a252f; }
                    .valor { color: #4a5568; }
                    .btn-volver { display: block; width: 100%; text-align: center; padding: 12px; background: #1a252f; color: white; text-decoration: none; border-radius: 6px; font-weight: 700; margin-top: 25px; transition: background 0.2s; }
                    .btn-volver:hover { background: #bfa15f; }
                </style>
            </head>
            <body>
                <div class="tarjeta-resumen">
                    <h2>¡Reserva Realizada con Éxito!</h2>
                    <p style="text-align: center; color: #718096; margin-bottom: 25px;">Detalles registrados en el sistema:</p>
                    
                    <div class="detalle-item"><span class="etiqueta">N° Reserva:</span> <span class="valor">#<?php echo $id_reserva; ?></span></div>
                    <div class="detalle-item"><span class="etiqueta">ID Cliente:</span> <span class="valor"><?php echo $id_usuario; ?></span></div>
                    <div class="detalle-item"><span class="etiqueta">Nombre completo:</span> <span class="valor"><?php echo htmlspecialchars($nombre . " " . $apellidos); ?></span></div>
                    <div class="detalle-item"><span class="etiqueta">Correo Electrónico:</span> <span class="valor"><?php echo htmlspecialchars($email); ?></span></div>
                    <div class="detalle-item"><span class="etiqueta">Teléfono:</span> <span class="valor"><?php echo htmlspecialchars($telefono); ?></span></div>
                    <div class="detalle-item"><span class="etiqueta">Tipo de Evento:</span> <span class="valor"><?php echo htmlspecialchars($nombre_evento); ?></span></div>
                    <div class="detalle-item"><span class="etiqueta">Fecha Reservada:</span> <span class="valor"><?php echo htmlspecialchars($fecha); ?></span></div>
                    <div class="detalle-item"><span class="etiqueta">Estado:</span> <span class="valor" style="color: #d69e2e; font-weight: 700;"><?php echo ucfirst($estado_defecto); ?></span></div>

                    <a href="index.html" class="btn-volver">Volver al Formulario</a>
                </div>
            </body>
            </html>
            <?php
        } else {
            echo "<p style='color:red;'>Error al guardar la reserva: " . mysqli_error($conexion) . "</p>";
        }

    } else {
        echo "<p style='color:red;'>Por favor, rellene todos los campos obligatorios.</p>";
    }
}

mysqli_close($conexion);
?>