"use client";
import SignUpForm from "@/components/auth/SignUpForm";
import { useGlobalState } from "@/context/GlobalStateContext";
import { redirect, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function SignUp() {
  const { token, completeRegistration } = useGlobalState();
  const searchParams = useSearchParams();
  const router = useRouter();

  const referralCode = searchParams.get("ref");


  useEffect(() => {
    if (token && completeRegistration) {
      router.push("/dashboard")
    }
  }, [completeRegistration, token, router]);

  return (
    <div>
      <div className="lg:flex flex-col items-start justify-center h-screen ">
        <h1 className="lg:text-3xl text-xl mb-3 lg:mb-9">
          Sign up to Decoding The Future Quest{" "}
        </h1>
        <SignUpForm refCode={referralCode} />
      </div>
    </div>
  );
}
