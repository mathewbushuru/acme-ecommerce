CREATE TABLE IF NOT EXISTS "acme_category" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256) NOT NULL,
	"image_url" varchar(256),
	"created_at" timestamp DEFAULT now()
);

CREATE TABLE IF NOT EXISTS "acme_product" (
	"id" serial PRIMARY KEY NOT NULL,
	"sku_number" integer NOT NULL,
	"name" varchar(256) NOT NULL,
	"description" varchar(256),
	"category_id" integer,
	"regular_price" numeric NOT NULL,
	"special_price" numeric,
	"is_on_special" boolean DEFAULT false,
	"vendor_id" integer,
	"vendor_ordering_code" varchar NOT NULL,
	"status" varchar(50),
	"image_url" varchar(256),
	"created_at" timestamp DEFAULT now(),
	CONSTRAINT "acme_product_sku_number_unique" UNIQUE("sku_number")
);

CREATE TABLE IF NOT EXISTS "acme_user" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" varchar(256) NOT NULL,
	"hashed_password" text NOT NULL,
	"first_name" varchar(256) NOT NULL,
	"last_name" varchar(256) NOT NULL,
	"role" varchar(50),
	"created_at" timestamp DEFAULT now(),
	CONSTRAINT "acme_user_email_unique" UNIQUE("email")
);

DO $$ BEGIN
 ALTER TABLE "acme_product" ADD CONSTRAINT "acme_product_category_id_acme_category_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."acme_category"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
