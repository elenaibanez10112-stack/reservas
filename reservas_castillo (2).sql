-- =========================================
-- Base de datos: reservas_castillo
-- Proyecto: Castillo de la Guardia
-- =========================================
-- IMPORTANTE: guardar este archivo con codificación UTF-8 e importarlo
-- con utf8mb4 (phpMyAdmin: charset del archivo = utf8mb4;
-- consola: mysql -u root --default-character-set=utf8mb4 < reservas_castillo.sql)

-- CORRECCIÓN 1.2: fuerza que la conexión use utf8mb4 al leer este script,
-- así los acentos ("Salón") no se guardan mal aunque el cliente no lo indique.
SET NAMES utf8mb4;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- -----------------------------------------
-- CORRECCIÓN 1.1: datos de ejemplo en RECURSOS
-- RESERVAS exige un id_recurso existente (clave foránea), así que
-- RECURSOS debe tener datos reales antes de probar reservas.
-- -----------------------------------------
INSERT INTO RECURSOS (id_recurso, nombre, descripcion, capacidad, tipo)
VALUES
  (1, 'Salón del Trono',    'Estancia principal del castillo, con techos abovedados y mobiliario de época.', 150, 'Interior Histórico'),
  (2, 'Patio de Armas',     'Imponente espacio abierto rodeado por las murallas del castillo.',              500, 'Exterior Amurallado'),
  (3, 'Torre del Homenaje', 'La torre más alta, con vistas panorámicas de todo el entorno.',                  50, 'Vistas Panorámicas'),
  (4, 'Jardines Reales',    'Jardines ornamentales con zonas de paseo y descanso.',                          300, 'Exterior'),
  (5, 'Sala Histórica',     'Sala con exposición de objetos y documentos históricos del castillo.',          100, 'Histórico');

-- -----------------------------------------
-- (Opcional) Usuario de ejemplo para probar reservas
-- -----------------------------------------
-- INSERT INTO USUARIOS (nombre, apellidos, email)
-- VALUES ('Nacho', 'Ejemplo Apellido', 'nacho@ejemplo.com');
