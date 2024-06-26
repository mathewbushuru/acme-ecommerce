import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "sonner";
import {
  ListFilter,
  File,
  Search,
  PlusCircle,
  MoreHorizontal,
} from "lucide-react";

import { useGetAllProductsQuery, useGetAllCategoriesQuery } from "@/api";

import ProductLayout from "@/modules/products/layouts/product-layout";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { type ProductType } from "@/types/product";

export default function ProductsList() {
  const navigate = useNavigate();
  const { data: productsData } = useGetAllProductsQuery();

  if (!productsData) {
    return (
      <ProductLayout
        title="Products List"
        description="Search and view all your listed products."
      >
        <div>
          <p>Loading...</p>
        </div>
      </ProductLayout>
    );
  }

  const allProductsArr = productsData;

  const activeProducts = allProductsArr.filter(
    (product) => product.status === "active",
  );
  const draftProducts = allProductsArr.filter(
    (product) => product.status === "draft",
  );
  const discontinuedProducts = allProductsArr.filter(
    (product) => product.status === "discontinued",
  );

  return (
    <ProductLayout
      title="Products List"
      description="Search and view all your listed products."
    >
      <Tabs defaultValue="active">
        <div className="flex items-center">
          {/* Left header - tabs selector  */}
          <TabsList className="hidden h-9 sm:inline-flex">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="draft">Draft</TabsTrigger>
            <TabsTrigger
              value="discontinued"
              className="hidden sm:inline-block"
            >
              Discontinued
            </TabsTrigger>
          </TabsList>
          {/* Right header - searchbar and buttons */}
          <div className="flex w-full items-center justify-end gap-2">
            <SearchProductInput />
            <FilterDropdownMenu />
            <Button variant="outline" size="sm">
              <File className="mr-1 h-3.5 w-3.5" />
              <span className="hidden lg:inline">Export</span>
            </Button>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => navigate("/products/maintenance")}
            >
              <PlusCircle className="mr-1 h-3.5 w-3.5" />
              <span className="hidden lg:inline">Add Product</span>
            </Button>
          </div>
        </div>

        {/* Products main content  */}
        <div className="mt-6">
          <TabsContent value="all">
            {allProductsArr.length === 0 ? (
              <div className="mt-32 flex flex-col items-center gap-2 text-center">
                <h3 className="text-xl font-bold">You have no products.</h3>
                <p className="text-sm text-muted-foreground">
                  You can start selling as soon as you add a product.
                </p>
                <Button className="mt-4">Add First Product</Button>
              </div>
            ) : (
              <div className="flex flex-col gap-5 sm:gap-2">
                <Card>
                  <CardHeader>
                    <CardTitle>All Products</CardTitle>
                    <CardDescription className="hidden sm:inline-block">
                      Manage your active products, edit their details and view
                      their sales performance.
                    </CardDescription>
                    <CardContent className="scrollbar-hide h-[46vh] max-w-[70vw] overflow-y-auto pt-1 2xl:h-[55vh]">
                      <ProductsTable productsArr={allProductsArr} />
                    </CardContent>
                    <CardFooter className="pb-0">
                      <div className="text-xs text-muted-foreground">
                        Showing <strong>1 - {allProductsArr.length}</strong> of
                        all <strong>{allProductsArr.length}</strong> products.
                      </div>
                    </CardFooter>
                  </CardHeader>
                </Card>
              </div>
            )}
          </TabsContent>
          <TabsContent value="active">
            {activeProducts.length === 0 ? (
              <div className="mt-32 flex flex-col items-center gap-2 text-center">
                <h3 className="text-xl font-bold">
                  You have no active products.
                </h3>
                <p className="text-sm text-muted-foreground">
                  You can start selling as soon as you add a product.
                </p>
                <Button className="mt-4">Add First Product</Button>
              </div>
            ) : (
              <div className="flex flex-col gap-5 sm:gap-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Active Products</CardTitle>
                    <CardDescription className="hidden sm:inline-block">
                      Manage your active products, edit their details and view
                      their sales performance.
                    </CardDescription>
                    <CardContent className="scrollbar-hide h-[46vh] max-w-[70vw] overflow-y-auto pt-1 2xl:h-[55vh]">
                      <ProductsTable productsArr={activeProducts} />
                    </CardContent>
                    <CardFooter className="pb-0">
                      <div className="text-xs text-muted-foreground">
                        Showing <strong>1 - {activeProducts.length}</strong> of{" "}
                        <strong>{activeProducts.length}</strong> active
                        products.
                      </div>
                    </CardFooter>
                  </CardHeader>
                </Card>
              </div>
            )}
          </TabsContent>
          <TabsContent value="draft">
            {draftProducts.length === 0 ? (
              <div className="mt-32 flex flex-col items-center gap-2 text-center">
                <h3 className="text-xl font-bold">
                  You have no products in the creation phase.
                </h3>
                <p className="text-sm text-muted-foreground">
                  Use this section for products you are creating but have don't
                  have all the details yet.
                </p>
                <Button className="mt-4">Add Product</Button>
              </div>
            ) : (
              <div className="flex flex-col gap-5 sm:gap-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Draft Products</CardTitle>
                    <CardDescription className="hidden sm:inline-block">
                      Edit products that you haven't activated to be live in
                      your shop yet.
                    </CardDescription>
                    <CardContent className="scrollbar-hide h-[46vh] max-w-[70vw] overflow-y-auto pt-1 2xl:h-[55vh]">
                      <ProductsTable productsArr={draftProducts} />
                    </CardContent>
                    <CardFooter className="pb-0">
                      <div className="text-xs text-muted-foreground">
                        Showing <strong>1 - {draftProducts.length}</strong> of{" "}
                        <strong>{draftProducts.length}</strong> draft products.
                      </div>
                    </CardFooter>
                  </CardHeader>
                </Card>
              </div>
            )}
          </TabsContent>
          <TabsContent value="discontinued">
            {discontinuedProducts.length === 0 ? (
              <div className="mt-32 flex flex-col items-center gap-2 text-center">
                <h3 className="text-xl font-bold">
                  You have no archived / discontinued products.
                </h3>
                <p className="max-w-screen-sm text-sm text-muted-foreground">
                  Products marked as discontinued show up here. Use this for
                  products you no longer wish to sell, but still need for
                  historical reporting purposes.
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-5 sm:gap-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Discontinued Products</CardTitle>
                    <CardDescription className="hidden sm:inline-block">
                    Products marked as discontinued show up here.
                    </CardDescription>
                    <CardContent className="scrollbar-hide h-[46vh] max-w-[70vw] overflow-y-auto pt-1 2xl:h-[55vh]">
                      <ProductsTable productsArr={discontinuedProducts} />
                    </CardContent>
                    <CardFooter className="pb-0">
                      <div className="text-xs text-muted-foreground">
                        Showing{" "}
                        <strong>1 - {discontinuedProducts.length}</strong> of{" "}
                        <strong>{discontinuedProducts.length}</strong> discontinued products.
                      </div>
                    </CardFooter>
                  </CardHeader>
                </Card>
              </div>
            )}
          </TabsContent>
        </div>
      </Tabs>
    </ProductLayout>
  );
}

