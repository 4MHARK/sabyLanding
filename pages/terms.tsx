import React from "react";
import Head from "next/head";
import { useTheme } from "../src/contexts/ThemeContext";
import Navigation from "../src/components/Navigation";
import Footer from "../src/components/Footer";

export default function TermsPage() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <>
      <Head>
        <title>Terms of Service - Saby Analytics</title>
        <meta
          name="description"
          content="Terms of Service for Saby Analytics Platform"
        />
      </Head>

      <div
        className={`min-h-screen transition-colors duration-300 ${
          isDark ? "bg-gray-900" : "bg-white"
        }`}>
        <Navigation
          isDark={isDark}
          toggleTheme={toggleTheme}
          currentPage="/terms"
        />

        <div className="pt-24 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1
              className={`text-4xl md:text-5xl font-bold mb-8 ${
                isDark ? "text-white" : "text-gray-900"
              }`}>
              Terms of Service
            </h1>

            <div
              className={`prose prose-lg ${
                isDark ? "prose-invert" : ""
              } max-w-none`}>
              <p
                className={`text-lg mb-6 ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}>
                Last updated: October 12, 2025
              </p>

              <section className="mb-8">
                <h2
                  className={`text-2xl font-semibold mb-4 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}>
                  1. Acceptance of Terms
                </h2>
                <p
                  className={`mb-4 ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}>
                  By accessing and using Saby Analytics ("Service"), you accept
                  and agree to be bound by the terms and provision of this
                  agreement.
                </p>
              </section>

              <section className="mb-8">
                <h2
                  className={`text-2xl font-semibold mb-4 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}>
                  2. Use License
                </h2>
                <p
                  className={`mb-4 ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}>
                  Permission is granted to temporarily access the Service for
                  personal, non-commercial transitory viewing only.
                </p>
              </section>

              <section className="mb-8">
                <h2
                  className={`text-2xl font-semibold mb-4 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}>
                  3. User Accounts
                </h2>
                <p
                  className={`mb-4 ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}>
                  When you create an account with us, you must provide accurate,
                  complete, and current information. Failure to do so
                  constitutes a breach of the Terms.
                </p>
              </section>

              <section className="mb-8">
                <h2
                  className={`text-2xl font-semibold mb-4 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}>
                  4. Privacy Policy
                </h2>
                <p
                  className={`mb-4 ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}>
                  Your privacy is important to us. Please review our Privacy
                  Policy to understand how we collect and use your information.
                </p>
              </section>

              <section className="mb-8">
                <h2
                  className={`text-2xl font-semibold mb-4 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}>
                  5. Contact
                </h2>
                <p className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>
                  If you have any questions about these Terms, please contact us
                  at terms@saby.com
                </p>
              </section>
            </div>
          </div>
        </div>

        <Footer isDark={isDark} />
      </div>
    </>
  );
}

