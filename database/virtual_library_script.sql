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

--
-- Table structure for table `books`
--

DROP TABLE IF EXISTS `books`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `books` (
  `idBook` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `idAuthor` int(10) unsigned NOT NULL,
  `addDate` timestamp NULL DEFAULT NULL,
  `book` varchar(45) CHARACTER SET latin1 NOT NULL,
  `category` varchar(60) CHARACTER SET latin1 NOT NULL,
  `ID_NUMBER` varchar(45) CHARACTER SET latin1 NOT NULL,
  `image` varchar(60) CHARACTER SET latin1 NOT NULL,
  `lang` varchar(45) CHARACTER SET latin1 NOT NULL,
  `originalTitle` varchar(45) CHARACTER SET latin1 NOT NULL,
  `publisher` varchar(45) CHARACTER SET latin1 DEFAULT NULL,
  `releaseDate` date NOT NULL,
  `synopsis` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `text` varchar(60) CHARACTER SET latin1 DEFAULT NULL,
  PRIMARY KEY (`idBook`),
  UNIQUE KEY `idbooks_UNIQUE` (`idBook`)
) ENGINE=MyISAM AUTO_INCREMENT=53 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `books`
--

LOCK TABLES `books` WRITE;
/*!40000 ALTER TABLE `books` DISABLE KEYS */;
INSERT INTO `books` VALUES (1,1,NULL,'Drakula','klasyka','Project Gutenberg #345','img/Dracula_by_Bram_Stoker.jpg','angielski','Dracula','NEW YORK GROSSET & DUNLAP Publishers','2013-08-16','Jonathan Harker, młody, naiwny prawnik, wyrusza w podróż do Transylwanii na spotkanie z hrabią Draculą, który przymierza się do przyjazdu do Anglii. Na miejscu wychodzi na jaw, że ekscentryczny arystokrata nie jest tym, kim się wydaje być, a jego plany mają krwawy, zbrodniczy wymiar. Życie Jonathana zawisa na włosku. Tymczasem w Anglii Mina niecierpliwie wyczekuje powrotu narzeczonego…','src/Dracula_by_Bram_Stoker.epub'),(2,2,NULL,'Przygody Alicji w Krainie Czarów','fantastyka','Project Gutenberg #19033','img/Alice_in_Wonderland_by_Lewis_Carroll.jpg','angielski','Alice Adventures  in Wonderland','SAM\'L GABRIEL SONS & COMPANY','2006-04-12','Pewnego dnia Alicja wpada do króliczej nory i tym samym do świata przypominającego sen. Dziewczynka raz rośnie, raz maleje po wypiciu tajemniczego napoju i zjedzeniu ciastka. Na swojej drodze spotyka mnóstwo dziwnych postaci m.in. Pana Gąsienicę palącego fajkę wodną, Postrzelonego Zajączka, gniewną Królową Kier. Przed powrotem do rzeczywistości Alicja gra w szalonąpartię krokieta z talią kart…','src/Alice_in_Wonderland_by_Lewis_Carroll.epub'),(3,2,NULL,'Alicja po drugiej stronie lustra','fantastyka','Project Gutenberg #12','img/Through_the_Looking-Glass.jpg','angielski','THROUGH THE LOOKING-GLASS','The Millennium Fulcrum','1991-02-01','Czy zastanawialiście się kiedyś, co kryje się po drugiej stronie lustra?','src/Through_the_Looking-Glass_by_Lewis_Carroll.epub'),(4,6,NULL,'Frankenstein','kryminal','Project Gutenberg #84','img/Frankenstein.jpg','angielski','Frankenstein, or the Modern Prometheus','-','2008-06-17','Angielski zeglarz Robert Walton utknal wsrod arktycznych lodow. Pewnego dnia do jego statku dociera na saniach wycienczony rozbitek: szwajcarski przyrodnik Wiktor Frankenstein. Gdy odzyskuje sily, rozpoczyna niesamowita opowiesc o najwspanialszym i najstraszniejszym dziele swego zycia: ulepionej w laboratorium ludzkiej istocie, ktora obrocila sie przeciwko niemu...','src/Frankenstein_by_Mary_Wollstonecraft_Shelley.epub'),(5,12,NULL,'Pan Wolodyjowski','historyczna','ISBN-978-83-288-3896-3','img/pan-wolodyjowski.jpg','polski','Pan Wolodyjowski','wolnelektury.pl','2009-12-22','Pan Wolodyjowski to trzecia czesc pisanej ku pokrzepieniu serc Trylogii Henryka Sienkiewicza.','src/pan-wolodyjowski.epub'),(6,12,NULL,'Ogniem i mieczem','historyczna','ISBN-978-83-288-3892-5','img/ogniem-i-mieczem.jpg','polski','Ogniem i mieczem','wolnelektury.pl','2010-09-27','Ogniem i mieczem to pierwsza czesc pisanej ku pokrzepieniu serc Trylogii Henryka Sienkiewicza.','src/ogniem-i-mieczem.epub'),(7,12,NULL,'Potop','historyczna','ISBN-978-83-288-3899-4','img/potop.jpg','polski','Potop','wolnelektury.pl','2009-09-22','Potop to druga czesc pisanej ku pokrzepieniu serc Trylogii Henryka Sienkiewicza.','src/potop.epub'),(8,8,NULL,'Brzydkie kaczatko','literatura mlodziezowa','ISBN-978-83-288-3002-8','img/brzydkie-kaczatko.jpg','polski','Brzydkie kaczatko','wolnelektury.pl','2007-08-14','Brzydkie kaczatko to jedna z najslynniejszych basni J. Ch. Andersena. To historia pisklecia, ktore wyklulo sie i wychowalo w kaczej rodzinie i jako inne, wieksze, brzydsze od zoltych kaczatek, przez dlugi czas musialo znosic przykre slowa i szyderstwa.','src/brzydkie-kaczatko.epub'),(9,4,NULL,'Ksiega dzungli','literatura mlodziezowa','ISBN-978-83-288-3346-3','img/ksiega-dzungli.jpg','polski','Ksiega dzungli','wolnelektury.pl','2009-03-31','Mauli, chlopiec wychowany przez wilki w dzungli i przyjety do spolecznosci, musi niebawem opuscic dzungle -- jest juz prawie doroslym czlowiekiem i musi wrocic do ludzi.','src/ksiega-dzungli.epub'),(10,9,NULL,'Klechdy polskie','literatura piekna','ISBN-978-83-288-3491-0','img/klechdy-polskie.jpg','polski','Klechdy polskie','wolnelektury.pl','2010-05-17','Klechdy polskie to zbior utworow Boleslawa Lesmiana, ktore po raz pierwszy zostaly wydane w 1956 roku, prawie 20 lat po smierci pisarza.','src/klechdy-polskie.epub'),(11,5,NULL,'Harry Potter i Czara Ognia','literatura mlodziezowa','ISBN-978-06-881-2050-2','img/harry_potter_cover.jpeg','angielski','Harry Potter and the Goblet of Fire','Bloomsbury Publishing','2000-07-08','W tym roku w Szkole Magii i Czarodziejstwa Hogwart rozegra sie Turniej Trojmagiczny, na ktory przybeda uczniowie z Bulgarii i Francjii. Zgodnie z prastarymi regulami w turnieju uczestniczyc ma trzech uczniow - reprezentantow kazdej ze szkol, wybranych przez Czare Ognia. W tajemniczych i niewyjasnionych okolicznosciach wybranych zostaje czterech.','src/HP4.epub'),(12,5,NULL,'Harry Potter i kamien filizoficzny','literatura mlodziezowa','ISBN-978-06-881-2049-9','img/harry_potter_2.jpeg','angielski','Harry Potter and the Philosopher\'s Stone','Bloomsbury Publishing','1997-06-26','Harry Potter, sierota i podrzutek, od niemowlecia wychowywany byl przez ciotke i wuja, ktorzy traktowali go jak piate kolo u wozu. Pochodzenie chlopca owiane jest tajemnica; jedyna pamiatka Harry`ego z przeszlosci jest zagadkowa blizna na czole. Skad jednak biora sie niesamowite zjawiska, ktore towarzysza nieswiadomemu niczego Potterowi? Wszystko zmienia sie w dniu jedenastych urodzin chlopca, kiedy dowiaduje sie o istnieniu swiata, o ktorym nie mial dotad pojecia.','src/ThePhilosopherStone.epub'),(13,5,NULL,'Harry Potter i komnata tajemnic','literatura mlodziezowa','ISBN-978-06-881-2050-0','img/harry_potter_3.jpg','angielski','Harry Potter and the Chamber of Secrets','Bloomsbury Publishing','1998-07-02','Harry po pelnym przygod roku w Hogwarcie spedza nudne wakacje u Dursleyow i z utesknieniem wyczekuje powrotu do szkoly. Sprawy jednak znacznie sie komplikuja, gdy pewnego dnia odwiedza go tajemniczy przybysz i ostrzega przed... powrotem do Szkoly Magii i Czarodziejstwa, gdzie ma dojsc do strasznych wydarzen. Czy Harry poslucha ostrzezenia? Co zlego ma sie wydarzyc w Hogwarcie? Jakie tajemnice skrywa rodzina Malforya? I najwazniejsze - czym jest i gdzie znajduje sie tytulowa Komnata Tajemnic?','src/TheChamberofSecrets.epub'),(14,5,NULL,'Harry Potter i wiezien Azbakabu','literatura mlodziezowa','ISBN-978-06-881-2050-1','img/harry_potter_4.jpeg','angielski','Harry Potter and the Prisoner of Azkaban','Bloomsbury Publishing','1999-07-08','Z pilnie strzezonego wiezienia dla czarodziejow ucieka niebezpieczny przestepca. Kim jest? Co go laczy z Harrym? Dlaczego lekcje przepowiadania przyszlosci staja sie dla bohatera udreka? W trzecim tomie przygod Harry`ego Pottera poznajemy nowego nauczyciela obrony przed czarna magia, ogladamy Hagrida w nowej roli oraz dowiadujemy sie wiecej o przeszlosci profesora Snape`a. Wyprawiamy sie rowniez wraz z trzecioklasistami do obfitujacego w atrakcje Hogsmeade, jedynej wioski w Anglii zamieszkanej wylacznie przez czarodziejow.','src/ThePrisonerOfAzkaban.epub'),(15,5,NULL,'Harry Potter i zakon Feniksa','literatura mlodziezowa','ISBN-978-06-881-2050-3','img/harry_potter_5.jpg','angielski','Harry Potter and the Order of the Phoenix','Bloomsbury Publishing','2003-06-21','Harry znow spedza nudne, samotne wakacje w domu Dursleyow. Czeka go piaty rok nauki w Hogwarcie i chcialby jak najszybciej spotkac sie ze swoimi najlepszymi przyjaciolmi, Ronem i Hermiona. Ci jednak wyraznie go zaniedbuja. Gdy Harry ma juz dosc wszystkiego i postanawia zmienic swoja nieznosna sytuacje, sprawy przyjmuja calkiem nieoczekiwany obrot.','src/TheOrderofthePhoenix.epub'),(16,5,NULL,'Harry Potter i Czara Ognia','literatura mlodziezowa','ISBN-978-06-881-2050-2','img/harry_potter_cover.jpeg','angielski','Harry Potter and the Goblet of Fire','Bloomsbury Publishing','2000-07-08','W tym roku w Szkole Magii i Czarodziejstwa Hogwart rozegra sie Turniej Trojmagiczny, na ktory przybeda uczniowie z Bulgarii i Francjii. Zgodnie z prastarymi regulami w turnieju uczestniczyc ma trzech uczniow - reprezentantow kazdej ze szkol, wybranych przez Czare Ognia. W tajemniczych i niewyjasnionych okolicznosciach wybranych zostaje czterech.','src/HP4.epub'),(17,5,NULL,'Harry Potter i ksiaze polkrwi','literatura mlodziezowa','ISBN-978-06-881-2050-4','img/harry_potter_6.jpg','angielski','Harry Potter and the Half-Blood Prince','Bloomsbury Publishing','2005-07-16','Po nieudanej probie przechwycenia przepowiedni Lord Voldemort jest gotow uczynic wszystko, by zawladnac swiatem czarodziejow. Organizuje tajemny zamach na swego przeciwnika, a narzedziem w jego reku staje sie jeden z uczniow. Czy jego plan sie powiedzie? Szosta czesc przygod Harry\'ego Pottera przynosi cenne informacje o matce Voldemorta, jego dziecinstwie oraz poczatkach kariery mlodego Toma Riddle\'a, ktore rzuca nowe swiatlo na sylwetke glownego antagonisty Pottera.','src/TheHalfBloodPrince.epub'),(18,5,NULL,'Harry Potter i Insygnia Smierci','literatura mlodziezowa','ISBN-978-06-881-2050-5','img/harry_potter_7.jpg','angielski','Harry Potter and the Deathly Hallows','Bloomsbury Publishing','2007-07-21','Po smierci Dumbledore\'a Zakon Feniksa wzmaga swoja dzialalnosc, probujac przeciwstawic sie coraz potezniejszym silom smierciozercow. Harry wraz z przyjaciolmi nie wraca do Hogwartu, tylko wyrusza z misja znalezienia sposobu na pokonanie Voldemorta. Wyprawa ta pelna niepewnosci i zwatpienia najezona jest niebezpieczenstwami, a co gorsza nikt nie wie, czy zakonczy sie sukcesem i czy wszyscy dotrwaja do jej konca.','src/TheDeathlyHallows.epub'),(19,3,NULL,'Opowiesc o dwoch miastach','klasyka','Project Gutenberg #98','img/A_Tale_of_Two_Cities.jpg','angielski','A Tale of Two Cities','-','2004-11-28',',,Byla to najlepsza i najgorsza z epok, wiek rozumu i wiek szalenstwa, czas wiary i czas zwatpienia, okres swiatla i okres mrokow, wiosna pieknych nadziei i zima rozpaczy\" - tak rozpoczyna swa niezwykla ,,Opowiesc o dwoch miastach\" Charles Dickens.','src/A_Tale_of_Two_Cities_by_Charles_Dickens.epub'),(20,11,NULL,'O krasnoludkach i sierotce Marysi','klasyka','ISBN-978-83-790-3073-6','img/o-krasnoludkach-i-sierotce-marysi.jpg','polski','O krasnoludkach i sierotce Marysi','wolnelektury.pl','2010-07-06','O siedmiu krasnoludkach i sierotce Marysi to klasyka bajek dla najmlodszych. Krasnoludki wprost nie mogly doczekac sie nadejscia wiosny spedzajac kolejne tygodnie w swojej Krysztalowej Grocie, w ktorej bylo bardzo zimno. Blystek, krol krasnoludkow czesto wysylal ktoregos ze swych poddanych w nadziei, ze ten znajdzie jakies oznaki wiosny. W koncu wiosna nadeszla. Blystek wyslal nadwornego kronikarza, Koszalka Opalka na zewnatrz groty, aby opisal w swojej kronice wszystko, co zobaczy. Dzielny krasnal po krotkiej wedrowce dotarl do pewnej wsi, ktorej mieszkancy glowili sie nad wielkim problemem...','src/o-krasnoludkach-i-sierotce-marysi.epub'),(21,10,NULL,'Dopoki Harry...','romans','ISBN-978-15-039-3660-7','img/UH.jpg','angielski','Until Harry','Montlake Romance','2016-07-01','He was my best friend, my best not-really-big-brother, and my best protector.','src/Until_Harry_by_L_A_Casey.epub'),(22,7,NULL,'Clean Sweep','urban fantasy','ISBN-978-16-251-7343-0','img/Clean-Sweep-Cover-Small.jpg','angielski','Clean Sweep','Ilona Andrews ','2013-12-02','On the outside, Dina Demille is the epitome of normal. She runs a quaint Victorian Bed and Breakfast in a small Texas town, owns a Shih Tzu named Beast, and is a perfect neighbor, whose biggest problem should be what to serve her guests for breakfast. But Dina is...different: Her broom is a deadly weapon; her Inn is magic and thinks for itself. Meant to be a lodging for otherworldly visitors, the only permanent guest is a retired Galactic aristocrat who can\'t leave the grounds because she\'s responsible for the deaths of millions and someone might shoot her on sight. Under the circumstances, \"normal\" is a bit of a stretch for Dina. And now, something with wicked claws and deepwater teeth has begun to hunt at night....Feeling responsible for her neighbors, Dina decides to get involved. Before long, she has to juggle dealing with the annoyingly attractive, ex-military, new neighbor, Sean Evans--an alpha-strain werewolf--and the equally arresting cosmic vampire soldier, Arland, while trying to keep her inn and its guests safe. But the enemy she\'s facing is unlike anything she\'s ever encountered before. It\'s smart, vicious, and lethal, and putting herself between this creature and her neighbors might just cost her everything.','src/Ilona_Andrews_-_Clean_Sweep_1.epub'),(23,7,NULL,'Sweep in Peace','urban fantasy','ISBN-978-19-437-7232-2','img/SiP_cover.jpg','angielski','Sweep in Peace','Ilona Andrews ','2015-02-13','Dina DeMille doesn\'t run your typical Bed and Breakfast. Her inn is a living entity that defies laws of physics, her fluffy dog is secretly a monster, and the only paying guest is a former Galactic tyrant with a price on her head.  But the inn needs guests to thrive, and guests have been scarce, so when an Arbitrator shows up at Dina\'s door and asks her to host a peace summit between three warring species, she jumps on the chance.','src/Ilona_Andrews_-_Sweep_in_Peace.epub');
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
  `booksNumber` int(2) unsigned NOT NULL,
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
  PRIMARY KEY (`idMark`),
  UNIQUE KEY `idMark_UNIQUE` (`idMark`)
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
  `volumesNumber` int(2) unsigned DEFAULT NULL,
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
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `statuses`
--

