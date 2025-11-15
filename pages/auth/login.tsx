import React, { useState } from "react";
import { ArrowRight, Eye, EyeOff, ShieldCheck, Lock, Mail } from "lucide-react";
import { useRouter } from "next/router";
import Head from "next/head";
import { useTheme } from "../../src/contexts/ThemeContext";

export default function LoginPage() {
  const router = useRouter();
  const { isDark } = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.push("/");
    }, 1500);
  };

  return (
    <>
      <Head>
        <title>Sign In - Saby Analytics</title>
        <meta
          name="description"
          content="Sign in to your Saby account to access powerful analytics insights"
        />
      </Head>

      <div
        className={`min-h-screen relative overflow-hidden ${
          isDark ? "bg-gray-950" : "bg-slate-50"
        } px-4 py-12 sm:px-6 lg:px-8`}>
        <div
          className="absolute inset-0 opacity-90 pointer-events-none transition-opacity duration-500"
          style={{
            backgroundImage: `linear-gradient(90deg,${
              isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)"
            } 1px, transparent 1px), linear-gradient(180deg,${
              isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)"
            } 1px, transparent 1px)`,
            backgroundSize: "34px 34px",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-8 animate-[fadeIn_0.6s_ease]">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-100/30 text-blue-600 text-sm font-medium w-fit">
              <ShieldCheck className="w-4 h-4" />
              Enterprise-grade security
            </div>
            <div>
              <h1
                className={`text-4xl sm:text-5xl font-bold mb-4 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}>
                Welcome back to your command center
              </h1>
              <p
                className={`text-lg ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}>
                Sign in to orchestrate your data, automate workflows, and stay
                on top of every signal.
              </p>
            </div>
            <div
              className={`rounded-3xl border ${
                isDark
                  ? "border-gray-800 bg-gray-900/40"
                  : "border-white bg-white"
              } shadow-xl shadow-blue-500/5 backdrop-blur-md p-8 space-y-8 transition-transform duration-500 hover:-translate-y-1`}>
              <div className="flex items-center justify-between">
                <div>
                  <p
                    className={`text-sm ${
                      isDark ? "text-gray-400" : "text-gray-500"
                    }`}>
                    Active sessions
                  </p>
                  <p className="text-3xl font-semibold text-blue-500">3,482</p>
                </div>
                <div>
                  <p
                    className={`text-sm ${
                      isDark ? "text-gray-400" : "text-gray-500"
                    }`}>
                    Security score
                  </p>
                  <p className="text-3xl font-semibold text-emerald-400">
                    99.4%
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold">
                  S
                </div>
                <div>
                  <p
                    className={`font-medium ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}>
                    Saby Identity
                  </p>
                  <p
                    className={`${isDark ? "text-gray-400" : "text-gray-500"}`}>
                    Single sign-on enabled
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
            } shadow-2xl shadow-blue-500/10 backdrop-blur-md p-8 space-y-8 animate-[fadeIn_0.6s_ease_0.1s]`}>
            <div className="space-y-2 text-center">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 mx-auto flex items-center justify-center text-white font-bold text-xl">
                S
              </div>
              <h2
                className={`text-2xl font-semibold ${
                  isDark ? "text-white" : "text-gray-900"
                }`}>
                Sign in to Saby
              </h2>
              <p className={isDark ? "text-gray-400" : "text-gray-500"}>
                Enter your credentials or continue with your workspace identity.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              <button
                className={`flex items-center justify-center gap-3 px-4 py-3 rounded-xl border transition-all ${
                  isDark
                    ? "border-gray-800 hover:border-gray-700 bg-gray-800/60 text-gray-200"
                    : "border-gray-200 hover:border-gray-300 bg-white text-gray-700"
                }`}>
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.5 12.23c0-.78-.07-1.53-.2-2.26H12v4.27h5.84c-.25 1.37-1 2.53-2.15 3.3v2.75h3.47c2.03-1.87 3.34-4.63 3.34-8.06Z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.47-.98 7.29-2.71l-3.47-2.75c-.96.64-2.2 1.02-3.82 1.02-2.94 0-5.43-1.99-6.32-4.67H2.05v2.9A11 11 0 0 0 12 23Z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.68 13.89c-.22-.64-.35-1.33-.35-2.04s.13-1.4.35-2.04V6.91H2.05A11 11 0 0 0 1 11.85c0 1.78.43 3.45 1.05 4.94l3.63-2.9Z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 4.58c1.62 0 3.07.56 4.21 1.67l3.15-3.15C17.47 1.73 14.97.75 12 .75A11 11 0 0 0 2.05 6.91l3.63 2.9C6.57 6.57 9.06 4.58 12 4.58Z"
                  />
                </svg>
                Google
              </button>
              <button
                className={`flex items-center justify-center gap-3 px-4 py-3 rounded-xl border transition-all ${
                  isDark
                    ? "border-gray-800 hover:border-gray-700 bg-gray-800/60 text-gray-200"
                    : "border-gray-200 hover:border-gray-300 bg-white text-gray-700"
                }`}>
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    d="M18.71 3.43c-.99 1.18-2.61 1.32-3.18 1.35-.68.07-1.77-.96-3.23-.94-1.65.02-3.14.96-3.98 2.43-1.7 2.93-.43 7.24 1.22 9.63.81 1.18 1.76 2.51 3.07 2.46 1.23-.05 1.69-.8 3.17-.8 1.47 0 1.89.8 3.19.78 1.32-.02 2.16-1.2 2.97-2.39.92-1.36 1.3-2.67 1.32-2.74-.03-.01-2.55-.98-2.58-3.85-.02-2.41 1.98-3.55 2.07-3.61-1.13-1.65-2.9-1.88-3.07-1.9Z"
                    fill={isDark ? "#fff" : "#111"}
                  />
                  <path
                    d="M15.51 1.25c-.83.39-1.52 1.03-1.99 1.83-.48.82-.7 1.7-.69 2.6"
                    stroke={isDark ? "#111" : "#fff"}
                    strokeWidth="0.5"
                  />
                </svg>
                Apple
              </button>
            </div>

            <div className="relative text-center">
              <div className="absolute inset-x-0 top-1/2 border-t border-gray-200 dark:border-gray-800" />
              <span
                className={`relative px-4 text-xs uppercase tracking-[0.2em] ${
                  isDark
                    ? "bg-gray-900 text-gray-500"
                    : "bg-white text-gray-400"
                }`}>
                Or continue with email
              </span>
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

              <div className="space-y-2">
                <label
                  htmlFor="password"
                  className={`flex items-center gap-2 text-sm font-medium ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}>
                  <Lock className="w-4 h-4" />
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`w-full px-4 py-3 pr-12 rounded-xl border focus:outline-none focus:ring-2 transition-all ${
                      isDark
                        ? "bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:ring-blue-500/40"
                        : "bg-white border-gray-200 text-gray-900 placeholder-gray-500 focus:ring-blue-500/40"
                    }`}
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className={`absolute right-3 top-1/2 -translate-y-1/2 ${
                      isDark
                        ? "text-gray-400 hover:text-gray-200"
                        : "text-gray-500 hover:text-gray-700"
                    } transition-colors`}>
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-gray-300 text-blue-500 focus:ring-blue-500"
                  />
                  <span className={isDark ? "text-gray-300" : "text-gray-600"}>
                    Remember me
                  </span>
                </label>
                <button
                  type="button"
                  onClick={() => router.push("/auth/forgot-password")}
                  className="text-blue-500 hover:text-blue-400 font-medium">
                  Forgot password?
                </button>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2 hover:opacity-95 transition disabled:opacity-60">
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    Sign in securely
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>

            <div className="text-center text-sm">
              <span className={isDark ? "text-gray-400" : "text-gray-500"}>
                New here?{" "}
                <button
                  onClick={() => router.push("/auth/signup")}
                  className="text-blue-500 hover:text-blue-400 font-semibold">
                  Create an account
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
