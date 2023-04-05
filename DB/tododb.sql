-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema todolistdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `todolistdb` ;

-- -----------------------------------------------------
-- Schema todolistdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `todolistdb` DEFAULT CHARACTER SET utf8 ;
USE `todolistdb` ;

-- -----------------------------------------------------
-- Table `to_do`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `to_do` ;

CREATE TABLE IF NOT EXISTS `to_do` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(450) NOT NULL,
  `title` VARCHAR(450) NOT NULL,
  `task` VARCHAR(450) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS todouser@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'todouser'@'localhost' IDENTIFIED BY 'todouser';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'todouser'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `to_do`
-- -----------------------------------------------------
START TRANSACTION;
USE `todolistdb`;
INSERT INTO `to_do` (`id`, `name`, `title`, `task`) VALUES (1, 'Joshua Max', 'A Random Day', 'Walk dragon dogs through a pit of molten lava.');
INSERT INTO `to_do` (`id`, `name`, `title`, `task`) VALUES (2, 'Lebron James', 'NBA March Madness', 'Play basketball nonstop for an entire month.');
INSERT INTO `to_do` (`id`, `name`, `title`, `task`) VALUES (3, 'Christian Mccafrey', 'SuperBowl Sunday', 'Run on the field during superbowl game and take the trophy.');
INSERT INTO `to_do` (`id`, `name`, `title`, `task`) VALUES (4, 'Tony Hawk', 'Skate Board Adventures', 'Skate at the park and tell kids im 42');

COMMIT;

