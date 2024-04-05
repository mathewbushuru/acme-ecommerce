import { useNavigate } from "react-router-dom";
import { Pencil } from "lucide-react";

import RootLayout from "@/layouts/root-layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function ProductsPage() {
  const navigate = useNavigate();
  return (
    <RootLayout>
      <div className="grid w-full md:grid-cols-[220px_1fr] lg:grid-cols-[250px_1fr]">
        {/* Sidebar  */}
        <div className="hidden shadow-lg md:block">
          <div className="flex h-full max-h-screen flex-col gap-2 border-r">
            <div className="flex border-b px-2 py-3 lg:px-4">
              <Button
                variant="secondary"
                size="sm"
                className="w-full justify-start"
              >
                <Pencil className="mr-2 h-4 w-4" />
                Enter Edit Mode
              </Button>
            </div>
            <div className="flex-1">
              <nav className="flex flex-col gap-2 px-2 lg:px-4">
                <Button
                  variant="default"
                  size="sm"
                  className="justify-start"
                  onClick={() => navigate("#")}
                >
                  General
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="justify-start"
                  onClick={() => navigate("#")}
                >
                  Add / Edit Product
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="justify-start"
                  onClick={() => navigate("#")}
                >
                  Add Product Specials
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="justify-start"
                  onClick={() => navigate("#")}
                >
                  Purchase Orders
                  <Badge variant="secondary" className="ml-auto flex h-5 w-5 shrink-0 items-center justify-center rounded-full">
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
                <Button
                  variant="ghost"
                  size="sm"
                  className="justify-start"
                  onClick={() => navigate("#")}
                >
                  Groups Setup
                </Button>
              </nav>
            </div>
          </div>
        </div>

        {/* Main  */}
        <div className="p-2">Products information maintenance</div>
      </div>
    </RootLayout>
  );
}
