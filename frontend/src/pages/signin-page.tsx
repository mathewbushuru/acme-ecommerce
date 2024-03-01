import { useNavigate } from "react-router-dom";

import {
  AlertDialog,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogAction,
  AlertDialogDescription,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SigninPage() {
  const navigate = useNavigate();
  return (
    <main className="pt-40">
      <div className="mx-auto max-w-lg">
        <AlertDialog>
          <AlertDialogHeader>
            <AlertDialogTitle className="mb-4 text-center">
              Sign into your account
            </AlertDialogTitle>
            <AlertDialogDescription className="">
              You'll love all the features that are included with having an
              account. Sign in or register to receive full access.
            </AlertDialogDescription>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="">
                  Email
                </Label>
                <Input
                  id="name"
                  className="col-span-3"
                  type="email"
                  placeholder="matt@test.com"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="">
                  Password
                </Label>
                <Input
                  id="username"
                  className="col-span-3"
                  type="password"
                  placeholder="password"
                />
              </div>
            </div>
          </AlertDialogHeader>
          <AlertDialogFooter className="space-y-2 sm:flex-col sm:items-center sm:justify-center">
            <AlertDialogAction className="px-12" onClick={() => navigate("/")}>
              Sign in
            </AlertDialogAction>
            <Button variant="link"> Don't have an account? Register</Button>
            <p className="text-muted-foreground text-xs font-light tracking-wide">Use matt@test.com and Tester123! as demo credentials</p>
          </AlertDialogFooter>
        </AlertDialog>
      </div>
    </main>
  );
}
