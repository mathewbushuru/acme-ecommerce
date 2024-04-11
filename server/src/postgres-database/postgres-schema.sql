-- show tables
-- @block;
SELECT table_name FROM information_schema.tables
    WHERE table_schema = 'public';

-- need to set manual trigger for updatedAt to match MySQL's ON UPDATE
-- @block;
BEGIN;
DROP TABLE IF EXISTS acme_users;
CREATE TABLE acme_users (
    id              BIGSERIAL PRIMARY KEY,
    email           VARCHAR(255) NOT NULL UNIQUE,
    hashedPassword  VARCHAR(255) NOT NULL,
    firstName       VARCHAR(255) NOT NULL,
    lastName        VARCHAR(255) NOT NULL,
    createdAt       TIMESTAMP NOT NULL DEFAULT now(),
    updatedAt       TIMESTAMP NOT NULL DEFAULT now()
);
COMMIT;

-- @block;
INSERT INTO acme_users( email, hashedPassword, firstName, lastName )
                VALUES (
                    'mattb@test.com',
                    '$2b$10$bOtkRma07SLp0lQ4gy.dYeOs0SPxUmB4HB4mqHWizfK1c5cZ6a8IS',
                    'Matt',
                    'B'
                );

-- @block;
SELECT * FROM acme_users;

-- need to set manual trigger for updatedAt to match MySQL's ON UPDATE
-- @block;
BEGIN;
DROP TABLE IF EXISTS acme_categories;
CREATE TABLE acme_categories (
    id          BIGSERIAL PRIMARY KEY,
    name        VARCHAR(100) NOT NULL UNIQUE,
    imageUrl    VARCHAR(255) NOT NULL,
    createdAt   TIMESTAMP NOT NULL DEFAULT now(),
    updatedAt   TIMESTAMP NOT NULL DEFAULT now()
);  
COMMIT;    

-- @block;
INSERT INTO acme_categories(name, imageUrl)
VALUES (
        'Meat & Seafood',
        'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ),
    (
        'Fruits & Vegetables',
        'https://images.unsplash.com/photo-1622921491193-345ffb510f6f?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ),
    (
        'Dairy & Eggs',
        'https://images.unsplash.com/photo-1568405284653-65eca506b080?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ),
    (
        'Frozen',
        'https://images.unsplash.com/photo-1530027613618-a3b5391592ca?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ),
    (
        'Bakery',
        'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ),
    (
        'Deli & Ready Made Meals',
        'https://images.unsplash.com/photo-1518492104633-130d0cc84637?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ),
    (
        'Plant Based & Non Dairy',
        'https://images.unsplash.com/photo-1585297099941-c912e47e20d2?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ),
    (
        'Pantry',
        'https://images.unsplash.com/photo-1626607007733-d09228471d9f?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ),
    (
        'Health & Beauty',
        'https://images.unsplash.com/photo-1595348020949-87cdfbb44174?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ),
    (
        'Baby Care',
        'https://images.unsplash.com/photo-1584839404042-8bc21d240e91?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ),
    (
        'Pet Care',
        'https://images.unsplash.com/photo-1608408891486-f5cade977d19?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ),
    (
        'Cleaning, Paper & Home',
        'https://images.unsplash.com/photo-1624372646014-205ddf15eb9f?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    );

-- @block;
SELECT * FROM acme_categories;

-- @block;
SELECT * FROM acme_categories WHERE id = 1;

-- need to set manual trigger for updatedAt to match MySQL's ON UPDATE
-- @block;
BEGIN;
DROP TABLE IF EXISTS acme_products;
CREATE TABLE acme_products (
    id              BIGSERIAL PRIMARY KEY,
    name            VARCHAR(255) NOT NULL UNIQUE,
    categoryId      BIGINT NOT NULL DEFAULT 0,
    regularPrice    INT NOT NULL,
    specialPrice    INT,
    isOnSpecial     SMALLINT DEFAULT 0,
    size            VARCHAR(50) NOT NULL,
    imageUrl        VARCHAR(255) NOT NULL,
    createdAt       TIMESTAMP NOT NULL DEFAULT now(),
    updatedAt       TIMESTAMP NOT NULL DEFAULT now()
);
COMMIT;

-- @block;
SELECT * FROM acme_products;

--@block;
INSERT INTO acme_products(name, categoryId, regularPrice, specialPrice, isOnSpecial, size, imageUrl)
VALUES (
    'Blueberries - Fresh',
    0, 799, 399, 1,
    '1 pint, 1 each',
    'https://images.unsplash.com/photo-1498557850523-fd3d118b962e?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
),
(
    'Meat Lasagna',
    0, 1169, 749, 1,
    '907 Grams',
    'https://plus.unsplash.com/premium_photo-1664472658489-8bb2cf572db1?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
),
(
    'Ancient Grains Bread',
    0, 799, 399, 1,
    '600 Grams',
    'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
),
(
    'Maple & Brown Sugar Flavour Oat Meal',
    0, 479, 300, 1,
    '12 Pack',
    'https://images.unsplash.com/photo-1494597564530-871f2b93ac55?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
),
(
    'Breakfast Cereal',
    0, 1249, 899, 1,
    '850 Grams',
    'https://images.unsplash.com/photo-1517456944721-229d38679dfa?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
),
(
    'Sea Salt &  Vinegar Potato Chips',
    0, 549, 379, 1,
    '200 Grams',
    'https://images.unsplash.com/photo-1621447504864-d8686e12698c?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
),
(
    'Coca-Cola Soft Drinks',
    0, 1249, 869, 1,
    '12 Pack',
    'https://images.unsplash.com/photo-1498557850523-fd3d118b962e?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
);

-- @block;
SELECT * FROM acme_products;

-- need to set manual trigger for updatedAt to match MySQL's ON UPDATE
-- @block;
BEGIN;
DROP TABLE IF EXISTS acme_employees;
CREATE TABLE acme_employees (
    id              BIGSERIAL PRIMARY KEY,
    email           VARCHAR(255) NOT NULL UNIQUE,
    hashedPassword  VARCHAR(255) NOT NULL,
    firstName       VARCHAR(255) NOT NULL,
    lastName        VARCHAR(255) NOT NULL,
    isadmin         SMALLINT DEFAULT 0,
    createdAt       TIMESTAMP NOT NULL DEFAULT now(),
    updatedAt       TIMESTAMP NOT NULL DEFAULT now()
);
COMMIT;

-- @block;
SELECT *  FROM acme_employees;

-- @block;
INSERT INTO acme_employees( email, hashedPassword, firstName, lastName, isadmin )
                VALUES (
                    'mattb@test.com',
                    '$2b$10$bOtkRma07SLp0lQ4gy.dYeOs0SPxUmB4HB4mqHWizfK1c5cZ6a8IS',
                    'Matt',
                    'B',
                    1
                );
