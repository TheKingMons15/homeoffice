-- MySQL Script generated by MySQL Workbench
-- Mon Dec  9 23:37:20 2024
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema INGENIERIA
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `INGENIERIA` ;

-- -----------------------------------------------------
-- Schema INGENIERIA
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `INGENIERIA` ;
USE `INGENIERIA` ;

-- -----------------------------------------------------
-- Table `INGENIERIA`.`Equipos`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `INGENIERIA`.`Equipos` ;

CREATE TABLE IF NOT EXISTS `INGENIERIA`.`Equipos` (
  `idEquipos` INT NOT NULL,
  `Nombre_Equipo` VARCHAR(45) NULL,
  PRIMARY KEY (`idEquipos`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `INGENIERIA`.`Rol`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `INGENIERIA`.`Rol` ;

CREATE TABLE IF NOT EXISTS `INGENIERIA`.`Rol` (
  `idRol` INT NOT NULL,
  `Trabajador` TINYINT NOT NULL,
  `Administrador` TINYINT NOT NULL,
  PRIMARY KEY (`idRol`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `INGENIERIA`.`EMPLEADOS`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `INGENIERIA`.`EMPLEADOS` ;

CREATE TABLE IF NOT EXISTS `INGENIERIA`.`EMPLEADOS` (
  `idEMPLEADOS` INT NOT NULL,
  `Equipos_idEquipos` INT NOT NULL,
  `Rol_idRol` INT NOT NULL,
  `Nombre` VARCHAR(30) NULL,
  `Apellido` VARCHAR(30) NULL,
  `Email` VARCHAR(50) NULL,
  `Password` VARCHAR(15) NULL,
  `Cedula` VARCHAR(10) NULL,
  `Direccion` VARCHAR(45) NULL,
  `Celular` VARCHAR(10) NULL,
  `Rol_Equipo` VARCHAR(45) NULL,
  PRIMARY KEY (`idEMPLEADOS`, `Equipos_idEquipos`, `Rol_idRol`),
  INDEX `fk_EMPLEADOS_Equipos_idx` (`Equipos_idEquipos` ASC) VISIBLE,
  INDEX `fk_EMPLEADOS_Rol1_idx` (`Rol_idRol` ASC) VISIBLE,
  CONSTRAINT `fk_EMPLEADOS_Equipos`
    FOREIGN KEY (`Equipos_idEquipos`)
    REFERENCES `INGENIERIA`.`Equipos` (`idEquipos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_EMPLEADOS_Rol1`
    FOREIGN KEY (`Rol_idRol`)
    REFERENCES `INGENIERIA`.`Rol` (`idRol`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
COMMENT = '					';


-- -----------------------------------------------------
-- Table `INGENIERIA`.`Proyectos`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `INGENIERIA`.`Proyectos` ;

CREATE TABLE IF NOT EXISTS `INGENIERIA`.`Proyectos` (
  `idProyectos` INT NOT NULL,
  `Nombre_Proyecto` VARCHAR(45) NULL,
  `Tipo_Proyecto` VARCHAR(45) NULL,
  `Descripcion_Proyecto` TEXT NULL,
  `Inicio_Proyecto` DATE NULL,
  `Fin_Proyecto` DATE NULL,
  PRIMARY KEY (`idProyectos`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `INGENIERIA`.`Tareas`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `INGENIERIA`.`Tareas` ;

CREATE TABLE IF NOT EXISTS `INGENIERIA`.`Tareas` (
  `idareas` INT NOT NULL,
  `EMPLEADOS_idEMPLEADOS` INT NOT NULL,
  `Proyectos_idProyectos` INT NOT NULL,
  `Nombre_tarea` VARCHAR(45) NULL,
  `Inicio_Tarea` DATE NULL,
  `Fin_Tarea` DATE NULL,
  `Descripcion_Tarea` TEXT NULL,
  PRIMARY KEY (`idareas`, `EMPLEADOS_idEMPLEADOS`, `Proyectos_idProyectos`),
  INDEX `fk_Tareas_EMPLEADOS1_idx` (`EMPLEADOS_idEMPLEADOS` ASC) VISIBLE,
  INDEX `fk_Tareas_Proyectos1_idx` (`Proyectos_idProyectos` ASC) VISIBLE,
  CONSTRAINT `fk_Tareas_EMPLEADOS1`
    FOREIGN KEY (`EMPLEADOS_idEMPLEADOS`)
    REFERENCES `INGENIERIA`.`EMPLEADOS` (`idEMPLEADOS`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Tareas_Proyectos1`
    FOREIGN KEY (`Proyectos_idProyectos`)
    REFERENCES `INGENIERIA`.`Proyectos` (`idProyectos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `INGENIERIA`.`Mensajes`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `INGENIERIA`.`Mensajes` ;

CREATE TABLE IF NOT EXISTS `INGENIERIA`.`Mensajes` (
  `idMensajes` INT NOT NULL,
  `EMPLEADOS_idEMPLEADOS` INT NOT NULL,
  `EMPLEADOS_Equipos_idEquipos` INT NOT NULL,
  `Texto` TEXT NOT NULL,
  `Fecha_Envio` DATE NULL,
  PRIMARY KEY (`idMensajes`, `EMPLEADOS_idEMPLEADOS`, `EMPLEADOS_Equipos_idEquipos`),
  INDEX `fk_Mensajes_EMPLEADOS1_idx` (`EMPLEADOS_idEMPLEADOS` ASC, `EMPLEADOS_Equipos_idEquipos` ASC) VISIBLE,
  CONSTRAINT `fk_Mensajes_EMPLEADOS1`
    FOREIGN KEY (`EMPLEADOS_idEMPLEADOS` , `EMPLEADOS_Equipos_idEquipos`)
    REFERENCES `INGENIERIA`.`EMPLEADOS` (`idEMPLEADOS` , `Equipos_idEquipos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `INGENIERIA`.`Inicio_Sesion`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `INGENIERIA`.`Inicio_Sesion` ;

CREATE TABLE IF NOT EXISTS `INGENIERIA`.`Inicio_Sesion` (
  `idseción` INT NOT NULL,
  `EMPLEADOS_idEMPLEADOS` INT NOT NULL,
  `Fecha_Ingreso` DATETIME NULL,
  `Fecha_salida` DATETIME NULL,
  PRIMARY KEY (`idseción`, `EMPLEADOS_idEMPLEADOS`),
  INDEX `fk_seción_EMPLEADOS1_idx` (`EMPLEADOS_idEMPLEADOS` ASC) VISIBLE,
  CONSTRAINT `fk_seción_EMPLEADOS1`
    FOREIGN KEY (`EMPLEADOS_idEMPLEADOS`)
    REFERENCES `INGENIERIA`.`EMPLEADOS` (`idEMPLEADOS`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `INGENIERIA`.`Detalle`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `INGENIERIA`.`Detalle` ;

CREATE TABLE IF NOT EXISTS `INGENIERIA`.`Detalle` (
  `idDetalle` INT NOT NULL,
  `Fecha_Envio` DATE NULL,
  `Descripcion` TEXT NULL,
  PRIMARY KEY (`idDetalle`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `INGENIERIA`.`Reporte`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `INGENIERIA`.`Reporte` ;

CREATE TABLE IF NOT EXISTS `INGENIERIA`.`Reporte` (
  `idReportes` INT NOT NULL,
  `Proyectos_idProyectos` INT NOT NULL,
  `Equipos_idEquipos` INT NOT NULL,
  `Detalle_idDetalle` INT NOT NULL,
  PRIMARY KEY (`Proyectos_idProyectos`, `Equipos_idEquipos`, `Detalle_idDetalle`, `idReportes`),
  INDEX `fk_Proyectos_has_Equipos_Equipos1_idx` (`Equipos_idEquipos` ASC) VISIBLE,
  INDEX `fk_Proyectos_has_Equipos_Proyectos1_idx` (`Proyectos_idProyectos` ASC) VISIBLE,
  INDEX `fk_Reporte_Detalle1_idx` (`Detalle_idDetalle` ASC) VISIBLE,
  CONSTRAINT `fk_Proyectos_has_Equipos_Proyectos1`
    FOREIGN KEY (`Proyectos_idProyectos`)
    REFERENCES `INGENIERIA`.`Proyectos` (`idProyectos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Proyectos_has_Equipos_Equipos1`
    FOREIGN KEY (`Equipos_idEquipos`)
    REFERENCES `INGENIERIA`.`Equipos` (`idEquipos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Reporte_Detalle1`
    FOREIGN KEY (`Detalle_idDetalle`)
    REFERENCES `INGENIERIA`.`Detalle` (`idDetalle`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
