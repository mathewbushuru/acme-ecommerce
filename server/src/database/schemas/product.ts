import {
  pgTable,
  serial,
  varchar,
  integer,
  numeric,
  boolean,
  timestamp,
} from "drizzle-orm/pg-core";

/**
 * Product table
 */
// table definition
export const product = pgTable("acme_product", {
  id: serial("id").primaryKey(),
  skuNumber: integer("sku_number").notNull().unique(),
  name: varchar("name", { length: 256 }).notNull(),
  description: varchar("description", { length: 256 }),
  sizeAndMeasurement: varchar("size_and_measurement", { length: 30 }).default(
    "1 each"
  ),
  categoryNumber: integer("category_number").references(
    () => productCategory.categoryNumber,
    {
      onDelete: "set null",
    }
  ),
  regularPrice: numeric("regular_price").notNull(),
  specialPrice: numeric("special_price"),
  isOnSpecial: boolean("is_on_special").default(false),
  vendorId: integer("vendor_id"),
  vendorOrderingCode: varchar("vendor_ordering_code").notNull(),
  status: varchar("status", { length: 50 }).$type<
    "draft" | "active" | "discontinued"
  >(),
  imageUrl: varchar("image_url", { length: 256 }),
  createdAt: timestamp("created_at").defaultNow(),
});

// read and write types
export type ProductType = typeof product.$inferSelect;
export type NewProductType = typeof product.$inferInsert;

/**
 * Category table
 */
// table definition
export const productCategory = pgTable("acme_product_category", {
  id: serial("id").primaryKey(),
  categoryNumber: integer("category_number").notNull().unique(),
  name: varchar("name", { length: 256 }).notNull(),
  imageUrl: varchar("image_url", { length: 256 }),
  createdAt: timestamp("created_at").defaultNow(),
});

// read and write types
export type ProductCategoryType = typeof productCategory.$inferSelect;
export type NewProductCategoryType = typeof productCategory.$inferInsert;
