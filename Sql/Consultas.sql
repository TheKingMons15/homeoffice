select * from detalle;
SELECT * 
FROM `Detalle`
WHERE YEAR(`Fecha_Envio`) = 2023;
--

SELECT 
    r.idReportes, 
    r.Proyectos_idProyectos, 
    r.Equipos_idEquipos, 
    r.Detalle_idDetalle, 
    d.Fecha_Envio, 
    d.Descripcion
FROM 
    `Reporte` r
JOIN 
    `Detalle` d
ON 
    r.Detalle_idDetalle = d.idDetalle;
-- Consulta cuantos administradores hay en el sistema
SELECT 
    COUNT(e.idEMPLEADOS) AS Total_Empleados_Administrador
FROM 
    `EMPLEADOS` e
JOIN 
    `Rol` r ON e.Rol_idRol = r.idRol
WHERE 
    r.Administrador = 1;
-- Nombres de administradores
SELECT 
	e.idEmpleados,
    e.Nombre, 
    e.Apellido
FROM 
    `EMPLEADOS` e
JOIN 
    `Rol` r ON e.Rol_idRol = r.idRol
WHERE 
    r.Administrador = 1;
    
-- Tiempo en linea
SELECT 
    i.EMPLEADOS_idEMPLEADOS, 
    i.Fecha_Ingreso, 
    i.Fecha_salida, 
    TIMESTAMPDIFF(HOUR, i.Fecha_Ingreso, i.Fecha_salida) AS Tiempo_En_Horas
FROM 
    `Inicio_Sesion` i;
-- Pago
SELECT 
    i.EMPLEADOS_idEMPLEADOS, 
    i.Fecha_Ingreso, 
    i.Fecha_salida, 
    TIMESTAMPDIFF(HOUR, i.Fecha_Ingreso, i.Fecha_salida) AS Tiempo_En_Horas,
    TIMESTAMPDIFF(HOUR, i.Fecha_Ingreso, i.Fecha_salida) * 2.5 AS Pago
FROM 
    `Inicio_Sesion` i;

