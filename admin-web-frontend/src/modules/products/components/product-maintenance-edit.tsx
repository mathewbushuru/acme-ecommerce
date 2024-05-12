import { useParams, Navigate, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { ChevronLeft, Upload } from "lucide-react";

import { useGetProductByIdQuery, useGetAllCategoriesQuery } from "@/api";

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
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { isServerErrorResponse } from "@/lib/utils";
import { type ServerErrorType } from "@/types/general";

export default function ProductMaintenanceEdit() {
  const navigate = useNavigate();
  const { skuNumber } = useParams();

  const { data: categoryData } = useGetAllCategoriesQuery();

  if (!skuNumber) {
    toast.error("Sku number is required!");
    return <Navigate to="/products/maintenance" replace />;
  }

  const { data, isLoading, error } = useGetProductByIdQuery(skuNumber);

  if (error) {
    const errorData = (
      isServerErrorResponse(error)
        ? error.data
        : { errorMessage: "Something went wrong." }
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
      <main className="grid gap-4 md:gap-8">
        <div className="grid auto-rows-max gap-4">
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
              {productData.name}{" "}
              <span className="text-base font-normal">{`[#${productData.id}]`}</span>
            </h1>
            <Badge variant="outline" className="ml-auto sm:ml-0">
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
          <div className="scrollbar-hide grid h-[63vh] gap-4 overflow-y-auto md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8    2xl:h-[69vh]">
            {/* Left cards  */}
            <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
              {/* Product details card */}
              <Card>
                <CardHeader>
                  <CardTitle>Product Details.</CardTitle>
                  <CardDescription>Sku, Name, Description.</CardDescription>
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
              <Card>
                <CardHeader>
                  <CardTitle>Prices</CardTitle>
                  <CardDescription>
                    Case Cost and Case Quantity, Retail Price and Retail
                    Quantity.
                  </CardDescription>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead />
                          <TableHead>Price (CAD)</TableHead>
                          <TableHead>Quantity</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>Case Cost</TableCell>
                          <TableCell>
                            <Label htmlFor="case-cost" className="sr-only">
                              Case Cost Price
                            </Label>
                            <Input
                              id="case-cost"
                              type="number"
                              defaultValue={
                                Math.round(productData.regularPrice * 0.75) /
                                100
                              }
                              className="bg-popover"
                            />
                          </TableCell>
                          <TableCell>
                            <Label htmlFor="case-quantity" className="sr-only">
                              Case Quantity
                            </Label>
                            <Input
                              id="case-quantity"
                              type="number"
                              defaultValue={1}
                              className="bg-popover"
                            />
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Retail Price</TableCell>
                          <TableCell>
                            <Label htmlFor="retail-price" className="sr-only">
                              Retail Price
                            </Label>
                            <Input
                              id="retail-price"
                              type="number"
                              defaultValue={productData.regularPrice / 100}
                              className="bg-popover"
                            />
                          </TableCell>
                          <TableCell>
                            <Label
                              htmlFor="retail-quantity"
                              className="sr-only"
                            >
                              Retail Quantity
                            </Label>
                            <Input
                              id="retail-quantity"
                              type="number"
                              defaultValue={1}
                              className="bg-popover"
                            />
                          </TableCell>
                        </TableRow>
                      </TableBody>
                      <TableFooter>
                        <TableRow>
                          <TableCell colSpan={2}>Gross Margin</TableCell>
                          <TableCell>25%</TableCell>
                        </TableRow>
                      </TableFooter>
                    </Table>
                  </CardContent>
                </CardHeader>
              </Card>

              {/* ProductCategoryCard  */}
              <Card>
                <CardHeader>
                  <CardTitle>Product Category</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 sm:grid-cols-3">
                    <div className="grid gap-3">
                      <Label htmlFor="category">Category</Label>
                      <Select>
                        <SelectTrigger id="category" className="bg-popover">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          {!categoryData ? (
                            <SelectItem value="Loading">Loading ...</SelectItem>
                          ) : (
                            categoryData.allCategories.map((category) => (
                              <SelectItem value={category.id} key={category.id}>
                                {category.name}
                              </SelectItem>
                            ))
                          )}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid gap-3">
                      <Label htmlFor="subcategory">
                        Subcategory (Optional)
                      </Label>
                      <Select>
                        <SelectTrigger id="subcategory" className="bg-popover">
                          <SelectValue placeholder="Select subcategory" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="no-tax">No tax</SelectItem>
                          <SelectItem value="gst">GST only</SelectItem>
                          <SelectItem value="pst">PST only</SelectItem>
                          <SelectItem value="gst+pst">GST + PST</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* json  */}
              {/* <div className="max-w-xs overflow-hidden md:max-w-md">
                {JSON.stringify(productData)
                  .split(",")
                  .map((item, index) => (
                    <p key={index}>{item}</p>
                  ))}
              </div> */}
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
                        <SelectTrigger id="status" className="bg-popover">
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
              <Card>
                <CardHeader>
                  <CardTitle>Product Images</CardTitle>
                  <CardDescription>Online website images</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    <img
                      alt={productData.name}
                      className="aspect-square w-full rounded-md object-cover"
                      src={productData.imageUrl}
                    />

                    <div className="grid grid-cols-3 gap-2">
                      <img
                        alt={productData.name}
                        className="aspect-square rounded-md  object-cover"
                        src="/placeholder.svg"
                      />
                      <img
                        alt={productData.name}
                        className="aspect-square rounded-md  object-cover"
                        src="/placeholder.svg"
                      />
                      <button className="flex aspect-square items-center justify-center rounded-md border border-dashed">
                        <Upload className="h-5 w-5 text-muted-foreground" />
                        <span className="sr-only">Upload</span>
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* DeleteProductCard  */}
              <Card>
                <CardHeader>
                  <CardTitle>Delete Product</CardTitle>
                  <CardDescription>You will lose all data about this product including analytics. Change it's status to 'Discontinued' to keep historical data.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="destructive">
                    Delete Product
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Mobile action buttons */}
        <div className="flex items-center justify-center gap-2 md:hidden">
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
