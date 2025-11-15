import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Mail, ArrowRight, Shield, Clock } from "lucide-react";
import { useTheme } from "../../src/contexts/ThemeContext";

export default function ForgotPasswordPage() {
  const router = useRouter();
  const { isDark } = useTheme();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      router.push("/auth/otp");
    }, 1500);
  };

  return (
    <>
      <Head>
        <title>Reset Password - Saby</title>
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

        <div className="relative z-10 max-w-5xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-8 animate-[fadeIn_0.5s_ease]">
            <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-100/30 text-blue-600 text-sm font-medium w-fit">
              <Shield className="w-4 h-4" />
              Secure account recovery
            </span>
            <div>
              <h1
                className={`text-4xl sm:text-5xl font-bold mb-4 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}>
                Forgot your access key?
              </h1>
              <p className={isDark ? "text-gray-300" : "text-gray-600"}>
                We’ll send a one-time code to help you get back in. Recovery
                links expire after 15 minutes for your protection.
              </p>
            </div>
            <div
              className={`rounded-3xl border ${
                isDark
                  ? "border-gray-800 bg-gray-900/60"
                  : "border-white bg-white"
              } shadow-xl shadow-blue-500/10 backdrop-blur-md p-6 space-y-4`}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-white flex items-center justify-center font-semibold">
                  2FA
                </div>
                <div>
                  <p
                    className={`text-lg font-semibold ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}>
                    Zero trust recovery
                  </p>
                  <p className={isDark ? "text-gray-400" : "text-gray-500"}>
                    Device fingerprinting & anomaly detection keep your
                    workspace secure.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`rounded-3xl border ${
              isDark
                ? "border-gray-800 bg-gray-900/70"
                : "border-white bg-white"
            } shadow-2xl shadow-blue-500/15 backdrop-blur-md p-8 space-y-6 animate-[fadeIn_0.5s_ease_0.1s]`}>
            <div className="text-center space-y-2">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 mx-auto flex items-center justify-center text-white font-bold text-xl">
                S
              </div>
              <h2
                className={`text-2xl font-semibold ${
                  isDark ? "text-white" : "text-gray-900"
                }`}>
                Send password reset link
              </h2>
              <p className={isDark ? "text-gray-400" : "text-gray-500"}>
                Enter the email associated with your Saby workspace. We’ll send
                a secure link and OTP.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className={`flex items-center gap-2 text-sm font-medium ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}>
                  <Mail className="w-4 h-4" />
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 transition-all ${
                    isDark
                      ? "bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:ring-blue-500/40"
                      : "bg-white border-gray-200 text-gray-900 placeholder-gray-500 focus:ring-blue-500/40"
                  }`}
                  placeholder="jamie@example.com"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2 hover:opacity-95 transition disabled:opacity-60">
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    Send recovery link
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>

            <div className="rounded-2xl border border-dashed border-blue-500/30 p-4 flex items-center gap-3 text-sm">
              <Clock className="w-5 h-5 text-blue-400" />
              <p className={isDark ? "text-gray-300" : "text-gray-600"}>
                Codes expire after 15 minutes. Didn’t receive anything? Check
                spam or{" "}
                <button
                  className="text-blue-500 hover:text-blue-400"
                  onClick={() => router.push("/auth/otp")}>
                  enter the OTP manually
                </button>
                .
              </p>
            </div>

            <button
              onClick={() => router.push("/auth/login")}
              className={`w-full text-sm font-medium ${
                isDark
                  ? "text-gray-400 hover:text-gray-200"
                  : "text-gray-600 hover:text-gray-900"
              }`}>
              ← Back to sign in
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
