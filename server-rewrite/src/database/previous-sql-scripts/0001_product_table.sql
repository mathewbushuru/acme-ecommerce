CREATE TABLE IF NOT EXISTS "acme_product" (
	"id" serial PRIMARY KEY NOT NULL,
	"sku_number" integer NOT NULL,
	"name" varchar(256) NOT NULL,
	"description" varchar(256),
	"category_id" integer DEFAULT 0,
	"regular_price" numeric NOT NULL,
	"special_price" numeric,
	"is_on_special" boolean DEFAULT false,
	"vendor_id" integer,
	"vendor_ordering_code" varchar NOT NULL,
	"status" varchar(50),
	"image_url" varchar(256),
	CONSTRAINT "acme_product_sku_number_unique" UNIQUE("sku_number")
);
