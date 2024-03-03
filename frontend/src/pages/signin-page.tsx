import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useLoginMutation } from "@/api";
import { useAppDispatch } from "@/store/store";
import { setCredentials } from "@/store/features/auth-slice";

import { type LoginRequestType } from "@/types/auth";

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
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginTrigger, { isLoading }] = useLoginMutation();

  const [hasLoginError, setHasLoginError] = useState(false);
  const [loginErrorMessage, setLoginErrorMessage] = useState("");

  const handleLogin = async () => {
    if (email.length === 0) {
      setHasLoginError(true);
      setLoginErrorMessage("Email is required!");
      return;
    }

    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(email)) {
      setHasLoginError(true);
      setLoginErrorMessage("Use valid email address!");
      return;
    }

    if (password.length === 0) {
      setHasLoginError(true);
      setLoginErrorMessage("Password is required!");
      return;
    }

    setHasLoginError(false);

    const loginData: LoginRequestType = { email, password };

    try {
      const loginResponse = await loginTrigger(loginData).unwrap();

      const { jwtToken, message, ...user } = loginResponse;
      console.log(message);

      console.log(user);

      navigate("/");
      dispatch(setCredentials({ user, token: jwtToken }));
    } catch (error) {
      console.error(error);
      setLoginErrorMessage("Wrong email or password");
      setPassword("");
      setHasLoginError(true);
    }
  };

  return (
    <main className="pt-12 sm:pt-40">
      <div className="mx-auto max-w-lg px-8">
        <AlertDialog>
          <AlertDialogHeader>
            <AlertDialogTitle className="mb-4 text-center">
              Sign into your account
            </AlertDialogTitle>
            <AlertDialogDescription className="text-center">
              You'll love all the features that are included with having an
              account. Sign in or register to receive full access.
            </AlertDialogDescription>
            <div className="grid gap-4 py-4">
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
          <AlertDialogFooter className="space-y-2 sm:flex-col sm:items-center sm:justify-center">
            {hasLoginError && (
              <p className="mb-1 text-xs text-destructive">
                {loginErrorMessage}
              </p>
            )}
            <AlertDialogAction className="mt-2 px-12" onClick={handleLogin}>
              {isLoading ? "Loading ..." : "Sign in"}
            </AlertDialogAction>
            <Button variant="link" onClick={() => navigate("/auth/signup")}> Don't have an account? Register</Button>
            <p className="text-center text-xs font-light tracking-wide  text-muted-foreground">
              Use mattb@test.com and Tester123! as demo credentials
            </p>
          </AlertDialogFooter>
        </AlertDialog>
      </div>
    </main>
  );
}
