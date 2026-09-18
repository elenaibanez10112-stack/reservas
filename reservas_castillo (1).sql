-- =========================================
-- Base de datos: reservas_castillo
-- Proyecto: Castillo de la Guardia
-- =========================================

CREATE DATABASE IF NOT EXISTS reservas_castillo
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_general_ci;

USE reservas_castillo;

-- -----------------------------------------
-- Tabla: USUARIOS
-- -----------------------------------------
CREATE TABLE IF NOT EXISTS USUARIOS (
    id_usuario   INT AUTO_INCREMENT PRIMARY KEY,
    nombre       VARCHAR(100) NOT NULL,
    apellidos    VARCHAR(150) NOT NULL,
    email        VARCHAR(150) NOT NULL UNIQUE
);

-- -----------------------------------------
-- Tabla: RECURSOS
-- (espacios/entradas disponibles para reservar)
-- -----------------------------------------
CREATE TABLE IF NOT EXISTS RECURSOS (
    id_recurso   INT AUTO_INCREMENT PRIMARY KEY,
    nombre       VARCHAR(100) NOT NULL,
    descripcion  VARCHAR(255),
    capacidad    INT NOT NULL,
    tipo         VARCHAR(50) NOT NULL
);

-- -----------------------------------------
-- Tabla: RESERVAS
-- -----------------------------------------
CREATE TABLE IF NOT EXISTS RESERVAS (
    id_reserva   INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario   INT NOT NULL,
    id_recurso   INT NOT NULL,
    fecha        DATE NOT NULL,
    hora         TIME NOT NULL,
    estado       VARCHAR(20) NOT NULL DEFAULT 'pendiente',

    CONSTRAINT fk_reserva_usuario
        FOREIGN KEY (id_usuario) REFERENCES USUARIOS(id_usuario)
        ON DELETE CASCADE
        ON UPDATE CASCADE,

    CONSTRAINT fk_reserva_recurso
        FOREIGN KEY (id_recurso) REFERENCES RECURSOS(id_recurso)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

-- -----------------------------------------
-- (Opcional) Datos de ejemplo para probar
-- -----------------------------------------
-- INSERT INTO RECURSOS (nombre, descripcion, capacidad, tipo)
-- VALUES ('Visita guiada mañana', 'Recorrido por el castillo con guía', 25, 'visita_guiada');

-- INSERT INTO USUARIOS (nombre, apellidos, email)
-- VALUES ('Nacho', 'Ejemplo Apellido', 'nacho@ejemplo.com');
