import { useParams, Navigate, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { ChevronLeft } from "lucide-react";

import { useGetProductByIdQuery } from "@/api";

import ProductLayout from "@/modules/products/layouts/product-layout";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

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
      <main className="bg-red-501 grid h-full gap-4 md:gap-8">
        <div className="bg-green-501 mx-auto grid max-w-[65rem] auto-rows-max gap-4">
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
            <div className="hidden md:flex gap-2 md:ml-auto">
              <Button variant="outline" size="sm">
                Discard Changes
              </Button>
              <Button variant="secondary" size="sm">Save Product</Button>
            </div>
          </div>
          <div className="max-w-xs overflow-hidden md:max-w-md">
            {JSON.stringify(productData)}
          </div>
        </div>
      </main>
    </ProductLayout>
  );
}
