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
    )
VALUES (
        "mattb@test.com",
        "Tester123!",
        "Matt",
        "B"
    );

-- @block;
SELECT * FROM acme_users;

-- @block;
DROP TABLE IF EXISTS acme_categories;
CREATE TABLE acme_categories (
    `id` BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL UNIQUE,
    `imageUrl` VARCHAR(255) NOT NULL,
    `createdAt` TIMESTAMP NOT NULL DEFAULT(now()),
    `updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- @block;
INSERT INTO acme_categories(`name`, `imageUrl`)
VALUES (
        "Meat & Seafood",
        "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ),
    (
        "Fruits & Vegetables",
        "https://images.unsplash.com/photo-1622921491193-345ffb510f6f?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ),
    (
        "Dairy & Eggs",
        "https://images.unsplash.com/photo-1568405284653-65eca506b080?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ),
    (
        "Frozen",
        "https://images.unsplash.com/photo-1530027613618-a3b5391592ca?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ),
    (
        "Bakery",
        "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ),
    (
        'Deli & Ready Made Meals',
        "https://images.unsplash.com/photo-1518492104633-130d0cc84637?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ),
    (
        "Plant Based & Non Dairy",
        "https://images.unsplash.com/photo-1585297099941-c912e47e20d2?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ),
    (
        "Pantry",
        "https://images.unsplash.com/photo-1626607007733-d09228471d9f?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ),
    (
        "Health & Beauty",
        "https://images.unsplash.com/photo-1595348020949-87cdfbb44174?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ),
    (
        "Baby Care",
        "https://images.unsplash.com/photo-1584839404042-8bc21d240e91?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ),
    (
        "Pet Care",
        "https://images.unsplash.com/photo-1608408891486-f5cade977d19?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ),
    (
        "Cleaning, Paper & Home",
        "https://images.unsplash.com/photo-1624372646014-205ddf15eb9f?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    );

--@block;
SELECT * FROM acme_categories;

--@block;
SELECT * FROM acme_categories WHERE id = 1;