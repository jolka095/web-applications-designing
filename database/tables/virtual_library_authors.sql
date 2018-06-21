CREATE DATABASE  IF NOT EXISTS `virtual_library` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci */;
USE `virtual_library`;
-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: virtual_library
-- ------------------------------------------------------
-- Server version	5.7.14

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `authors`
--

DROP TABLE IF EXISTS `authors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `authors` (
  `idAuthor` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `about` varchar(45) CHARACTER SET latin1 DEFAULT NULL,
  `authorDate` timestamp NULL DEFAULT NULL,
  `name` varchar(45) CHARACTER SET latin1 NOT NULL,
  `surname` varchar(45) CHARACTER SET latin1 NOT NULL,
  PRIMARY KEY (`idAuthor`),
  UNIQUE KEY `idauthor_UNIQUE` (`idAuthor`)
) ENGINE=MyISAM AUTO_INCREMENT=14 DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `authors`
--

LOCK TABLES `authors` WRITE;
/*!40000 ALTER TABLE `authors` DISABLE KEYS */;
INSERT INTO `authors` VALUES (1,NULL,NULL,'Bram','Stoker'),(2,NULL,NULL,'Lewis','Carol'),(3,NULL,NULL,'Karol','Dickens'),(4,NULL,NULL,'Rudyard','Kipling'),(5,NULL,NULL,'J.K.','Rowling'),(6,NULL,NULL,'Mary','Shelley'),(7,NULL,NULL,'Ilona','Andrews'),(8,NULL,NULL,'Hans Christian','Andersen'),(9,NULL,NULL,'Boleslaw','Lesmian'),(10,NULL,NULL,'L.A.','Casey'),(11,NULL,NULL,'Maria','Konopnicka'),(12,NULL,NULL,'Henryk','Sienkiewicz'),(13,NULL,NULL,'Stephen','King');
/*!40000 ALTER TABLE `authors` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-06-21 19:23:16
