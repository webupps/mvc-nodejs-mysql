-- to create a new database
CREATE DATABASE crudnodejs CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
-- to use database
use crudnodejs;

-- creating a new table
CREATE TABLE users (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  address VARCHAR(100) NOT NULL,
  phone VARCHAR(15)
);

-- to show all tables
show tables;

-- to describe table
describe users;