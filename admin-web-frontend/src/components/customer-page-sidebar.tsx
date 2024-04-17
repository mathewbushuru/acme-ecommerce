import { useNavigate } from "react-router-dom";
import { Pencil } from "lucide-react";

import ContactSupportCard from "@/components/contact-support-card";
import { Button } from "@/components/ui/button";

export default function CustomerPageSidebar() {
  const navigate = useNavigate();
  return (
    <div className="flex h-full max-h-screen flex-col gap-2 border-r">
      <div className="flex border-b px-2 py-3 lg:px-4">
        <Button variant="secondary" size="sm" className="w-full justify-start">
          <Pencil className="mr-2 h-4 w-4" />
          Enter Edit Mode
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
            Customer Inquiry
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="justify-start"
            onClick={() => navigate("#")}
          >
            Customer CSV Import
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="justify-start"
            onClick={() => navigate("#")}
          >
            Customer Registration
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="justify-start"
            onClick={() => navigate("#")}
          >
            Points Policies
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="justify-start"
            onClick={() => navigate("#")}
          >
            Coupons
          </Button>
        </nav>
      </div>
      <div className="mt-auto p-4">
        <ContactSupportCard />
      </div>
    </div>
  );
}
