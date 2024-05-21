import { useLocation, useNavigate } from "react-router-dom";
import { Database } from "lucide-react";

import ContactSupportCard from "@/components/contact-support-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function ProductPageSidebar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <div className="flex h-full max-h-screen flex-col gap-2 border-r">
      <div className="flex border-b px-2 py-3 lg:px-4">
        <Button variant="secondary" size="sm" className="w-full justify-start">
          <Database className="mr-2 h-4 w-4" />
          Reset database
        </Button>
      </div>
      <div className="flex-1">
        <nav className="flex flex-col gap-2 px-2 lg:px-4">
          <Button
            variant={pathname === "/products/home" ? "default" : "ghost"}
            size="sm"
            className="justify-start"
            onClick={() => navigate("/products/home")}
          >
            Products Home
          </Button>
          <Button
            variant={
              pathname.startsWith("/products/maintenance") ? "default" : "ghost"
            }
            size="sm"
            className="justify-start"
            onClick={() => navigate("/products/maintenance")}
          >
            Product Maintenance
          </Button>
          <Button
            variant={pathname === "/products/categories" ? "default" : "ghost"}
            size="sm"
            className="justify-start"
            onClick={() => navigate("/products/categories")}
          >
            Product Categories
          </Button>
          <Button
            variant={pathname === "/products/specials" ? "default" : "ghost"}
            size="sm"
            className="justify-start"
            onClick={() => navigate("/products/specials")}
          >
            Product Specials
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="justify-start"
            onClick={() => navigate("#")}
          >
            Purchase Orders
            <Badge
              variant="secondary"
              className="ml-auto flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
            >
              3
            </Badge>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="justify-start"
            onClick={() => navigate("#")}
          >
            CSV Imports
          </Button>
        </nav>
      </div>
      <div className="mt-auto p-4">
        <ContactSupportCard />
      </div>
    </div>
  );
}
