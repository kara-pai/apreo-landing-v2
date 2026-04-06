import { Suspense } from "react";
import { LoginContent } from "./login-content";

export const metadata = {
  title: "APREO | Authentication",
};

export default function LoginPage() {
  return (
    <Suspense>
      <LoginContent />
    </Suspense>
  );
}
