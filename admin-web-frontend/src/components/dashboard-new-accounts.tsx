import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DashboardNewAccounts() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>New Accounts</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-8">
        <div className="flex items-center gap-4">
          <Avatar className="h-9 w-9">
            <AvatarImage src="/02.png" alt="Avatar" />
            <AvatarFallback>CB</AvatarFallback>
          </Avatar>
          <div className="grid gap-1">
            <p className="text-sm font-medium leading-none">Charley Bates</p>
            <p className="text-sm text-muted-foreground">
              charley.bates@email.com
            </p>
          </div>
          <div className="ml-auto text-sm w-12 text-left">Online</div>
        </div>
        <div className="flex items-center gap-4">
          <Avatar className="h-9 w-9">
            <AvatarImage src="/01.png" alt="Avatar" />
            <AvatarFallback>LM</AvatarFallback>
          </Avatar>
          <div className="grid gap-1">
            <p className="text-sm font-medium leading-none">Lindsay Maylie</p>
            <p className="text-sm text-muted-foreground">
              lindsay.maylie@email.com
            </p>
          </div>
          <div className="ml-auto text-sm w-12 text-left">Instore</div>
        </div>
        <div className="flex items-center gap-4">
          <Avatar className="h-9 w-9">
            <AvatarImage src="/02.png" alt="Avatar" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="grid gap-1">
            <p className="text-sm font-medium leading-none">Jack Dawkins</p>
            <p className="text-sm text-muted-foreground">
              jack.dawkins@email.com
            </p>
          </div>
          <div className="ml-auto text-sm w-12 text-left">Online</div>
        </div>
        <div className="flex items-center gap-4">
          <Avatar className="h-9 w-9">
            <AvatarImage src="/01.png" alt="Avatar" />
            <AvatarFallback>AF</AvatarFallback>
          </Avatar>
          <div className="grid gap-1">
            <p className="text-sm font-medium leading-none">Agnes Fleming</p>
            <p className="text-sm text-muted-foreground">
              agnes.fleming@email.com
            </p>
          </div>
          <div className="ml-auto text-sm w-12 text-left">Online</div>
        </div>
        <div className="flex items-center gap-4">
          <Avatar className="h-9 w-9">
            <AvatarImage src="/02.png" alt="Avatar" />
            <AvatarFallback>TC</AvatarFallback>
          </Avatar>
          <div className="grid gap-1">
            <p className="text-sm font-medium leading-none">Tom Chitling</p>
            <p className="text-sm text-muted-foreground">
              tom.chitling@email.com
            </p>
          </div>
          <div className="ml-auto text-sm w-12 text-left">Instore</div>
        </div>
        <div className="flex items-center gap-4">
          <Avatar className="h-9 w-9">
            <AvatarImage src="/02.png" alt="Avatar" />
            <AvatarFallback>CD</AvatarFallback>
          </Avatar>
          <div className="grid gap-1">
            <p className="text-sm font-medium leading-none">Charles Dickens</p>
            <p className="text-sm text-muted-foreground">
              charles.dickens@email.com
            </p>
          </div>
          <div className="ml-auto text-sm w-12 text-left">Online</div>
        </div>
      </CardContent>
    </Card>
  );
}
