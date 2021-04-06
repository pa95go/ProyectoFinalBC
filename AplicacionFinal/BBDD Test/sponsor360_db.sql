-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 06-04-2021 a las 10:33:24
-- Versión del servidor: 8.0.23-0ubuntu0.20.04.1
-- Versión de PHP: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `sponsor360_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `brand`
--

CREATE TABLE `brand` (
  `id` int NOT NULL,
  `usuario_id` int NOT NULL,
  `nombre` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `imagen` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `descripcion` longtext COLLATE utf8mb4_unicode_ci,
  `rrss_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `brand`
--

INSERT INTO `brand` (`id`, `usuario_id`, `nombre`, `imagen`, `descripcion`, `rrss_id`) VALUES
(23, 52, 'My Protein', 'brand/perfil_brand23.jpeg', 'La marca de nutrición deportiva más completa en Europa.\nOrgullosos de ofrecer e innovar productos de calidad al mejor precio', 37),
(24, 53, 'Nutrimarket', 'brand/perfil_brand24.jpeg', 'Tenemos los suplementos deportivos mas baratos del mercado \n✓ Alimentación y nutrición saludable  ✓ Alimentos saludables para tu día a día', 38),
(25, 54, 'Asics', 'brand/perfil_brand25.jpeg', 'Desde marcas streetwear a firmas Premium.\nDesde looks de oficina a esenciales deportivos, tenemos todo lo que buscas en moda.', 39),
(26, 55, 'Bang', 'brand/perfil_brand26.jpeg', 'Bebida energizante, bebidas sin alcohol , que contiene sustancias estimulantes y disminuye fatiga y el agotamiento, aumenta la habilidad mental', 40),
(27, 56, 'Liberty Seguros', 'brand/perfil_brand27.jpeg', 'Liberty Seguros, una de las aseguradoras líderes en España y en todo el mundo, te ofrece las mejores coberturas para tu seguro y un trato personalizado.', 41),
(28, 57, 'Atlantis Seguros', 'brand/perfil_brand28.jpeg', 'Elige Atlantis seguros,será sin duda la mejor elección para contratar todos tus seguros.Descubre su extensa gama de productos y los servicios que te ofrecen', 42),
(29, 60, 'Fisio Master', 'brand/perfil_brand29.jpeg', 'Tu clínica multidisciplinar de fisioterapia y osteopatía. Profesionales altamente cualificados. Tratamos todo tipo de lesiones', 45);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carrito`
--

CREATE TABLE `carrito` (
  `id` int NOT NULL,
  `brand_id` int DEFAULT NULL,
  `soporte_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `doctrine_migration_versions`
--

