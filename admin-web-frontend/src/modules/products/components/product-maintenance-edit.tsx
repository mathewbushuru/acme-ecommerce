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
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

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
      <main className="grid gap-4 md:gap-8 ">
        <div className="grid max-w-[59rem] auto-rows-max gap-4 sm:mx-auto">
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
            <h1 className="max-w-[10rem] overflow-hidden text-ellipsis whitespace-nowrap text-xl font-semibold sm:max-w-[20rem] lg:max-w-[30rem]">
              {productData.name}
            </h1>
            <Badge variant="outline" className="ml-auto">
              In stock
            </Badge>
            <div className="hidden gap-2 md:ml-auto md:flex">
              <Button variant="outline" size="sm">
                Discard Changes
              </Button>
              <Button variant="secondary" size="sm">
                Save Changes
              </Button>
            </div>
          </div>

          {/* Main */}
          <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
            {/* Left cards  */}
            <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
              {/* Product details card */}
              <Card>
                <CardHeader>
                  <CardTitle>Product Details.</CardTitle>
                  <CardDescription>Sku, Name, Description</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6">
                    <div className="grid gap-3">
                      <Label htmlFor="sku">Sku number</Label>
                      <Input
                        id="sku"
                        type="text"
                        className="w-full bg-popover"
                        defaultValue={productData.id}
                      />
                    </div>
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
                        className="min-h-28 w-full bg-popover"
                        defaultValue={
                          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores repellat cum corrupti doloremque facilis quae"
                        }
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
              {/* Prices Card  */}
              {/* ProductCategoryCard  */}
            </div>

            {/* Right cards  */}
            <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
              {/* Product status card  */}
              <Card>
                <CardHeader>
                  <CardTitle>Product Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6">
                    <div className="grid gap-3">
                      <Label htmlFor="status">Status</Label>
                      <Select>
                        <SelectTrigger className="bg-popover">
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="draft">Draft</SelectItem>
                          <SelectItem value="active">Active</SelectItem>
                          <SelectItem value="discontinued">
                            Discontinued
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>
              {/* ProductImagesCard  */}
              {/* DeleteProductCard  */}
            </div>
          </div>

          {/* json  */}
          {/* <div className="max-w-xs overflow-hidden md:max-w-md">
            {JSON.stringify(productData)
              .split(",")
              .map((item, index) => (
                <p key={index}>{item}</p>
              ))}
          </div> */}
        </div>

        {/* Mobile action buttons */}
        <div className="flex items-center gap-2 md:hidden justify-center">
          <Button variant="outline" size="sm">
            Discard Changes
          </Button>
          <Button variant="secondary" size="sm">
            Save Changes
          </Button>
        </div>
      </main>
    </ProductLayout>
  );
}
