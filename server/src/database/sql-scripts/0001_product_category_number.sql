ALTER TABLE "acme_product" DROP CONSTRAINT "acme_product_category_id_acme_product_category_id_fk";

--> statement-breakpoint
ALTER TABLE "acme_product_category" ADD COLUMN "category_number" integer NOT NULL;

--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "acme_product" ADD CONSTRAINT "acme_product_category_id_acme_product_category_category_number_fk" FOREIGN KEY ("category_id") REFERENCES "public"."acme_product_category"("category_number") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

--> statement-breakpoint
ALTER TABLE "acme_product_category" ADD CONSTRAINT "acme_product_category_category_number_unique" UNIQUE("category_number");