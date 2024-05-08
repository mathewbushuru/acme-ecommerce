import { useContext } from "react";
import { ThemeProviderContext } from "@/components/theme-provider";

export default function useTheme() {
    const context = useContext(ThemeProviderContext);

    if (context === undefined) {
        throw new Error("useTheme custom hook must be used inside ThemeProvider")
    }

    return context;
}
