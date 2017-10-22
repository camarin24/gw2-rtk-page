-- phpMyAdmin SQL Dump
-- version 4.2.7.1
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 17-06-2015 a las 06:32:52
-- Versión del servidor: 5.6.20
-- Versión de PHP: 5.5.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `proyectophp`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE IF NOT EXISTS `productos` (
`idProducto` int(11) NOT NULL,
  `nombreProducto` varchar(40) DEFAULT NULL,
  `estado` tinyint(1) DEFAULT '1',
  `existencias` int(11) NOT NULL,
  `fabricante` varchar(40) DEFAULT NULL,
  `descripcion` varchar(200) DEFAULT NULL,
  `url` varchar(100) DEFAULT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`idProducto`, `nombreProducto`, `estado`, `existencias`, `fabricante`, `descripcion`, `url`) VALUES
(1, 'Chorizo', 1, 15, 'zenu', 'largo embutido de carne de caballo', 'upload/83.jpg'),
(2, 'Bon Bon Bum', 1, 30, 'Colombina', 'Bolsa de BonBon Bum 30 unidades por paquete.', 'upload/175453_151851_5.jpg'),
(3, 'Aguardiente Antioqueño', 1, 6, 'FFA', 'Grado de Alcohol 20% , 1 litro', 'upload/175457_15246_5.jpg'),
(4, 'Cerveza Aguila', 1, 150, 'Bavaria', 'Grado de alcohol 5%, 500 ml', 'upload/175462_152824_5.jpg'),
(5, 'Chocolatina Jet', 1, 300, 'Nacional de chocolates', 'Paquete de 25 unidades', 'upload/175470_153657_5.jpg'),
(6, 'Pony malta', 1, 25, 'Bavaria', '6 latas, 330 ml', 'upload/175483_15567_5.jpg');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
 ADD PRIMARY KEY (`idProducto`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
MODIFY `idProducto` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=7;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
