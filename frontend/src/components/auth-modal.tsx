import { useState } from "react";

import {
  AlertDialog,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function AuthModal({
  children,
  skipInitialScreen = false,
}: {
  children: React.ReactNode;
  skipInitialScreen?: boolean;
}) {
  const [showAuthScreen, setShowAuthScreen] =
    useState<boolean>(skipInitialScreen);

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        {showAuthScreen ? (
          <AuthScreen />
        ) : (
          <InitialAuthScreen setShowAuthScreenHandler={setShowAuthScreen} />
        )}
      </AlertDialogContent>
    </AlertDialog>
  );
}

function AuthScreen() {
  return (
    <>
      <AlertDialogHeader>
        <AlertDialogTitle className="mb-4 text-center">
          Sign into your account
        </AlertDialogTitle>
        <AlertDialogDescription className="text-center">
          You'll love all the features that are included with having an account.
          Sign in or register to receive full access.
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
      <AlertDialogFooter className="space-y-2 sm:flex-col sm:items-center sm:justify-center">
        <AlertDialogAction className="px-12">Sign in</AlertDialogAction>
        <Button variant="link"> Don't have an account? Register</Button>
      </AlertDialogFooter>
    </>
  );
}

function InitialAuthScreen({
  setShowAuthScreenHandler,
}: {
  setShowAuthScreenHandler: React.Dispatch<React.SetStateAction<boolean>>;
}) {
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
        <Button onClick={() => setShowAuthScreenHandler(true)}>
          Sign In or Register
        </Button>
      </AlertDialogFooter>
    </>
  );
}
