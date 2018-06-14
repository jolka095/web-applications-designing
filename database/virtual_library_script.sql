CREATE DATABASE  IF NOT EXISTS `virtual_library` /*!40100 DEFAULT CHARACTER SET latin1 */;
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
  `idauthor` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `about` varchar(45) CHARACTER SET latin1 DEFAULT NULL,
  `authorDate` timestamp NULL DEFAULT NULL,
  `name` varchar(45) CHARACTER SET latin1 NOT NULL,
  `surname` varchar(45) CHARACTER SET latin1 NOT NULL,
  PRIMARY KEY (`idauthor`),
  UNIQUE KEY `idauthor_UNIQUE` (`idauthor`)
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

--
-- Table structure for table `books`
--

DROP TABLE IF EXISTS `books`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `books` (
  `idBook` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `idAuthor` int(10) unsigned NOT NULL,
  `book` varchar(45) NOT NULL,
  `releaseDate` date NOT NULL,
  `ID_NUMBER` varchar(45) NOT NULL,
  `publisher` varchar(45) DEFAULT NULL,
  `addDate` timestamp NULL DEFAULT NULL,
  `synopsis` varchar(45) NOT NULL,
  `image` varchar(60) NOT NULL,
  `text` varchar(60) DEFAULT NULL,
  `category` varchar(45) NOT NULL,
  `originalTitle` varchar(45) NOT NULL,
  `lang` varchar(45) NOT NULL,
  PRIMARY KEY (`idBook`),
  UNIQUE KEY `idbooks_UNIQUE` (`idBook`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `books`
--

LOCK TABLES `books` WRITE;
/*!40000 ALTER TABLE `books` DISABLE KEYS */;
/*!40000 ALTER TABLE `books` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bookseries`
--

DROP TABLE IF EXISTS `bookseries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `bookseries` (
  `idBookSeries` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `idBook` int(10) unsigned NOT NULL,
  `idSeries` int(10) unsigned NOT NULL,
  `booksNumber` int(10) unsigned NOT NULL,
  PRIMARY KEY (`idBookSeries`),
  UNIQUE KEY `idBookSeries_UNIQUE` (`idBookSeries`)
) ENGINE=MyISAM AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bookseries`
--

LOCK TABLES `bookseries` WRITE;
/*!40000 ALTER TABLE `bookseries` DISABLE KEYS */;
INSERT INTO `bookseries` VALUES (1,5,2,1),(2,6,2,2),(3,7,2,3),(4,11,3,4),(5,12,3,1),(6,13,3,2),(7,14,3,3),(8,15,3,5),(9,16,3,6),(10,17,3,7),(11,21,4,1),(12,22,4,2),(13,2,1,1),(14,3,1,2);
/*!40000 ALTER TABLE `bookseries` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `marks`
--

DROP TABLE IF EXISTS `marks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `marks` (
  `idMark` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `idBook` int(10) unsigned NOT NULL,
  `idUser` int(10) unsigned NOT NULL,
  `mark` tinyint(1) unsigned NOT NULL,
  `markDate` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`idMark`)
) ENGINE=MyISAM AUTO_INCREMENT=23 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `marks`
--

LOCK TABLES `marks` WRITE;
/*!40000 ALTER TABLE `marks` DISABLE KEYS */;
INSERT INTO `marks` VALUES (1,1,3,0,NULL),(2,2,2,1,NULL),(3,3,1,2,NULL),(4,4,1,3,NULL),(5,5,1,5,NULL),(6,6,1,3,NULL),(7,7,5,4,NULL),(8,8,1,2,NULL),(9,9,1,0,NULL),(10,10,6,1,NULL),(11,11,1,5,NULL),(12,12,1,5,NULL),(13,13,1,4,NULL),(14,14,1,5,NULL),(15,15,4,2,NULL),(16,16,1,3,NULL),(17,17,1,2,NULL),(18,18,1,1,NULL),(19,19,1,5,NULL),(20,20,1,3,NULL),(21,21,1,0,NULL),(22,22,1,3,NULL);
/*!40000 ALTER TABLE `marks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `series`
--

DROP TABLE IF EXISTS `series`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `series` (
  `idSeries` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `idAuthor` int(10) unsigned NOT NULL,
  `series` varchar(45) CHARACTER SET latin1 NOT NULL,
  `volumesNumber` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`idSeries`),
  UNIQUE KEY `idSeries_UNIQUE` (`idSeries`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `series`
--

LOCK TABLES `series` WRITE;
/*!40000 ALTER TABLE `series` DISABLE KEYS */;
INSERT INTO `series` VALUES (1,2,'Alicja w Krainie Czarów',2),(2,12,'Trylogia',3),(3,5,'Harry Potter',7),(4,7,'Inkeeper Chronicles',2);
/*!40000 ALTER TABLE `series` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `statuses`
--

DROP TABLE IF EXISTS `statuses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `statuses` (
  `idStat` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `idBook` int(11) unsigned NOT NULL,
  `idUser` int(11) unsigned NOT NULL,
  `stat` varchar(40) NOT NULL,
  `pageNumber` int(11) DEFAULT NULL,
  `lastUsed` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`idStat`),
  UNIQUE KEY `idstats_UNIQUE` (`idStat`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `statuses`
--

LOCK TABLES `statuses` WRITE;
/*!40000 ALTER TABLE `statuses` DISABLE KEYS */;
/*!40000 ALTER TABLE `statuses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `iduser` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(45) NOT NULL,
  `login` varchar(45) NOT NULL,
  `name` varchar(45) NOT NULL,
  `surname` varchar(45) NOT NULL,
  `passwrd` varchar(45) NOT NULL,
  PRIMARY KEY (`iduser`),
  UNIQUE KEY `iduser_UNIQUE` (`iduser`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `login_UNIQUE` (`login`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'anna.pol@wp.pl','Ania','qwerty','Ania','Kowalski'),(2,'karol_graczyk','Karolek','qwerty','Karol','Wojtek');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'virtual_library'
--

--
-- Dumping routines for database 'virtual_library'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-06-14 21:35:58
