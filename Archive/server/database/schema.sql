CREATE TABLE `TripAdvisor_Locations`.`Hotels` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `WalkableScore` INT NULL,
  `Addr1` VARCHAR(255) NULL,
  `Addr2` VARCHAR(255) NULL,
  `City` VARCHAR(45) NULL,
  `State` VARCHAR(45) NULL,
  `PostalCode` INT NULL,
  `Latitude` Decimal(5,5) NULL,
  `Longitude` Decimal(5,5) NULL,
  `NearestAirport` VARCHAR(45) NULL,
  `NearestAirportDistance` INT NULL,
  PRIMARY KEY (`id`));


CREATE TABLE `TripAdvisor_Locations`.`Restaurants` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(255) NULL,
  `NumberOfReviews` INT NULL,
  `ReviewScore` DECIMAL(1,1) NULL,
  `Addr1` VARCHAR(255) NULL,
  `Addr2` VARCHAR(255) NULL,
  `City` VARCHAR(45) NULL,
  `State` VARCHAR(45) NULL,
  `PostalCode` INT NULL,
  `DistanceFromHotel` DECIMAL(3,1) NULL,
  `Latitude` Decimal(5,6) NULL,
  `Longitude` Decimal(5,6) NULL,
  PRIMARY KEY (`id`));

  CREATE TABLE `TripAdvisor_Locations`.`Attractions` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(255) NULL,
  `NumberOfReviews` INT NULL,
  `ReviewScore` DECIMAL(1,1) NULL,
  `Addr1` VARCHAR(255) NULL,
  `Addr2` VARCHAR(255) NULL,
  `City` VARCHAR(45) NULL,
  `State` VARCHAR(45) NULL,
  `PostalCode` INT NULL,
  `DistanceFromHotel` DECIMAL(3,1) NULL,
  `Latitude` Decimal(5,6) NULL,
  `Longitude` Decimal(5,6) NULL,
  PRIMARY KEY (`id`));


