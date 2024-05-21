SELECT * FROM acme_user;

DELETE FROM "acme_user";

SELECT * FROM acme_product_category;

SELECT * FROM acme_product;

-- Drop all tables
DROP TABLE IF EXISTS acme_user;

DROP TABLE IF EXISTS acme_product;

DROP TABLE IF EXISTS acme_product_category;

-- show all tables
SELECT table_name  FROM information_schema.tables
    WHERE table_schema = 'public';

-- Show all databases
SELECT datname FROM pg_database;
