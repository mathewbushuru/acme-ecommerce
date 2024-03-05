import { useGetProductCategoriesQuery } from "@/api";

import { fallbackAisleCategories } from "@/lib/constants";

export default function GroceryAisles() {
  const { data: allBackendCategories } = useGetProductCategoriesQuery();

  let allCategories: { name: string; imageUrl: string }[];

  if (!allBackendCategories) {
    allCategories = fallbackAisleCategories;
  } else {
    allCategories = allBackendCategories.categories;
  }

  return (
    <div className="mx-auto mt-8 max-w-screen-xl px-6">
      <h3 className="mb-8 text-center text-lg font-bold">
        Shop Grocery Aisles
      </h3>

      <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:grid-cols-6">
        {allCategories.map((category, index) => (
          <div
            className="flex cursor-pointer flex-col items-center gap-2"
            key={index}
          >
            <div className="flex h-36 w-36 items-center justify-center rounded-full bg-accent hover:bg-primary/10">
              <img
                src={category.imageUrl}
                className="h-24 w-36 rounded-full object-cover"
              />
            </div>
            <span className="text-center font-bold text-foreground/70">
              {category.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
