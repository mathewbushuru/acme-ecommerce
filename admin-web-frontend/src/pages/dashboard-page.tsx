import AdminNavbar from "@/components/admin-navbar";
import DashboardStatsSummary from "@/components/dashboard-stats-summary";
import DashboardTransactionsCard from "@/components/dashboard-transactions-card";
import DashboardNewAccounts from "@/components/dashboard-new-accounts";

export default function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <AdminNavbar />
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <DashboardStatsSummary />
        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
          <DashboardTransactionsCard />
          <DashboardNewAccounts />
        </div>
      </main>
    </div>
  );
}
