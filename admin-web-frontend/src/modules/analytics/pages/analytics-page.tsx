import SidebarLayout from "@/layouts/sidebar-layout";

import AnalyticsPageSidebar from "@/modules/analytics/components/analytics-page-sidebar";
import AnalyticsSalesReports from "@/modules/analytics/components/analytics-sales-reports";

export default function AnalyticsPage() {
  return (
    <SidebarLayout
      sidebarComponent={<AnalyticsPageSidebar />}
      mainComponent={<AnalyticsSalesReports />}
    />
  );
}
