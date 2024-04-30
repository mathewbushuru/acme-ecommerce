import { useNavigate } from "react-router-dom";

export type ProductLinkType =
  | "products-all"
  | "products-categories"
  | "products-specials"
  | "purchase-orders";

export default function ProductNavigation({
  activeLink,
}: {
  activeLink: ProductLinkType;
}) {
  const navigate = useNavigate();
  return (
    <div className="mb-2 flex flex-wrap gap-2 text-xs md:hidden">
      <span
        className={`cursor-pointer ${activeLink === "products-all" && "text-primary"}`}
        onClick={() => navigate("/products/all")}
      >
        All Products |
      </span>
      <span
        className={`cursor-pointer ${activeLink === "products-categories" && "text-primary"}`}
        onClick={() => navigate("#")}
      >
        Product Categories |
      </span>
      <span
        className={`cursor-pointer ${activeLink === "products-specials" && "text-primary"}`}
        onClick={() => navigate("#")}
      >
        Product Specials |
      </span>
      <span
        className={`cursor-pointer ${activeLink === "purchase-orders" && "text-primary"}`}
        onClick={() => navigate("#")}
      >
        Purchase Orders
      </span>
    </div>
  );
}
