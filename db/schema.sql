/*

To run this file, we do the following in our Terminal:

1. Go to the directory of this sql file.

2. Get into our mysql console.

3. Run "source schema.sql"


DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burger_db;

-- Create the table tasks.
CREATE TABLE burgers (
  id int NOT NULL AUTO_INCREMENT,
  burger_name STRING NOT NULL,
  devoured BOOLEAN NOT NULL,
  PRIMARY KEY (id)
);
