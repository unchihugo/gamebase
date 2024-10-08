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
-- Table structure for table `game`
--

DROP TABLE IF EXISTS `game`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `game` (
  `idGame` int NOT NULL AUTO_INCREMENT,
  `Naam` varchar(100) NOT NULL,
  `Genre` varchar(20) NOT NULL,
  `SubGenres` varchar(100) DEFAULT NULL,
  `Prijs` double NOT NULL,
  `Beoordeling` int DEFAULT NULL,
  `PublicatieDatum` datetime NOT NULL,
  `Online` tinyint NOT NULL,
  `Story` tinyint NOT NULL,
  `Platforms` varchar(100) NOT NULL,
  `Developer` varchar(100) NOT NULL,
  `Publisher` varchar(100) NOT NULL,
  `Link` varchar(200) NOT NULL,
  `CoverLink` varchar(200) NOT NULL,
  `fkGebruiker` int DEFAULT NULL,
  PRIMARY KEY (`idGame`),
  UNIQUE KEY `idgame_UNIQUE` (`idGame`),
  KEY `fkGebruiker` (`fkGebruiker`),
  CONSTRAINT `game_ibfk_1` FOREIGN KEY (`fkGebruiker`) REFERENCES `gebruiker` (`idGebruiker`)
) ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `game`
--

