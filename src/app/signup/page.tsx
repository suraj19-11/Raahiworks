import AuthContainer from "@/components/auth/AuthContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up | Raahi",
  description: "Create a new Raahi account",
};

export default function SignupPage() {
  return <AuthContainer initialMode="signup" />;
}
