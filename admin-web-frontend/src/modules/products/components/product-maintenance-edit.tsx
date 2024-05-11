import { useParams, Navigate, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { ChevronLeft } from "lucide-react";

import { useGetProductByIdQuery } from "@/api";

import ProductLayout from "@/modules/products/layouts/product-layout";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { isServerErrorResponse } from "@/lib/utils";
import { type ServerErrorType } from "@/types/general";

export default function ProductMaintenanceEdit() {
  const navigate = useNavigate();
  const { skuNumber } = useParams();

  if (!skuNumber) {
    toast.error("Sku number is required!");
    return <Navigate to="/products/maintenance" replace />;
  }

  const { data, isLoading, error } = useGetProductByIdQuery(skuNumber);

  if (error) {
    const errorData = (
      isServerErrorResponse(error)
        ? error.data
        : { errorMessage: "Something went wrong" }
    ) as ServerErrorType;
    toast.error(
      errorData.errorMessage ||
        `Sku number ${skuNumber ? skuNumber : ""} not in database.`,
    );

    return <Navigate to="/products/maintenance" replace />;
  }

  if (isLoading || !data) {
    return (
      <ProductLayout
        title="Product Maintenance Edit"
        description="Fine grained search for all products in your inventory."
      >
        Loading...
      </ProductLayout>
    );
  }

  const { productData } = data;

  return (
    <ProductLayout
      title="Product Maintenance Edit"
      description="Fine grained search for all products in your inventory."
    >
      <main className="grid h-full gap-4 md:gap-8">
        <div className="mx-auto grid max-w-[59rem] auto-rows-max gap-4">
          {/* header  */}
          <div className="flex items-center gap-4">
            <Button
              size="icon"
              variant="outline"
              className="h-7 w-7"
              onClick={() => navigate(-1)}
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Back</span>
            </Button>
            <h1 className="shrink-0 whitespace-nowrap text-xl font-semibold">
              {productData.name}
            </h1>
            <Badge variant="outline">In stock</Badge>
            <div className="hidden gap-2 md:ml-auto md:flex">
              <Button variant="outline" size="sm">
                Discard Changes
              </Button>
              <Button variant="secondary" size="sm">
                Save Product
              </Button>
            </div>
          </div>

          {/* Main */}
          <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
            <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
              {/* Product details card */}
              <Card>
                <CardHeader>
                  <CardTitle>Product Details.</CardTitle>
                  <CardDescription>Name, Description</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6">
                    <div className="grid gap-3">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        type="text"
                        className="w-full bg-popover"
                        defaultValue={productData.name}
                      />
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="description">Description</Label>
                      <Textarea
                        id="description"
                        className="w-full min-h-28 bg-popover"
                        defaultValue={
                          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores repellat cum corrupti doloremque facilis quae"
                        }
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* json  */}
          <div className="max-w-xs overflow-hidden md:max-w-md">
            {JSON.stringify(productData)}
          </div>
        </div>
      </main>
    </ProductLayout>
  );
}
