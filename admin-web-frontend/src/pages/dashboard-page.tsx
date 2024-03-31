import DashboardHeader from "@/components/dashboard-header";

export default function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <DashboardHeader />
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
            
        </div>
      </main>
    </div>
  );
}