LOCK TABLES `game` WRITE;
/*!40000 ALTER TABLE `game` DISABLE KEYS */;
INSERT INTO `game` VALUES (1,'Minecraft','Adventure','Survival, Action adventure, Sandbox',26.95,93,'2011-11-18 00:00:00',1,1,'PC Playstation Xbox Mobile VR','Mojang Studios','Microsoft Corporation','https://www.minecraft.net/','https://upload.wikimedia.org/wikinews/en/7/7a/Minecraft_game_cover.jpeg',NULL),(2,'Counter Strike: Global Offensive','Shooter','Action, Tactical shooter',0,83,'2012-08-21 00:00:00',1,0,'PC Playstation Xbox','Valve','Valve','https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/','https://upload.wikimedia.org/wikipedia/en/6/6e/CSGOcoverMarch2020.jpg',NULL),(3,'Grand Theft Auto V','Adventure','Shooter, Action, Comedy, Open world',29.99,96,'2013-09-17 00:00:00',1,1,'PC Playstation Xbox','Rockstar Games','Take-Two Interactive','https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/','https://media.rockstargames.com/rockstargames/img/global/news/upload/actual_1364906194.jpg',NULL),(4,'Dota 2','MOBA','Strategy, Action, Fantasy',0,90,'2013-07-09 00:00:00',1,0,'PC','Valve','Valve','https://store.steampowered.com/app/570/Dota_2/','https://www.futuregamereleases.com/wp-content/uploads/2017/08/Dota-2-New-Twitch-Cover.jpg',NULL),(5,'PlayerUnknown\'s Battlegrounds','Action','Battle royale, Shooter',0,86,'2017-03-23 00:00:00',1,0,'PC Playstation Xbox Mobile','PUBG Corporation','Bluehole, Inc.','https://store.steampowered.com/app/578080/PUBG_BATTLEGROUNDS/','https://impdb.org/images/a/a9/PUBG_Cover.jpg',NULL),(6,'Fortnite','Shooter','Battle royale, Action, Sandbox',0,81,'2017-06-25 00:00:00',1,1,'PC Playstation Xbox Mobile','Epic Games','Epic Games','https://www.fortnite.com/','https://www.gamevideos.nl/storage/1491/fortnite.jpg',NULL),(7,'Apex Legends','Shooter','Action, Battle royale',0,88,'2019-02-04 00:00:00',1,0,'PC Playstation Xbox Mobile','Respawn Entertainment','Electronic Arts','https://store.steampowered.com/app/1172470/Apex_Legends/','https://upload.wikimedia.org/wikipedia/en/thumb/d/db/Apex_legends_cover.jpg/220px-Apex_legends_cover.jpg',NULL),(8,'League of Legends','MOBA','Strategy, Action',0,78,'2009-10-27 00:00:00',1,0,'PC','Riot Games','Riot Games','https://leagueoflegends.com/','https://picfiles.alphacoders.com/544/thumb-544154.jpg',NULL),(9,'Team Fortress 2','Shooter','Action',0,92,'2007-10-10 00:00:00',1,0,'PC Playstation Xbox','Valve','Valve','https://store.steampowered.com/app/440/Team_Fortress_2/','https://upload.wikimedia.org/wikipedia/en/thumb/5/5f/Tf2_standalonebox.jpg/220px-Tf2_standalonebox.jpg',NULL),(10,'Red Dead Redemption 2','Adventure','Action, Open world',59.99,97,'2018-10-26 00:00:00',1,1,'PC Playstation Xbox','Rockstar Games','Rockstar Games','https://store.steampowered.com/app/1174180/Red_Dead_Redemption_2/','https://upload.wikimedia.org/wikipedia/en/4/44/Red_Dead_Redemption_II.jpg',NULL),(11,'War Thunder','Action','Simulator, War, Vehicular combat',0,81,'2013-08-15 00:00:00',1,0,'PC Playstation Xbox VR','Gaijin Entertainment','Gaijin Distribution KFT','https://store.steampowered.com/app/236390/War_Thunder/','https://upload.wikimedia.org/wikipedia/en/2/25/War_Thunder_PSN_Cover_Art_2015_Playstation_4.png',NULL),(12,'adminGame','sdan','sdknsd',10,5,'2023-04-12 00:00:00',0,0,'PC VR','dfmb','dbcjs','sdnj','ksajcn',21),(13,'Call of Duty Mobile','Shooter','Action, FPS, Battle royale',0,81,'2019-09-30 00:00:00',1,0,'Mobile','TIMI Studios','Activision','https://www.callofduty.com/mobile','https://cdn.wallpapersafari.com/70/9/T0JDMt.jpg',NULL),(14,'Among Us','Action','Survival',4.99,85,'2018-11-16 00:00:00',1,0,'PC Playstation Xbox Mobile VR','Innersloth','Innersloth','https://store.steampowered.com/app/945360/','https://upload.wikimedia.org/wikipedia/en/9/9a/Among_Us_cover_art.jpg',NULL),(15,'Hearts of Iron IV','Strategy','Historic, RTS',39.99,83,'2016-06-06 00:00:00',1,0,'PC','Paradox Development Studio','Paradox Interactive','https://store.steampowered.com/app/394360/','https://cdn.cloudflare.steamstatic.com/steam/apps/394360/library_600x900_2x.jpg?t=1679478864',NULL),(16,'Genshin Impact','Adventure','Open world, Action, Role-playing',0,84,'2020-09-28 00:00:00',1,1,'PC Playstation Mobile','HoYoverse','HoYoverse','https://genshin.hoyoverse.com/','https://assetsio.reedpopcdn.com/Genshin-Impact-3.1-release-date%2C-3.1-Banner-and-event-details-COVER.jpg?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp',NULL),(17,'Resident Evil 4','Horror','Adventure, Survival, Action',64.99,93,'2023-03-24 00:00:00',0,1,'PC Playstation Xbox','Capcom','Capcom','https://store.steampowered.com/app/2050650/','https://upload.wikimedia.org/wikipedia/en/thumb/d/df/Resident_Evil_4_remake_cover_art.jpg/220px-Resident_Evil_4_remake_cover_art.jpg',NULL),(18,'ARK: Survival Evolved','Survival','Action, Adventure, Sandbox',29.99,70,'2017-08-29 00:00:00',1,0,'PC Playstation Xbox Mobile','Studio Wildcard','Studio Wildcard','https://store.steampowered.com/app/346110/','https://cdn.cloudflare.steamstatic.com/steam/apps/346110/hero_capsule.jpg?t=1667428998',NULL),(37,'Grand Theft Auto IV','Action','Open world, Crime',19.99,98,'2008-12-02 00:00:00',1,1,'PC Playstation Xbox','Rockstar North','Rockstar Games','https://store.steampowered.com/app/12210/Grand_Theft_Auto_IV_Complete_Edition/','https://upload.wikimedia.org/wikipedia/en/b/b7/Grand_Theft_Auto_IV_cover.jpg',NULL),(38,'Super Mario Odyssey','Platformer','3D Platformer, Adventure',59.99,97,'2017-10-27 00:00:00',0,1,'Nintendo Switch','Nintendo EPD','Nintendo','https://www.nintendo.com/games/detail/super-mario-odyssey-switch/','https://upload.wikimedia.org/wikipedia/en/8/8d/Super_Mario_Odyssey.jpg',NULL),(39,'Half-Life 2','First-person shooter','Sci-fi, Action',9.99,96,'2004-11-16 00:00:00',1,1,'PC Playstation Xbox','Valve Corporation','Valve Corporation','https://store.steampowered.com/app/220/HalfLife_2/','https://upload.wikimedia.org/wikipedia/en/2/25/Half-Life_2_cover.jpg',NULL),(40,'Stardew Valley','Simulation','Farming simulator, RPG',14.99,89,'2016-02-26 00:00:00',1,1,'PC Playstation Xbox Mobile','ConcernedApe','Chucklefish','https://store.steampowered.com/app/413150/Stardew_Valley/','https://upload.wikimedia.org/wikipedia/en/f/fd/Logo_of_Stardew_Valley.png',NULL),(41,'Beat Saber','Rhythm','Virtual reality, Music, Arcade',29.99,93,'2018-05-01 00:00:00',1,0,'PC Playstation VR','Beat Games','Beat Games','https://store.steampowered.com/app/620980/Beat_Saber/','https://upload.wikimedia.org/wikipedia/en/5/58/Beat_Saber_logo.jpg',NULL),(42,'osu!','Rhythm','Music, Arcade',0,0,'2007-09-16 00:00:00',1,0,'PC','Dean Herbert','PPY','https://osu.ppy.sh/home','https://upload.wikimedia.org/wikipedia/commons/1/1e/Osu%21_Logo_2016.svg',NULL),(43,'BeamNG.drive','Simulation','Vehicle simulation, Sandbox',24.99,0,'2015-05-29 00:00:00',0,0,'PC','BeamNG GmbH','BeamNG GmbH','https://store.steampowered.com/app/284160/BeamNGdrive/','https://upload.wikimedia.org/wikipedia/en/6/6c/BeamNGdrive_cover.png',NULL),(44,'Euro Truck Simulator 2','Simulation','Driving simulator',19.99,79,'2012-10-19 00:00:00',1,0,'PC','SCS Software','SCS Software','https://store.steampowered.com/app/227300/Euro_Truck_Simulator_2/','https://upload.wikimedia.org/wikipedia/en/0/0e/Euro_Truck_Simulator_2_cover.jpg',NULL),(45,'Portal 2','Puzzle','First-person, Sci-fi',9.99,95,'2011-04-19 00:00:00',1,1,'PC Playstation Xbox','Valve Corporation','Valve Corporation','https://store.steampowered.com/app/620/Portal_2/','https://upload.wikimedia.org/wikipedia/en/f/f9/Portal2cover.jpg',NULL),(47,'The Legend of Zelda: Breath of the Wild','Adventure','Open world, Action',59.99,97,'2017-03-03 00:00:00',0,1,'Nintendo Switch','Nintendo EPD','Nintendo','https://www.nintendo.com/games/detail/the-legend-of-zelda-breath-of-the-wild-switch/','https://upload.wikimedia.org/wikipedia/en/c/c6/The_Legend_of_Zelda_Breath_of_the_Wild.jpg',NULL),(49,'Mario Kart 8 Deluxe','Racing','Action',49,85,'2014-05-29 00:00:00',0,0,'Nintendo Switch','Nintendo ','Nintendo','fusdhfsudihfsuy','https://prosteps.cloudimg.io/v7m/resizeinbox/1000x1000/fsharp0/https://tilroy.s3.eu-west-1.amazonaws.com/375/product/136445-mario-kart-8-deluxe-nintendo-switch-packshot.jpg',1),(55,'game3','sdkfnl','',199,53,'2023-05-26 00:00:00',0,0,'PC','ewrjiw','ewfio','','https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png',1),(56,'game4','smdkf','',192,12,'2023-05-12 00:00:00',1,1,'PC','sdfmkS','smfk','','https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png',1);
/*!40000 ALTER TABLE `game` ENABLE KEYS */;
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
