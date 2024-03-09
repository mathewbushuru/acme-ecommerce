import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Menu,
  Search,
  ShoppingCart,
  Store,
  ChevronRight,
  ChevronDown,
  Heart,
  RotateCcw,
  Truck,
  User2,
} from "lucide-react";

import { useAppSelector } from "@/store/store";
import { useGetAllProductCategoriesQuery } from "@/api";
import { fallbackAisleCategories } from "@/lib/constants";

import AuthModal from "@/components/auth-modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  const navigate = useNavigate();

  const userData = useAppSelector((state) => state.auth.user);

  return (
    <div className="fixed inset-x-0 top-0 z-10 bg-background shadow-md">
      <nav className="mx-auto flex max-w-screen-xl items-center justify-between gap-4 p-4 lg:gap-8">
        <div className="flex items-center gap-2 lg:gap-3">
          <Menu className="h-6 w-6 cursor-pointer text-primary lg:hidden" />
          <h1
            className="cursor-pointer font-bold tracking-wide text-primary"
            onClick={() => navigate("/")}
          >
            Acme Groceries
          </h1>
        </div>
        <div className="hidden flex-1 gap-8 sm:flex">
          <Input type="search" placeholder="Search" />
          {userData ? (
            <Button variant="ghost" className="text-primary">
              <User2 className="mr-2 h-5 w-5 fill-current" />
              <span className="">Welcome {userData.firstName}</span>
            </Button>
          ) : (
            <AuthModal>
              <Button>Sign In or Register</Button>
            </AuthModal>
          )}
        </div>
        <div className="flex items-center gap-2">
          <Search className="h-6 w-6 cursor-pointer sm:hidden" />
          <AuthModal>
            <Button variant="ghost" className="px-4">
              <ShoppingCart className="h-6 w-6 fill-destructive text-destructive" />
              <span className="ml-2 hidden font-semibold text-destructive sm:inline">
                Cart
              </span>
            </Button>
          </AuthModal>
        </div>
      </nav>

      <div className=" bg-accent px-4 py-4 lg:bg-background lg:pt-2">
        <div className="mx-auto max-w-screen-xl">
          <div className="flex lg:hidden">
            <Store className="mr-2 h-6 w-6" />
            <span className="font-semibold">Pickup</span>
            <ChevronRight className="ml-auto h-6 w-6" />
          </div>
          <div className="hidden items-center justify-between lg:flex">
            <div className="flex gap-6 px-3">
              <ShopAislesDropdownMenu />
              <FlyersDropdownMenu />
              <DealsDropdownMenu />
              <InspirationsDropdownMenu />
              <PharmacyDropdownMenu />
            </div>
            <div className="flex gap-2">
              <AuthModal>
                <Button variant="ghost">
                  <RotateCcw className="mr-2 h-5 w-5" />
                  <span className="font-semibold">Past Purchases</span>
                </Button>
              </AuthModal>
              <AuthModal>
                <Button variant="ghost">
                  <Heart className="mr-2 h-5 w-5 fill-foreground" />
                  <span className="font-semibold">Favourites</span>
                </Button>
              </AuthModal>
              <PickupOrDeliverySelector />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PickupOrDeliverySelector() {
  const [pickupChosen, setPickupChosen] = useState<boolean>(true);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="w-36">
          {pickupChosen ? (
            <Store className="mr-2 h-5 w-5" />
          ) : (
            <Truck className="mr-2 h-5 w-5" />
          )}
          <span className="font-semibold">
            {pickupChosen ? "Pickup" : "Delivery"}
          </span>
          <ChevronDown className="ml-2 h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-12 p-4">
        <div>
          You have selected {pickupChosen ? "Pickup" : "Delivery"}
          <DropdownMenuItem asChild className="mb-4 inline-flex cursor-pointer">
            <Button
              variant="outline"
              size="sm"
              className="ml-12 mt-2"
              onClick={() => setPickupChosen((curr) => !curr)}
            >
              Change
            </Button>
          </DropdownMenuItem>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild className="mt-8 cursor-pointer">
          <Button variant="outline" size="sm">
            Change Store
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function ShopAislesDropdownMenu() {
  const { data: allBackendCategories } = useGetAllProductCategoriesQuery();

  let allCategories: { name: string }[];

  if (!allBackendCategories) {
    allCategories = fallbackAisleCategories;
  } else {
    allCategories = allBackendCategories.allCategories;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex cursor-pointer items-center gap-2 font-semibold hover:text-primary">
          <Menu className="h-5 w-5" />
          Shop Aisles
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="ml-12  min-w-[30rem] p-4">
        {allCategories.map((category, index) => (
          <DropdownMenuItem key={index}>{category.name}</DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function FlyersDropdownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex cursor-pointer items-center hover:text-primary">
          Flyers
          <ChevronDown className="ml-1" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="ml-12  min-w-[12rem]">
        {["Weekly Flyer", "Monthly Newsletter"].map((category, index) => (
          <DropdownMenuItem key={index}>{category}</DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function DealsDropdownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex cursor-pointer items-center hover:text-primary">
          Deals
          <ChevronDown className="ml-1" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="ml-12  min-w-[12rem]">
        {[
          "My Offers",
          "Savers Specials",
          "Value Packs",
          "Shop All Specials",
          "Acme Rewards",
        ].map((category, index) => (
          <DropdownMenuItem key={index}>{category}</DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function InspirationsDropdownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex cursor-pointer items-center hover:text-primary">
          Inspiration
          <ChevronDown className="ml-1" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="ml-12  min-w-[12rem]">
        {["Recipes", "Our Brands"].map((category, index) => (
          <DropdownMenuItem key={index}>{category}</DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function PharmacyDropdownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex cursor-pointer items-center hover:text-primary">
          Pharmacy & Health
          <ChevronDown className="ml-1" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="ml-12  min-w-[12rem]">
        {[
          "Refill Prescriptions",
          "Pharmacy Services",
          "Vaccines",
          "Nutrition Services",
          "Lifestyle Choices",
        ].map((category, index) => (
          <DropdownMenuItem key={index}>{category}</DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
