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
-- Table structure for table `gebruiker`
--

DROP TABLE IF EXISTS `gebruiker`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gebruiker` (
  `idGebruiker` int NOT NULL AUTO_INCREMENT,
  `Gebruikersnaam` varchar(20) NOT NULL,
  `Wachtwoord` varchar(45) NOT NULL,
  `Naam` varchar(45) NOT NULL,
  `Beschrijving` varchar(1000) DEFAULT NULL,
  `SteamLink` varchar(100) DEFAULT NULL,
  `EpicGamesLink` varchar(100) DEFAULT NULL,
  `GOGLink` varchar(100) DEFAULT NULL,
  `OriginLink` varchar(100) DEFAULT NULL,
  `BattleNetLink` varchar(100) DEFAULT NULL,
  `YoutubeLink` varchar(100) DEFAULT NULL,
  `DiscordId` varchar(100) DEFAULT NULL,
  `OverigeLink` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`idGebruiker`),
  UNIQUE KEY `idGebruiker_UNIQUE` (`idGebruiker`),
  UNIQUE KEY `Gebruikersnaam_UNIQUE` (`Gebruikersnaam`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gebruiker`
--

LOCK TABLES `gebruiker` WRITE;
/*!40000 ALTER TABLE `gebruiker` DISABLE KEYS */;
INSERT INTO `gebruiker` VALUES (1,'hugoli','B0310*-+','Hugo','Gamebase CEO','https://www.steam.com/users/12345','','','','','','hugo#0001','https://www.google.com/'),(21,'admin','admin','Admin','Gamebase Administrator Account',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(22,'king','123','Gram','Maximus',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(23,'lenmertens','paardenpenis','Len',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(24,'quinten1508_YT','123','Quinten','test test',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(25,'john_gamer','password123','John Smith','Casual gamer who loves RPGs.','https://steamcommunity.com/id/john_gamer','john_epic','john_gog','john_origin','john_battlenet','https://www.youtube.com/user/john_gamer','john#1234','https://example.com/john_gamer'),(26,'sarah_player','pass123','Sarah Johnson','Competitive gamer specializing in FPS.','https://steamcommunity.com/id/sarah_player','','','','','https://www.youtube.com/user/sarah_player','sarah#5678',''),(27,'gaming_master','gamer123','Alex Turner','Experienced gamer with a wide genre preference.','https://steamcommunity.com/id/gaming_master','alex_epic','alex_gog','alex_origin','alex_battlenet','','gaming_master#9012',''),(28,'laura_gaming','laura321','Laura Davis','Indie game enthusiast and content creator.','','laura_epic','','','','https://www.youtube.com/user/laura_gaming','laura#2468','https://example.com/laura_gaming'),(29,'maxx_gamer','maxpass','Max Williams','Hardcore gamer seeking new challenges.','https://steamcommunity.com/id/maxx_gamer','maxx_epic','maxx_gog','','','https://www.youtube.com/user/maxx_gamer','',''),(30,'jessie_gamer','jessiepass','Jessie Brown','Casual gamer who loves open-world exploration.','','','jessie_gog','jessie_origin','','https://www.youtube.com/user/jessie_gamer','',''),(31,'ryan_player','ryan456','Ryan Thompson','Casual gamer and fan of puzzle games.','','ryan_epic','','','','','',''),(32,'gamer_girl','girlgamer','Emily Rodriguez','Passionate gamer and Twitch streamer.','https://steamcommunity.com/id/gamer_girl','','gamer_gog','','gamer_battlenet','https://www.youtube.com/user/gamer_girl','gamer_girl#7890',''),(33,'nick_gaming','nickpass','Nick Evans','Console gamer who enjoys action-adventure titles.','','','','','nick_battlenet','','nick#4321',''),(34,'lily_gamer','lily123','Lily Thompson','Retro game collector and speedrunner.','','','lily_gog','','','https://www.youtube.com/user/lily_gamer','lily#9876',''),(35,'game_addict','addicted','David Baker','Obsessed gamer who plays day and night.','','david_epic','david_gog','','david_battlenet','https://www.youtube.com/user/game_addict','game_addict#6543',''),(36,'CaptainRogue','s3cr3tP@ss','John Doe','Avid gamer who loves exploring new worlds and challenging quests.','https://steamcommunity.com/id/captainrogue','CaptainRogueEG','CaptainRogueGOG','CaptainRogueOrigin','CaptainRogueBN','','','https://example.com'),(37,'PixelMaster','G@m3rPass123','Emily Smith','Passionate gamer with a knack for pixel art and retro-style games.','https://steamcommunity.com/id/pixelmaster','PixelMasterEG','PixelMasterGOG','','','https://www.youtube.com/c/PixelMasterPlays','',''),(38,'StealthGamer','N1nj4@ssass1n','Sarah Johnson','Stealthy player who enjoys sneaking through shadows and outsmarting opponents.','https://steamcommunity.com/id/stealthgamer','StealthGamerEG','','StealthGamerOrigin','StealthGamerBN','https://www.youtube.com/c/StealthGaming','StealthGamer#2468','https://example.com'),(39,'Wanderlust','Adventurer123','Michael Anderson','Explorer at heart who embarks on virtual adventures to discover hidden treasures.','','','WanderlustGOG','WanderlustOrigin','WanderlustBN','','Wanderlust#1357','https://example.com');
/*!40000 ALTER TABLE `gebruiker` ENABLE KEYS */;
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
