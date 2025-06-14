import { SignUpForm } from "@/components/forms/signup-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up | EL-EXE",
  description: "Create a new account on EL-EXE",
  keywords: ["sign up", "registration", "EL-EXE"],
  openGraph: {
    type: "website",
    url: "https://example.com/signup",
    title: "Sign Up | EL-EXE",
    description: "Create a new account on EL-EXE",
    siteName: "EL-EXE",
    images: [{ url: "https://example.com/og-signup.png" }],
  },
};

export default function SignUpPage() {
  return <SignUpForm />;
}
