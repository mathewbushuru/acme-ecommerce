import DashboardHeader from "@/components/dashboard-header";
import DashboardStatsSummary from "@/components/dashboard-stats-summary";

export default function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <DashboardHeader />
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <DashboardStatsSummary />
      </main>
    </div>
  );
}
