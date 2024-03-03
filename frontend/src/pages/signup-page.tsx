import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useSignupMutation } from "@/api";

import { type SignupRequestType } from "@/types/auth";

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

export default function SignupPage() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signupTrigger, { isLoading }] = useSignupMutation();

  const [hasSignupError, setHasSignupError] = useState(false);
  const [signupErrorMessage, setSignupErrorMessage] = useState("");

  const handleLogin = async () => {
    if (firstName.length === 0) {
      setHasSignupError(true);
      setSignupErrorMessage("First name is required!");
      return;
    }

    if (lastName.length === 0) {
      setHasSignupError(true);
      setSignupErrorMessage("Last name is required!");
      return;
    }

    if (email.length === 0) {
      setHasSignupError(true);
      setSignupErrorMessage("Email is required!");
      return;
    }

    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(email)) {
      setHasSignupError(true);
      setSignupErrorMessage("Use valid email address!");
      return;
    }

    if (password.length === 0) {
      setHasSignupError(true);
      setSignupErrorMessage("Password is required!");
      return;
    }

    setHasSignupError(false);

    const signupData: SignupRequestType = {
      email,
      password,
      firstName,
      lastName,
    };

    try {
      const signupResponse = await signupTrigger(signupData).unwrap();
      console.log(signupResponse);
      navigate("/auth/signin");
    } catch (error: any) {
      console.error(error);
      setSignupErrorMessage(
        error.data.errorMessage || "There was a problem signing up. try again",
      );
      setHasSignupError(true);
    }
  };

  return (
    <main className="pt-12 sm:pt-40">
      <div className="mx-auto max-w-lg px-8">
        <AlertDialog>
          <AlertDialogHeader>
            <AlertDialogTitle className="mb-4 text-center">
              Register an account
            </AlertDialogTitle>
            <AlertDialogDescription className="text-center">
              You'll love all the features that are included with having an
              account. Sign in or register to receive full access.
            </AlertDialogDescription>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="firstName" className="col-span-4 sm:col-span-1">
                  First name
                </Label>
                <Input
                  id="firstName"
                  className="col-span-4 sm:col-span-3"
                  type="text"
                  placeholder="Matt"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="lastName" className="col-span-4 sm:col-span-1">
                  Last name
                </Label>
                <Input
                  id="lastName"
                  className="col-span-4 sm:col-span-3"
                  type="text"
                  placeholder="B"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="col-span-4 sm:col-span-1">
                  Email
                </Label>
                <Input
                  id="email"
                  className="col-span-4 sm:col-span-3"
                  type="email"
                  placeholder="mattb@test.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mt-2 grid grid-cols-4 items-center gap-4">
                <Label htmlFor="password" className="col-span-4 sm:col-span-1">
                  Password
                </Label>
                <Input
                  id="password"
                  className="col-span-4 sm:col-span-3"
                  type="password"
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex-col space-y-2 sm:flex-col sm:items-center sm:justify-center">
            {hasSignupError && (
              <p className="my-1 text-center text-xs text-destructive">
                {signupErrorMessage}
              </p>
            )}
            <AlertDialogAction className="mt-2 px-12" onClick={handleLogin}>
              {isLoading ? "Loading ..." : "Sign up"}
            </AlertDialogAction>
            <Button variant="link" onClick={() => navigate("/auth/signin")}>
              {" "}
              Already have an account? Sign in
            </Button>
          </AlertDialogFooter>
        </AlertDialog>
      </div>
    </main>
  );
}
