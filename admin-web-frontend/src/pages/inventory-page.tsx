import {  Pencil } from "lucide-react";

import RootLayout from "@/layouts/root-layout";
import { Button } from "@/components/ui/button";

export default function InventoryPage() {
  return (
    <RootLayout>
      <div className="w-full grid md:grid-cols-[220px_1fr] lg:grid-cols-[250px_1fr]">
        {/* Sidebar  */}
        <div className="hidden md:block shadow-lg">
          <div className="border-r flex h-full max-h-screen flex-col gap-2">
            <div className="flex justify-center border-b py-3">
              <Button variant="secondary" size="sm">
                <Pencil className="h-4 w-4 mr-2" />
                Enter Edit Mode
              </Button>
            </div>
          </div>
        </div>

        {/* Main  */}
        <div className="p-2">Inventory maintenance</div>
      </div>
    </RootLayout>
  );
}
