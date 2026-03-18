import AuthContainer from "@/components/auth/AuthContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | Raahi",
  description: "Sign in to your Raahi account",
};

export default function LoginPage() {
  return <AuthContainer initialMode="login" />;
}
