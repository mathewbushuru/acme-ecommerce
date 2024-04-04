
import RootLayout from "@/layouts/root-layout";

export default function InventoryMaintenancePage() {
  return (
    <RootLayout>
      <div className="w-full grid md:grid-cols-[220px_1fr] lg:grid-cols-[250px_1fr]">
        {/* Sidebar  */}
        <div className="hidden md:block shadow-lg">
          <div className="bg-red-400 flex h-full max-h-screen flex-col gap-2">
             
          </div>
        </div>

        {/* Main  */}
        <div className="p-2">Inventory maintenance</div>
      </div>
    </RootLayout>
  );
}
