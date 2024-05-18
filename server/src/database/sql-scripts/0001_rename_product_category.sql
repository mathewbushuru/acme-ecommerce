ALTER TABLE "acme_category" RENAME TO "acme_product_category";
--> statement-breakpoint
ALTER TABLE "acme_product" DROP CONSTRAINT "acme_product_category_id_acme_category_id_fk";

--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "acme_product" ADD CONSTRAINT "acme_product_category_id_acme_product_category_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."acme_product_category"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
