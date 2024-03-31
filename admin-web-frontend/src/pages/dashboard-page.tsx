import AdminNavbar from "@/components/admin-navbar";
import DashboardStatsSummary from "@/components/dashboard-stats-summary";

export default function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <AdminNavbar />
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <DashboardStatsSummary />
      </main>
    </div>
  );
}
