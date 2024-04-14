import { useNavigate } from "react-router-dom";
import { BarChart3 } from "lucide-react";

import RootLayout from "@/layouts/root-layout";

import ContactSupportCard from "@/components/contact-support-card";
import { Button } from "@/components/ui/button";

export default function AnalyticsPage() {
  const navigate = useNavigate();
  return (
    <RootLayout>
      <div className="grid w-full md:grid-cols-[220px_1fr] lg:grid-cols-[250px_1fr]">
        {/* Sidebar  */}
        <div className="hidden shadow-lg md:block 2xl:shadow-none">
          <div className="flex h-full max-h-screen flex-col gap-2 border-r">
            <div className="flex border-b px-2 py-3 lg:px-4">
              <Button
                variant="secondary"
                size="sm"
                className="w-full justify-start"
              >
                <BarChart3 className="mr-2 h-4 w-4" />
                Generate Excel Reports
              </Button>
            </div>
            <div className="flex-1">
              <nav className="flex flex-col gap-2 px-2 lg:px-4">
                <Button
                  variant="default"
                  size="sm"
                  className="justify-start"
                  onClick={() => navigate("#")}
                >
                  Sales Reports
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="justify-start"
                  onClick={() => navigate("#")}
                >
                  Categories Reports
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="justify-start"
                  onClick={() => navigate("#")}
                >
                  Specials Reports
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="justify-start"
                  onClick={() => navigate("#")}
                >
                  Profit and Loss (P & L) Report
                </Button>
              </nav>
            </div>
            <div className="mt-auto p-4">
              <ContactSupportCard />
            </div>
          </div>
        </div>

        {/* Page Content  */}
        <main className="flex flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div>
            <h1 className="text-lg font-semibold md:text-xl">
              Sales Analytics
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Filter by time period - hourly, daily, weekly, monthly and yearly.
              Dynamic updates to get a realtime view of your store.
            </p>
          </div>

          <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
            <div className="flex flex-col items-center gap-1 text-center">
              <h3 className="text-xl font-bold">You have no sales yet.</h3>
              <p className="text-sm text-muted-foreground">Come back later.</p>
            </div>
          </div>
        </main>
      </div>
    </RootLayout>
  );
}
