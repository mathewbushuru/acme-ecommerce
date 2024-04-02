import AdminNavbar from "@/components/admin-navbar";

export default function InventoryMaintenancePage() {
  return (
    <div className="flex flex-col min-h-screen w-full mx-auto max-w-screen-2xl">
      <AdminNavbar />
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        Inventory Maintenance
      </main>
    </div>
  );
}
