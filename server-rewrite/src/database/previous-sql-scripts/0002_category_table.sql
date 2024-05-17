CREATE TABLE IF NOT EXISTS "acme_category" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256) NOT NULL,
	"image_url" varchar(256),
	"created_at" timestamp DEFAULT now()
);

ALTER TABLE "acme_product"
ADD COLUMN "created_at" timestamp DEFAULT now();

DO $$ BEGIN
ALTER TABLE "acme_product"
ADD CONSTRAINT "acme_product_category_id_acme_category_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."acme_category"("id") ON DELETE
set null ON UPDATE no action;
EXCEPTION
WHEN duplicate_object THEN null;
END $$;