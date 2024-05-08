import { NavLink, useNavigate } from "react-router-dom";
import {
  Package2,
  Menu,
  CircleUser,
  ExternalLink,
  SplitSquareHorizontal as Command,
} from "lucide-react";

import { protectedRoutes as navigationLinks } from "@/routes/protected-routes";

import { useAppDispatch } from "@/store/store";
import { clearCredentials } from "@/store/features/auth-slice";

import ThemeToggle from "@/components/theme-toggle";
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
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(clearCredentials());
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-[99] flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <nav className="hidden text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <NavLink
          to="/dashboard"
          className="flex items-center gap-2 font-semibold text-primary"
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
                    "flex items-center text-nowrap text-muted-foreground transition-colors hover:text-foreground",
                    isActive && "text-foreground",
                  )
                }
                key={linkItem.name}
              >
                {linkItem.icon}
                {linkItem.name}
              </NavLink>
            ),
        )}
        <a
          href="https://acme.mathewbushuru.com/"
          target="_blank"
          className="flex items-center text-nowrap text-muted-foreground transition-colors hover:text-foreground"
        >
          <ExternalLink className="mr-2 h-4 w-4" />
          Live&nbsp;<span className="hidden lg:inline">Online Shop</span>
        </a>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 pt-14 text-lg font-medium">
            <NavLink
              to="#"
              className="flex items-center gap-2 font-semibold text-primary"
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
                        "text-nowrap text-muted-foreground hover:text-foreground",
                        isActive && "text-foreground",
                      )
                    }
                    key={linkItem.name}
                  >
                    {linkItem.name}
                  </NavLink>
                ),
            )}
            <a
              href="https://acme.mathewbushuru.com/"
              target="_blank"
              className="text-nowrap text-muted-foreground hover:text-foreground"
            >
              Live Online Shop
            </a>
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <form
          className="ml-auto flex-1 sm:flex-initial"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="relative">
            <Command className="absolute left-2.5 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Type a command or Press ⌘ + J"
              className="pl-8 sm:w-[300px] md:w-[240px] lg:w-[300px]"
            />
          </div>
        </form>
        <ThemeToggle />
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
            <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
