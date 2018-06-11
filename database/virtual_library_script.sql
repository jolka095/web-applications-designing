CREATE DATABASE  IF NOT EXISTS `virtual_library` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `virtual_library`;
-- MySQL dump 10.13  Distrib 5.7.12, for Win64 (x86_64)
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
  `idauthors` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `birth_date` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idauthors`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `authors`
--

LOCK TABLES `authors` WRITE;
/*!40000 ALTER TABLE `authors` DISABLE KEYS */;
INSERT INTO `authors` VALUES (1,'Bram','Stoker',NULL),(2,'Lewis','Carol',NULL),(3,'Karol','Dickens',NULL),(4,'Rudyard','Kipling',NULL),(5,'J.K.','Rowling',NULL),(6,'Mary','Shelley',NULL),(7,'Ilona','Andrews',NULL),(8,'Hans Christian','Andersen',NULL),(9,'Bolesław','Leśmian',NULL),(10,'L.A.','Casey',NULL),(11,'Maria','Konopnicka',NULL),(12,'Henryk','Sienkiewicz',NULL);
/*!40000 ALTER TABLE `authors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `book_author_category`
--

DROP TABLE IF EXISTS `book_author_category`;
/*!50001 DROP VIEW IF EXISTS `book_author_category`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `book_author_category` AS SELECT 
 1 AS `book_id`,
 1 AS `title`,
 1 AS `original_title`,
 1 AS `publish_date`,
 1 AS `ID`,
 1 AS `publisher`,
 1 AS `synopsis`,
 1 AS `language`,
 1 AS `image`,
 1 AS `text`,
 1 AS `author`,
 1 AS `author_id`,
 1 AS `category`,
 1 AS `category_id`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `book_info`
--

DROP TABLE IF EXISTS `book_info`;
/*!50001 DROP VIEW IF EXISTS `book_info`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `book_info` AS SELECT 
 1 AS `book_id`,
 1 AS `title`,
 1 AS `original_title`,
 1 AS `publish_date`,
 1 AS `publisher`,
 1 AS `ISBN`,
 1 AS `language`,
 1 AS `image`,
 1 AS `synopsis`,
 1 AS `text`,
 1 AS `author`,
 1 AS `author_id`,
 1 AS `series`,
 1 AS `series_id`,
 1 AS `category`,
 1 AS `category_id`,
 1 AS `total_marks_num`,
 1 AS `avg_mark`,
 1 AS `how_many_in_series`,
 1 AS `vol_in_series`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `book_marks`
--

DROP TABLE IF EXISTS `book_marks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `book_marks` (
  `idbook_marks` int(11) NOT NULL AUTO_INCREMENT,
  `idbooks` int(11) NOT NULL,
  `idmarks` int(11) NOT NULL,
  `idusers` int(11) DEFAULT NULL,
  `date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idbook_marks`),
  KEY `BM_1_idx` (`idusers`),
  KEY `BM_2_idx` (`idmarks`),
  KEY `BM_3_idx` (`idbooks`),
  CONSTRAINT `BM_1` FOREIGN KEY (`idusers`) REFERENCES `users` (`idusers`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `BM_2` FOREIGN KEY (`idmarks`) REFERENCES `marks` (`idmarks`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `BM_3` FOREIGN KEY (`idbooks`) REFERENCES `books` (`idbooks`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `book_marks`
--

LOCK TABLES `book_marks` WRITE;
/*!40000 ALTER TABLE `book_marks` DISABLE KEYS */;
INSERT INTO `book_marks` VALUES (1,1,6,1,NULL),(2,2,4,2,NULL),(3,3,1,NULL,NULL),(4,4,1,NULL,NULL),(5,5,1,NULL,NULL),(6,6,1,NULL,NULL),(7,7,1,NULL,NULL),(8,8,1,NULL,NULL),(9,9,1,NULL,NULL),(10,10,1,NULL,NULL),(11,11,1,NULL,NULL),(12,12,1,NULL,NULL),(13,13,1,NULL,NULL),(14,14,1,NULL,NULL),(15,15,1,NULL,NULL),(16,16,1,NULL,NULL),(17,17,1,NULL,NULL),(18,18,1,NULL,NULL),(19,19,1,NULL,NULL),(20,20,1,NULL,NULL),(21,21,1,NULL,NULL),(22,22,1,NULL,NULL);
/*!40000 ALTER TABLE `book_marks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `book_series`
--

DROP TABLE IF EXISTS `book_series`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `book_series` (
  `idbook_series` int(11) NOT NULL AUTO_INCREMENT,
  `idseries` int(11) NOT NULL,
  `idbooks` int(11) NOT NULL,
  `vol_in_series` tinyint(1) NOT NULL,
  PRIMARY KEY (`idbook_series`),
  KEY `BS_1_idx` (`idseries`),
  KEY `BS_2_idx` (`idbooks`),
  CONSTRAINT `BS_1` FOREIGN KEY (`idseries`) REFERENCES `series` (`idseries`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `BS_2` FOREIGN KEY (`idbooks`) REFERENCES `books` (`idbooks`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `book_series`
--

LOCK TABLES `book_series` WRITE;
/*!40000 ALTER TABLE `book_series` DISABLE KEYS */;
INSERT INTO `book_series` VALUES (1,2,5,1),(2,2,6,2),(3,2,7,3),(4,3,11,4),(5,3,12,1),(6,3,13,2),(7,3,14,3),(8,3,15,5),(9,3,16,6),(10,3,17,7),(11,4,21,1),(12,4,22,2),(13,1,2,1),(14,1,3,2);
/*!40000 ALTER TABLE `book_series` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `book_series_view`
--

DROP TABLE IF EXISTS `book_series_view`;
/*!50001 DROP VIEW IF EXISTS `book_series_view`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `book_series_view` AS SELECT 
 1 AS `book_id`,
 1 AS `series_id`,
 1 AS `series`,
 1 AS `how_many_in_series`,
 1 AS `vol_in_series`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `book_status`
--

DROP TABLE IF EXISTS `book_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `book_status` (
  `idbook_status` int(11) NOT NULL AUTO_INCREMENT,
  `idbooks` int(11) NOT NULL,
  `idusers` int(11) NOT NULL,
  `idstatus` int(11) NOT NULL,
  `page_number` int(11) DEFAULT NULL,
  `last_used` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idbook_status`),
  KEY `BSTAT_1_idx` (`idstatus`),
  KEY `BSTAT_2_idx` (`idbooks`),
  KEY `BSTAT_3_idx` (`idusers`),
  CONSTRAINT `BSTAT_1` FOREIGN KEY (`idstatus`) REFERENCES `status` (`idstatus`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `BSTAT_2` FOREIGN KEY (`idbooks`) REFERENCES `books` (`idbooks`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `BSTAT_3` FOREIGN KEY (`idusers`) REFERENCES `users` (`idusers`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `book_status`
--

LOCK TABLES `book_status` WRITE;
/*!40000 ALTER TABLE `book_status` DISABLE KEYS */;
/*!40000 ALTER TABLE `book_status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `book_totalmarks_avgmark`
--

DROP TABLE IF EXISTS `book_totalmarks_avgmark`;
/*!50001 DROP VIEW IF EXISTS `book_totalmarks_avgmark`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `book_totalmarks_avgmark` AS SELECT 
 1 AS `book_id`,
 1 AS `total_marks_num`,
 1 AS `avg_mark`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `books`
--

DROP TABLE IF EXISTS `books`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `books` (
  `idbooks` int(11) NOT NULL AUTO_INCREMENT,
  `idauthors` int(11) NOT NULL,
  `title` varchar(45) NOT NULL,
  `publish_date` date NOT NULL,
  `ID_NUMBER` varchar(45) NOT NULL,
  `publisher` varchar(45) DEFAULT NULL,
  `add_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `synopsis` mediumtext NOT NULL,
  `image` varchar(60) NOT NULL,
  `text` varchar(60) DEFAULT NULL,
  `idcategories` int(11) NOT NULL,
  `original_title` varchar(45) NOT NULL,
  `language` varchar(45) NOT NULL,
  PRIMARY KEY (`idbooks`),
  KEY `B_1_idx` (`idauthors`),
  KEY `B_3_idx` (`idcategories`),
  CONSTRAINT `B_1` FOREIGN KEY (`idauthors`) REFERENCES `authors` (`idauthors`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `B_3` FOREIGN KEY (`idcategories`) REFERENCES `categories` (`idcategories`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `books`
--

LOCK TABLES `books` WRITE;
/*!40000 ALTER TABLE `books` DISABLE KEYS */;
INSERT INTO `books` VALUES (1,1,'Drakula','2013-08-16','Project Gutenberg #345','NEW YORK GROSSET & DUNLAP Publishers',NULL,'Jonathan Harker, młody, naiwny prawnik, wyrusza w podróż do Transylwanii na spotkanie z hrabią Draculą, który przymierza się do przyjazdu do Anglii. Na miejscu wychodzi na jaw, że ekscentryczny arystokrata nie jest tym, kim się wydaje być, a jego plany mają krwawy, zbrodniczy wymiar. Życie Jonathana zawisa na włosku. Tymczasem w Anglii Mina niecierpliwie wyczekuje powrotu narzeczonego…','img/Dracula_by_Bram_Stoker.jpg','src/Dracula_by_Bram_Stoker.epub',7,'Dracula','angielski'),(2,2,'Przygody Alicji w Krainie Czarów','2006-04-12','Project Gutenberg #19033','SAM\'L GABRIEL SONS & COMPANY',NULL,'Pewnego dnia Alicja wpada do króliczej nory i tym samym do świata przypominającego sen. Dziewczynka raz rośnie, raz maleje po wypiciu tajemniczego napoju i zjedzeniu ciastka. Na swojej drodze spotyka mnóstwo dziwnych postaci m.in. Pana Gąsienicę palącego fajkę wodną, Postrzelonego Zajączka, gniewną Królową Kier. Przed powrotem do rzeczywistości Alicja gra w szalonąpartię krokieta z talią kart…','img/Alice_in_Wonderland_by_Lewis_Carroll.jpg','src/Alice_in_Wonderland_by_Lewis_Carroll.epub',2,'Alice Adventures  in Wonderland','angielski'),(3,2,'Alicja po drugiej stronie lustra','1991-02-01','Project Gutenberg #12','The Millennium Fulcrum',NULL,'Czy zastanawialiście się kiedyś, co kryje się po drugiej stronie lustra?','img/Through_the_Looking-Glass.jpg','src/Through_the_Looking-Glass_by_Lewis_Carroll.epub',2,'THROUGH THE LOOKING-GLASS','angielski'),(4,6,'Frankenstein','2008-06-17','Project Gutenberg #84','-',NULL,'Angielski żeglarz Robert Walton utknął wśród arktycznych lodów. Pewnego dnia do jego statku dociera na saniach wycieńczony rozbitek: szwajcarski przyrodnik Wiktor Frankenstein. Gdy odzyskuje siły, rozpoczyna niesamowitą opowieść o najwspanialszym i najstraszniejszym dziele swego życia: ulepionej w laboratorium ludzkiej istocie, która obróciła się przeciwko niemu…','img/Frankenstein.jpg','src/Frankenstein_by_Mary_Wollstonecraft_Shelley.epub',6,'Frankenstein, or the Modern Prometheus','angielski'),(5,12,'Pan Wołodyjowski','2009-12-22','ISBN-978-83-288-3896-3','wolnelektury.pl',NULL,'Pan Wołodyjowski to trzecia część pisanej ku pokrzepieniu serc Trylogii Henryka Sienkiewicza.','img/pan-wolodyjowski.jpg','src/pan-wolodyjowski.epub',4,'Pan Wołodyjowski','polski'),(6,12,'Ogniem i mieczem','2010-09-27','ISBN-978-83-288-3892-5','wolnelektury.pl',NULL,'Ogniem i mieczem to pierwsza część pisanej ku pokrzepieniu serc Trylogii Henryka Sienkiewicza.','img/ogniem-i-mieczem.jpg','src/ogniem-i-mieczem.epub',4,'Ogniem i mieczem','polski'),(7,12,'Potop','2009-09-22','ISBN-978-83-288-3899-4','wolnelektury.pl',NULL,'Potop to druga część pisanej ku pokrzepieniu serc Trylogii Henryka Sienkiewicza.','img/potop.jpg','src/potop.epub',4,'Potop','polski'),(8,8,'Brzydkie kaczątko','2007-08-14','ISBN-978-83-288-3002-8','wolnelektury.pl',NULL,'Brzydkie kaczątko to jedna z najsłynniejszych baśni J. Ch. Andersena. To historia pisklęcia, które wykluło się i wychowało w kaczej rodzinie i jako inne, większe, brzydsze od żółtych kaczątek, przez długi czas musiało znosić przykre słowa i szyderstwa.','img/brzydkie-kaczatko.jpg','src/brzydkie-kaczatko.epub',8,'Brzydkie kaczątko','polski'),(9,4,'Księga dżungli','2009-03-31','ISBN-978-83-288-3346-3','wolnelektury.pl',NULL,'Mauli, chłopiec wychowany przez wilki w dżungli i przyjęty do społeczności, musi niebawem opuścić dżunglę — jest już prawie dorosłym człowiekiem i musi wrócić do ludzi.','img/ksiega-dzungli.jpg','src/ksiega-dzungli.epub',8,'Księga dżungli','polski'),(10,9,'Klechdy polskie','2010-05-17','ISBN-978-83-288-3491-0','wolnelektury.pl',NULL,'Klechdy polskie to zbiór utworów Bolesława Leśmiana, które po raz pierwszy zostały wydane w 1956 roku, prawie 20 lat po śmierci pisarza.','img/klechdy-polskie.jpg','src/klechdy-polskie.epub',5,'Klechdy polskie','polski'),(11,5,'Harry Potter i Czara Ognia','2000-07-08','ISBN-978-06-881-2050-2','Bloomsbury Publishing',NULL,'W tym roku w Szkole Magii i Czarodziejstwa Hogwart rozegra się Turniej Trójmagiczny, na który przybędą uczniowie z Bułgarii i Francjii. Zgodnie z prastarymi regułami w turnieju uczestniczyć ma trzech uczniów - reprezentantów każdej ze szkół, wybranych przez Czarę Ognia. W tajemniczych i niewyjaśnionych okolicznościach wybranych zostaje czterech.','img/harry_potter_cover.jpeg','src/HP4.epub',8,'Harry Potter and the Goblet of Fire','angielski'),(12,5,'Harry Potter i kamień filizoficzny','1997-06-26','ISBN-978-06-881-2049-9','Bloomsbury Publishing',NULL,'Harry Potter, sierota i podrzutek, od niemowlęcia wychowywany był przez ciotkę i wuja, którzy traktowali go jak piąte koło u wozu. Pochodzenie chłopca owiane jest tajemnicą; jedyną pamiątką Harry`ego z przeszłości jest zagadkowa blizna na czole. Skąd jednak biorą się niesamowite zjawiska, które towarzyszą nieświadomemu niczego Potterowi? Wszystko zmienia się w dniu jedenastych urodzin chłopca, kiedy dowiaduje się o istnieniu świata, o którym nie miał dotąd pojęcia.','img/harry_potter_2.jpeg','src/ThePhilosopherStone.epub',8,'Harry Potter and the Philosopher\'s Stone','angielski'),(13,5,'Harry Potter i komnata tajemnic','1998-07-02','ISBN-978-06-881-2050-0','Bloomsbury Publishing',NULL,'Harry po pełnym przygód roku w Hogwarcie spędza nudne wakacje u Dursleyów i z utęsknieniem wyczekuje powrotu do szkoły. Sprawy jednak znacznie się komplikują, gdy pewnego dnia odwiedza go tajemniczy przybysz i ostrzega przed… powrotem do Szkoły Magii i Czarodziejstwa, gdzie ma dojść do strasznych wydarzeń. Czy Harry posłucha ostrzeżenia? Co złego ma się wydarzyć w Hogwarcie? Jakie tajemnice skrywa rodzina Malforya? I najważniejsze – czym jest i gdzie znajduje się tytułowa Komnata Tajemnic?','img/harry_potter_3.jpg','src/TheChamberofSecrets.epub',8,'Harry Potter and the Chamber of Secrets','angielski'),(14,5,'Harry Potter i więzień Azbakabu','1999-07-08','ISBN-978-06-881-2050-1','Bloomsbury Publishing',NULL,'Z pilnie strzeżonego więzienia dla czarodziejów ucieka niebezpieczny przestępca. Kim jest? Co go łączy z Harrym? Dlaczego lekcje przepowiadania przyszłości stają się dla bohatera udręką? W trzecim tomie przygód Harry`ego Pottera poznajemy nowego nauczyciela obrony przed czarną magią, oglądamy Hagrida w nowej roli oraz dowiadujemy się więcej o przeszłości profesora Snape`a. Wyprawiamy się również wraz z trzecioklasistami do obfitującego w atrakcje Hogsmeade, jedynej wioski w Anglii zamieszkanej wyłącznie przez czarodziejów.','img/harry_potter_4.jpeg','src/ThePrisonerOfAzkaban.epub',8,'Harry Potter and the Prisoner of Azkaban','angielski'),(15,5,'Harry Potter i zakon Feniksa','2003-06-21','ISBN-978-06-881-2050-3','Bloomsbury Publishing',NULL,'Harry znów spędza nudne, samotne wakacje w domu Dursleyów. Czeka go piąty rok nauki w Hogwarcie i chciałby jak najszybciej spotkać się ze swoimi najlepszymi przyjaciółmi, Ronem i Hermioną. Ci jednak wyraźnie go zaniedbują. Gdy Harry ma już dość wszystkiego i postanawia zmienić swoją nieznośną sytuację, sprawy przyjmują całkiem nieoczekiwany obrót.','img/harry_potter_5.jpg','src/TheOrderofthePhoenix.epub',8,'Harry Potter and the Order of the Phoenix','angielski'),(16,5,'Harry Potter i książe półkrwi','2005-07-16','ISBN-978-06-881-2050-4','Bloomsbury Publishing',NULL,'Po nieudanej próbie przechwycenia przepowiedni Lord Voldemort jest gotów uczynić wszystko, by zawładnąć światem czarodziejów. Organizuje tajemny zamach na swego przeciwnika, a narzędziem w jego ręku staje się jeden z uczniów. Czy jego plan się powiedzie? Szósta część przygód Harry’ego Pottera przynosi cenne informacje o matce Voldemorta, jego dzieciństwie oraz początkach kariery młodego Toma Riddle’a, które rzucą nowe światło na sylwetkę głównego antagonisty Pottera.','img/harry_potter_6.jpg','src/TheHalfBloodPrince.epub',8,'Harry Potter and the Half-Blood Prince','angielski'),(17,5,'Harry Potter i Insygnia Śmierci','2007-07-21','ISBN-978-06-881-2050-5','Bloomsbury Publishing',NULL,'Po śmierci Dumbledore\'a Zakon Feniksa wzmaga swoją działalność, próbując przeciwstawić się coraz potężniejszym siłom śmierciożerców. Harry wraz z przyjaciółmi nie wraca do Hogwartu, tylko wyrusza z misją znalezienia sposobu na pokonanie Voldemorta. Wyprawa ta pełna niepewności i zwątpienia najeżona jest niebezpieczeństwami, a co gorsza nikt nie wie, czy zakończy się sukcesem i czy wszyscy dotrwają do jej końca.','img/harry_potter_7.jpg','src/TheDeathlyHallows.epub',8,'Harry Potter and the Deathly Hallows','angielski'),(18,3,'Opowieść o dwóch miastach','2004-11-28','Project Gutenberg #98','-',NULL,'„Była to najlepsza i najgorsza z epok, wiek rozumu i wiek szaleństwa, czas wiary i czas zwątpienia, okres światła i okres mroków, wiosna pięknych nadziei i zima rozpaczy” – tak rozpoczyna swą niezwykłą „Opowieść o dwóch miastach” Charles Dickens.','img/A_Tale_of_Two_Cities.jpg','src/A_Tale_of_Two_Cities_by_Charles_Dickens.epub',7,'A Tale of Two Cities','angielski'),(19,11,'O krasnoludkach i sierotce Marysi','2010-07-06','ISBN-978-83-790-3073-6','wolnelektury.pl',NULL,'O siedmiu krasnoludkach i sierotce Marysi to klasyka bajek dla najmłodszych. Krasnoludki wprost nie mogły doczekać się nadejścia wiosny spędzając kolejne tygodnie w swojej Kryształowej Grocie, w której było bardzo zimno. Błystek, król krasnoludków często wysyłał któregoś ze swych poddanych w nadziei, że ten znajdzie jakieś oznaki wiosny. W końcu wiosna nadeszła. Błystek wysłał nadwornego kronikarza, Koszałka Opałka na zewnątrz groty, aby opisał w swojej kronice wszystko, co zobaczy. Dzielny krasnal po krótkiej wędrówce dotarł do pewnej wsi, której mieszkańcy głowili się nad wielkim problemem...','img/o-krasnoludkach-i-sierotce-marysi.jpg','src/o-krasnoludkach-i-sierotce-marysi.epub',7,'O krasnoludkach i sierotce Marysi','polski'),(20,10,'Dopóki Harry...','2016-07-01','ISBN-978-15-039-3660-7','Montlake Romance',NULL,'He was my best friend, my best not-really-big-brother, and my best protector.','img/UH.jpg','src/Until_Harry_by_L_A_Casey.epub',3,'Until Harry','angielski'),(21,7,'Clean Sweep','2013-12-02','ISBN-978-16-251-7343-0','Ilona Andrews ',NULL,'On the outside, Dina Demille is the epitome of normal. She runs a quaint Victorian Bed and Breakfast in a small Texas town, owns a Shih Tzu named Beast, and is a perfect neighbor, whose biggest problem should be what to serve her guests for breakfast. But Dina is...different: Her broom is a deadly weapon; her Inn is magic and thinks for itself. Meant to be a lodging for otherworldly visitors, the only permanent guest is a retired Galactic aristocrat who can’t leave the grounds because she’s responsible for the deaths of millions and someone might shoot her on sight. Under the circumstances, \"normal\" is a bit of a stretch for Dina. And now, something with wicked claws and deepwater teeth has begun to hunt at night....Feeling responsible for her neighbors, Dina decides to get involved. Before long, she has to juggle dealing with the annoyingly attractive, ex-military, new neighbor, Sean Evans—an alpha-strain werewolf—and the equally arresting cosmic vampire soldier, Arland, while trying to keep her inn and its guests safe. But the enemy she’s facing is unlike anything she’s ever encountered before. It’s smart, vicious, and lethal, and putting herself between this creature and her neighbors might just cost her everything.','img/Clean-Sweep-Cover-Small.jpg','src/Ilona_Andrews_-_Clean_Sweep_1.epub',1,'Clean Sweep','angielski'),(22,7,'Sweep in Peace','2015-02-13','ISBN-978-19-437-7232-2','Ilona Andrews ',NULL,'Dina DeMille doesn’t run your typical Bed and Breakfast. Her inn is a living entity that defies laws of physics, her fluffy dog is secretly a monster, and the only paying guest is a former Galactic tyrant with a price on her head.  But the inn needs guests to thrive, and guests have been scarce, so when an Arbitrator shows up at Dina’s door and asks her to host a peace summit between three warring species, she jumps on the chance.','img/SiP_cover.jpg','src/Ilona_Andrews_-_Sweep_in_Peace.epub',1,'Sweep in Peace','angielski');
/*!40000 ALTER TABLE `books` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `idcategories` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idcategories`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'urban fantasy'),(2,'fantastyka'),(3,'romans'),(4,'historyczna'),(5,'literatura piękna'),(6,'kryminał'),(7,'klasyka'),(8,'literatura młodzieżowa');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `marks`
--

DROP TABLE IF EXISTS `marks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `marks` (
  `idmarks` int(11) NOT NULL AUTO_INCREMENT,
  `value` tinyint(1) NOT NULL,
  PRIMARY KEY (`idmarks`),
  UNIQUE KEY `value_UNIQUE` (`value`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `marks`
--

LOCK TABLES `marks` WRITE;
/*!40000 ALTER TABLE `marks` DISABLE KEYS */;
INSERT INTO `marks` VALUES (1,0),(2,1),(3,2),(4,3),(5,4),(6,5);
/*!40000 ALTER TABLE `marks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `series`
--

DROP TABLE IF EXISTS `series`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `series` (
  `idseries` int(11) NOT NULL AUTO_INCREMENT,
  `series_name` varchar(45) NOT NULL,
  `idauthors` int(11) NOT NULL,
  `how_many_in_series` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`idseries`),
  KEY `S_1_idx` (`idauthors`),
  CONSTRAINT `S_1` FOREIGN KEY (`idauthors`) REFERENCES `authors` (`idauthors`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `series`
--

LOCK TABLES `series` WRITE;
/*!40000 ALTER TABLE `series` DISABLE KEYS */;
INSERT INTO `series` VALUES (1,'Alicja w Krainie Czarów',2,2),(2,'Trylogia',12,3),(3,'Harry Potter',5,7),(4,'Inkeeper Chronicles',7,2);
/*!40000 ALTER TABLE `series` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `status`
--

DROP TABLE IF EXISTS `status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `status` (
  `idstatus` int(11) NOT NULL AUTO_INCREMENT,
  `status` varchar(45) NOT NULL,
  PRIMARY KEY (`idstatus`),
  UNIQUE KEY `status_UNIQUE` (`status`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `status`
--

LOCK TABLES `status` WRITE;
/*!40000 ALTER TABLE `status` DISABLE KEYS */;
INSERT INTO `status` VALUES (2,'chce_przeczytac'),(3,'czytam'),(1,'przeczytana');
/*!40000 ALTER TABLE `status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `idusers` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `sex` enum('F','M') DEFAULT NULL,
  `username` varchar(45) NOT NULL,
  PRIMARY KEY (`idusers`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'anna.pol@wp.pl','qwerty','F','Ania'),(2,'karol_graczyk','qwerty','M','Karolek'),(3,'lucioafonso@icloud.com','UnderTheGround96',NULL,'UnderGrounder96'),(6,'lucioafonso@live.com.pt','UnderGrounder96',NULL,'RiaSenpai96'),(7,'lucianlust@live.com.pt','Lucio14',NULL,'UnderTheGround96'),(8,'jkas@asd.com','asdsad',NULL,'Lucio14'),(9,'asdad@asd.hy','asdasd',NULL,'asdad');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'virtual_library'
--

--
-- Dumping routines for database 'virtual_library'
--

--
-- Final view structure for view `book_author_category`
--

/*!50001 DROP VIEW IF EXISTS `book_author_category`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `book_author_category` AS select `books`.`idbooks` AS `book_id`,`books`.`title` AS `title`,`books`.`original_title` AS `original_title`,`books`.`publish_date` AS `publish_date`,`books`.`ID_NUMBER` AS `ID`,`books`.`publisher` AS `publisher`,`books`.`synopsis` AS `synopsis`,`books`.`language` AS `language`,`books`.`image` AS `image`,`books`.`text` AS `text`,concat(`authors`.`name`,' ',`authors`.`last_name`) AS `author`,`authors`.`idauthors` AS `author_id`,`categories`.`name` AS `category`,`categories`.`idcategories` AS `category_id` from (((`books` left join `authors` on((`authors`.`idauthors` = `books`.`idauthors`))) left join `categories` on((`categories`.`idcategories` = `books`.`idcategories`))) left join `book_series` on((`book_series`.`idbooks` = `books`.`idbooks`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `book_info`
--

/*!50001 DROP VIEW IF EXISTS `book_info`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `book_info` AS select `book_author_category`.`book_id` AS `book_id`,`book_author_category`.`title` AS `title`,`book_author_category`.`original_title` AS `original_title`,`book_author_category`.`publish_date` AS `publish_date`,`book_author_category`.`publisher` AS `publisher`,`book_author_category`.`ID` AS `ISBN`,`book_author_category`.`language` AS `language`,`book_author_category`.`image` AS `image`,`book_author_category`.`synopsis` AS `synopsis`,`book_author_category`.`text` AS `text`,`book_author_category`.`author` AS `author`,`book_author_category`.`author_id` AS `author_id`,`book_series_view`.`series` AS `series`,`book_series_view`.`series_id` AS `series_id`,`book_author_category`.`category` AS `category`,`book_author_category`.`category_id` AS `category_id`,`book_totalmarks_avgmark`.`total_marks_num` AS `total_marks_num`,`book_totalmarks_avgmark`.`avg_mark` AS `avg_mark`,`book_series_view`.`how_many_in_series` AS `how_many_in_series`,`book_series_view`.`vol_in_series` AS `vol_in_series` from ((`book_author_category` join `book_series_view` on((`book_series_view`.`book_id` = `book_author_category`.`book_id`))) join `book_totalmarks_avgmark` on((`book_totalmarks_avgmark`.`book_id` = `book_author_category`.`book_id`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `book_series_view`
--

/*!50001 DROP VIEW IF EXISTS `book_series_view`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `book_series_view` AS select `books`.`idbooks` AS `book_id`,`series`.`idseries` AS `series_id`,`series`.`series_name` AS `series`,`series`.`how_many_in_series` AS `how_many_in_series`,`book_series`.`vol_in_series` AS `vol_in_series` from ((`books` left join `book_series` on((`book_series`.`idbooks` = `books`.`idbooks`))) left join `series` on((`book_series`.`idseries` = `series`.`idseries`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `book_totalmarks_avgmark`
--

/*!50001 DROP VIEW IF EXISTS `book_totalmarks_avgmark`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `book_totalmarks_avgmark` AS select `books`.`idbooks` AS `book_id`,count(0) AS `total_marks_num`,avg(`marks`.`value`) AS `avg_mark` from ((`book_marks` join `marks` on((`marks`.`idmarks` = `book_marks`.`idmarks`))) join `books` on((`books`.`idbooks` = `book_marks`.`idbooks`))) group by `books`.`idbooks` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-06-11 15:04:04
