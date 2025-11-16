import React, { useEffect, useMemo, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import { CheckCircle, ArrowRight, Calendar, CreditCard, Shield, Mail } from "lucide-react";
import Navigation from "../../src/components/Navigation";
import Footer from "../../src/components/Footer";
import { useTheme } from "../../src/contexts/ThemeContext";

const SubscriptionSuccessPage = () => {
  const router = useRouter();
  const { isDark, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const trialEnd = useMemo(() => {
    const now = new Date();
    now.setMonth(now.getMonth() + 1);
    return now.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }, []);

  if (!mounted) return null;

  return (
    <>
      <Head>
        <title>Welcome to Saby – Your Trial is Active</title>
        <meta
          name="description"
          content="Your 30-day free trial is now active. Start using Saby to transform your data into insights."
        />
      </Head>
      <div
        className={`min-h-screen relative overflow-hidden transition-colors ${
          isDark ? "bg-gray-950" : "bg-white"
        }`}>
        {/* Background grid - behind everything */}
        <div
          className="fixed inset-0 pointer-events-none z-0"
          style={{
            opacity: 0.85,
            backgroundImage: `linear-gradient(90deg, ${
              isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"
            } 1px, transparent 1px), linear-gradient(180deg, ${
              isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"
            } 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
            backgroundPosition: "center",
          }}
        />
        {/* Navigation */}
        <Navigation
          isDark={isDark}
          toggleTheme={toggleTheme}
          currentPage="/subscribe/success"
        />
        {/* Main content */}
        <main className="relative z-10 pt-24 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Success Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-500/10 mb-6">
                <CheckCircle className="w-12 h-12 text-emerald-500" />
              </div>
              <h1
                className={`text-4xl md:text-5xl font-bold mb-4 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}>
                Welcome to Saby!
              </h1>
              <p
                className={`text-xl mb-2 ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}>
                Your 30-day free trial is now active
              </p>
              <p className={isDark ? "text-gray-400" : "text-gray-500"}>
                We've sent a confirmation email with next steps
              </p>
            </div>

            {/* Trial Details Card */}
            <div
              className={`rounded-3xl border p-8 mb-8 ${
                isDark
                  ? "border-gray-800 bg-gray-900/60"
                  : "border-gray-200 bg-white shadow-lg"
              }`}>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-blue-500" />
                  </div>
                  <div className="flex-1">
                    <h3
                      className={`text-lg font-semibold mb-1 ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}>
                      Trial Period
                    </h3>
                    <p className={isDark ? "text-gray-400" : "text-gray-600"}>
                      Your trial ends on {trialEnd}
                    </p>
                    <p className="text-sm mt-2 text-emerald-600 dark:text-emerald-400">
                      No charges until then. Cancel anytime.
                    </p>
                  </div>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-800 pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
                      <Mail className="w-6 h-6 text-purple-500" />
                    </div>
                    <div className="flex-1">
                      <h3
                        className={`text-lg font-semibold mb-1 ${
                          isDark ? "text-white" : "text-gray-900"
                        }`}>
                        What's Next?
                      </h3>
                      <ul
                        className={`space-y-2 text-sm ${
                          isDark ? "text-gray-400" : "text-gray-600"
                        }`}>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                          Check your email for the welcome guide
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                          We'll send a reminder 7 days before billing starts
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                          Explore features and set up your workspace
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-800 pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center">
                      <Shield className="w-6 h-6 text-amber-500" />
                    </div>
                    <div className="flex-1">
                      <h3
                        className={`text-lg font-semibold mb-1 ${
                          isDark ? "text-white" : "text-gray-900"
                        }`}>
                        Secure Payment
                      </h3>
                      <p className={isDark ? "text-gray-400" : "text-gray-600"}>
                        Your payment method is securely stored and encrypted
                      </p>
                      <p className="text-sm mt-2 text-gray-500 dark:text-gray-500">
                        PCI DSS Level 1 compliant • 256-bit encryption
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/app"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:opacity-95 transition-all shadow-lg shadow-blue-500/30">
                Go to Dashboard
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/pricing"
                className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border font-semibold transition-colors ${
                  isDark
                    ? "border-gray-700 text-gray-300 hover:bg-gray-800"
                    : "border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}>
                View Pricing
              </Link>
            </div>

            {/* Help Section */}
            <div className="mt-12 text-center">
              <p
                className={`${isDark ? "text-gray-400" : "text-gray-500"} mb-4`}>
                Need help getting started?
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/docs"
                  className={`text-sm font-medium ${
                    isDark
                      ? "text-blue-400 hover:text-blue-300"
                      : "text-blue-600 hover:text-blue-700"
                  }`}>
                  Documentation →
                </Link>
                <Link
                  href="/support"
                  className={`text-sm font-medium ${
                    isDark
                      ? "text-blue-400 hover:text-blue-300"
                      : "text-blue-600 hover:text-blue-700"
                  }`}>
                  Contact Support →
                </Link>
                <Link
                  href="/resources"
                  className={`text-sm font-medium ${
                    isDark
                      ? "text-blue-400 hover:text-blue-300"
                      : "text-blue-600 hover:text-blue-700"
                  }`}>
                  Resources →
                </Link>
              </div>
            </div>
          </div>
        </main>
        <div className="relative z-10">
          <Footer isDark={isDark} />
        </div>
      </div>
    </>
  );
};

export default SubscriptionSuccessPage;