CREATE TABLE `doctrine_migration_versions` (
  `version` varchar(191) COLLATE utf8_unicode_ci NOT NULL,
  `executed_at` datetime DEFAULT NULL,
  `execution_time` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `doctrine_migration_versions`
--

INSERT INTO `doctrine_migration_versions` (`version`, `executed_at`, `execution_time`) VALUES
('DoctrineMigrations\\Version20210318093958', '2021-03-18 10:40:15', 79),
('DoctrineMigrations\\Version20210322174046', '2021-03-22 18:40:58', 102),
('DoctrineMigrations\\Version20210322181311', '2021-03-22 19:13:19', 216),
('DoctrineMigrations\\Version20210322181835', '2021-03-22 19:18:41', 254),
('DoctrineMigrations\\Version20210322182803', '2021-03-22 19:28:10', 89),
('DoctrineMigrations\\Version20210322183013', '2021-03-22 19:30:18', 193),
('DoctrineMigrations\\Version20210322183209', '2021-03-22 19:32:16', 217),
('DoctrineMigrations\\Version20210322183424', '2021-03-22 19:34:29', 86),
('DoctrineMigrations\\Version20210322184440', '2021-03-22 19:44:45', 377),
('DoctrineMigrations\\Version20210322185240', '2021-03-22 19:52:46', 276),
('DoctrineMigrations\\Version20210323091942', '2021-03-23 10:20:07', 339),
('DoctrineMigrations\\Version20210323093321', '2021-03-23 10:33:27', 783),
('DoctrineMigrations\\Version20210323101959', '2021-03-23 11:20:05', 346),
('DoctrineMigrations\\Version20210323102239', '2021-03-23 11:22:46', 298),
('DoctrineMigrations\\Version20210323102659', '2021-03-23 11:27:06', 212),
('DoctrineMigrations\\Version20210323105311', '2021-03-23 11:53:17', 297);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `evento`
--

CREATE TABLE `evento` (
  `id` int NOT NULL,
  `nombre` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `fecha` date NOT NULL,
  `clasificacion` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `player_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `evento`
--

INSERT INTO `evento` (`id`, `nombre`, `fecha`, `clasificacion`, `player_id`) VALUES
(212, ' Juegos Europeos de Bakú', '2015-07-05', 'asistido', 13),
(213, 'Oro en  Juegos Mediterráneos', '2018-12-07', 'asistido', 13),
(214, 'Plata en Mersin ', '2013-06-04', 'asistido', 13),
(215, 'Olimpiadas Pekin 2008', '2008-07-01', 'asistido', 13),
(216, 'Olimpiadas Londres 2012', '2012-07-01', 'asistido', 13),
(217, 'Olimpiadas Rio de Janeiro 2016', '2016-07-01', 'asistido', 13),
(218, 'Olimpiadas Tokio 2020', '2021-07-01', 'proximo', 13),
(219, 'Campeonato Europeo ', '2021-07-08', 'proximo', 13),
(220, 'Campeonato Mundial', '2021-09-06', 'proximo', 13),
(221, '8º Gran Premio Internacional de Sevilla', '1997-05-29', 'asistido', 14),
(222, '4º Meeting Internacional de Baracaldo', '2001-05-04', 'asistido', 14),
(223, '10º Carrera Vitoria-Estíbaliz', '2004-04-21', 'asistido', 14),
(224, 'Campeonato de España de Medio Maratón.', '2021-08-08', 'proximo', 14),
(225, 'Campeona del mundo PKRA freestyle ', '2010-05-02', 'asistido', 15),
(226, 'Campeona del mundo PKRA freestyle ', '2011-05-06', 'asistido', 15),
(227, '2ª clasificada PKRA freestyle ', '2014-05-12', 'asistido', 15),
(228, 'Campeonato del mundo PKRA freestyle', '2021-05-14', 'proximo', 15),
(229, 'Campeona de Europa', '2021-09-05', 'proximo', 15),
(230, ' Campeonato Mundial de Tenis de Mesa', '2019-02-24', 'asistido', 16),
(231, 'Medalla de plata en el Kaisa China Open', '2018-08-15', 'asistido', 16),
(232, 'Campeonato Mundial de Tenis de Mesa', '2021-09-23', 'proximo', 16),
(233, 'Campeonato Nacional de Tenis de Mesa', '2021-07-20', 'proximo', 16),
(234, 'Campeonato Europeo de Tenis de Mesa', '2021-12-02', 'proximo', 16),
(235, 'Medalla de Bronce en Río de Janeiro 2016', '2016-08-07', 'asistido', 17),
(236, 'Campeonato Mundial de Halterofilia ', '2019-06-08', 'asistido', 17),
(237, 'Campeonato Mundial de Halterofilia ', '2018-06-03', 'asistido', 17),
(239, 'Campeonato Mundial de Halterofilia ', '2017-06-03', 'asistido', 17),
(240, 'JJOO Tokio 2020', '2021-07-15', 'proximo', 17),
(241, 'Campeonato Mundial de Halterofilia ', '2021-06-02', 'proximo', 17),
(242, ' 	XXX Campeonato de España Promesa en Pista Cubierta', '2015-04-23', 'asistido', 18),
(243, ' 	XCV Campeonato de España Absoluto', '2016-08-14', 'asistido', 18),
(244, ' 	II CONTROL A.L. CORDOBA', '2017-01-19', 'asistido', 18),
(245, ' 	XXXV Campeonato de España Promesa en Pista Cubierta', '2021-08-07', 'proximo', 18),
(246, 'Pabellon Municipal, Badia del Valles, VS Brian Rose', '2021-03-21', 'asistido', 19),
(247, 'Pabellón Anaitasuna, Pamplona VS David Soria', '2019-06-11', 'asistido', 19),
(248, 'Pabellón Rafael Machado Villar, Armilla VS Miguel Aguilar', '2018-07-02', 'asistido', 19),
(249, 'Campo de Futbol Aeria, Cullera VS Jorge Fortea', '2021-06-10', 'proximo', 19),
(250, 'Plaza de Toros La Cubierta, Leganes VS  Daniel Perez Salido', '2021-09-18', 'proximo', 19),
(251, 'Palacio de Vistalegre, Madrid VS Pablo Navascues', '2022-01-15', 'proximo', 19);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mis_deportistas`
--

CREATE TABLE `mis_deportistas` (
  `id` int NOT NULL,
  `brand_id` int DEFAULT NULL,
  `player_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mis_marcas`
--

CREATE TABLE `mis_marcas` (
  `id` int NOT NULL,
  `player_id` int DEFAULT NULL,
  `brand_id` int DEFAULT NULL,
  `fecha_inicio` date NOT NULL,
  `fecha_fin` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `mis_marcas`
--

INSERT INTO `mis_marcas` (`id`, `player_id`, `brand_id`, `fecha_inicio`, `fecha_fin`) VALUES
(44, 16, 23, '2021-04-05', '2022-04-05'),
(45, 13, 23, '2021-04-06', '2022-04-06'),
(46, 16, 23, '2021-04-06', '2022-04-06'),
(47, 17, 25, '2021-04-06', '2022-04-06'),
(48, 14, 29, '2021-04-06', '2022-04-06'),
(49, 19, 29, '2021-04-06', '2022-04-06'),
(50, 17, 29, '2021-04-06', '2022-04-06'),
(51, 13, 25, '2019-10-07', '2020-10-07'),
(52, 13, 26, '2018-03-04', '2019-03-04');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mis_soportes`
--

CREATE TABLE `mis_soportes` (
  `id` int NOT NULL,
  `brand_id` int DEFAULT NULL,
  `soporte_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `player`
--

CREATE TABLE `player` (
  `id` int NOT NULL,
  `nombre` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `deporte` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `imagen` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fecha_nacimiento` date DEFAULT NULL,
  `sexo` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `descripcion` longtext COLLATE utf8mb4_unicode_ci,
  `usuario_id` int NOT NULL,
  `rrss_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `player`
--

INSERT INTO `player` (`id`, `nombre`, `deporte`, `imagen`, `fecha_nacimiento`, `sexo`, `descripcion`, `usuario_id`, `rrss_id`) VALUES
(12, 'Pablo Gómez Osuna', 'Tenis', 'default/perfil_player.jpeg', '1995-07-05', 'Hombre', NULL, 46, 31),
(13, 'Pablo Abian', 'Badminton', 'player/perfil_player13.jpeg', '1985-06-12', 'Hombre', 'Comenze a jugar bádminton en la escuela. A los 18 años me traslade a la Residencia Joaquín Blume de Madrid para entrener en el Centro de Alto Rendimiento de la capital. He disputado el Campeonato Mundial de Bádminton en diez ocasiones.', 47, 32),
(14, 'Iván Sanchez Díaz', 'Atletismo', 'default/perfil_player.jpeg', '1975-07-27', 'Hombre', 'Especializado en fondo y campo a través  seis veces campeón del País Vasco de Campo a través largo y dos veces campeón del País Vasco de cross corto y seis veces internacional en categoría absoluta en tres Campeonatos del Mundo, un Campeonato de Europa, un Campeonato Iberoamericano, y un Encuentro Internacional', 48, 33),
(15, 'Gisela Pulido Borrel', 'KiteSurf', 'player/perfil_player15.jpeg', '1991-01-14', 'Mujer', 'Campeona del mundo de Kitesurf en noviembre de 2004, con tan solo 10 años de edad. Galardonada con un premio Guinness World Records que me acredita como la campeona mundial de Kitesurf más joven de la historia.', 49, 34),
(16, 'Alvaro Robles Martinez', 'Tenis de Mesa', 'player/perfil_player16.jpeg', '1991-04-29', 'Hombre', 'Subcampeón mundial en 2019, en el torneo de dobles. Primer jugador en la historia del tenis de mesa español que ha obtenido una medalla en el Campeonato Mundial', 50, 35),
(17, 'Lydia Valentín', 'Halterofilia', 'player/perfil_player17.jpeg', '1985-02-10', 'Mujer', 'Compito en halterofilia, en la categoría de 75 kg, campeona olímpica y mundial ', 51, 36),
(18, 'Daniel Rodriguez Serrano', 'Atleta', 'player/perfil_player18.jpeg', '1995-01-26', 'Hombre', 'Campeón de España promesa en 200 metros. Granadino, ', 58, 43),
(19, 'José Manuel Lopez', 'BOXEADOR', 'player/perfil_player19.jpeg', '1981-02-15', 'Hombre', 'Boxeador de Madrid en peso superwelter, ', 59, 44);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `red_social`
--

CREATE TABLE `red_social` (
  `id` int NOT NULL,
  `twitter_usuario` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `twitter_seg` double DEFAULT NULL,
  `twitter_eng` double DEFAULT NULL,
  `fb_usuario` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fb_seg` double DEFAULT NULL,
  `fb_eng` double DEFAULT NULL,
  `insta_usuario` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `insta_seg` double DEFAULT NULL,
  `insta_eng` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `red_social`
--

INSERT INTO `red_social` (`id`, `twitter_usuario`, `twitter_seg`, `twitter_eng`, `fb_usuario`, `fb_seg`, `fb_eng`, `insta_usuario`, `insta_seg`, `insta_eng`) VALUES
(31, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(32, '@pabian', 6948, 8, 'pabian', 22169, 5, '@pabian', 24593, 8.2),
(33, '@IvanSanch', 22362, 8.8, 'IvanSanch', 16712, 7.5, '@IvanSanch', 25086, 4.2),
(34, '@gpulido', 24059, 8.8, 'giselapulido', 25830, 5, '@gpulido', 27850, 4.3),
(35, '@arobles', 22856, 3.1, 'alvarorobles', 2745, 6.1, '@arobles', 22356, 4.7),
(36, '@lydiav', 21173, 8.3, 'lydiavalentin', 16467, 3.2, '@lydiav', 14080, 8),
(37, '@myprotein', 17906, 6.2, 'myprotein', 12936, 9.6, '@my_protein', 22518, 8.9),
(38, '@nutrimarket', 27365, 9.2, 'nutrimarket', 13524, 9.4, '@nutrimarket', 13068, 6.6),
(39, '@asics', 26350, 2.7, 'asics', 18915, 8, '@asics', 22277, 3.4),
(40, '@bang', 14083, 7.7, 'bang', 14197, 9.7, '@bang', 16292, 6.5),
(41, '@libertyseguros', 1773, 6.2, 'libertyseguros', 25930, 4.3, '@libertyseguros', 12639, 3.1),
(42, '@atlantis.seg', 14890, 9.7, 'atlantis.seg', 7549, 6, '@atlantis.seg', 2679, 7.7),
(43, '@drodriguez', 19540, 9.5, 'drodriguez', 11643, 4.2, '@drodriguezs', 29083, 7.2),
(44, '@jmlopez', 1124, 6.2, 'jmlopez', 8309, 9.2, '@jmlopez', 6472, 7.1),
(45, '@fisiomaster', 13839, 8.4, 'fisiomaster', 25129, 7.5, '@fisiomaster', 16138, 3.8);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `soporte`
--

CREATE TABLE `soporte` (
  `id` int NOT NULL,
  `player_id` int DEFAULT NULL,
  `brand_id` int DEFAULT NULL,
  `nombre` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `descripcion` longtext COLLATE utf8mb4_unicode_ci,
  `imagen` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tamano` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `precio` double DEFAULT NULL,
  `estado` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fecha_inicio` date DEFAULT NULL,
  `fecha_fin` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `soporte`
--

INSERT INTO `soporte` (`id`, `player_id`, `brand_id`, `nombre`, `descripcion`, `imagen`, `tamano`, `precio`, `estado`, `fecha_inicio`, `fecha_fin`) VALUES
(483, 12, NULL, '', NULL, 'default/soporte.jpeg', NULL, 0, 'false', NULL, NULL),
(484, 12, NULL, '', NULL, 'default/soporte.jpeg', NULL, 0, 'false', NULL, NULL),
(485, 12, NULL, '', NULL, 'default/soporte.jpeg', NULL, 0, 'false', NULL, NULL),
(486, 12, NULL, '', NULL, 'default/soporte.jpeg', NULL, 0, 'false', NULL, NULL),
(487, 13, NULL, 'Logo trasero camiseta de juego.', 'Parte trasera baja de la camiseta de los partidos.', 'soportes/soporte_imagen_487.jpeg', '30cm x15cm', 4100, 'true', NULL, NULL),
(488, 13, NULL, 'Bermuda zona delantera.', 'Logotipo en la parte frontal de las bermudas.', 'soportes/soporte_imagen_488.jpeg', '15cm x 15cm ', 3250, 'false', NULL, NULL),
(489, 13, NULL, 'Raqueta.', 'Logotipo en la raqueta y la funda. ', 'soportes/soporte_imagen_489.jpeg', '40cm x 20cm ', 2900, 'false', NULL, NULL),
(490, 13, 23, 'Logo en la gorra.', 'Logotipo en la gorra. Fondo negro.', 'soportes/soporte_imagen_490.jpeg', '12cm x12cm', 1600, 'false', '2021-04-06', '2022-04-06'),
(491, 14, NULL, 'Camiseta frontal. Centro', 'Soporte en la camiseta. Parte central a la altura del pecho. Muy visible en los eventos.', 'soportes/soporte_imagen_491.jpeg', '20cm x20cm', 5220, 'true', NULL, NULL),
(492, 14, NULL, 'Camiseta parte trasera', 'Espacio central en la espalda.', 'default/soporte.jpeg', '30cm x 15cm', 0, 'false', NULL, NULL),
(493, 14, 29, 'Mochila', 'Parte central de la mochila. ', 'soportes/soporte_imagen_493.jpeg', '20cm x 25cm', 1740, 'false', '2021-04-06', '2022-04-06'),
(494, 14, NULL, '', NULL, 'default/soporte.jpeg', NULL, 0, 'false', NULL, NULL),
(495, 15, NULL, 'Camiseta neopreno logotipo central', 'Camiseta de los eventos logotipo central, en la camiseta del neopreno', 'soportes/soporte_imagen_495.jpeg', '25cm x25cm', 4530, 'true', NULL, NULL),
(496, 15, NULL, 'Cometa kitesurf.', 'Espacio publicitario en la cometa. ', 'soportes/soporte_imagen_496.jpeg', '5m x 2m', 9600, 'true', NULL, NULL),
(497, 15, NULL, 'Tabla de kitefurf', 'Gran logotipo en la tabla de kitesurf', 'soportes/soporte_imagen_497.jpeg', '1.5m x 1m ', 4500, 'true', NULL, NULL),
(498, 15, NULL, 'Bañador', 'Logotipo lateral en el bañador.', 'soportes/soporte_imagen_498.jpeg', '15cm x 30cm', 3560, 'true', NULL, NULL),
(499, 16, NULL, 'Camiseta parte frontal.', 'Camiseta de juego, parte frontal. Logotipo a color, sobre fondo rojo.', 'soportes/soporte_imagen_499.jpeg', '22cm x 15cm', 3450, 'true', NULL, NULL),
(500, 16, 23, 'Camiseta parte trasera.', 'Camiseta de juego parte trasera baja sobre fondo rojo.', 'soportes/soporte_imagen_500.jpeg', '16cm x 10cm ', 3100, 'false', '2021-04-05', '2022-04-05'),
(501, 16, 23, 'Pantalon parte lateral', 'Pantalon de juego parte lateral, logotipo a color sobre fondo negro.', 'soportes/soporte_imagen_501.jpeg', '10cm x 15 cm', 2850, 'false', '2021-04-06', '2022-04-06'),
(502, 16, NULL, 'Manga camiseta ', 'Logotipo en la manga de la equipacion, sobre fondo rojo.', 'soportes/soporte_imagen_502.jpeg', '5cm x 12cm', 2850, 'true', NULL, NULL),
(503, 17, 29, 'Cinta del pelo', 'Cinta de pelo, negra, logtipo en blanco. ', 'soportes/soporte_imagen_503.jpeg', '7cm x 10cm', 1300, 'false', '2021-04-06', '2022-04-06'),
(504, 17, 25, 'Sudadera', 'Sudadera, para la zona de podium y para el pre evento.', 'soportes/soporte_imagen_504.jpeg', '20cm x 20cm', 3200, 'false', '2021-04-06', '2022-04-06'),
(505, 17, NULL, 'Muñequeras', 'Logotipo en blanco en las muñequeras.', 'soportes/soporte_imagen_505.jpeg', '7cm x 7cm ', 1500, 'true', NULL, NULL),
(506, 17, NULL, 'Camiseta de entreno', 'Camiseta de entreno logotipo central', 'default/soporte.jpeg', '30cm x 30cm', 2050, 'true', NULL, NULL),
(507, 18, NULL, 'Camiseta', 'Logotipo en la parte frontal de la camiseta de los eventos.', 'soportes/soporte_imagen_507.jpeg', '30cm x 20cm', 3620, 'true', NULL, NULL),
(508, 18, NULL, 'Pantalon ', 'Logotipo en la pate inferior derecha del pantalon de los eventos.', 'soportes/soporte_imagen_508.jpeg', '12cm x12cm', 2400, 'true', NULL, NULL),
(509, 18, NULL, 'Muñequera', 'Logotipo en las muñequeras', 'soportes/soporte_imagen_509.jpeg', '10cm x 5cm', 1500, 'false', NULL, NULL),
(510, 18, NULL, 'Cinta de pelo', NULL, 'default/soporte.jpeg', NULL, 0, 'false', NULL, NULL),
(511, 19, NULL, 'Guantes de Boxeo', 'Logotipo en los guantes de boxeo, tanto en el derecho como en el izquierdo.', 'soportes/soporte_imagen_511.jpeg', '12cm x 10cm', 3620, 'true', NULL, NULL),
(512, 19, NULL, 'Pantalon', 'Logotipo en la parte lateral del pantalon de boxeo.', 'soportes/soporte_imagen_512.jpeg', '35cm x 15cm ', 3540, 'true', NULL, NULL),
(513, 19, NULL, '', NULL, 'default/soporte.jpeg', NULL, 0, 'false', NULL, NULL),
(514, 19, 29, 'Camiseta pre-evento', 'Camiseta pre evento, antes de comenzar la pelea. logotipo frontal, centro de la camiseta', 'soportes/soporte_imagen_514.jpeg', '30cm x 30cm ', 2980, 'false', '2021-04-06', '2022-04-06');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `id` int NOT NULL,
  `email` varchar(180) COLLATE utf8mb4_unicode_ci NOT NULL,
  `roles` json NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`id`, `email`, `roles`, `password`) VALUES
(46, 'pablo@gmail.com', '[\"ROLE_PLAYER\"]', '$argon2id$v=19$m=65536,t=4,p=1$hfs//57psqt4ZBKETAOcjQ$nLhXBB5R9+MyAoPHg3AMdWcuHLxQhsWd5WxD+ojxNCA'),
(47, 'pabian@gmail.com', '[\"ROLE_PLAYER\"]', '$argon2id$v=19$m=65536,t=4,p=1$8sWIlKNI38trzP6EWw/tgQ$cbjngJVS7kyNX0dkAa8fMjNe/vdknOHD3B0Q4Cnua5w'),
(48, 'Isanchez@gmail.com', '[\"ROLE_PLAYER\"]', '$argon2id$v=19$m=65536,t=4,p=1$XFpuJt6+EYk8fMa60AMI0A$UBO2rlfYeGDUvjULF/KvbwAqcgDcYGjZBQHhWz3zJW4'),
(49, 'gpulido@gmail.com', '[\"ROLE_PLAYER\"]', '$argon2id$v=19$m=65536,t=4,p=1$kJX37m7iSjEXgma7wfhBGg$2+jHLmEVE6hA+BWxi95LQR0kDxEtJO6t9K9jD/2Mihk'),
(50, 'arobles@gmail.com', '[\"ROLE_PLAYER\"]', '$argon2id$v=19$m=65536,t=4,p=1$U1RBFmtNKnqJn1cnjPyerA$EVm7l/lusiZ55UTvVJPg0Qz75hq+LTg6SDOZh2Ohc8o'),
(51, 'lvalentin@gmail.com', '[\"ROLE_PLAYER\"]', '$argon2id$v=19$m=65536,t=4,p=1$4azntG/kDWVN4+MnLZuAkw$iwLqmTN+pTLms3kCodP/NUuJuj2uKCr/XrPhyr9GA5Q'),
(52, 'info@myprotein.com', '[\"ROLE_BRAND\"]', '$argon2id$v=19$m=65536,t=4,p=1$lVPkXZnAT1moOx7J4prktw$eXuACNY3hvsotu/J21bqT5ezSMXyvIMrk+GZv1ihbyI'),
(53, 'info@nutrimarket.com', '[\"ROLE_BRAND\"]', '$argon2id$v=19$m=65536,t=4,p=1$4+kzQig6wdPBhnyFVDDGlw$iuq63uHTLrOtvNin7ajry3sWEP9KnN7fW17dkoYCRUI'),
(54, 'info@asics.com', '[\"ROLE_BRAND\"]', '$argon2id$v=19$m=65536,t=4,p=1$Y+cZQte2EMxx8Ci/AHbnZA$Me+NKwRwiNihzZza8xhEccMtlWeUUN0LT5INPyEsA4k'),
(55, 'info@bang.com', '[\"ROLE_BRAND\"]', '$argon2id$v=19$m=65536,t=4,p=1$nx1vPcpjIxQcrggv74TpZg$I79oSqqL9zSh0WN9swdBW7KFFFQ6z3rsYCi66vaTsSo'),
(56, 'info@libertyseguros.com', '[\"ROLE_BRAND\"]', '$argon2id$v=19$m=65536,t=4,p=1$HkTwJvzNTWztaTOcbknPMQ$9ZZyBtVZp6P0cSbUrnQs+3riu70V3+RPaLpp1Xl41+0'),
(57, 'info@atlantis.com', '[\"ROLE_BRAND\"]', '$argon2id$v=19$m=65536,t=4,p=1$cv4syeSp561ngzOMpaao4A$WV1h31+MmlJAj6PqhZMzGQ+6kfXyulDTC0L+WvlFwBo'),
(58, 'dserrano@gmail.com', '[\"ROLE_PLAYER\"]', '$argon2id$v=19$m=65536,t=4,p=1$8zxkUtvnjjfvh5ZmBvZ9HQ$jfS9x0JZWKh+tDjs07NkavhqcKcxK3OIUg8vEWFK4/8'),
(59, 'jlopez@gmail.com', '[\"ROLE_PLAYER\"]', '$argon2id$v=19$m=65536,t=4,p=1$zeYEmACiBZdP4Kalo3VBqQ$nF+l6pEze9c+DhtfX2az+5a4oTMEsONan+uIe7qhKT4'),
(60, 'fisio@master.com', '[\"ROLE_BRAND\"]', '$argon2id$v=19$m=65536,t=4,p=1$ITVzBj8+XX8nCYgME7EvXQ$J0vJnHCd+NYoeXNe21ECijw6Om94zgu0cPb3sf4hm+Y');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `brand`
--
ALTER TABLE `brand`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_1C52F958DB38439E` (`usuario_id`),
  ADD UNIQUE KEY `UNIQ_1C52F958FE893BF9` (`rrss_id`);

--
-- Indices de la tabla `carrito`
--
ALTER TABLE `carrito`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_77E6BED573C044D2` (`soporte_id`),
  ADD KEY `IDX_77E6BED544F5D008` (`brand_id`);

--
-- Indices de la tabla `doctrine_migration_versions`
--
ALTER TABLE `doctrine_migration_versions`
  ADD PRIMARY KEY (`version`);

--
-- Indices de la tabla `evento`
--
ALTER TABLE `evento`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_47860B0599E6F5DF` (`player_id`);

--
-- Indices de la tabla `mis_deportistas`
--
ALTER TABLE `mis_deportistas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_CCECE46D44F5D008` (`brand_id`),
  ADD KEY `IDX_CCECE46D99E6F5DF` (`player_id`);

--
-- Indices de la tabla `mis_marcas`
--
ALTER TABLE `mis_marcas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_EE64FA1399E6F5DF` (`player_id`),
  ADD KEY `IDX_EE64FA1344F5D008` (`brand_id`);

--
-- Indices de la tabla `mis_soportes`
--
ALTER TABLE `mis_soportes`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_5A0DE3D573C044D2` (`soporte_id`),
  ADD KEY `IDX_5A0DE3D544F5D008` (`brand_id`);

--
-- Indices de la tabla `player`
--
ALTER TABLE `player`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_98197A65DB38439E` (`usuario_id`),
  ADD UNIQUE KEY `UNIQ_98197A65FE893BF9` (`rrss_id`);

--
-- Indices de la tabla `red_social`
--
ALTER TABLE `red_social`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `soporte`
--
ALTER TABLE `soporte`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_2273AC699E6F5DF` (`player_id`),
  ADD KEY `IDX_2273AC644F5D008` (`brand_id`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_8D93D649E7927C74` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `brand`
--
ALTER TABLE `brand`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT de la tabla `carrito`
--
ALTER TABLE `carrito`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=102;

--
-- AUTO_INCREMENT de la tabla `evento`
--
ALTER TABLE `evento`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=252;

--
-- AUTO_INCREMENT de la tabla `mis_deportistas`
--
ALTER TABLE `mis_deportistas`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `mis_marcas`
--
ALTER TABLE `mis_marcas`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT de la tabla `mis_soportes`
--
ALTER TABLE `mis_soportes`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `player`
--
ALTER TABLE `player`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT de la tabla `red_social`
--
ALTER TABLE `red_social`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT de la tabla `soporte`
--
ALTER TABLE `soporte`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=515;

--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `brand`
--
ALTER TABLE `brand`
  ADD CONSTRAINT `FK_1C52F958DB38439E` FOREIGN KEY (`usuario_id`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `FK_1C52F958FE893BF9` FOREIGN KEY (`rrss_id`) REFERENCES `red_social` (`id`);

--
-- Filtros para la tabla `carrito`
--
ALTER TABLE `carrito`
  ADD CONSTRAINT `FK_77E6BED544F5D008` FOREIGN KEY (`brand_id`) REFERENCES `brand` (`id`),
  ADD CONSTRAINT `FK_77E6BED573C044D2` FOREIGN KEY (`soporte_id`) REFERENCES `soporte` (`id`);

--
-- Filtros para la tabla `evento`
--
ALTER TABLE `evento`
  ADD CONSTRAINT `FK_47860B0599E6F5DF` FOREIGN KEY (`player_id`) REFERENCES `player` (`id`);

--
-- Filtros para la tabla `mis_deportistas`
--
ALTER TABLE `mis_deportistas`
  ADD CONSTRAINT `FK_CCECE46D44F5D008` FOREIGN KEY (`brand_id`) REFERENCES `brand` (`id`),
  ADD CONSTRAINT `FK_CCECE46D99E6F5DF` FOREIGN KEY (`player_id`) REFERENCES `player` (`id`);

--
-- Filtros para la tabla `mis_marcas`
--
ALTER TABLE `mis_marcas`
  ADD CONSTRAINT `FK_EE64FA1344F5D008` FOREIGN KEY (`brand_id`) REFERENCES `brand` (`id`),
  ADD CONSTRAINT `FK_EE64FA1399E6F5DF` FOREIGN KEY (`player_id`) REFERENCES `player` (`id`);

--
-- Filtros para la tabla `mis_soportes`
--
ALTER TABLE `mis_soportes`
  ADD CONSTRAINT `FK_5A0DE3D544F5D008` FOREIGN KEY (`brand_id`) REFERENCES `brand` (`id`),
  ADD CONSTRAINT `FK_5A0DE3D573C044D2` FOREIGN KEY (`soporte_id`) REFERENCES `soporte` (`id`);

--
-- Filtros para la tabla `player`
--
ALTER TABLE `player`
  ADD CONSTRAINT `FK_98197A65DB38439E` FOREIGN KEY (`usuario_id`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `FK_98197A65FE893BF9` FOREIGN KEY (`rrss_id`) REFERENCES `red_social` (`id`);

--
-- Filtros para la tabla `soporte`
--
ALTER TABLE `soporte`
  ADD CONSTRAINT `FK_2273AC644F5D008` FOREIGN KEY (`brand_id`) REFERENCES `brand` (`id`),
  ADD CONSTRAINT `FK_2273AC699E6F5DF` FOREIGN KEY (`player_id`) REFERENCES `player` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
