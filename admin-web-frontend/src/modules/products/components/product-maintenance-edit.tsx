import { useParams, Navigate } from "react-router-dom";
import { toast } from "sonner";
import { ChevronLeft } from "lucide-react";

import { useGetProductByIdQuery } from "@/api";

import ProductLayout from "@/modules/products/layouts/product-layout";

import { Button } from "@/components/ui/button";

import { isServerErrorResponse } from "@/lib/utils";
import { type ServerErrorType } from "@/types/general";

export default function ProductMaintenanceEdit() {
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

  if (isLoading) {
    return (
      <ProductLayout
        title="Product Maintenance Edit"
        description="Fine grained search for all products in your inventory."
      >
        Loading...
      </ProductLayout>
    );
  }

  return (
    <ProductLayout
      title="Product Maintenance Edit"
      description="Fine grained search for all products in your inventory."
    >
      <div className="grid h-full gap-4 bg-red-50 md:gap-8">
        <div className="mx-auto grid max-w-60 auto-rows-max gap-4 bg-green-50">
          <div className="">
            <Button size="icon" variant="outline" className="h-7 w-7">
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Back</span>
            </Button>
          </div>
          {JSON.stringify(data)}
        </div>
      </div>
    </ProductLayout>
  );
}
