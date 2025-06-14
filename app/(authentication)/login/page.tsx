import { LoginForm } from "@/components/forms/login-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | EL-EXE",
  description: "Login to your EL-EXE account",
  keywords: ["login", "authentication", "EL-EXE"],
  openGraph: {
    type: "website",
    url: "https://example.com/login",
    title: "Login | EL-EXE",
    description: "Login to your EL-EXE account",
    siteName: "EL-EXE",
    images: [{ url: "https://example.com/og-login.png" }],
  },
};

export default function LoginPage() {
  return <LoginForm />;
}
