-- MySQL dump 10.13  Distrib 5.7.25, for osx10.14 (x86_64)
--
-- Host: localhost    Database: TripAdvisor_Locations
-- ------------------------------------------------------
-- Server version	5.7.25

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
-- Table structure for table `Attractions`
--
DROP DATABASE IF EXISTS TripAdvisor_Locations;
CREATE DATABASE TripAdvisor_Locations;
USE TripAdvisor_Locations;

DROP TABLE IF EXISTS `Attractions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Attractions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) DEFAULT NULL,
  `NumberOfReviews` int(11) DEFAULT NULL,
  `ReviewScore` decimal(1,1) DEFAULT NULL,
  `Addr1` varchar(255) DEFAULT NULL,
  `Addr2` varchar(255) DEFAULT NULL,
  `City` varchar(45) DEFAULT NULL,
  `State` varchar(45) DEFAULT NULL,
  `PostalCode` varchar(20) DEFAULT NULL,
  `DistanceFromHotel` decimal(3,1) DEFAULT NULL,
  `Phone` varchar(45) DEFAULT NULL,
  `Latitude` decimal(12,6) DEFAULT '0.000000',
  `Longitude` decimal(12,6) DEFAULT '0.000000',
  `Website` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=58 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Attractions`
--

LOCK TABLES `Attractions` WRITE;
/*!40000 ALTER TABLE `Attractions` DISABLE KEYS */;
INSERT INTO `Attractions` VALUES (34,'Stanley Hotel Tour',NULL,NULL,'333 W Wonder View Ave','','Estes Park','CO','80517',NULL,'1 970-577-4111',0.000000,0.000000,'https://www.stanleyhotel.com/tours.html'),(35,'Estes Park Massage',NULL,NULL,'517 Big Thompson Ave','Lower Stanley Village','Estes Park','CO','80517-9661',NULL,'1 970-586-4575',0.000000,0.000000,'http://www.estesparkmassagetherapy.com/'),(36,'Affinity Massage and Wellness Center',NULL,NULL,'312 E Elkhorn Ave','','Estes Park','CO','80517',NULL,'1 970-586-3401',0.000000,0.000000,'http://www.affinitymassageandwellness.com/'),(37,'Gem Lake',NULL,NULL,'MacGregor Avenue','','Rocky Mountain National Park','CO','',NULL,'',0.000000,0.000000,''),(38,'Aspen and Evergreen Gallery',NULL,NULL,'356 E. Elkhorn Avenue','Apt 1','Estes Park','CO','80517',NULL,'1 970-586-4355',0.000000,0.000000,'https://www.aspenandevergreen.com/'),(39,'Brownfield\'s',NULL,NULL,'350 E. Elkhorn Ave.','','Estes Park','CO','80517',NULL,'1 970-586-3275',0.000000,0.000000,'https://www.shopbrownfields.com/'),(40,'WildSide 4x4 Tours',NULL,NULL,'212 E Elkhorn Avenue','','Estes Park','CO','80517',NULL,'1 970-586-8687',0.000000,0.000000,'http://www.wildside4x4.com/'),(41,'Images of Rocky Mountain National Park',NULL,NULL,'203 Park Lane','','Estes Park','CO','80517',NULL,'1 970-586-4352',0.000000,0.000000,'https://imagesofrmnp.com/page/EstesParkGallery/'),(42,'Estes Park Visitor Center',NULL,NULL,'500 Big Thompson Ave','','Estes Park','CO','80517-9649',NULL,'1 970-577-9900',0.000000,0.000000,'http://estes-park.com/estes-park-visitor-center/'),(43,'Kirks Flyshop & Mountain Adventures',NULL,NULL,'230 E Elkhorn Ave','','Estes Park','CO','80517',NULL,'1 877-669-1859',0.000000,0.000000,'https://www.facebook.com/Kirks-Fly-Shop-Mountain-Adventures-143734582342142'),(44,'Rapid Transit Rafting',NULL,NULL,'161 Virginia Dr','','Estes Park','CO','80517-9177',NULL,'1 800-367-8523',0.000000,0.000000,'https://rapidtransitrafting.com/'),(45,'The Taffy Shop',NULL,NULL,'121 W Elkhorn Ave','','Estes Park','CO','80517',NULL,'1 970-586-4548',0.000000,0.000000,'http://www.originaltaffyshop.com/'),(46,'Mountain Blown Glass',NULL,NULL,'101-A West Elkhorn Ave','Mailing Address: 665 Halbach Lane','Estes Park','CO','80517',NULL,'1 970-577-0880',0.000000,0.000000,'http://www.mountainblownglass.net/'),(47,'Green Jeep Tours',NULL,NULL,'157 Moraine Avenue','','Estes Park','CO','80517',NULL,'1 970-577-0034',0.000000,0.000000,'https://www.greenjeeptour.com/'),(48,'Estes Park ATV Rentals',NULL,NULL,'222 E. Elkhorn Ave','','Estes Park','CO','80517',NULL,'1 970-577-7400',0.000000,0.000000,'https://www.estesparkatvrentals.com/'),(49,'Laura\'s Fine Candy',NULL,NULL,'129 E. Elkhorn Ave.','','Estes Park','CO','80517',NULL,'1 970-586-4004',0.000000,0.000000,'https://www.facebook.com/Lauras-Fine-Candies-428397540640142/'),(50,'Adams Falls Trail',NULL,NULL,'West Portal Road','','Rocky Mountain National Park','CO','',NULL,'1 970-586-1206',0.000000,0.000000,'http://www.thespiritoftherockies.net/spirit/Hikes/Adams%20Falls/AdamsFalls.html'),(51,'Purple Mountain Taffy Company',NULL,NULL,'121 E Elkhorn Ave','','Estes Park','CO','80517',NULL,'1 970-586-3407',0.000000,0.000000,'https://www.purplemountaintaffy.com/'),(52,'Rocky Mountain Chocolate Factory',NULL,NULL,'517 Big Thompson Ave','','Estes Park','CO','80517-9661',NULL,'1 970-586-6601',0.000000,0.000000,'https://www.rmcf.com/'),(53,'Yellow Wood Guiding',NULL,NULL,'404 Driftwood Ave','','Estes Park','CO','80517-9479',NULL,'1 303-775-5484',0.000000,0.000000,'http://www.ywguiding.com/'),(54,'Reel Mountain Theater',NULL,NULL,'543 Big Thompson Ave','','Estes Park','CO','80517-9634',NULL,'1 970-586-4227',0.000000,0.000000,'http://reelmountain.com/'),(55,'The Studio Fine Art and Framing',NULL,NULL,'541 Big Thompson Ave','Suite G','Estes Park','CO','80517-9657',NULL,'1 970-237-4300',0.000000,0.000000,'https://www.thestudiofineartandframing.com/'),(56,'Riverspointe Spa',NULL,NULL,'121 Wiest Drive','','Estes Park','CO','80517',NULL,'',0.000000,0.000000,'https://www.riverspointespa.com/'),(57,'Estes Park Escape Rooms Clueology',NULL,NULL,'541 Big Thompson Ave','Unit C','Estes Park','CO','80517-9662',NULL,'970-776-0356',0.000000,0.000000,'https://www.estesparkescaperooms.com/');
/*!40000 ALTER TABLE `Attractions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Hotels`
--

DROP TABLE IF EXISTS `Hotels`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Hotels` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `WalkableScore` int(11) DEFAULT NULL,
  `Addr1` varchar(255) DEFAULT NULL,
  `Addr2` varchar(255) DEFAULT NULL,
  `City` varchar(45) DEFAULT NULL,
  `State` varchar(45) DEFAULT NULL,
  `PostalCode` varchar(20) DEFAULT NULL,
  `Latitude` decimal(6,4) DEFAULT NULL,
  `Longitude` decimal(6,4) DEFAULT NULL,
  `NearestAirport` varchar(45) DEFAULT NULL,
  `NearestAirportDistance` decimal(5,2) DEFAULT NULL,
  `Phone` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Hotels`
--

LOCK TABLES `Hotels` WRITE;
/*!40000 ALTER TABLE `Hotels` DISABLE KEYS */;
INSERT INTO `Hotels` VALUES (100,76,'333 Wonderview Ave',NULL,'Estes Park','CO','80517-9665',NULL,NULL,'Denver International Airport',57.00,'(970)-446-8450');
/*!40000 ALTER TABLE `Hotels` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Restaurants`
--

DROP TABLE IF EXISTS `Restaurants`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Restaurants` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) DEFAULT NULL,
  `NumberOfReviews` int(11) DEFAULT NULL,
  `ReviewScore` int(11) DEFAULT NULL,
  `Addr1` varchar(255) DEFAULT NULL,
  `Addr2` varchar(255) DEFAULT NULL,
  `City` varchar(45) DEFAULT NULL,
  `State` varchar(45) DEFAULT NULL,
  `PostalCode` varchar(20) DEFAULT NULL,
  `DistanceFromHotel` decimal(3,1) DEFAULT NULL,
  `Website` varchar(255) DEFAULT NULL,
  `Phone` varchar(45) DEFAULT NULL,
  `Latitude` decimal(12,6) DEFAULT '0.000000',
  `Longitude` decimal(12,6) DEFAULT '0.000000',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Restaurants`
--

LOCK TABLES `Restaurants` WRITE;
/*!40000 ALTER TABLE `Restaurants` DISABLE KEYS */;
INSERT INTO `Restaurants` VALUES (33,'Cascades Restaurant at the Stanley Hotel',0,0,'333 E Wonder View Ave','','Estes Park','CO','80517-9665',0.0,'https://www.stanleyhotel.com/dining.html','970-577-4001',40.382956,-105.518995),(34,'Mountain Home Cafe Inc',0,0,'457 E Wonderview Ave','','Estes Park','CO','80517-9663',0.0,'http://something.com','1 970-586-6624',40.381364,-105.515322),(35,'Notchtop Bakery & Cafe',0,0,'459 E Wonder View Ave','','Estes Park','CO','80517-9658',0.0,'http://www.thenotchtop.com','1 970-586-0272',40.381215,-105.514750),(36,'Twin Owls Steakhouse',0,0,'800 Macgregor Ave','','Estes Park','CO','80517-9065',0.0,'https://www.twinowls.net','1 970-586-9344',40.386103,-105.521677),(37,'The Egg & I Restaurant',0,0,'393 E Elkhorn Ave','','Estes Park','CO','80517',0.0,'https://theeggandirestaurants.com/location/estes-park-co/','1 970-586-1173',40.378068,-105.517881),(38,'Kind Coffee',0,0,'470 East Elkhorn Avenue','','Estes Park','CO','80517',0.0,'http://www.kindcoffee.com/','1 970-586-5206',40.377250,-105.517192),(39,'SEASONED-An American Bistro',0,0,'205 Park Lane','','Estes Park','CO','80517',0.0,'http://seasonedbistro.com/','1 970-586-9000',40.377554,-105.521811),(40,'Estes Park Pie Shop Bakery + DIner',0,0,'509 Big Thompson Ave','Unit 300','Estes Park','CO','80517-9607',0.0,'http://www.estesparkpieshop.com','1 970-577-7437',40.378995,-105.516802),(41,'Claire\'s on the Park',0,0,'225 Park Ln','','Estes Park','CO','80517',0.0,'http://clairesrestaurantandbar.com','1 970-586-9564',40.377649,-105.521410),(42,'Shakes Alive! Fruit Shakes',0,0,'513 Big Thompson Ave','','Estes Park','CO','80517-9651',0.0,'https://www.shakesalive.com','1 970-577-7007',40.379188,-105.516528),(43,'Ed\'s Cantina & Grill',0,0,'390 E. Elkhorn Ave','','Estes Park','CO','80517',0.0,'https://www.edscantina.com/',' 1 970-586-2919',40.377252,-105.517741),(44,'Peppers Mexican Grill',0,0,'401 East','','Estes Park','CO','80517-9030',0.0,'http://peppersmex.com','1-970-577-0032',40.378141,-105.517577),(45,'Himalayan Curry & Kebob',0,0,'101 W Elkhorn Ave','','Estes Park','CO','80517',0.0,'http://himalayancurryandkebob.com','1 970-586-6226',40.376327,-105.523917),(46,'Nepal\'s Cafe',0,0,'184 E. Elkhorn Ave.','','Estes Park','CO','80517',0.0,'https://www.facebook.com/pages/Nepals-Cafe/166103146809347','1 970-577-7035',40.376340,-105.521702),(47,'Poppy\'s Pizza & Grill',0,0,'342 E Elkhorn Ave','','Estes Park','CO','80517',0.0,'https://poppyspizzaandgrill.com','1 970-586-8282',40.376877,-105.519163);
/*!40000 ALTER TABLE `Restaurants` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-04-11 17:30:15
