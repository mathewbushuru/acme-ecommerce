import RootLayout from "@/layouts/root-layout";

import AnalyticsPageSidebar from "@/components/analytics-page-sidebar";
import AnalyticsSalesReports from "@/components/analytics-sales-reports";

export default function AnalyticsPage() {
  return (
    <RootLayout>
      <div className="grid w-full md:grid-cols-[220px_1fr] lg:grid-cols-[250px_1fr]">
        {/* Sidebar  */}
        <div className="hidden shadow-lg md:block 2xl:shadow-none">
          <AnalyticsPageSidebar />
        </div>

        {/* Page Content  */}
        <main className="p-4  lg:p-6">
          <AnalyticsSalesReports />
        </main>
      </div>
    </RootLayout>
  );
}
