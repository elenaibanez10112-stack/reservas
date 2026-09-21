<?php
header('Content-Type: application/json');
require_once 'conexion.php';

// 1. Validar que los campos no lleguen vacíos desde el formulario
$nombre     = trim($_POST['nombre'] ?? '');
$apellidos  = trim($_POST['apellidos'] ?? '');
$email      = trim($_POST['email'] ?? '');
$fecha      = $_POST['fecha'] ?? '';
$hora       = $_POST['hora'] ?? '';
$id_recurso = intval($_POST['espacio'] ?? 0);

if (!$nombre || !$apellidos || !$email || !$fecha || !$hora || !$id_recurso) {
    echo json_encode(['exito' => false, 'mensaje' => 'Todos los campos son obligatorios']);
    exit;
}

// 2. Comprobar si el usuario ya existe o insertarlo si es nuevo (Sentencias preparadas)
$stmtUser = $conexion->prepare("SELECT id_usuario FROM USUARIOS WHERE email = ?");
$stmtUser->bind_param("s", $email);
$stmtUser->execute();
$resUser = $stmtUser->get_result();

if ($row = $resUser->fetch_assoc()) {
    $id_usuario = $row['id_usuario'];
} else {
    $stmtInsUser = $conexion->prepare("INSERT INTO USUARIOS (nombre, apellidos, email) VALUES (?, ?, ?)");
    $stmtInsUser->bind_param("sss", $nombre, $apellidos, $email);
    $stmtInsUser->execute();
    $id_usuario = $stmtInsUser->insert_id;
}

// 3. Insertar la reserva utilizando sentencias preparadas (Punto 2.2)
$stmtReserva = $conexion->prepare("INSERT INTO RESERVAS (id_usuario, id_recurso, fecha, hora) VALUES (?, ?, ?, ?)");
$stmtReserva->bind_param("iiss", $id_usuario, $id_recurso, $fecha, $hora);

if ($stmtReserva->execute()) {
    echo json_encode([
        'exito' => true, 
        'mensaje' => 'Reserva completada e insertada con éxito.', 
        'id_reserva' => $stmtReserva->insert_id
    ]);
} else {
    echo json_encode([
        'exito' => false, 
        'mensaje' => 'Error al guardar la reserva en la base de datos'
    ]);
}
?>