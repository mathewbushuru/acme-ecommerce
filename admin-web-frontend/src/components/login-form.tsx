import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAdminLoginMutation } from "@/api";
import { useAppDispatch } from "@/store/store";
import { setCredentials } from "@/store/features/auth-slice";

import { type AdminLoginRequestType } from "@/types/auth";

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
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginTrigger, { isLoading }] = useAdminLoginMutation();

  const [hasLoginError, setHasLoginError] = useState(false);
  const [loginErrorMessage, setLoginErrorMessage] = useState("");

  const handleLogin = async () => {
    if (email.length === 0) {
      setHasLoginError(true);
      setLoginErrorMessage("Email is required");
      return;
    }

    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(email)) {
      setHasLoginError(true);
      setLoginErrorMessage("Use valid email address");
      return;
    }

    if (password.length === 0) {
      setHasLoginError(true);
      setLoginErrorMessage("Password is required");
      return;
    }

    setHasLoginError(false);

    const loginData: AdminLoginRequestType = { email, password };

    try {
      const loginResponse = await loginTrigger(loginData).unwrap();

      const { jwtToken, message, ...user } = loginResponse;
      console.log(message);
      console.log(user);

      navigate("/dashboard");
      dispatch(setCredentials({ user, token: jwtToken }));
    } catch (error: any) {
      console.error(error);
      setLoginErrorMessage(
        error.data.errorMessage || "Wrong email or password",
      );
      setPassword("");
      setHasLoginError(true);
    }
  };

  return (
    <Card className="mx-auto w-full max-w-sm">
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            required
            className="bg-popover"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <p className="h-0.5 text-center text-xs text-destructive">
          {hasLoginError ? loginErrorMessage : " "}
        </p>
        <p className="text-center text-xs font-light text-muted-foreground">
          Use mattb@test.com and 781*admiN as demo credentials
        </p>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={handleLogin}>
          {isLoading ? "Loading..." : "Sign in"}
        </Button>
      </CardFooter>
    </Card>
  );
}
