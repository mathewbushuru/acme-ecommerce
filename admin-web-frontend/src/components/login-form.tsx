import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginForm() {
  return (
    <Card className="w-full max-w-sm mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="matt@mathewbushuru.com"
            required
            className="bg-popover"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            required
            className="bg-popover"
          />
        </div>
        <p className="text-xs font-light text-muted-foreground text-center">
          Use mattb@test.com and 781*admiN as demo credentials
        </p>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Sign in</Button>
      </CardFooter>
    </Card>
  );
}
