import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Loader } from "lucide-react";

import { useAdminLoginMutation } from "@/api";
import { useAppDispatch } from "@/store/store";
import { setCredentials, clearCredentials } from "@/store/features/auth-slice";

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

  const handleLogout = () => {
    toast.success("Logout successful.");
    dispatch(clearCredentials());
    navigate("/");
  };

  const handleLogin = async (
    e:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();

    if (email.length === 0) {
      toast.error("Email is required");
      return;
    }

    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(email)) {
      toast.error("Use valid email address");
      return;
    }

    if (password.length === 0) {
      toast.error("Password is required");
      return;
    }

    const loginData: AdminLoginRequestType = { email, password };

    try {
      const loginResponse = await loginTrigger(loginData).unwrap();

      const { jwtToken, message, ...user } = loginResponse;
      console.log(message);
      console.log(user);

      toast.success("Sign in successful.", {
        description: "Welcome to the Acme Admin Panel.",
        action: {
          label: "Log out",
          onClick: handleLogout,
        },
      });
      navigate("/dashboard");
      dispatch(setCredentials({ user, token: jwtToken }));
    } catch (error: any) {
      console.error(error);
      toast.error(error.data.errorMessage || "Wrong email or password");
      setPassword("");
    }
  };

  return (
    <form onSubmit={handleLogin}>
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
          <p className="text-center text-xs font-light text-muted-foreground">
            Use mattb@test.com and 781*admiN as demo credentials
          </p>
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={handleLogin}>
            {isLoading ? (
              <>
                <Loader className="mr-2 h-4 w-4 animate-spin" />
                Loading
              </>
            ) : (
              "Sign in"
            )}
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}
