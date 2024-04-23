import SidebarLayout from "@/layouts/sidebar-layout";

import CustomerPageSidebar from "@/modules/customers/components/customer-page-sidebar";
import CustomerAddNew from "@/modules/customers/components/customer-add-new";

export default function CustomersPage() {
  return (
    <SidebarLayout
      sidebarComponent={<CustomerPageSidebar />}
      mainComponent={<CustomerAddNew />}
    />
  );
}
