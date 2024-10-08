-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: gamebase_db
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `gebruikergamedata`
--

DROP TABLE IF EXISTS `gebruikergamedata`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gebruikergamedata` (
  `idGebruikerGame` int NOT NULL AUTO_INCREMENT,
  `fkGebruiker` int NOT NULL,
  `fkGame` int NOT NULL,
  `Status` int NOT NULL,
  `AantalUren` int DEFAULT NULL,
  `AantalPrestaties` int DEFAULT NULL,
  `EigenBeoordeling` int DEFAULT NULL,
  `DatumToegevoegd` datetime NOT NULL,
  UNIQUE KEY `idGebruikerGame_UNIQUE` (`idGebruikerGame`),
  KEY `fkGebruiker` (`fkGebruiker`),
  KEY `fkGame` (`fkGame`),
  CONSTRAINT `gebruikergamedata_ibfk_1` FOREIGN KEY (`fkGebruiker`) REFERENCES `gebruiker` (`idGebruiker`),
  CONSTRAINT `gebruikergamedata_ibfk_2` FOREIGN KEY (`fkGame`) REFERENCES `game` (`idGame`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gebruikergamedata`
--

LOCK TABLES `gebruikergamedata` WRITE;
/*!40000 ALTER TABLE `gebruikergamedata` DISABLE KEYS */;
INSERT INTO `gebruikergamedata` VALUES (1,1,2,0,NULL,NULL,NULL,'2022-01-01 00:00:00');
/*!40000 ALTER TABLE `gebruikergamedata` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-08 22:12:23
