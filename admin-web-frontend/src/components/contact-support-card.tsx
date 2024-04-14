import { useAppSelector } from "@/store/store";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ContactSupportCard() {
  const firstName = useAppSelector((state) => state.adminAuth.user?.firstName);
  return (
    <Card>
      <CardHeader className="p-2 md:p-4">
        <CardTitle className="text-xl">
          {firstName && `${firstName}, `}need help?
        </CardTitle>
        <CardDescription>Reach out to our support team.</CardDescription>
        <CardContent className="p-2 pt-0 md:p-0 md:pt-2">
          <Button size="sm" className="w-full bg-popover" variant="outline">
            Contact us
          </Button>
        </CardContent>
      </CardHeader>
    </Card>
  );
}
