-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 09-12-2021 a las 14:45:16
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `springangular`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estado`
--

CREATE TABLE `estado` (
  `texto` varchar(255) NOT NULL,
  `columna1` varchar(255) DEFAULT NULL,
  `columna2` varchar(255) DEFAULT NULL,
  `columna3` varchar(255) DEFAULT NULL,
  `columna4` varchar(255) DEFAULT NULL,
  `columna5` varchar(255) DEFAULT NULL,
  `columna6` varchar(255) DEFAULT NULL,
  `columna7` varchar(255) DEFAULT NULL,
  `columna8` varchar(255) DEFAULT NULL,
  `atributos` varchar(255) DEFAULT NULL,
  `fecha` varchar(100) NOT NULL,
  `año` int(11) NOT NULL,
  `dia` int(11) NOT NULL,
  `mes` int(11) NOT NULL,
  `fecha2` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `estado`
--

INSERT INTO `estado` (`texto`, `columna1`, `columna2`, `columna3`, `columna4`, `columna5`, `columna6`, `columna7`, `columna8`, `atributos`, `fecha`, `año`, `dia`, `mes`, `fecha2`) VALUES
('A', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', 0, 0, 0, NULL);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
