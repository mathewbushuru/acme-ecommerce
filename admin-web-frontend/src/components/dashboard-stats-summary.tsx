import { Activity, CreditCard, DollarSign, Users } from "lucide-react";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function DashboardStatsSummary() {
  return (
    <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center space-y-0 justify-between pb-2">
          <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
          <DollarSign className="h-5 w-5 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold mb-1">$2,345,235.14</div>
          <p className="text-xs text-muted-foreground">+3.14% from last week</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center space-y-0 justify-between pb-2">
          <CardTitle className="text-sm font-medium">Customer Count</CardTitle>
          <Users className="h-5 w-5 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold mb-1">+4,581</div>
          <p className="text-xs text-muted-foreground">+7.37% from last week</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center space-y-0 justify-between pb-2">
          <CardTitle className="text-sm font-medium">Orders</CardTitle>
          <CreditCard className="h-5 w-5 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold mb-1">+13,147</div>
          <p className="text-xs text-muted-foreground">
            +12.56% from last week
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center space-y-0 justify-between pb-2">
          <CardTitle className="text-sm font-medium">Shopping Now</CardTitle>
          <Activity className="h-5 w-5 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold mb-1">+317</div>
          <p className="text-xs text-muted-foreground">+1.67% from last hour</p>
        </CardContent>
      </Card>
    </div>
  );
}
