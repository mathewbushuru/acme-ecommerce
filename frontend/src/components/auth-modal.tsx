import { useNavigate } from "react-router-dom";

import {
  AlertDialog,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

export default function AuthModal({ children }: { children: React.ReactNode }) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <InitialAuthScreen />
      </AlertDialogContent>
    </AlertDialog>
  );
}

function InitialAuthScreen({}: {}) {
  const navigate = useNavigate();
  return (
    <>
      <AlertDialogHeader>
        <AlertDialogTitle className="mb-4 text-center">
          Sign in to continue
        </AlertDialogTitle>
        <AlertDialogDescription className="text-center">
          You'll love all the features that are included with having an account.
          Sign in or register to receive full access.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter className="mt-4 sm:justify-center">
        <AlertDialogCancel>Continue Browsing</AlertDialogCancel>
        <Button onClick={() => navigate("/auth/signup")}>
          Sign In or Register
        </Button>
      </AlertDialogFooter>
    </>
  );
}
