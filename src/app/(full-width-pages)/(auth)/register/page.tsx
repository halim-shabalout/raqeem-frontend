import SignUpForm from "@/components/auth/SignUpForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Raqeem",
  description: "Quotations",
};

export default function SignIn() {
  return <SignUpForm />;
}
