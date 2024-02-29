import {
  AlertDialog,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function AuthModal({
  children,
  skipInitialScreen = false,
}: {
  children: React.ReactNode;
  skipInitialScreen?: boolean;
}) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        {skipInitialScreen ? (
          <>
            <AlertDialogHeader>
              <AlertDialogTitle className="mb-4 text-center">
                Register for an account
              </AlertDialogTitle>
              <AlertDialogDescription className="text-center">
                You'll love all the features that are included with having an
                account. Sign in or register to receive full access.
              </AlertDialogDescription>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
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
                  <Label htmlFor="username" className="text-right">
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
            <AlertDialogFooter className="mt-2 sm:justify-center">
              <AlertDialogAction>Register new account</AlertDialogAction>
            </AlertDialogFooter>
          </>
        ) : (
          <>
            <AlertDialogHeader>
              <AlertDialogTitle className="mb-4 text-center">
                Sign in to continue
              </AlertDialogTitle>
              <AlertDialogDescription className="text-center">
                You'll love all the features that are included with having an
                account. Sign in or register to receive full access.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter className="mt-4 sm:justify-center">
              <AlertDialogAction>Sign In or Register</AlertDialogAction>
            </AlertDialogFooter>
          </>
        )}
      </AlertDialogContent>
    </AlertDialog>
  );
}
