// app/(marketing)/signin/page.tsx
export const dynamic = 'force-dynamic';

import { Metadata } from "next";
import SigninForm from "./SigninForm";

export const metadata: Metadata = {
  title: "Sign In Page | Free Next.js Template for Startup and SaaS",
  description: "This is Sign In Page for Startup Nextjs Template",
  // other metadata
};


export default function SignupPage() {
  return <SigninForm/>;
}
