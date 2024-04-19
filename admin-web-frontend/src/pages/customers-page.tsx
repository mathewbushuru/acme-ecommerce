import SidebarLayout from "@/layouts/sidebar-layout";

import CustomerPageSidebar from "@/components/customer-page-sidebar";
import CustomerAddNew from "@/components/customer-add-new";

export default function CustomersPage() {
  return (
    <SidebarLayout
      sidebarComponent={<CustomerPageSidebar />}
      mainComponent={<CustomerAddNew />}
    />
  );
}
