import {
  ListFilter,
  File,
  Search,
  PlusCircle,
  MoreHorizontal,
} from "lucide-react";

import { useGetAllProductsQuery } from "@/api";

import ProductNavigation from "@/modules/products/components/product-navigation";

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
import { Badge } from "@/components/ui/badge";

export default function ProductListAll() {
  const { data } = useGetAllProductsQuery();

  if (!data) {
    return (
      <div>
        <ProductNavigation activeLink="products-all" />
        <p>Loading...</p>
      </div>
    );
  }

  const allProductsArr = data.allProducts;
  // const allProductsArr: any[] = [];

  return (
    <div className="flex h-full flex-col gap-4 lg:gap-6">
      <div>
        <ProductNavigation activeLink="products-all" />
        <h1 className="text-lg font-semibold md:text-xl">Products Home</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Search and view all your listed products.
        </p>
      </div>

      <main className="max-h-[690px] flex-1 overflow-y-hidden rounded-lg border border-dashed p-4 shadow-sm sm:max-h-[590px]">
        <Tabs defaultValue="active">
          <div className="flex items-center">
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
            {/* Products right header searchbar and buttons */}
            <div className="flex w-full items-center justify-end gap-2">
              <form
                className="flex-1 sm:flex-initial"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="relative">
                  <Search className="absolute left-2.5 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="By Sku# or '%' + 'product_name'..."
                    className="h-9 pl-8 sm:w-[300px] md:w-[240px] lg:w-[300px]"
                  />
                </div>
              </form>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="ml-auto sm:ml-0"
                  >
                    <ListFilter className="mr-1 h-3.5 w-3.5" />
                    <span className="hidden lg:inline">Filter</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>Department</DropdownMenuSubTrigger>
                    <DropdownMenuSubContent>
                      <DropdownMenuCheckboxItem checked>
                        All
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem>
                        Meat & Seafood
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem>
                        Fruit & Vegetables
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem>
                        Dairy & Eggs
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem>
                        Frozen
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem>
                        Bakery
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem>
                        Deli & Ready Made Meals
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem>
                        Plant Based & Non Dairy
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem>
                        Pantry
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem>
                        Health & Beauty
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem>
                        Baby Care
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem>
                        Pet Care
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem>
                        Cleaning, Paper & Home
                      </DropdownMenuCheckboxItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuSub>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                      Creation Time
                    </DropdownMenuSubTrigger>
                    <DropdownMenuSubContent>
                      <DropdownMenuCheckboxItem checked>
                        All
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem>
                        Last 24 hours
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem>
                        Last 7 days
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem>
                        Last 4 weeks
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem>
                        Last 3 months
                      </DropdownMenuCheckboxItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuSub>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger className="sm:hidden">
                      Product Status
                    </DropdownMenuSubTrigger>
                    <DropdownMenuSubContent>
                      <DropdownMenuCheckboxItem disabled>
                        All
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem checked>
                        Active
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem disabled>
                        Draft
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem disabled>
                        Discontinued
                      </DropdownMenuCheckboxItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuSub>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button variant="outline" size="sm">
                <File className="mr-1 h-3.5 w-3.5" />
                <span className="hidden lg:inline">Export</span>
              </Button>
              <Button variant="secondary" size="sm">
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
                      <CardDescription>
                        Manage your active products, edit their details and view
                        their sales performance.
                      </CardDescription>
                      <CardContent className="max-h-[454px] overflow-y-auto pt-1 sm:max-h-[375px]">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead className="hidden w-24 sm:table-cell">
                                <span className="sr-only">Image</span>
                              </TableHead>
                              <TableHead>Name</TableHead>
                              <TableHead className="hidden sm:table-cell">
                                Status
                              </TableHead>
                              <TableHead className="hidden md:table-cell">
                                Sku#
                              </TableHead>
                              <TableHead>Price</TableHead>
                              <TableHead className="hidden lg:table-cell">
                                Total Sales
                              </TableHead>
                              <TableHead className="hidden lg:table-cell">
                                Created At
                              </TableHead>
                              <TableHead>
                                <span className="sr-only">Actions</span>
                              </TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {allProductsArr.map((product) => (
                              <TableRow key={product.id}>
                                <TableCell className="hidden sm:table-cell">
                                  <img
                                    className="aspect-square rounded-md object-cover"
                                    src={product.imageUrl}
                                  />
                                </TableCell>
                                <TableCell className="font-medium">
                                  {product.name}
                                </TableCell>
                                <TableCell className="hidden sm:table-cell">
                                  <Badge variant="outline">
                                    {
                                      ["Active", "Draft", "Disc"].sort(
                                        () => Math.random() - Math.random(),
                                      )[0]
                                    }
                                  </Badge>
                                </TableCell>
                                <TableCell className="hidden font-medium md:table-cell">
                                  {product.id}
                                </TableCell>
                                <TableCell>
                                  ${product.regularPrice / 100}
                                </TableCell>
                                <TableCell className="hidden lg:table-cell">
                                  {Math.floor(
                                    Math.random() * 5000,
                                  ).toLocaleString()}
                                </TableCell>
                                <TableCell className="hidden lg:table-cell">
                                  {new Date(product.createdAt).toLocaleString()}
                                </TableCell>
                                <TableCell>
                                  <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                      <Button size="icon" variant="ghost">
                                        <MoreHorizontal className="h-4 w-4">
                                          <span className="sr-only">
                                            Toggle menu
                                          </span>
                                        </MoreHorizontal>
                                      </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                      <DropdownMenuLabel>
                                        Actions
                                      </DropdownMenuLabel>
                                      <DropdownMenuItem>Edit</DropdownMenuItem>
                                      <DropdownMenuItem>
                                        Add specials
                                      </DropdownMenuItem>
                                      <DropdownMenuItem>
                                        View analytics
                                      </DropdownMenuItem>
                                    </DropdownMenuContent>
                                  </DropdownMenu>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </CardContent>
                      <CardFooter className="pb-0">
                        <div className="text-xs text-muted-foreground">
                          Showing <strong>1-{allProductsArr.length}</strong> of{" "}
                          <strong>{allProductsArr.length}</strong> products.
                        </div>
                      </CardFooter>
                    </CardHeader>
                  </Card>
                </div>
              )}
            </TabsContent>
            <TabsContent value="active">
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
                      <CardTitle>Active Products</CardTitle>
                      <CardDescription>
                        Manage your active products, edit their details and view
                        their sales performance.
                      </CardDescription>
                      <CardContent className="max-h-[454px] overflow-y-auto pt-1 sm:max-h-[375px]">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead className="hidden w-24 sm:table-cell">
                                <span className="sr-only">Image</span>
                              </TableHead>
                              <TableHead>Name</TableHead>
                              <TableHead className="hidden sm:table-cell">
                                Status
                              </TableHead>
                              <TableHead className="hidden md:table-cell">
                                Sku#
                              </TableHead>
                              <TableHead>Price</TableHead>
                              <TableHead className="hidden lg:table-cell">
                                Total Sales
                              </TableHead>
                              <TableHead className="hidden lg:table-cell">
                                Created At
                              </TableHead>
                              <TableHead>
                                <span className="sr-only">Actions</span>
                              </TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {allProductsArr.map((product) => (
                              <TableRow key={product.id}>
                                <TableCell className="hidden sm:table-cell">
                                  <img
                                    className="aspect-square rounded-md object-cover"
                                    src={product.imageUrl}
                                  />
                                </TableCell>
                                <TableCell className="font-medium">
                                  {product.name}
                                </TableCell>
                                <TableCell className="hidden sm:table-cell">
                                  <Badge variant="outline">
                                    {
                                      ["Active", "Draft", "Disc"].sort(
                                        () => Math.random() - Math.random(),
                                      )[0]
                                    }
                                  </Badge>
                                </TableCell>
                                <TableCell className="hidden font-medium md:table-cell">
                                  {product.id}
                                </TableCell>
                                <TableCell>
                                  ${product.regularPrice / 100}
                                </TableCell>
                                <TableCell className="hidden lg:table-cell">
                                  {Math.floor(
                                    Math.random() * 5000,
                                  ).toLocaleString()}
                                </TableCell>
                                <TableCell className="hidden lg:table-cell">
                                  {new Date(product.createdAt).toLocaleString()}
                                </TableCell>
                                <TableCell>
                                  <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                      <Button size="icon" variant="ghost">
                                        <MoreHorizontal className="h-4 w-4">
                                          <span className="sr-only">
                                            Toggle menu
                                          </span>
                                        </MoreHorizontal>
                                      </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                      <DropdownMenuLabel>
                                        Actions
                                      </DropdownMenuLabel>
                                      <DropdownMenuItem>Edit</DropdownMenuItem>
                                      <DropdownMenuItem>
                                        Add specials
                                      </DropdownMenuItem>
                                      <DropdownMenuItem>
                                        View analytics
                                      </DropdownMenuItem>
                                    </DropdownMenuContent>
                                  </DropdownMenu>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </CardContent>
                      <CardFooter className="pb-0">
                        <div className="text-xs text-muted-foreground">
                          Showing <strong>1-{allProductsArr.length}</strong> of{" "}
                          <strong>{allProductsArr.length}</strong> products.
                        </div>
                      </CardFooter>
                    </CardHeader>
                  </Card>
                </div>
              )}
            </TabsContent>
            <TabsContent value="draft">
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
            </TabsContent>
            <TabsContent value="discontinued">
              <div className="mt-32 flex flex-col items-center gap-3 text-center">
                <h3 className="text-xl font-bold">
                  You have no archived / discontinued products.
                </h3>
                <p className="max-w-screen-sm text-sm text-muted-foreground">
                  Products marked as discontinued show up here. Use this for
                  products you no longer wish to sell, but still need for
                  historical reporting purposes.
                </p>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </main>
    </div>
  );
}
