// app/(marketing)/signup/page.tsx
export const dynamic = 'force-dynamic';

import { Metadata } from "next";
import SignupForm from "./SignupForm";

export const metadata: Metadata = {
  title: "Sign Up Page | Free Next.js Template for Startup and SaaS",
  description: "This is the Sign Up Page for Startup Nextjs Template",
};

export default function SignupPage() {
  return <SignupForm />;
}


