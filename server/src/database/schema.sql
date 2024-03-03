-- @block;
SHOW DATABASES;

-- @block;
CREATE DATABASE acmeDB;

-- @block;
USE acmeDB;

-- @block;
SHOW TABLES;

-- @block;
DROP TABLE IF EXISTS acme_users;
CREATE TABLE acme_users (
    `id` BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    `email` VARCHAR(255) NOT NULL UNIQUE,
    `hashedPassword` VARCHAR(255) NOT NULL,
    `firstName` VARCHAR(255) NOT NULL,
    `lastName` VARCHAR(255) NOT NULL,
    `createdAt` TIMESTAMP NOT NULL DEFAULT(now()),
    `updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- @block;
INSERT INTO acme_users(
    `email`,
    `hashedPassword`,
    `firstName`,
    `lastName`
) VALUES (
    "mattb@test.com", "Tester123!", "Matt", "B"
);

-- @block;
SELECT * FROM acme_users;
