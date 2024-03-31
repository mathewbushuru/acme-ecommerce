import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function DashboardTransactionsCard() {
  return (
    <Card className="xl:col-span-2">
      <CardHeader className="flex flex-row items-center gap-1">
        <div className="grid gap-2">
          <CardTitle>Recent Transactions</CardTitle>
          <CardDescription className="hidden sm:block">
            Recent transactions from the stores
          </CardDescription>
        </div>
        <Button size="sm" className="ml-auto gap-1">
          View all
          <ArrowUpRight className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                Customer <span className="hidden sm:inline">/ Store</span>
              </TableHead>
              <TableHead className="hidden sm:table-cell ">Type</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="hidden sm:table-cell">Date</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <div className="font-medium">Oliver Twist</div>
                <div className="text-sm text-muted-foreground hidden sm:inline">
                  Granville Island Store
                </div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">Store Sale</TableCell>
              <TableCell>
                <Badge variant="secondary">Success</Badge>
              </TableCell>
              <TableCell className="hidden sm:table-cell">2024-04-31</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="font-medium">Rose Maylie</div>
                <div className="text-sm text-muted-foreground hidden sm:inline">
                  Online Store
                </div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">Delivery</TableCell>
              <TableCell>
                <Badge variant="destructive">Declined</Badge>
              </TableCell>
              <TableCell className="hidden sm:table-cell">2024-04-31</TableCell>
              <TableCell className="text-right">$380.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="font-medium">Bill Sikes</div>
                <div className="text-sm text-muted-foreground hidden sm:inline">
                  Metrotown Store
                </div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">
                Curbside Pickup
              </TableCell>
              <TableCell>
                <Badge variant="secondary">Success</Badge>
              </TableCell>
              <TableCell className="hidden sm:table-cell">2024-04-31</TableCell>
              <TableCell className="text-right">$180.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="font-medium">Noah Claypole</div>
                <div className="text-sm text-muted-foreground hidden sm:inline">
                  Downtown Store
                </div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">Store Sale</TableCell>
              <TableCell>
                <Badge variant="destructive">Refund</Badge>
              </TableCell>
              <TableCell className="hidden sm:table-cell">2024-04-31</TableCell>
              <TableCell className="text-right whitespace-nowrap">- $70.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
