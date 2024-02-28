export default function GroceryAisles() {
  return (
    <div className="mx-auto mt-8 max-w-screen-xl px-6">
      <h3 className="mb-8 text-center text-lg font-bold">
        Shop Grocery Aisles
      </h3>

      <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:grid-cols-6">
        {aisleCategories.map((category, index) => (
          <div className="flex flex-col items-center gap-2 cursor-pointer" key={index}>
            <div className="flex h-36 w-36 items-center justify-center rounded-full bg-accent hover:bg-primary/10">
              <img
                src={category.imgUrl}
                className="h-24 w-36 rounded-full object-cover"
              />
            </div>
            <span className="font-bold text-foreground/70 text-center">
              {category.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

const aisleCategories = [
  {
    name: "Meat & Seafood",
    imgUrl:
      "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Fruits & Vegetables",
    imgUrl:
      "https://images.unsplash.com/photo-1622921491193-345ffb510f6f?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Dairy & Eggs",
    imgUrl:
      "https://images.unsplash.com/photo-1568405284653-65eca506b080?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Frozen",
    imgUrl:
      "https://images.unsplash.com/photo-1530027613618-a3b5391592ca?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Bakery",
    imgUrl:
      "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Deli & Ready Made Meals",
    imgUrl:
      "https://images.unsplash.com/photo-1518492104633-130d0cc84637?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Plant Based",
    imgUrl:
      "https://images.unsplash.com/photo-1585297099941-c912e47e20d2?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Pantry",
    imgUrl:
      "https://images.unsplash.com/photo-1626607007733-d09228471d9f?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Health & Beauty",
    imgUrl:
      "https://images.unsplash.com/photo-1595348020949-87cdfbb44174?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Baby Care",
    imgUrl:
      "https://images.unsplash.com/photo-1584839404042-8bc21d240e91?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Pet Care",
    imgUrl:
      "https://images.unsplash.com/photo-1608408891486-f5cade977d19?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Cleaning, Paper & Home",
    imgUrl:
      "https://images.unsplash.com/photo-1624372646014-205ddf15eb9f?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
