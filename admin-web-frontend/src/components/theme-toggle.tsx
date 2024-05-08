import { Moon, Sun } from "lucide-react";

import useTheme from "@/hooks/use-theme";

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export default function ThemeToggle() {
    const { setTheme } = useTheme();

    return (
       <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="z-[99]">
            <DropdownMenuItem onClick={() => setTheme("light")}>
                Light Theme
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark Theme
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
                System Theme
            </DropdownMenuItem>
        </DropdownMenuContent>
       </DropdownMenu>
    )
}
