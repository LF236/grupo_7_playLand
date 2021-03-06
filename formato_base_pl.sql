-- MariaDB dump 10.19  Distrib 10.6.5-MariaDB, for Linux (x86_64)
--
-- Host: localhost    Database: play_land
-- ------------------------------------------------------
-- Server version	10.6.5-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Category`
--

DROP TABLE IF EXISTS `Category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Category` (
  `id` varchar(36) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Category`
--

LOCK TABLES `Category` WRITE;
/*!40000 ALTER TABLE `Category` DISABLE KEYS */;
INSERT INTO `Category` VALUES ('4237a888-a166-47e6-aced-dbfb30ac8f4a','anime'),('8de1d1bb-763a-4a2e-9430-8b79daf4d389','películas'),('ca43b5da-d25e-4556-8613-ac23ab3ba709','series'),('f102a9a8-5b57-4445-a47e-e6230c5b03ab','libros');
/*!40000 ALTER TABLE `Category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Product_User`
--

DROP TABLE IF EXISTS `Product_User`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Product_User` (
  `id` varchar(36) NOT NULL,
  `product_id` varchar(36) NOT NULL,
  `user_id` varchar(36) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `product_id` (`product_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `product_user_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `Products` (`id`),
  CONSTRAINT `product_user_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `User` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Product_User`
--

LOCK TABLES `Product_User` WRITE;
/*!40000 ALTER TABLE `Product_User` DISABLE KEYS */;
/*!40000 ALTER TABLE `Product_User` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Product_categories`
--

DROP TABLE IF EXISTS `Product_categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Product_categories` (
  `id` varchar(36) NOT NULL,
  `product_id` varchar(36) NOT NULL,
  `category_id` varchar(36) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `product_id` (`product_id`),
  KEY `category_id` (`category_id`),
  CONSTRAINT `product_categories_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `Products` (`id`),
  CONSTRAINT `product_categories_ibfk_2` FOREIGN KEY (`category_id`) REFERENCES `Category` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Product_categories`
--

LOCK TABLES `Product_categories` WRITE;
/*!40000 ALTER TABLE `Product_categories` DISABLE KEYS */;
INSERT INTO `Product_categories` VALUES ('0c57f366-b5f1-40e1-a77e-254e4fc0aa3c','70a67e20-ffa9-4d68-aff2-548d56f3528f','f102a9a8-5b57-4445-a47e-e6230c5b03ab'),('1bcd87c1-c3aa-4455-ab0c-6257982c9971','a1cc394e-87aa-4741-ae60-457a66f1ae87','ca43b5da-d25e-4556-8613-ac23ab3ba709'),('1e332ff8-0a79-4fbb-9bef-004ce139b895','7758e6d4-aeff-4106-9db4-6d9663f2f56a','8de1d1bb-763a-4a2e-9430-8b79daf4d389'),('2262a8eb-56ac-4032-8d60-26fb584ec470','2827412e-7c6a-427b-9062-e0273012709b','8de1d1bb-763a-4a2e-9430-8b79daf4d389'),('22a5a34d-8b91-4742-8776-7a24b569f822','90b78941-326d-43bd-aa2c-37ab5895dcd8','8de1d1bb-763a-4a2e-9430-8b79daf4d389'),('28209668-5799-4b5d-aa58-5ad3e027b93d','8ab83d60-aa7d-4e00-8c5d-b36457bb2795','4237a888-a166-47e6-aced-dbfb30ac8f4a'),('2a099a42-45b1-4cae-a593-5d67f551f3a6','77f799ce-74fa-4c77-80e4-aa325b50f140','ca43b5da-d25e-4556-8613-ac23ab3ba709'),('31303283-c7c8-4f74-aaf4-f4e2726d6be4','a8fd781a-ceb8-4eda-9fcc-7a1b43da5f07','f102a9a8-5b57-4445-a47e-e6230c5b03ab'),('33124faf-2e86-44ca-a468-2c9f3cd30f43','5128e002-1cb9-4be0-8cee-a9ab14074a73','4237a888-a166-47e6-aced-dbfb30ac8f4a'),('35e6ab8d-30f5-4c65-becc-43984f4bbddb','242fb2a2-1db2-4d21-ac24-852b95463c51','8de1d1bb-763a-4a2e-9430-8b79daf4d389'),('3a005c32-d748-4060-9ae3-734d4c03a136','52e8d594-6a28-4b49-90a9-b7ea322f418e','f102a9a8-5b57-4445-a47e-e6230c5b03ab'),('4c08ce1a-e32a-4d6b-b08a-e249fd7995d8','a608e133-7f7b-4b29-83a4-e96b8281db50','8de1d1bb-763a-4a2e-9430-8b79daf4d389'),('4c46d14c-7b42-4eb9-9c60-40d2b7bea4cb','52e8d594-6a28-4b49-90a9-b7ea322f418e','ca43b5da-d25e-4556-8613-ac23ab3ba709'),('4f290d6c-a4e8-4984-ae85-90b23ad9aaf6','a4996729-71ab-45bc-9ec3-a182d36ec70e','8de1d1bb-763a-4a2e-9430-8b79daf4d389'),('4f44a090-8125-42de-b684-5ab3db6329c0','60a4e31e-0e3a-4702-bbf9-b3a74991734c','8de1d1bb-763a-4a2e-9430-8b79daf4d389'),('55a2c87e-5823-467c-9883-332b573afb59','1fe53b77-76cd-4076-b8b9-08be762623db','ca43b5da-d25e-4556-8613-ac23ab3ba709'),('586915da-400e-40c6-87ac-40383e269e7e','2827412e-7c6a-427b-9062-e0273012709b','f102a9a8-5b57-4445-a47e-e6230c5b03ab'),('588acd0c-6e91-40ea-8933-215cd553d8f0','da69c7a9-ed5c-4ce2-b649-91963f005a3b','f102a9a8-5b57-4445-a47e-e6230c5b03ab'),('59a015a3-d469-4980-98b0-078270f8052e','327684ac-b9ef-47ab-8142-0a2a995610e3','ca43b5da-d25e-4556-8613-ac23ab3ba709'),('5bd2d25a-8e82-45ed-9757-b7b7a61b2aaa','f2b8990b-7bcb-49ec-9e24-faf83afe4e50','f102a9a8-5b57-4445-a47e-e6230c5b03ab'),('64ce0864-f74b-4d51-a04f-5f6ca170fcad','b868c23d-8ae3-49eb-8675-6329b4e98aaf','f102a9a8-5b57-4445-a47e-e6230c5b03ab'),('653b1b66-9508-424a-9b7c-baed964aeca4','70a67e20-ffa9-4d68-aff2-548d56f3528f','8de1d1bb-763a-4a2e-9430-8b79daf4d389'),('6a3db0d6-97f9-4749-8412-a302c90f1f00','7758e6d4-aeff-4106-9db4-6d9663f2f56a','f102a9a8-5b57-4445-a47e-e6230c5b03ab'),('6c3e6cb3-042b-4927-9aec-5210fb19982c','d0cb5d9e-bf0c-4c1b-a445-8541df993440','8de1d1bb-763a-4a2e-9430-8b79daf4d389'),('6ead188b-f4eb-4631-bf91-13528abc100a','d21754bc-b793-4c21-ab75-3261c5a6833a','ca43b5da-d25e-4556-8613-ac23ab3ba709'),('7558c34f-646b-4da9-9edf-f8a816f00b0d','8a15b0a1-8c7c-4d75-9190-49c564d74c55','8de1d1bb-763a-4a2e-9430-8b79daf4d389'),('755ef38a-d65a-4c77-a9d6-524fb9bcaa82','a4996729-71ab-45bc-9ec3-a182d36ec70e','f102a9a8-5b57-4445-a47e-e6230c5b03ab'),('771592f1-22ac-4cba-889f-8c6d7584c045','da69c7a9-ed5c-4ce2-b649-91963f005a3b','8de1d1bb-763a-4a2e-9430-8b79daf4d389'),('8363e552-654e-494e-b446-496b798650e6','71ed4278-b173-458f-8d01-94dcfa0cb9e3','ca43b5da-d25e-4556-8613-ac23ab3ba709'),('844469d4-1389-49ba-b720-f80c376bae78','ef61f214-a5a9-4d7f-859d-c3816d200329','8de1d1bb-763a-4a2e-9430-8b79daf4d389'),('89a27b4b-f9a4-40c9-8d13-c96ea02b981f','c5abd305-4bc2-4f18-a24e-7eedb23344e0','8de1d1bb-763a-4a2e-9430-8b79daf4d389'),('8cac174e-80bb-4c58-8fee-5e265746c688','6a4f9192-c190-44e8-9bdd-72dd6d17f749','ca43b5da-d25e-4556-8613-ac23ab3ba709'),('8eee685f-2db4-433b-936d-f931a7481050','242fb2a2-1db2-4d21-ac24-852b95463c51','f102a9a8-5b57-4445-a47e-e6230c5b03ab'),('9570a5d0-3ce7-4983-b962-2172c7613b5c','7bfb6de3-2cf4-4555-b16a-6df7191b3ed9','ca43b5da-d25e-4556-8613-ac23ab3ba709'),('9700bb12-1a71-449f-b8e6-0eef9015f260','a8fd781a-ceb8-4eda-9fcc-7a1b43da5f07','8de1d1bb-763a-4a2e-9430-8b79daf4d389'),('9a3057cf-c4c9-42fb-af04-76fac54dc741','8e74726e-6769-4157-9fa7-d79cb7713dd9','ca43b5da-d25e-4556-8613-ac23ab3ba709'),('9f8db0fb-7a07-4520-88e0-88fab0172079','c587314b-ce0e-41cb-a9e1-65cdb1f08c58','4237a888-a166-47e6-aced-dbfb30ac8f4a'),('a1a91a98-d8a2-440f-8fcf-a47410d205e1','8a15b0a1-8c7c-4d75-9190-49c564d74c55','ca43b5da-d25e-4556-8613-ac23ab3ba709'),('a55e23ce-b845-48e6-a939-65c26a8e194e','645ba997-b6d8-48d1-9c6b-cb1ef7da2131','8de1d1bb-763a-4a2e-9430-8b79daf4d389'),('a9052058-24dc-44be-b257-2c0474fc3e85','37dc46b1-3146-43fa-adf8-4137b6dbaacd','4237a888-a166-47e6-aced-dbfb30ac8f4a'),('a93896b3-15ed-4968-ac7a-712ccb1d030d','dec1636e-1f5f-499b-8ce0-b7faaa6ebf39','8de1d1bb-763a-4a2e-9430-8b79daf4d389'),('acb7d54a-abaf-44ad-9aaa-105b924d3d0c','c5abd305-4bc2-4f18-a24e-7eedb23344e0','f102a9a8-5b57-4445-a47e-e6230c5b03ab'),('b143d2a8-7a0e-47aa-8c5c-102b44643704','b868c23d-8ae3-49eb-8675-6329b4e98aaf','8de1d1bb-763a-4a2e-9430-8b79daf4d389'),('b265f976-e0fa-49c7-ab54-f3e92189d455','f2b8990b-7bcb-49ec-9e24-faf83afe4e50','8de1d1bb-763a-4a2e-9430-8b79daf4d389'),('b750f455-916f-4af4-bcd2-9c7b3b0d7b1a','1fe53b77-76cd-4076-b8b9-08be762623db','4237a888-a166-47e6-aced-dbfb30ac8f4a'),('bbf47733-ceaa-498a-b31a-a0823c842b05','0fb441aa-7794-4614-9f1c-1b11cd8bf053','ca43b5da-d25e-4556-8613-ac23ab3ba709'),('c2111990-31db-469c-8f5d-e296354be8b6','b6e28341-7d0e-4bcd-a423-7b4ce17f84cb','8de1d1bb-763a-4a2e-9430-8b79daf4d389'),('c35c78fd-4e51-4bae-9842-1aa53d2d82c2','2526b05-3e67-4c23-b5ff-490fc8689834','8de1d1bb-763a-4a2e-9430-8b79daf4d389'),('c5da96de-9ce8-463d-a063-8c736dfcb9a9','bc734b20-5bc0-4797-a62a-4a8a3a1e1e93','8de1d1bb-763a-4a2e-9430-8b79daf4d389'),('cc741079-9451-4bc6-9da5-6a47e32dd3cd','03c7958b-9441-4767-b993-41446646e492','f102a9a8-5b57-4445-a47e-e6230c5b03ab'),('ccc29c06-ca62-4a5f-b457-f346dd7601e0','b2e9659a-713e-4c85-8719-9ec41fabc6ec','4237a888-a166-47e6-aced-dbfb30ac8f4a'),('d756ba11-b7ae-4d80-aac4-67267b05d32f','8173355e-0a2d-455d-9153-5165ca365e9a','8de1d1bb-763a-4a2e-9430-8b79daf4d389'),('da79f67d-8cf5-4c0a-91b8-9a97373e3273','7ddb36db-04f9-47b2-afb5-99bf4c906fd6','ca43b5da-d25e-4556-8613-ac23ab3ba709'),('de01114e-56d4-47d9-a700-397c1303008b','c587314b-ce0e-41cb-a9e1-65cdb1f08c58','ca43b5da-d25e-4556-8613-ac23ab3ba709'),('e4bbc8d5-5ac4-42bc-a6f5-7fca901fb70c','37dc46b1-3146-43fa-adf8-4137b6dbaacd','ca43b5da-d25e-4556-8613-ac23ab3ba709'),('ef6b2f62-7dcc-4c0d-8f41-da2c4539dfcb','cb1aaa58-7863-4a87-b7b0-8d921facfff0','8de1d1bb-763a-4a2e-9430-8b79daf4d389'),('fc0cf599-010c-4813-afd4-720cdcf1fbec','5c4cc48-4d83-42e8-a28a-facb0a7779cb','8de1d1bb-763a-4a2e-9430-8b79daf4d389');
/*!40000 ALTER TABLE `Product_categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Products`
--

DROP TABLE IF EXISTS `Products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Products` (
  `id` varchar(36) NOT NULL,
  `name` varchar(50) NOT NULL,
  `price` int(11) NOT NULL,
  `description` text NOT NULL,
  `image` text NOT NULL,
  `descImgI` text DEFAULT NULL,
  `descImgII` text DEFAULT NULL,
  `descImgIII` text DEFAULT NULL,
  `idCategory` varchar(36) DEFAULT NULL,
  `players` int(11) NOT NULL,
  `rating` float NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Products`
--

LOCK TABLES `Products` WRITE;
/*!40000 ALTER TABLE `Products` DISABLE KEYS */;
INSERT INTO `Products` VALUES ('03c7958b-9441-4767-b993-41446646e492','La Furia De Drácula',450,'El conde Drácula ha vivido en la no-muerte durante siglos, si no milenios. Expulsó a los Otomanos fuera de Rumania, y llegó a ser conocido como Vlad el Empalador por su brutal y sangriento modo de matar a sus enemigos. Fue testigo de la devastación que causó la Peste Negra y de las increíbles innovaciones de la Revolución Industrial. Posee una riqueza infinita, y así también de infinita es su astucia, es padre de una progenie sedienta de sangre, innumerable y esparcida por toda Europa. Él es, de lejos, el vampiro más poderoso, una leyenda. Sin embargo, cuatro valientes mortales están determinados a encontrarlo y destruirlo a toda costa, de una vez por todas.','/img/products_img/03c7958b-9441-4767-b993-41446646e492/main_image.webp','/img/products_img/03c7958b-9441-4767-b993-41446646e492/detail_image_1.webp','/img/products_img/03c7958b-9441-4767-b993-41446646e492/detail_image_2.webp','/img/products_img/03c7958b-9441-4767-b993-41446646e492/detail_image_3.webp','',5,4.5),('0fb441aa-7794-4614-9f1c-1b11cd8bf053','Clue: Adventures Of Sabrina',499,'Entra en el mundo de la exitosa serie, The Chilling Adventures of Sabrina. El padre Blackwood ha anunciado que Hilda Spellman ha sido asesinada y ella está pálida y rígida en Spellman Mortuary. Por proceso de eliminación, los jugadores descubren quién la mató, con qué arma y dónde tuvo lugar el asesinato. ¿Era Harvey Kinkle con una poción venenosa en la Academia de Artes Invistas? Tal vez fue Prudence Blackwood con un cuchillo mortuario en la sala gris de Dorian. Muévete de un lugar a otro en la ciudad de Greendale haciendo sugerencias, y reduce las posibilidades a medida que otros jugadores muestran sus cartas. Una vez que un jugador cree que ha resuelto el asesinato y hace una acusación, revisa el sobre de Spellman Mortuary para ver si tienen razón. Una acusación correcta gana el juego.','/img/products_img/0fb441aa-7794-4614-9f1c-1b11cd8bf053/main_image.webp','/img/products_img/0fb441aa-7794-4614-9f1c-1b11cd8bf053/detail_image_1.webp','/img/products_img/0fb441aa-7794-4614-9f1c-1b11cd8bf053/detail_image_2.webp','/img/products_img/0fb441aa-7794-4614-9f1c-1b11cd8bf053/detail_image_3.webp','',6,3.7),('1fe53b77-76cd-4076-b8b9-08be762623db','Japanime Juegos Naruto: Ninja Arena Juegos De Mesa',380,'Todo el mundo juega al mismo tiempo en una batalla frenética para ser el último Ninja de pie. Contiene juego de núcleo y expansión Genin Pack.','/img/products_img/1fe53b77-76cd-4076-b8b9-08be762623db/main_image.webp','/img/products_img/1fe53b77-76cd-4076-b8b9-08be762623db/detail_image_1.webp','','','',6,3.6),('242fb2a2-1db2-4d21-ac24-852b95463c51','Juego De Mesa Novelty ¿Sabes Quién Es? Harry Potte',349,'2 Piezas de plástico,2 Bases de juego, 2 Fichas con 24 personajes para elegir','/img/products_img/242fb2a2-1db2-4d21-ac24-852b95463c51/main_image.webp','/img/products_img/242fb2a2-1db2-4d21-ac24-852b95463c51/detail_image_1.webp','/img/products_img/242fb2a2-1db2-4d21-ac24-852b95463c51/detail_image_2.webp','','',4,4.5),('2526b05-3e67-4c23-b5ff-490fc8689834','Toy Story 6 En 1 Spin Master',443,'Un juego que permite jugar a toda la familia. Tablero rígido con 63 casillas con 2 peones para armar 2 equipos de 3 hasta 15 jugadores en el que avanzarán en función a la cantidad de respuestas que contesten en el lapso de 1 minuto con ayuda del reloj de arena. Este juego de trivia y mímica incluye 90 tarjetas con los pósters originales de cada una de las películas de Pixar inclusive los dos lanzamientos del 2020: Onward y Soul.','/img/products_img/62526b05-3e67-4c23-b5ff-490fc8689834/main_image.webp','/img/products_img/62526b05-3e67-4c23-b5ff-490fc8689834/detail_image_1.webp','/img/products_img/62526b05-3e67-4c23-b5ff-490fc8689834/detail_image_2.webp','/img/products_img/62526b05-3e67-4c23-b5ff-490fc8689834/detail_image_3.webp','',4,3.3),('2827412e-7c6a-427b-9062-e0273012709b','Scrabble Harry Potter',1000,'Un toque encantador en el tradicional juego de palabras, esta edición de World of Harry Potter de Scrabble pone a prueba tu conocimiento del Mundo Mago. Juega estratégicamente las palabras regulares y tus palabras favoritas de Harry Potter para obtener una puntuación alta. Personaliza tu juego con cartas de Harry Potter y cartas de bonificación mágica para anotar aún más alto y ganar el juego.','/img/products_img/2827412e-7c6a-427b-9062-e0273012709b/main_image.jpg','/img/products_img/2827412e-7c6a-427b-9062-e0273012709b/image_comple_scrabble_hp1.jpg','/img/products_img/2827412e-7c6a-427b-9062-e0273012709b/image_comple_scrabble_hp2.jpg','/img/products_img/2827412e-7c6a-427b-9062-e0273012709b/image_comple_scrabble_hp3.jpg','',4,4),('327684ac-b9ef-47ab-8142-0a2a995610e3','Monopoly Friends',550,'Prepárate para un montón de diversión con este monopolio: Juego de mesa Friends the TV Series Edition con lugares, personajes y frases inspirados en la legendaria serie de televisión. Muévete por el tablero como Ross, Rachel, Phoebe, Mónica, Joey o Chandler, y descubre momentos emblemáticos de Amigos.','/img/products_img/327684ac-b9ef-47ab-8142-0a2a995610e3/main_image.jpg','/img/products_img/327684ac-b9ef-47ab-8142-0a2a995610e3/image_comple_monopoly_friends1.jpg','/img/products_img/327684ac-b9ef-47ab-8142-0a2a995610e3/image_comple_monopoly_friends2.jpg','/img/products_img/327684ac-b9ef-47ab-8142-0a2a995610e3/image_comple_monopoly_friends3.jpg','',6,5.7),('37dc46b1-3146-43fa-adf8-4137b6dbaacd','Turista Dragon Z Ball',279,'Esta versión de Turista trae Goku y sus amigos, que te están esperando para comenzar una increíble aventura, lánzate a la aventura, enfrenta a temibles villanos y reúne todas las esferas del dragón. El Turista Dragon Ball Z es un juego de mesa asombroso que ningún seguidor de Dragon Ball Z podría perderse, perfecto para pasar una tarde disfrutando de este juego con tus amigos ¿Estás listo para la aventura?.','/img/products_img/37dc46b1-3146-43fa-adf8-4137b6dbaacd/main_image.webp','/img/products_img/37dc46b1-3146-43fa-adf8-4137b6dbaacd/detail_image_1.webp','/img/products_img/37dc46b1-3146-43fa-adf8-4137b6dbaacd/detail_image_2.webp','','',6,3.6),('5128e002-1cb9-4be0-8cee-a9ab14074a73','Monopoly Pac-Man Arcade',550,'En el Monopoly con tema de Pac-Man, los jugadores juegan Pac-Man en el arcade, que también es una unidad bancaria en la que se compran, venden o roban niveles, entre otras acciones. Los jugadores recorren el tablero mientras evitan al fantasma para comprar niveles y conseguir puntos. Cada vez que un jugador pase por la Salida, juega una minipartida de Pac-Man. Acumula puntos mientras todo queda registrado en el arcade, sin necesidad de utilizar dinero. ¡El jugador que reúna más puntos gana!','/img/products_img/5128e002-1cb9-4be0-8cee-a9ab14074a73/main_image.jpg','/img/products_img/5128e002-1cb9-4be0-8cee-a9ab14074a73/image_comple_monopoly_pacman1.jpg','/img/products_img/5128e002-1cb9-4be0-8cee-a9ab14074a73/image_comple_monopoly_pacman2.jpg','/img/products_img/5128e002-1cb9-4be0-8cee-a9ab14074a73/image_comple_monopoly_pacman3.jpg','',4,4.2),('52e8d594-6a28-4b49-90a9-b7ea322f418e','Clue Game of Thrones',890,'Clue Game of Thrones Board Game. ¿Quién es responsable de llevar acabo el asesinato, que arma fue utilizado y dónde el crimen tomar lugar?','/img/products_img/52e8d594-6a28-4b49-90a9-b7ea322f418e/main_image.webp','/img/products_img/52e8d594-6a28-4b49-90a9-b7ea322f418e/detail_image_1.webp','/img/products_img/52e8d594-6a28-4b49-90a9-b7ea322f418e/detail_image_2.webp','/img/products_img/52e8d594-6a28-4b49-90a9-b7ea322f418e/detail_image_3.webp','',6,4.8),('5c4cc48-4d83-42e8-a28a-facb0a7779cb','Avatar Juego de Mesa',319,'Introducete al mundo de Avatar y salva el árbol de los espíritus de las amenazas.','/img/products_img/55c4cc48-4d83-42e8-a28a-facb0a7779cb/main_image.webp','/img/products_img/55c4cc48-4d83-42e8-a28a-facb0a7779cb/detail_image_1.webp','','','',4,3.2),('60a4e31e-0e3a-4702-bbf9-b3a74991734c','Spinmaster Connor Reid 5 Minutos Marvel',605,'¡Un divertido y caótico juego con tus personajes favoritos de Marvel! 5 Minutos Marvel es un juego de cartas donde los jugadores tienen que cooperar entre sí, ya que tendrán cinco minutos o menos para conquistar a cada villano de Marvel.','/img/products_img/60a4e31e-0e3a-4702-bbf9-b3a74991734c/main_image.webp','/img/products_img/60a4e31e-0e3a-4702-bbf9-b3a74991734c/detail_image_1.webp','/img/products_img/60a4e31e-0e3a-4702-bbf9-b3a74991734c/detail_image_2.webp','/img/products_img/60a4e31e-0e3a-4702-bbf9-b3a74991734c/detail_image_3.webp','',5,4.6),('645ba997-b6d8-48d1-9c6b-cb1ef7da2131','Monopoly Queen',1200,'Compra, vende e intercambia tu camino por todo el mundo coleccionando lugares que Queen realizó, incluyendo Wembley Stadium, Hyde Park, The Forum Los Ángeles, y muchos más','/img/products_img/645ba997-b6d8-48d1-9c6b-cb1ef7da2131/main_image.jpg','/img/products_img/645ba997-b6d8-48d1-9c6b-cb1ef7da2131/image_comple_monopoly_queen1.jpg','/img/products_img/645ba997-b6d8-48d1-9c6b-cb1ef7da2131/image_comple_monopoly_queen2.jpg','/img/products_img/645ba997-b6d8-48d1-9c6b-cb1ef7da2131/image_comple_monopoly_queen3.jpg','',6,4.3),('6a4f9192-c190-44e8-9bdd-72dd6d17f749','Dominó Game Of Thrones',749,'Hermoso juego de domino de una de las mejores series de TV de la historia, viene en un estuche de curpiel con el logotipo de Game Of Thrones, ideal para viaje, este Domino es el mejor regalo para los coleccionistas','/img/products_img/6a4f9192-c190-44e8-9bdd-72dd6d17f749/main_image.webp','','','','',4,3),('70a67e20-ffa9-4d68-aff2-548d56f3528f','Clue It',749,'Pennywise ha vuelto y te está esperando a ti en Epicland en esta increíble versión de uno de los juegos favoritos del público: Clue. Si eres un jugador empedernido entonces tenemos algo para ti.','/img/products_img/70a67e20-ffa9-4d68-aff2-548d56f3528f/main_image.webp','/img/products_img/70a67e20-ffa9-4d68-aff2-548d56f3528f/detail_image_1.webp','/img/products_img/70a67e20-ffa9-4d68-aff2-548d56f3528f/detail_image_2.webp','/img/products_img/70a67e20-ffa9-4d68-aff2-548d56f3528f/detail_image_3.webp','',4,4.8),('71ed4278-b173-458f-8d01-94dcfa0cb9e3','Monopoly Breaking Bad',980,'Los jugadores querrán \"pisar ligeramente\" para comprar, vender y comerciar propiedades para ser el último en esta versión arriesgada de Monopoly: Breaking Bad - basado en la serie exitosa de AMC','/img/products_img/71ed4278-b173-458f-8d01-94dcfa0cb9e3/main_image.jpg','/img/products_img/71ed4278-b173-458f-8d01-94dcfa0cb9e3/image_comple_monopoly_brba1.jpg','/img/products_img/71ed4278-b173-458f-8d01-94dcfa0cb9e3/image_comple_monopoly_brba2.jpg','/img/products_img/71ed4278-b173-458f-8d01-94dcfa0cb9e3/image_comple_monopoly_brba3.jpg','',6,5),('7758e6d4-aeff-4106-9db4-6d9663f2f56a','Harry Potter: Hogwarts Battle',1598,'Las fuerzas sdel mal amenazan con invadir el castillo de Hogwarts en Harry Potter: Hogwarts Battle, un juego cooperativo de construcción de mazos, y es hasta cuatro estudiantes garantizar la seguridad de la escuela al derrotar a los villanos y consolidar sus defensas; en el juego, los jugadores asumen el papel de un estudiante de Hogwarts: Harry, Ron, Hermione o Neville, cada uno con su propio mazo de cartas personal que se utiliza para adquirir recursos.','/img/products_img/7758e6d4-aeff-4106-9db4-6d9663f2f56a/main_image.webp','/img/products_img/7758e6d4-aeff-4106-9db4-6d9663f2f56a/detail_image_1.webp','','','',4,5),('77f799ce-74fa-4c77-80e4-aa325b50f140','Ouija Stranger Things',499,'Ouija edición especial: Stranger Things','/img/products_img/77f799ce-74fa-4c77-80e4-aa325b50f140/main_image.webp','/img/products_img/77f799ce-74fa-4c77-80e4-aa325b50f140/detail_image_1.webp','/img/products_img/77f799ce-74fa-4c77-80e4-aa325b50f140/detail_image_2.webp','','',6,4.7),('7bfb6de3-2cf4-4555-b16a-6df7191b3ed9','Trivia Box Los Simpson',249,'reguntas fascinantes, desconcertantes y cautivadoras que pondrán a prueba tus conocimientos sobre la serie THE SIMPSONS. Vuélvete un experto y diviértete con familia y amigos. Las trivias fomentan la memoria, retención y el sano debate. El empaque es una caja de cartón con diseños a color que mide 13.4cm de altura x 13.4cm de ancho x 13.4cm de longitud y el producto pesa 400gr.','/img/products_img/7bfb6de3-2cf4-4555-b16a-6df7191b3ed9/main_image.webp','/img/products_img/7bfb6de3-2cf4-4555-b16a-6df7191b3ed9/detail_image_1.webp','/img/products_img/7bfb6de3-2cf4-4555-b16a-6df7191b3ed9/detail_image_2.webp','/img/products_img/7bfb6de3-2cf4-4555-b16a-6df7191b3ed9/detail_image_3.webp','',10,4.2),('7ddb36db-04f9-47b2-afb5-99bf4c906fd6','Risk Game Of Thrones Ed Deluxe',980,'Juego Risk Game of Thrones Juego de Tronos edición coleccionable. Hasbro Edición Limitada de 2 mapas y 7 ejércitos.','/img/products_img/7ddb36db-04f9-47b2-afb5-99bf4c906fd6/main_image.webp','/img/products_img/7ddb36db-04f9-47b2-afb5-99bf4c906fd6/detail_image_1.webp','/img/products_img/7ddb36db-04f9-47b2-afb5-99bf4c906fd6/detail_image_2.webp','/img/products_img/7ddb36db-04f9-47b2-afb5-99bf4c906fd6/detail_image_3.webp','',7,2),('8173355e-0a2d-455d-9153-5165ca365e9a','Jumanji Caja Madera Real',849,'Un juego para aquellos que buscan encontrar una manera de dejar su mundo atrás. Este juego familiar es realmente salvaje. Juega el juego que te persigue. Pajaritas de aventureros: no hay paciencia ni menos que la intención de terminar. Incluye: tablero de juegos, los peones, figura de Rhino, Temporizador, número de troquel, 4 dados de rescate, 30 Tarjetas de peligro, centro de mesa de juego, decodificador, hoja de etiqueta, INSTRUCCIONES completas','/img/products_img/8173355e-0a2d-455d-9153-5165ca365e9a/main_image.webp','/img/products_img/8173355e-0a2d-455d-9153-5165ca365e9a/detail_image_1.webp','/img/products_img/8173355e-0a2d-455d-9153-5165ca365e9a/detail_image_2.webp','','',4,4),('8a15b0a1-8c7c-4d75-9190-49c564d74c55','Monopoly The Child Mandalorian',850,'Imagina que viajas por la galaxia con el Niño, cariñosamente conocido como \"Bebé Yoda\". Este juego de mesa Monopoly: Star Wars cuenta con diseño y temas inspirados en la serie de televisión de acción real The Mandalorian, transmitida por Disney Plus. Recorre el tablero con el token del Niño, comprando y vendiendo escondites y casas de reunión, y sigue las instrucciones de las tarjetas de Camtono y de Puck de Recompensa.','/img/products_img/8a15b0a1-8c7c-4d75-9190-49c564d74c55/main_image.jpg','/img/products_img/8a15b0a1-8c7c-4d75-9190-49c564d74c55/image_comple_monopoly_sw1.jpg','/img/products_img/8a15b0a1-8c7c-4d75-9190-49c564d74c55/image_comple_monopoly_sw2.jpg','/img/products_img/8a15b0a1-8c7c-4d75-9190-49c564d74c55/image_comple_monopoly_sw3.jpg','',4,3.8),('8ab83d60-aa7d-4e00-8c5d-b36457bb2795','Juego de Jenga: Edición Super Mario',590,'Inspirado en los queridos videojuegos Super Mario, este juego de Jenga: Edición Super Mario te permite asaltar la torre con Mario, Luigi, Peach o Toad. Cada personaje tiene su propia tarjeta de personaje para utilizar como referencia durante el juego. Los jugadores ganan puntos y recolectan monedas mientras apilan, escalan, roban y derrotan a Bowser.','/img/products_img/8ab83d60-aa7d-4e00-8c5d-b36457bb2795/main_image.jpg','/img/products_img/8ab83d60-aa7d-4e00-8c5d-b36457bb2795/image_comple_jenga_mario1.jpg','/img/products_img/8ab83d60-aa7d-4e00-8c5d-b36457bb2795/image_comple_jenga_mario2.jpg','/img/products_img/8ab83d60-aa7d-4e00-8c5d-b36457bb2795/image_comple_jenga_mario3.jpg','',4,5),('8e74726e-6769-4157-9fa7-d79cb7713dd9','Monopoly Los Simpson',590,'Experimenta más de 30 años de episodios de Los Simpson y la emoción de hacer acuerdos, tomar riesgos y poseer todo en el Monopolio de los Simpsons.Disfruta de un juego que captura la esencia del humor, personajes y lugares únicos de Los Simpsons. 6 fichas coleccionables de peltre pintadas en oro con personajes clásicos de Simpsons - Homero como el conductor del monorraíl, Kang, Bart, Blinky, Ayudante de Santa, Jebediah Springfield. Las casas y hoteles han sido renombradas paradas de monorriel y estaciones de monorriel.','/img/products_img/8e74726e-6769-4157-9fa7-d79cb7713dd9/main_image.webp','/img/products_img/8e74726e-6769-4157-9fa7-d79cb7713dd9/detail_image_1.webp','/img/products_img/8e74726e-6769-4157-9fa7-d79cb7713dd9/detail_image_2.webp','/img/products_img/8e74726e-6769-4157-9fa7-d79cb7713dd9/detail_image_3.webp','',6,4.6),('90b78941-326d-43bd-aa2c-37ab5895dcd8','Monopoly Pixar',550,'Los fans pueden explorar lugares de algunas películas favoritas como Disney y Pixar Up, The Incredibles, Toy Story, Buscando a Nemo y más. El juego cuenta con ilustraciones de personajes caprichosos y fichas de Monopoly, incluyendo la guitarra de Hector de Coco, el Boot de Wall-E, la Casa de Carl de Up, el camión Pizza Planet de Toy Story, y el icónico Pixar Ball y Lamp','/img/products_img/90b78941-326d-43bd-aa2c-37ab5895dcd8/main_image.jpg','/img/products_img/90b78941-326d-43bd-aa2c-37ab5895dcd8/image_comple_monopoly_pixar1.jpg','/img/products_img/90b78941-326d-43bd-aa2c-37ab5895dcd8/image_comple_monopoly_pixar2.jpg','/img/products_img/90b78941-326d-43bd-aa2c-37ab5895dcd8/image_comple_monopoly_pixar3.jpg','',6,5),('a1cc394e-87aa-4741-ae60-457a66f1ae87','Friends La Rueda Del Caos',247,'Basado en un episodio de la aclamada serie Friends, este divertido juego en palabras de Joey consiste en Gira la Rueda del Caos para subir la Escalera de la Oportunidad; pasas la Choza de Lodo, atraviesas el Anillo del Arco Iris para llegar al Mono Dorado, le sacas la cola y la pluma. Incluye: 1 tablero de juego, 1 rueda LED, 150 cartas, 6 fichas de movimiento, 58 fichas de puntos, 1 hoja de instrucciones.','/img/products_img/a1cc394e-87aa-4741-ae60-457a66f1ae87/main_image.webp','/img/products_img/a1cc394e-87aa-4741-ae60-457a66f1ae87/detail_image_1.webp','/img/products_img/a1cc394e-87aa-4741-ae60-457a66f1ae87/detail_image_2.webp','/img/products_img/a1cc394e-87aa-4741-ae60-457a66f1ae87/detail_image_3.webp','',6,3.4),('a4996729-71ab-45bc-9ec3-a182d36ec70e','Viajes Por La Tierra Media',450,'Embárcate en tu propia Aventura en el mundo del Señor de los anillos; explora los vastos y dinámicos paisajes de la Tierra Media, usando tus habilidades para sobrevivir a los desafíos, peligrosas misiones y lucha contra las fuerzas oscuras; Puedes escribir tu propia leyenda en la historia de la Tierra Media.','/img/products_img/a4996729-71ab-45bc-9ec3-a182d36ec70e/main_image.webp','/img/products_img/a4996729-71ab-45bc-9ec3-a182d36ec70e/detail_image_1.webp','/img/products_img/a4996729-71ab-45bc-9ec3-a182d36ec70e/detail_image_2.webp','','',5,3.2),('a608e133-7f7b-4b29-83a4-e96b8281db50','Star Wars Imperio Vs Rebelión',689,'En Star Wars: Imperio vs. Rebelión los jugadores controlan los agentes y naves estelares de la Guerra Civil Galáctica. Reclutando para su causa a héroes como Luke Skywalker, Leia Organa y Darth Vader, cada bando deberá decidir su estrategia y superar en astucia a su oponente en los momentos cruciales del conflicto. ¡El destino de la galaxia está en tus manos! Un juego de cartas de aproximadamente 60 minutos de duración y exclusivo para 2 jugadores.','/img/products_img/a608e133-7f7b-4b29-83a4-e96b8281db50/main_image.webp','/img/products_img/a608e133-7f7b-4b29-83a4-e96b8281db50/detail_image_1.webp','/img/products_img/a608e133-7f7b-4b29-83a4-e96b8281db50/detail_image_2.webp','','',2,4.3),('a8fd781a-ceb8-4eda-9fcc-7a1b43da5f07','Ajedrez El Señor De Los Anillos',1050,'Domina las fuerzas del bien, dirigidas por Galadriel, Aragorn, Frodo y Gandalf el Gris, o maneja las fuerzas del mal, incluyendo Gollum, el Nazgûl, Saruman, y el Señor Oscuro Sauron. La épica batalla del bien y el mal juega con este intrincadamente detallado juego de ajedrez. Incluye 32 piezas finamente esculpidas y tablero de ajedrez gráfico completo. Las piezas de ajedrez miden de 5 a 3.9 in. El tablero de juego es de 18.5 x 18.5 in.','/img/products_img/a8fd781a-ceb8-4eda-9fcc-7a1b43da5f07/main_image.webp','/img/products_img/a8fd781a-ceb8-4eda-9fcc-7a1b43da5f07/detail_image_1.webp','/img/products_img/a8fd781a-ceb8-4eda-9fcc-7a1b43da5f07/detail_image_2.webp','/img/products_img/a8fd781a-ceb8-4eda-9fcc-7a1b43da5f07/detail_image_3.webp','',2,4.8),('b2e9659a-713e-4c85-8719-9ec41fabc6ec','Juego De Mesa Monopoly Sailor Moon',380,'Sailor Moon y sus amigos adornan las piezas del tradicional juego Monopoly. Gana este clásico juego de estrategia con el poder de Pretty Soldiers. Los colores rosa y pastel crean una vibrante tabla de juegos para satisfacer la paleta de colores de los fans de Sailor Moon. Incluye tokens personalizados con acabado de rosa con corazón cósmico compacto, cáliz de luna, varilla de luna en espiral, orbe de granate, espejo de agua profunda y espada espacial.','/img/products_img/b2e9659a-713e-4c85-8719-9ec41fabc6ec/main_image.webp','/img/products_img/b2e9659a-713e-4c85-8719-9ec41fabc6ec/detail_image_1.webp','/img/products_img/b2e9659a-713e-4c85-8719-9ec41fabc6ec/detail_image_2.webp','/img/products_img/b2e9659a-713e-4c85-8719-9ec41fabc6ec/detail_image_3.webp','',6,4.5),('b6e28341-7d0e-4bcd-a423-7b4ce17f84cb','Turista Marvel Universo De Super Heroes',499,'Contiene y tablero de cartón con 24 casillas de súper héroes que puedes comprar, 2 casillas POW donde se pelearan las batallas más épicas con 24 tarjetas Pow para que el reto sea variado y divertido. También contiene 20 tarjetas con poder recargado y las 6 fabulosas gemas del infinito que podrás utilizar para obtener los poderes del universo. 2 Dados, Billetes De Juguete Y 6 Increíbles Peones Que Se Moverán Durante El Juego Entre Las Casilla','/img/products_img/b6e28341-7d0e-4bcd-a423-7b4ce17f84cb/main_image.webp','/img/products_img/b6e28341-7d0e-4bcd-a423-7b4ce17f84cb/detail_image_1.webp','','','',6,4.3),('b868c23d-8ae3-49eb-8675-6329b4e98aaf','El Padrino Imperio Corleone',2000,'En El Padrino: El imperio Corleone, los jugadores controlan familias que compiten por el predominio en la Nueva York de la década de 1950. Manda por toda la ciudad al Don, el Consigliere, el Heredero y los Gánsteres de tu familia para que coaccionen a los negocios y consigan así los recursos ilegales que necesitas. Toma el control de los diferentes territorios y cosecha los frutos que te ofrecen. Soborna a funcionarios municipales a fin de usarlos como poderosos aliados temporales. Haz trabajos para Don Corleone y ponte por delante de tus oponentes','/img/products_img/b868c23d-8ae3-49eb-8675-6329b4e98aaf/main_image.webp','/img/products_img/b868c23d-8ae3-49eb-8675-6329b4e98aaf/detail_image_1.webp','/img/products_img/b868c23d-8ae3-49eb-8675-6329b4e98aaf/detail_image_2.webp','/img/products_img/b868c23d-8ae3-49eb-8675-6329b4e98aaf/detail_image_3.webp','',5,4.2),('bc734b20-5bc0-4797-a62a-4a8a3a1e1e93','Operando Star War Chewbacca',850,'Imagina a Chewbacca tratando de descansar en la bahía médica en el Halcón Milenario después de un tiempo estresante reparando el hipermotor. De repente, los Porgs comienzan a jugar en su cabello, causando todo tipo de travesuras. Los jugadores usan las pinzas para atrapar a estos bichos molestos y eliminar cualquier otro peligro para el cabello que puedan encontrar. ¡Pero ten cuidado! Tocar los lados de las aberturas con las pinzas apagará el timbre y luego será el turno del siguiente jugador.','/img/products_img/bc734b20-5bc0-4797-a62a-4a8a3a1e1e93/main_image.jpg','/img/products_img/bc734b20-5bc0-4797-a62a-4a8a3a1e1e93/image_comple_operando_sw1.jpg','/img/products_img/bc734b20-5bc0-4797-a62a-4a8a3a1e1e93/image_comple_operando_sw2.jpg','/img/products_img/bc734b20-5bc0-4797-a62a-4a8a3a1e1e93/image_comple_operando_sw3.jpg','',1,3.5),('c587314b-ce0e-41cb-a9e1-65cdb1f08c58','UNO Edición Anime',375,'Juego de cartas Uno, Dragón Ball, Demon Slayer, Naruto y One Piece.','/img/products_img/c587314b-ce0e-41cb-a9e1-65cdb1f08c58/main_image.webp','/img/products_img/c587314b-ce0e-41cb-a9e1-65cdb1f08c58/detail_image_1.webp','/img/products_img/c587314b-ce0e-41cb-a9e1-65cdb1f08c58/detail_image_2.webp','/img/products_img/c587314b-ce0e-41cb-a9e1-65cdb1f08c58/detail_image_3.webp','',4,3.8),('c5abd305-4bc2-4f18-a24e-7eedb23344e0','Holmes Sherlock And Mycroft',449,'La madrugada del 24 de febrero de 1895 una bomba estalla en el Parlamento de Londres. Al instante, las medidas de seguridad se activan y detienen al joven Michael Chapman, un obrero al que se relaciona con grupos anarquistas. Mycroft Holmes, al servicio de la Corona, es el encargado de investigar dicha relación para resolver si ha sido un caso aislado o un plan orquestado. Y todo parece fácil de resolver hasta que se entera que su hermano, el detective consultor Sherlock Holmes, ha sido contratado por los padres del joven que creen en la inocencia de su hijo.','/img/products_img/c5abd305-4bc2-4f18-a24e-7eedb23344e0/main_image.webp','/img/products_img/c5abd305-4bc2-4f18-a24e-7eedb23344e0/detail_image_1.webp','/img/products_img/c5abd305-4bc2-4f18-a24e-7eedb23344e0/detail_image_2.webp','','',2,3.4),('cb1aaa58-7863-4a87-b7b0-8d921facfff0','GameBoy SP',2100,'Consola de videojuegos portatil','/img/products_img/cb1aaa58-7863-4a87-b7b0-8d921facfff0/main_image.jpg','/img/products_img/cb1aaa58-7863-4a87-b7b0-8d921facfff0/image_comple_1.jpg','/img/products_img/cb1aaa58-7863-4a87-b7b0-8d921facfff0/image_comple_2.jpeg','/img/products_img/cb1aaa58-7863-4a87-b7b0-8d921facfff0/image_comple_3.jpg','',1,5),('d0cb5d9e-bf0c-4c1b-a445-8541df993440','Monopoly Jurassic Park',1000,'Retoma el control de los recintos de los dinosaurios y otras áreas, pero ten cuidado con el tiranosaurio; ¡no obedece ninguna regla! Construye vayas para proteger a los recintos de los ataques y gana dinero al cobrar renta, pero prepárate para las propiedades dañadas. Activa la puerta para oír el tema musical de la película Jurassic Park o un rugido de dinosaurio, lo cual determinará cuánto dinero recibirás. El último jugador con dinero cuando los demás se hayan ido a la quiebra será el ganador. El juego también termina si el tiranosaurio daña todas las propiedades antes que estas puedan ser protegidas por vayas o reparadas.','/img/products_img/d0cb5d9e-bf0c-4c1b-a445-8541df993440/main_image.jpg','/img/products_img/d0cb5d9e-bf0c-4c1b-a445-8541df993440/image_comple_monopoly_jurassic1.jpg','/img/products_img/d0cb5d9e-bf0c-4c1b-a445-8541df993440/image_comple_monopoly_jurassic2.jpg','/img/products_img/d0cb5d9e-bf0c-4c1b-a445-8541df993440/image_comple_monopoly_jurassic3.jpg','',6,5),('d21754bc-b793-4c21-ab75-3261c5a6833a','Ajedrez Rick and Morty',1500,'Es la versión interdimensional del clásico juego de estrategia para dos jugadores, inspirado en Rick and Morty de Cartoon Network Incluye 32 piezas de vinilo de plástico esculpidas a todo color, personalizadas de favoritos de los fans en versiones buenas contra malvadas: Rick y Morty como Rey y Reina, Summer y Beth como obispos posapocalípticos y mitólogos, el Sr. Meeseeks como peones y más.','/img/products_img/d21754bc-b793-4c21-ab75-3261c5a6833a/main_image.jpg','/img/products_img/d21754bc-b793-4c21-ab75-3261c5a6833a/image_comple_Ajedrez_RyM1.jpg','/img/products_img/d21754bc-b793-4c21-ab75-3261c5a6833a/image_comple_Ajedrez_RyM2.jpg','/img/products_img/d21754bc-b793-4c21-ab75-3261c5a6833a/image_comple_Ajedrez_RyM3.jpg','',2,4.7),('da69c7a9-ed5c-4ce2-b649-91963f005a3b','Clue Harry Potter',850,'En este juego Harry Potter Edition of the Clue, un estudiante ha desaparecido de la Escuela Hogwarts de brujería y magia. ¿Quién puede resolver la desaparición misteriosa? Los niños juegan como Harry, Ron, Hermione, Ginny, Luna o Neville, y tratan de descubrir quién lo hizo, qué hechizo o objeto se utilizó y dónde ocurrió el ataque.','/img/products_img/da69c7a9-ed5c-4ce2-b649-91963f005a3b/main_image.jpg','/img/products_img/da69c7a9-ed5c-4ce2-b649-91963f005a3b/image_comple_clue_hp1.jpg','/img/products_img/da69c7a9-ed5c-4ce2-b649-91963f005a3b/image_comple_clue_hp2.jpg','/img/products_img/da69c7a9-ed5c-4ce2-b649-91963f005a3b/image_comple_clue_hp3.jpg','',5,5),('dec1636e-1f5f-499b-8ce0-b7faaa6ebf39','Juego De Cartas Disney Pesadilla Antes De Navidad',344,'Juega cartas de personajes numeradas y de colores para hacer series y carreras. ¡Obtén un set para enganchar el poder especial de la figura del personaje que te ayuda a ganar! Combina varios juegos para agregar más cartas de personajes, más Pop figuras y más poderes para tu juego.','/img/products_img/dec1636e-1f5f-499b-8ce0-b7faaa6ebf39/main_image.webp','/img/products_img/dec1636e-1f5f-499b-8ce0-b7faaa6ebf39/detail_image_1.webp','/img/products_img/dec1636e-1f5f-499b-8ce0-b7faaa6ebf39/detail_image_2.webp','/img/products_img/dec1636e-1f5f-499b-8ce0-b7faaa6ebf39/detail_image_3.webp','',5,3),('ef61f214-a5a9-4d7f-859d-c3816d200329','Marvel Super Heroes Juego De Memoria',499,'Incluye 72 tarjetas (36 pares)','/img/products_img/ef61f214-a5a9-4d7f-859d-c3816d200329/main_image.webp','/img/products_img/ef61f214-a5a9-4d7f-859d-c3816d200329/detail_image_1.webp','/img/products_img/ef61f214-a5a9-4d7f-859d-c3816d200329/detail_image_2.webp','/img/products_img/ef61f214-a5a9-4d7f-859d-c3816d200329/detail_image_3.webp','',4,3.5),('f2b8990b-7bcb-49ec-9e24-faf83afe4e50','Monopoly Señor De Los Anillos Edicion Especial Col',1290,'Proteja las tierras de la Tierra Media de los ejércitos de Mordor con este juego de Monopolio inspirado en la trilogía de película El Señor de los Anillos. ANILLO DE PODER: Controla el Anillo y obtén poderes especiales, pero ten cuidado. Cuanto más tiempo tenga un jugador el anillo, más peligroso se vuelve. Hacer rodar el ojo de Sauron puede hacer que alguien pague un alto precio. MIEMBROS DE LAS TÓKENAS DE CARACTERÍSTICAS DE FELLOWSHIP: Juega como Frodo, Gandalf, Sam, Aragorn, Legolas, Gimli, Pippin, Merry o Boromir. CAMINO PARA MONTAR DOOM: El jugador que tiene el anillo también mueve un Ring Tracker a lo largo de una línea de círculos en el tablero de juegos hacia Mount Doom. Pierde o regala el anillo y el rastreador vuelve a Iniciar.','/img/products_img/f2b8990b-7bcb-49ec-9e24-faf83afe4e50/main_image.webp','/img/products_img/f2b8990b-7bcb-49ec-9e24-faf83afe4e50/detail_image_1.webp','/img/products_img/f2b8990b-7bcb-49ec-9e24-faf83afe4e50/detail_image_2.webp','/img/products_img/f2b8990b-7bcb-49ec-9e24-faf83afe4e50/detail_image_3.webp','',6,4.9);
/*!40000 ALTER TABLE `Products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Purchase`
--

DROP TABLE IF EXISTS `Purchase`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Purchase` (
  `id` varchar(36) NOT NULL,
  `userId` varchar(36) NOT NULL,
  `total_price` int(11) NOT NULL,
  `tracking_number` int(11) NOT NULL,
  `shipping_address` text DEFAULT NULL,
  `order_date` datetime NOT NULL,
  `order_status` enum('PENDIENTE','ENVIADO','ENTREGADO','CANCELADO') DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `purchase_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `User` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Purchase`
--

LOCK TABLES `Purchase` WRITE;
/*!40000 ALTER TABLE `Purchase` DISABLE KEYS */;
/*!40000 ALTER TABLE `Purchase` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Purchase_Details`
--

DROP TABLE IF EXISTS `Purchase_Details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Purchase_Details` (
  `id` varchar(36) NOT NULL,
  `purchase_id` varchar(36) NOT NULL,
  `product_id` varchar(36) NOT NULL,
  `price` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `product_id` (`product_id`),
  KEY `purchase_id` (`purchase_id`),
  CONSTRAINT `purchase_details_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `Products` (`id`),
  CONSTRAINT `purchase_details_ibfk_2` FOREIGN KEY (`purchase_id`) REFERENCES `Purchase` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Purchase_Details`
--

LOCK TABLES `Purchase_Details` WRITE;
/*!40000 ALTER TABLE `Purchase_Details` DISABLE KEYS */;
/*!40000 ALTER TABLE `Purchase_Details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Reviews`
--

DROP TABLE IF EXISTS `Reviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Reviews` (
  `id` varchar(36) NOT NULL,
  `title` varchar(50) DEFAULT NULL,
  `rating` float NOT NULL,
  `review` text DEFAULT NULL,
  `product_id` varchar(36) DEFAULT NULL,
  `userId` varchar(36) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `product_id` (`product_id`),
  KEY `userId` (`userId`),
  CONSTRAINT `reviews_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `Products` (`id`),
  CONSTRAINT `reviews_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `User` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Reviews`
--

LOCK TABLES `Reviews` WRITE;
/*!40000 ALTER TABLE `Reviews` DISABLE KEYS */;
/*!40000 ALTER TABLE `Reviews` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `User`
--

DROP TABLE IF EXISTS `User`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `User` (
  `id` varchar(36) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `image` text NOT NULL,
  `role` tinyint(1) DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `User`
--

LOCK TABLES `User` WRITE;
/*!40000 ALTER TABLE `User` DISABLE KEYS */;
INSERT INTO `User` VALUES ('30a492a4-853f-4b49-aaff-68f1af3f8b83','samarazg20@gmail.com','$2a$12$5beBSXvGy/lcyS9H3z8xFuJvMVweeHYADgtGdMkBr4SBWR.XcdpqW','Samara','Zarco Goytortúa','/img/profile_images/30a492a4-853f-4b49-aaff-68f1af3f8b83/perfil_30a492a4-853f-4b49-aaff-68f1af3f8b83',0),('30c34cfc-8f50-46b1-82b0-a6c976233e99','josefa2@gmail.com','a123','Jose','Ramirez','/img/profile_images/322d5f14-eea0-440e-bc5a-f49e062ba718/perfil_322d5f14-eea0-440e-bc5a-f49e062ba718',1),('36d3ecc7-cbc5-4584-8de2-1f8c4fc6e1b3','hradbourne4@technorati.com','VbTZjT','Hyatt','Radbourne','/img/profile_images/36d3ecc7-cbc5-4584-8de2-1f8c4fc6e1b3/perfil_36d3ecc7-cbc5-4584-8de2-1f8c4fc6e1b3',1),('438fccef-2dc2-440e-b6ad-ac156fbf95f5','dfills8@dailymotion.com','9YOhzcw4FGF','Darrick','Fills','/img/profile_images/438fccef-2dc2-440e-b6ad-ac156fbf95f5/perfil_438fccef-2dc2-440e-b6ad-ac156fbf95f5',1),('49ae6b05-f779-4aa7-8eed-89678f8276dd','gkobpal9@multiply.com','i60Y0XLo','Gabe','Kobpal','/img/profile_images/49ae6b05-f779-4aa7-8eed-89678f8276dd/perfil_49ae6b05-f779-4aa7-8eed-89678f8276dd',1),('5ac4a3b5-924b-4fee-85a5-15236d6ccfe4','elisa.gomezhdz@hotmail.com','$2a$12$Y2kDJKRNXzSARPLXeuSgMOl8MMMzgHSTsz91XBxr8rArU.ZsxrLHu','Silvia Elisa','Gómez Hernández','/img/profile_images/5ac4a3b5-924b-4fee-85a5-15236d6ccfe4/perfil_5ac4a3b5-924b-4fee-85a5-15236d6ccfe4',0),('6c38a916-d325-4a11-98bb-665a32a01d1b','fernandorodriguez236@gmail.com','$2a$12$SSoyt1/ER8dy7u0EtHrMmO3YaJ9z89fwiEhtcCJqTeapU8xZnwY7S','Luis Fernando','Rodriguez Hernandez','/img/profile_images/6c38a916-d325-4a11-98bb-665a32a01d1b/perfil_6c38a916-d325-4a11-98bb-665a32a01d1b',0),('84060b73-6ce7-49bf-81ec-dff021e4c3e6','elon@gmail.com','$2a$12$ZM3qMWar3cf92zw6.Aw30upJX18FdfsNjJ6P.6AXIOcBvN4Z0wFXO','Elon','Musk','/img/profile_images/84060b73-6ce7-49bf-81ec-dff021e4c3e6/perfil_84060b73-6ce7-49bf-81ec-dff021e4c3e6',1),('9436caf2-be67-44c6-a99d-ddcc9b76d2b3','jdragge6@wikipedia.org','FpJdkXanpgqe','Jamison','Dragge','/img/profile_images/9436caf2-be67-44c6-a99d-ddcc9b76d2b3/perfil_9436caf2-be67-44c6-a99d-ddcc9b76d2b3',1),('bfa16bd2-980b-4828-8c7d-4f7030d0b297','usabater3@blog.com','8Q0MlqL0O','Ulrikaumeko','Sabater','/img/profile_images/bfa16bd2-980b-4828-8c7d-4f7030d0b297/perfil_bfa16bd2-980b-4828-8c7d-4f7030d0b297',1),('c28cc930-2529-4c71-af8f-32402fa6adfe','sshillinglaw5@globo.com','O0mailR','Serge','Shillinglaw','/img/profile_images/c28cc930-2529-4c71-af8f-32402fa6adfe/perfil_c28cc930-2529-4c71-af8f-32402fa6adfe',1),('cdfde71f-05c1-47bc-9f3c-6fcd298a849a','fdrew7@mac.com','HakM9t','Freemon','Drew','/img/profile_images/cdfde71f-05c1-47bc-9f3c-6fcd298a849a/perfil_cdfde71f-05c1-47bc-9f3c-6fcd298a849a',1);
/*!40000 ALTER TABLE `User` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-01 23:27:28
