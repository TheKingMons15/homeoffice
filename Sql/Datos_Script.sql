use ingenieria;
-- Equipos
INSERT INTO `Equipos` (`idEquipos`, `Nombre_Equipo`)
VALUES
(1, 'Desarrollo Backend'),
(2, 'Desarrollo Frontend'),
(3, 'Infraestructura'),
(4, 'Soporte Técnico'),
(5, 'DevOps'),
(6, 'Calidad'),
(7, 'Marketing'),
(8, 'Ventas'),
(9, 'Administración'),
(10, 'Investigación y Desarrollo');
-- Rol
INSERT INTO `Rol` (`idRol`, `Trabajador`, `Administrador`)
VALUES
(1, 1, 0),
(2, 1, 0),
(3, 0, 1),
(4, 1, 0),
(5, 0, 1);
-- Empleados
INSERT INTO `EMPLEADOS` (`idEMPLEADOS`, `Equipos_idEquipos`, `Rol_idRol`, `Nombre`, `Apellido`, `Email`, `Password`, `Cedula`, `Direccion`, `Celular`, `Rol_Equipo`)
VALUES
(1, 1, 1, 'Daniel', 'Sánchez', 'dsanchez@example.com', 'dan12345', '1234567890', 'Calle Luna 123', '0987654321', 'Analista Backend'),
(2, 2, 2, 'Lucía', 'Ramírez', 'lramirez@example.com', 'lucia_123', '1234567891', 'Calle Sol 45', '0987654322', 'Diseñadora UI/UX'),
(3, 3, 3, 'Miguel', 'Fernández', 'mfernandez@example.com', 'miguel2023', '1234567892', 'Av. Estrella 678', '0987654323', 'Administrador de Infraestructura'),
(4, 4, 1, 'Paola', 'Ríos', 'prios@example.com', 'paola123', '1234567893', 'Calle Fuego 89', '0987654324', 'Especialista en Soporte'),
(5, 5, 4, 'Javier', 'González', 'jgonzalez@example.com', 'javier_devops', '1234567894', 'Av. Nube 12', '0987654325', 'Ingeniero DevOps'),
(6, 6, 2, 'Carolina', 'Morales', 'cmorales@example.com', 'caro4567', '1234567895', 'Calle Viento 67', '0987654326', 'Tester QA'),
(7, 7, 1, 'Andrés', 'Torres', 'atorres@example.com', 'andres_321', '1234567896', 'Av. Arcoiris 34', '0987654327', 'Especialista en Marketing Digital'),
(8, 8, 3, 'Elena', 'Pérez', 'eperez@example.com', 'elena_mkt', '1234567897', 'Calle Estrella 56', '0987654328', 'Ejecutiva de Ventas'),
(9, 9, 5, 'Carlos', 'Ortiz', 'cortiz@example.com', 'carlos2023', '1234567898', 'Av. Destino 90', '0987654329', 'Gerente Administrativo'),
(10, 10, 1, 'Adriana', 'López', 'alopez@example.com', 'adri2023', '1234567899', 'Calle Brisa 21', '0987654330', 'Investigadora y Desarrolladora');
-- Proyectos
INSERT INTO `Proyectos` (`idProyectos`, `Nombre_Proyecto`, `Tipo_Proyecto`, `Descripcion_Proyecto`, `Inicio_Proyecto`, `Fin_Proyecto`)
VALUES
(1, 'Proyecto Alfa', 'Desarrollo', 'Proyecto de implementación de API REST', '2023-01-01', '2023-06-30'),
(2, 'Proyecto Beta', 'Infraestructura', 'Migración a la nube', '2023-02-01', '2023-12-31'),
(3, 'Proyecto Gamma', 'Calidad', 'Automatización de pruebas', '2023-03-01', '2023-07-15'),
(4, 'Proyecto Delta', 'Marketing', 'Campaña publicitaria digital', '2023-04-01', '2023-09-30'),
(5, 'Proyecto Épsilon', 'Investigación', 'Desarrollo de IA personalizada', '2023-05-01', '2024-01-31');
-- Tareas 
INSERT INTO `Tareas` (`idareas`, `EMPLEADOS_idEMPLEADOS`, `Proyectos_idProyectos`, `Nombre_tarea`, `Inicio_Tarea`, `Fin_Tarea`, `Descripcion_Tarea`)
VALUES
(1, 1, 1, 'Diseño de API', '2023-01-01', '2023-03-31', 'Diseño y documentación de endpoints'),
(2, 2, 1, 'Frontend integración', '2023-02-01', '2023-04-30', 'Desarrollo de interfaz gráfica'),
(3, 3, 2, 'Configurar servidores', '2023-03-01', '2023-06-30', 'Instalación y configuración de servidores en AWS'),
(4, 4, 3, 'Pruebas unitarias', '2023-04-01', '2023-05-31', 'Automatización de pruebas para backend'),
(5, 5, 4, 'Lanzar campaña', '2023-05-01', '2023-06-15', 'Estrategia y ejecución en redes sociales');
-- Mensajes
INSERT INTO `Mensajes` (`idMensajes`, `EMPLEADOS_idEMPLEADOS`, `EMPLEADOS_Equipos_idEquipos`, `Texto`, `Fecha_Envio`)
VALUES
(1, 1, 1, 'El diseño de la API está completo', '2023-01-15'),
(2, 2, 2, 'La interfaz gráfica tiene un nuevo prototipo', '2023-02-10'),
(3, 3, 3, 'Los servidores están listos para pruebas', '2023-03-20'),
(4, 4, 4, 'Las pruebas unitarias tienen un 90% de cobertura', '2023-04-25'),
(5, 5, 5, 'La campaña publicitaria fue lanzada', '2023-05-05');
-- Inicio Sesion
INSERT INTO `Inicio_Sesion` (`idseción`, `EMPLEADOS_idEMPLEADOS`, `Fecha_Ingreso`, `Fecha_salida`)
VALUES
(1, 1, '2024-12-01 08:00:00', '2024-12-01 16:00:00'),
(2, 2, '2024-12-01 09:00:00', '2024-12-01 17:30:00'),
(3, 3, '2024-12-01 07:45:00', '2024-12-01 15:45:00'),
(4, 4, '2024-12-01 10:15:00', '2024-12-01 18:15:00'),
(5, 5, '2024-12-02 08:30:00', '2024-12-02 17:00:00'),
(6, 6, '2024-12-02 07:00:00', '2024-12-02 15:00:00'),
(7, 7, '2024-12-02 09:15:00', '2024-12-02 18:45:00'),
(8, 8, '2024-12-03 08:00:00', '2024-12-03 16:00:00'),
(9, 9, '2024-12-03 09:00:00', '2024-12-03 17:30:00'),
(10, 10, '2024-12-03 07:30:00', '2024-12-03 15:30:00');
-- Detalle
INSERT INTO `Detalle` (`idDetalle`, `Fecha_Envio`, `Descripcion`)
VALUES
(1, '2023-06-01', 'Reporte inicial del proyecto Alfa'),
(2, '2023-07-01', 'Avances en el proyecto Beta'),
(3, '2023-08-01', 'Actualización del proyecto Gamma'),
(4, '2023-09-01', 'Informe final del proyecto Delta'),
(5, '2023-10-01', 'Reporte de investigación en proyecto Épsilon');

-- Reporte 
INSERT INTO `Reporte` (`idReportes`, `Proyectos_idProyectos`, `Equipos_idEquipos`, `Detalle_idDetalle`)
VALUES
(1, 1, 1, 1),
(2, 2, 3, 2),
(3, 3, 6, 3),
(4, 4, 7, 4),
(5, 5, 8, 5);

