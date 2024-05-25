import { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "sonner";
import { Upload } from "lucide-react";

import api, {
  useGetAllCategoriesQuery,
  useLazyGetProductBySkuNumberQuery,
} from "@/api";
import { useAppDispatch } from "@/store/store";

import { cn, isServerErrorResponse } from "@/lib/utils";

import ProductLayout from "@/modules/products/layouts/product-layout";

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

export default function ProductMaintenance() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [skuNumber, setSkuNumber] = useState<string>("");
  const skuInputRef = useRef<HTMLInputElement | null>(null);

  const [inSearchSkuPhase, setInSearchSkuPhase] = useState(true);

  const dispatch = useAppDispatch();

  const { data: categoryData } = useGetAllCategoriesQuery();

  const [
    searchSkuTrigger,
    { error, isLoading, isSuccess: skuQueryIsSuccessful },
  ] = useLazyGetProductBySkuNumberQuery();

  useEffect(() => {
    if (skuQueryIsSuccessful) {
      toast.success(`Sku # ${skuNumber} is in system. Edit Product Mode.`);
      navigate(`/products/maintenance/${skuNumber}`, {
        state: { fromPathname: pathname },
      });
    }
  }, [skuQueryIsSuccessful, navigate, pathname]);

  useEffect(() => {
    if (isServerErrorResponse(error) && error.status === 404) {
      // Enter Add New Product phase
      setInSearchSkuPhase(false);
    }
  }, [error]);

  const [name, setName] = useState("");
  const [categoryId, setCategoryId] = useState<string | undefined>(undefined);

  console.log({ skuNumber, name, categoryId });

  const handleSearchProductSubmit = async (
    e:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();

    if (!skuNumber) {
      toast.error("Sku number is required.");
      skuInputRef.current?.focus();
      return;
    }

    if (isNaN(Number(skuNumber))) {
      toast.error(`Sku number '${skuNumber}' must be a valid number.`);
      setSkuNumber("");
      skuInputRef.current?.focus();
      return;
    }

    await searchSkuTrigger(skuNumber);
  };

  const handleAddProductSubmit = (
    e:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();

    if (!skuNumber) {
      toast.error("Sku number is required.");
      return;
    }

    toast.success("New product added.");

    navigate("/products/list");
  };

  const handleDiscardChanges = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();

    dispatch(api.util.resetApiState());
    setInSearchSkuPhase(true);

    setSkuNumber("");
    setName("");
    setCategoryId(undefined);
  };

  return (
    <ProductLayout
      title="Product Maintenance"
      description="Create a new product or search for a product in your inventory."
    >
      <main>
        <form
          className={cn("grid gap-4 md:gap-8", isLoading && "opacity-50")}
          onSubmit={
            inSearchSkuPhase
              ? handleSearchProductSubmit
              : handleAddProductSubmit
          }
        >
          <div className="grid auto-rows-max gap-4">
            {/* header  */}
            <div className="flex items-center gap-4">
              <h1 className="max-w-[10rem] overflow-hidden text-ellipsis whitespace-nowrap text-xl font-semibold sm:max-w-[20rem] lg:max-w-[30rem]">
                <>
                  {name ? name : "Edit or Add New Product"}{" "}
                  <span className="text-base font-normal">
                    {skuNumber && `[#${skuNumber}]`}
                  </span>
                </>
              </h1>
              <div className="hidden gap-2 md:ml-auto md:flex">
                {inSearchSkuPhase ? (
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={handleSearchProductSubmit}
                  >
                    Search Sku
                  </Button>
                ) : (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleDiscardChanges}
                    type="button"
                  >
                    Discard Changes
                  </Button>
                )}
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={handleAddProductSubmit}
                  disabled={inSearchSkuPhase}
                >
                  Add Product
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
                          value={skuNumber}
                          onChange={(e) => setSkuNumber(e.target.value)}
                          placeholder={
                            inSearchSkuPhase
                              ? `Search by Sku number`
                              : `Sku number`
                          }
                          ref={skuInputRef}
                          autoFocus={inSearchSkuPhase}
                          disabled={!inSearchSkuPhase}
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          type="text"
                          className="w-full bg-popover"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          autoFocus={!inSearchSkuPhase}
                          placeholder={
                            inSearchSkuPhase
                              ? "Search by product name"
                              : "Product name"
                          }
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label
                          htmlFor="description"
                          className={
                            inSearchSkuPhase ? "text-muted-foreground" : ""
                          }
                        >
                          Description
                        </Label>
                        <Textarea
                          id="description"
                          className="min-h-28 w-full bg-popover"
                          disabled={inSearchSkuPhase}
                          placeholder={
                            inSearchSkuPhase ? "" : "Add product description"
                          }
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Vendor card  */}
                <Card>
                  <CardHeader>
                    <CardTitle>Vendor</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="grid gap-3">
                        <Label htmlFor="name">Vendor name</Label>
                        <Input
                          id="name"
                          type="text"
                          className="w-full bg-popover"
                          placeholder={
                            inSearchSkuPhase
                              ? `Search by vendor name`
                              : `Vendor name`
                          }
                        />
                      </div>

                      <div className="grid gap-3">
                        <Label htmlFor="ordering-code">Ordering code</Label>
                        <Input
                          id="ordering-code"
                          type="text"
                          className="w-full bg-popover"
                          placeholder={
                            inSearchSkuPhase
                              ? `Search by ordering code`
                              : `Ordering code`
                          }
                        />
                      </div>
                    </div>
                  </CardContent>
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
                        <Select
                          value={categoryId}
                          onValueChange={(selectedCategoryId) =>
                            setCategoryId(selectedCategoryId)
                          }
                        >
                          <SelectTrigger id="category" className="bg-popover">
                            <SelectValue
                              placeholder={
                                inSearchSkuPhase
                                  ? "Select category to search"
                                  : "Select category"
                              }
                            >
                              {categoryId}
                              {categoryId
                                ? categoryData &&
                                  `- ${
                                    categoryData.find((c) => c.id == categoryId)
                                      ?.name
                                  }`
                                : "Select category"}
                            </SelectValue>
                          </SelectTrigger>
                          <SelectContent>
                            {!categoryData ? (
                              <SelectItem value="Loading">
                                Loading ...
                              </SelectItem>
                            ) : (
                              categoryData.map((category) => (
                                <SelectItem
                                  value={category.id}
                                  key={category.id}
                                >
                                  {category.id} - {category.name}
                                </SelectItem>
                              ))
                            )}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="grid gap-3">
                        <Label
                          htmlFor="subcategory"
                          className={
                            inSearchSkuPhase ? "text-muted-foreground" : ""
                          }
                        >
                          Subcategory
                        </Label>
                        <Select disabled={inSearchSkuPhase}>
                          <SelectTrigger
                            id="subcategory"
                            className="bg-popover"
                          >
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
                            <TableCell
                              className={
                                inSearchSkuPhase ? "text-muted-foreground" : ""
                              }
                            >
                              Case Cost
                            </TableCell>
                            <TableCell>
                              <Label htmlFor="case-cost" className="sr-only">
                                Case Cost Price
                              </Label>
                              <Input
                                id="case-cost"
                                type="number"
                                className="bg-popover"
                                disabled={inSearchSkuPhase}
                              />
                            </TableCell>
                            <TableCell>
                              <Label
                                htmlFor="case-quantity"
                                className="sr-only"
                              >
                                Case Quantity
                              </Label>
                              <Input
                                id="case-quantity"
                                type="number"
                                className="bg-popover"
                                disabled={inSearchSkuPhase}
                              />
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell
                              className={
                                inSearchSkuPhase ? "text-muted-foreground" : ""
                              }
                            >
                              Retail Price
                            </TableCell>
                            <TableCell>
                              <Label htmlFor="retail-price" className="sr-only">
                                Retail Price
                              </Label>
                              <Input
                                id="retail-price"
                                type="number"
                                className="bg-popover"
                                disabled={inSearchSkuPhase}
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
                                disabled={inSearchSkuPhase}
                                className="bg-popover"
                              />
                            </TableCell>
                          </TableRow>
                        </TableBody>
                        <TableFooter>
                          <TableRow>
                            <TableCell
                              className={
                                inSearchSkuPhase ? "text-muted-foreground" : ""
                              }
                              colSpan={2}
                            >
                              Gross Margin
                            </TableCell>
                            <TableCell
                              className={
                                inSearchSkuPhase ? "text-muted-foreground" : ""
                              }
                            >
                              0.00%
                            </TableCell>
                          </TableRow>
                        </TableFooter>
                      </Table>
                    </CardContent>
                  </CardHeader>
                </Card>
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
                            <SelectValue
                              placeholder={
                                inSearchSkuPhase
                                  ? "Search by product status"
                                  : "Select status"
                              }
                            />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="draft">Draft</SelectItem>
                            <SelectItem
                              value="active"
                              disabled={!inSearchSkuPhase}
                            >
                              Active
                            </SelectItem>
                            <SelectItem
                              value="discontinued"
                              disabled={!inSearchSkuPhase}
                            >
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
                        alt={"placeholder image"}
                        className="aspect-square w-full rounded-md object-cover"
                        src={"/placeholder.svg"}
                      />

                      <div className="grid grid-cols-3 gap-2">
                        <img
                          alt={"placeholder image"}
                          className="aspect-square rounded-md  object-cover"
                          src="/placeholder.svg"
                        />
                        <img
                          alt={"placeholder image"}
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

                {/* Size and Measurement card  */}
                <Card>
                  <CardHeader>
                    <CardTitle>Size and Measurement</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="grid gap-3">
                        <Label
                          htmlFor="size"
                          className={
                            inSearchSkuPhase ? "text-muted-foreground" : ""
                          }
                        >
                          Size
                        </Label>
                        <Input
                          id="size"
                          type="number"
                          className="w-full bg-popover"
                          disabled={inSearchSkuPhase}
                        />
                      </div>

                      <div className="grid gap-3">
                        <Label
                          htmlFor="meaurement"
                          className={
                            inSearchSkuPhase ? "text-muted-foreground" : ""
                          }
                        >
                          Measurement
                        </Label>
                        <Input
                          id="meaurement"
                          type="text"
                          className="w-full bg-popover"
                          disabled={inSearchSkuPhase}
                        />
                      </div>
                    </div>
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
        </form>
      </main>
    </ProductLayout>
  );
}