LOCK TABLES `statuses` WRITE;
/*!40000 ALTER TABLE `statuses` DISABLE KEYS */;
INSERT INTO `statuses` VALUES (1,1,3,'reading',NULL,NULL),(2,2,3,'to_read',NULL,NULL),(3,3,3,'done',NULL,NULL),(4,2,2,'done',NULL,NULL),(5,20,1,'done',NULL,NULL),(6,21,1,'done',NULL,NULL),(7,22,1,'done',NULL,NULL),(8,23,4,'reading',NULL,NULL);
/*!40000 ALTER TABLE `statuses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `idUser` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(45) NOT NULL,
  `username` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  PRIMARY KEY (`idUser`),
  UNIQUE KEY `iduser_UNIQUE` (`idUser`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

# LOCK TABLES `users` WRITE;
# /*!40000 ALTER TABLE `users` DISABLE KEYS */;
# INSERT INTO `users` VALUES (1,'anna.pol@wp.pl','Ania','Kowalski','qwerty'),(2,'karol_graczyk','Karol','Wojtek','qwerty'),(3,'jolantafilipiak7@gmail.com','Jola','Filipiak','asd'),(4,'lucioafonso@icloud.com','Lucio','Afonso','1234');
# /*!40000 ALTER TABLE `users` ENABLE KEYS */;
# UNLOCK TABLES;

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

-- Dump completed on 2018-06-26 19:59:51
