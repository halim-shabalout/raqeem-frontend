import ResetPasswordPage from "@/components/auth/ResetPassword";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Raqeem",
  description: "Quotations",
};

export default function SignIn() {
  return <ResetPasswordPage />;
}
