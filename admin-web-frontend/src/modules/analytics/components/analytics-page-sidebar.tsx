import { useNavigate } from "react-router-dom";
import { BarChart3 } from "lucide-react";

import ContactSupportCard from "@/components/contact-support-card";
import { Button } from "@/components/ui/button";

export default function AnalyticsPageSidebar() {
  const navigate = useNavigate();
  return (
    <div className="flex h-full max-h-screen flex-col gap-2 border-r">
      <div className="flex border-b px-2 py-3 lg:px-4">
        <Button variant="secondary" size="sm" className="w-full justify-start">
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
  );
}
