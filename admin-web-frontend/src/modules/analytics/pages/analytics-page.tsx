import SidebarLayout from "@/layouts/sidebar-layout";

import AnalyticsPageSidebar from "@/components/analytics-page-sidebar";
import AnalyticsSalesReports from "@/components/analytics-sales-reports";

export default function AnalyticsPage() {
  return (
    <SidebarLayout
      sidebarComponent={<AnalyticsPageSidebar />}
      mainComponent={<AnalyticsSalesReports />}
    />
  );
}