function SearchProductInput() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [searchValue, setSearchValue] = useState("");

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchValue.length === 0) return;

    if (searchValue.startsWith("%")) {
      toast.error("Product name search coming soon.");
      setSearchValue("");
      return;
    }
    navigate(`/products/maintenance/${searchValue}`, {
      state: { fromPathname: pathname },
    });
  };

  return (
    <form className="flex-1 sm:flex-initial" onSubmit={handleSearchSubmit}>
      <div className="relative">
        <Search className="absolute left-2.5 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="By Sku# or '%' + 'product name'"
          className="h-9 pl-8 sm:w-[300px] md:w-[240px] lg:w-[300px]"
          autoFocus
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
    </form>
  );
}

function FilterDropdownMenu() {
  const { data: categoryData } = useGetAllCategoriesQuery();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="ml-auto sm:ml-0">
          <ListFilter className="mr-1 h-3.5 w-3.5" />
          <span className="hidden lg:inline">Filter</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Filter by</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Product category</DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuCheckboxItem checked>All</DropdownMenuCheckboxItem>
            {!categoryData ? (
              <DropdownMenuCheckboxItem checked>
                Loading ...
              </DropdownMenuCheckboxItem>
            ) : (
              categoryData.map((category) => (
                <DropdownMenuCheckboxItem key={category.id}>
                  {category.name}
                </DropdownMenuCheckboxItem>
              ))
            )}
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Creation Time</DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuCheckboxItem checked>All</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>Last 24 hours</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>Last 7 days</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>Last 4 weeks</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>Last 3 months</DropdownMenuCheckboxItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger className="sm:hidden">
            Product Status
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuCheckboxItem disabled>All</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked>Active</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem disabled>Draft</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem disabled>
              Discontinued
            </DropdownMenuCheckboxItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function ProductsTable({ productsArr }: { productsArr: ProductType[] }) {
  const navigate = useNavigate();
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="hidden w-24 sm:table-cell">
            <span className="sr-only">Image</span>
          </TableHead>
          <TableHead className="px-1 sm:px-4">Name</TableHead>
          <TableHead className="hidden sm:table-cell">Status</TableHead>
          <TableHead className="hidden md:table-cell">Sku Number</TableHead>
          <TableHead>Retail Price</TableHead>
          <TableHead className="hidden lg:table-cell">Total Sales</TableHead>
          <TableHead className="hidden lg:table-cell">Created At</TableHead>
          <TableHead>
            <span className="sr-only">Actions</span>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {productsArr.map((product) => (
          <TableRow key={product.id}>
            <TableCell className="hidden sm:table-cell">
              <img
                className="aspect-square rounded-md object-cover"
                src={product.imageUrl ?? "/placeholder.svg"}
              />
            </TableCell>
            <TableCell className="px-1 font-medium sm:px-4">
              {product.name}
            </TableCell>
            <TableCell className="hidden sm:table-cell">
              <Badge variant="outline">{product.status}</Badge>
            </TableCell>
            <TableCell className="hidden font-medium md:table-cell">
              {product.skuNumber}
            </TableCell>
            <TableCell>${product.regularPrice}</TableCell>
            <TableCell className="hidden lg:table-cell">
              {Math.floor(Math.random() * 5000).toLocaleString()}
            </TableCell>
            <TableCell className="hidden lg:table-cell">
              {product.createdAt &&
                new Date(product.createdAt).toLocaleString()}
            </TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="icon" variant="ghost">
                    <MoreHorizontal className="h-4 w-4">
                      <span className="sr-only">Toggle menu</span>
                    </MoreHorizontal>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuItem
                    onClick={() =>
                      navigate(`/products/maintenance/${product.skuNumber}`)
                    }
                  >
                    View/Edit
                  </DropdownMenuItem>
                  <DropdownMenuItem>Specials</DropdownMenuItem>
                  <DropdownMenuItem>Analytics</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
