# SQL Manager 2005 for MySQL 3.6.5.1
# ---------------------------------------
# Host     : localhost
# Port     : 3306
# Database : dbmutatios


SET FOREIGN_KEY_CHECKS=0;

CREATE DATABASE `dbmutatios`
    CHARACTER SET 'latin1'
    COLLATE 'latin1_swedish_ci';

#
# Structure for the `mutations` table : 
#

CREATE TABLE `mutations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `dna` varchar(255) DEFAULT NULL,
  `mutant` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=latin1;

