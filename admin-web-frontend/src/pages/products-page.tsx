import { useNavigate } from "react-router-dom";
import { Pencil } from "lucide-react";

import RootLayout from "@/layouts/root-layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ProductsPage() {
  const navigate = useNavigate();
  return (
    <RootLayout>
      <div className="grid w-full md:grid-cols-[220px_1fr] lg:grid-cols-[250px_1fr]">
        {/* Sidebar  */}
        <div className="hidden shadow-lg md:block 2xl:shadow-none">
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
                  Products
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="justify-start"
                  onClick={() => navigate("#")}
                >
                  Product Specials
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="justify-start"
                  onClick={() => navigate("#")}
                >
                  Product Categories
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
            <div className="mt-auto p-4">
              <Card>
                <CardHeader className="p-2 md:p-4">
                  <CardTitle className="text-xl">Need help?</CardTitle>
                  <CardDescription>
                    Reach out to our support team.
                  </CardDescription>
                  <CardContent className="p-2 pt-0 md:p-0 md:pt-2">
                    <Button
                      size="sm"
                      className="w-full bg-popover"
                      variant="outline"
                    >
                      Contact us
                    </Button>
                  </CardContent>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>

        {/* Page Content  */}
        <main className="flex flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div>
            <h1 className="text-lg font-semibold md:text-xl">Inventory Maintenance</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              View product details, or enter 'Edit Mode' to edit product details
              / add new products.
            </p>
          </div>

          <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
            <div className="flex flex-col items-center gap-1 text-center">
              <h3 className="text-xl font-bold">You have no products.</h3>
              <p className="text-sm text-muted-foreground">
                You can start selling as soon as you add a product.
              </p>
              <Button className="mt-4">Add Product</Button>
            </div>
          </div>
        </main>
      </div>
    </RootLayout>
  );
}
