import React, { useState, useRef } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useTheme } from "../../src/contexts/ThemeContext";
import { ArrowRight, Shield, RefreshCw } from "lucide-react";

const CODE_LENGTH = 6;

export default function OtpPage() {
  const router = useRouter();
  const { isDark } = useTheme();
  const [code, setCode] = useState(Array(CODE_LENGTH).fill(""));
  const [isVerifying, setIsVerifying] = useState(false);
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return;
    const nextCode = [...code];
    nextCode[index] = value;
    setCode(nextCode);
    if (value && index < CODE_LENGTH - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.some((digit) => digit === "")) return;
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      router.push("/");
    }, 1500);
  };

  const maskedEmail = "j***@saby.com";

  return (
    <>
      <Head>
        <title>Enter OTP - Saby</title>
      </Head>
      <div
        className={`min-h-screen px-4 py-12 sm:px-6 lg:px-8 relative overflow-hidden ${
          isDark ? "bg-gray-950" : "bg-slate-50"
        }`}>
        <div
          className="absolute inset-0 opacity-90 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(90deg,${
              isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)"
            } 1px, transparent 1px), linear-gradient(180deg,${
              isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)"
            } 1px, transparent 1px)`,
            backgroundSize: "34px 34px",
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto space-y-10 text-center">
          <div className="space-y-4 animate-[fadeIn_0.5s_ease]">
            <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-100/30 text-blue-600 text-sm font-medium">
              <Shield className="w-4 h-4" />
              Two-factor verification
            </span>
            <h1
              className={`text-4xl font-bold ${
                isDark ? "text-white" : "text-gray-900"
              }`}>
              Check your inbox
            </h1>
            <p className={isDark ? "text-gray-300" : "text-gray-600"}>
              We sent a six-digit code to{" "}
              <span className="font-semibold">{maskedEmail}</span>. Enter it
              below to complete your sign in.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className={`rounded-3xl border ${
              isDark
                ? "border-gray-800 bg-gray-900/70"
                : "border-white bg-white"
            } shadow-2xl shadow-blue-500/15 backdrop-blur-md p-8 space-y-6 animate-[fadeIn_0.5s_ease_0.05s]`}>
            <div className="flex justify-center gap-3">
              {code.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputsRef.current[index] = el)}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className={`w-14 h-16 text-center text-2xl font-semibold rounded-2xl border focus:outline-none focus:ring-2 transition-all ${
                    isDark
                      ? "bg-gray-800 border-gray-700 text-white focus:ring-blue-500/40"
                      : "bg-white border-gray-200 text-gray-900 focus:ring-blue-500/40"
                  }`}
                  autoFocus={index === 0}
                />
              ))}
            </div>

            <button
              type="submit"
              disabled={code.some((digit) => digit === "") || isVerifying}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2 hover:opacity-95 transition disabled:opacity-60">
              {isVerifying ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  Verify code
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>

            <div className="flex items-center justify-center gap-2 text-sm">
              <span className={isDark ? "text-gray-400" : "text-gray-500"}>
                Code not received?
              </span>
              <button
                type="button"
                className="flex items-center gap-1 text-blue-500 hover:text-blue-400 font-semibold">
                <RefreshCw className="w-4 h-4" />
                Resend in 45s
              </button>
            </div>

            <button
              type="button"
              onClick={() => router.push("/auth/login")}
              className={`w-full text-sm font-medium ${
                isDark
                  ? "text-gray-400 hover:text-gray-200"
                  : "text-gray-600 hover:text-gray-900"
              }`}>
              ← Back to sign in
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
