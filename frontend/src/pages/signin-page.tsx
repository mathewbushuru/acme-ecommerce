import { useState } from "react";
import { useNavigate } from "react-router-dom";

// import { useLoginMutation } from "@/api";
// import { useAppDispatch } from "@/store/store";
// import { setCredentials } from "@/store/features/auth-slice";

// import { type LoginRequestType } from "@/types/auth";

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
  // const dispatch = useAppDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const [loginTrigger, { isLoading }] = useLoginMutation();

  // const handleLogin = async () => {
  //   const loginData: LoginRequestType = { email, password };

  //   try {
  //     const loginResponse = await loginTrigger(loginData).unwrap();
  //     const { jwtToken, message, ...user } = loginResponse;
  //     console.log(message);
  //     navigate("/");
  //     dispatch(setCredentials({ user, token: jwtToken }));
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          </AlertDialogHeader>
          <AlertDialogFooter className="space-y-2 sm:flex-col sm:items-center sm:justify-center">
            <AlertDialogAction className="px-12" onClick={() => navigate("/")}>
              {/* {isLoading ? "Loading ..." : "Sign in"} */}
              Sign in
            </AlertDialogAction>
            <Button variant="link"> Don't have an account? Register</Button>
            <p className="text-xs font-light tracking-wide text-muted-foreground">
              Use matt@test.com and Tester123! as demo credentials
            </p>
          </AlertDialogFooter>
        </AlertDialog>
      </div>
    </main>
  );
}
