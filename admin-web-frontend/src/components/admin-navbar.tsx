import { NavLink, useNavigate } from "react-router-dom";
import { Package2, Menu, Search, CircleUser} from "lucide-react";

import { publicRoutes as navigationLinks } from "@/routes/public-routes";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import { cn } from "@/lib/utils";

export default function AdminNavbar() {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 flex items-center h-16 gap-4 border-b bg-background px-4 md:px-6 z-[99]">
      <nav className="hidden md:flex text-lg font-medium md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <NavLink
          to="/dashboard"
          className="flex items-center gap-2 text-primary font-semibold"
        >
          <Package2 className="h-6 w-6" />
          <span className="whitespace-nowrap md:hidden lg:inline-block">
            Acme Admin
          </span>
        </NavLink>
        {navigationLinks.map(
          (linkItem) =>
            linkItem.isOnNavbar && (
              <NavLink
                to={linkItem.path}
                className={({ isActive }) =>
                  cn(
                    "text-muted-foreground transition-colors hover:text-foreground text-nowrap flex items-center",
                    isActive && "text-foreground"
                  )
                }
                key={linkItem.name}
              >
                {linkItem.icon}
                {linkItem.name}
              </NavLink>
            )
        )}
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium pt-14">
            <NavLink
              to="#"
              className="flex items-center gap-2 text-primary font-semibold"
            >
              <Package2 className="h-6 w-6" />
              <span>Acme Admin</span>
            </NavLink>
            {navigationLinks.map(
              (linkItem) =>
                linkItem.isOnNavbar && (
                  <NavLink
                    to={linkItem.path}
                    className={({ isActive }) =>
                      cn(
                        "text-muted-foreground hover:text-foreground text-nowrap",
                        isActive && "text-foreground"
                      )
                    }
                    key={linkItem.name}
                  >
                    {linkItem.name}
                  </NavLink>
                )
            )}
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <form className="ml-auto flex-1 sm:flex-initial">
          <div className="relative">
            <Search className="absolute left-2.5 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="sm:w-[300px] md:w-[240px] lg:w-[300px] pl-8"
            />
          </div>
        </form>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              <CircleUser className="h-5 w-5" />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => navigate("/")}>
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
