import RootLayout from "@/layouts/root-layout";
import CustomerPageSidebar from "@/components/customer-page-sidebar";

import { Button } from "@/components/ui/button";

export default function CustomersPage() {
  return (
    <RootLayout>
      <div className="grid w-full md:grid-cols-[220px_1fr] lg:grid-cols-[250px_1fr]">
        {/* Sidebar  */}
        <div className="hidden shadow-lg md:block 2xl:shadow-none">
         <CustomerPageSidebar />
        </div>

        {/* Page Content  */}
        <main className="flex flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div>
            <h1 className="text-lg font-semibold md:text-xl">
              Customer Loyalty
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              View Customer Loyalty Program, inquire customer points, purchases
              and coupons. Enter 'Edit Mode' for data maintenance.
            </p>
          </div>

          <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
            <div className="flex flex-col items-center gap-1 text-center">
              <h3 className="text-xl font-bold">
                You have no registered customers.
              </h3>
              <p className="text-sm text-muted-foreground">
                Add your first customer.
              </p>
              <Button className="mt-4">Add Customer</Button>
            </div>
          </div>
        </main>
      </div>
    </RootLayout>
  );
}
