ALTER TABLE "acme_product" RENAME COLUMN "category_id" TO "category_number";

--> statement-breakpoint
ALTER TABLE "acme_product" DROP CONSTRAINT "acme_product_category_id_acme_product_category_category_number_fk";

--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "acme_product" ADD CONSTRAINT "acme_product_category_number_acme_product_category_category_number_fk" FOREIGN KEY ("category_number") REFERENCES "public"."acme_product_category"("category_number") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
