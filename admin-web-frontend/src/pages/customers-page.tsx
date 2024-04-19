import RootLayout from "@/layouts/root-layout";

import CustomerPageSidebar from "@/components/customer-page-sidebar";
import CustomerAddNew from "@/components/customer-add-new";

export default function CustomersPage() {
  return (
    <RootLayout>
      <div className="grid w-full md:grid-cols-[220px_1fr] lg:grid-cols-[250px_1fr]">
        {/* Sidebar  */}
        <div className="hidden shadow-lg md:block 2xl:shadow-none">
          <CustomerPageSidebar />
        </div>

        {/* Page Content  */}
        <main className="p-4 lg:p-6">
          <CustomerAddNew />
        </main>
      </div>
    </RootLayout>
  );
}
