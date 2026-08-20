# Sistema de Reservas: Castillo de La Guardia de Jaén

## 1. Objetivo de la Aplicación
El objetivo de esta aplicación web es digitalizar, gestionar y optimizar el proceso de reserva de visitas guiadas y libres al Castillo de La Guardia de Jaén (Andalucía). Permitirá a los turistas asegurar su plaza con antelación, controlar los aforos del monumento en tiempo real para preservar el patrimonio histórico y ofrecer una gestión automatizada a los administradores turísticos del municipio.

## 2. Identificación de Usuarios
La plataforma contará con tres perfiles de usuarios diferenciados:
*   **Visitante / Turista**: Usuarios generales que acceden a la web para consultar horarios, disponibilidad y tramitar sus reservas.
*   **Guía Turístico / Historiador**: Personal encargado de validar las reservas en la entrada del castillo y gestionar los grupos de las visitas guiadas.
*   **Administrador (Ayuntamiento/Turismo)**: Personal de gestión con control total sobre los aforos, horarios de apertura, días de cierre y estadísticas de visitas.

## 3. Funcionalidades Principales
*   **Portal de Reserva Público**: Calendario interactivo para seleccionar la fecha, la hora (turnos de mañana/tarde) y el tipo de visita (libre o guiada).
*   **Gestión de Entradas Virtuales**: Generación de un resguardo de confirmación con un código localizador para cada reserva completada.
*   **Control de Aforo Automatizado**: Bloqueo automático de fechas y turnos horarios una vez alcanzado el límite máximo de visitantes por motivos de seguridad del monumento.
*   **Panel de Control Interno**: Herramienta de gestión para que el administrador pueda modificar el aforo según eventos institucionales o restauraciones en el castillo.

## 4. Requisitos de la Aplicación
*   **Requisitos Funcionales**:
    *   El sistema debe solicitar obligatoriamente el nombre, correo electrónico y número de asistentes (máximo 5 por reserva).
    *   El sistema debe enviar un correo de confirmación automático tras validar la reserva.
    *   Los usuarios deben poder cancelar o modificar su reserva introduciendo su localizador hasta 24 horas antes.
*   **Requisitos No Funcionales**:
    *   **Interfaz Responsiva**: El diseño debe adaptarse perfectamente a teléfonos móviles, ya que muchos turistas reservarán en el propio trayecto al castillo.
    *   **Usabilidad**: Interfaz accesible, simple y traducida a lenguaje universal para usuarios no nativos o de avanzada edad.
    *   **Disponibilidad**: El sistema debe estar activo de manera continua para recibir reservas en cualquier momento del día.
    