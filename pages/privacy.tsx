import React from "react";
import Head from "next/head";
import { useTheme } from "../src/contexts/ThemeContext";
import Navigation from "../src/components/Navigation";
import Footer from "../src/components/Footer";

export default function PrivacyPage() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <>
      <Head>
        <title>Privacy Policy - Saby Analytics</title>
        <meta
          name="description"
          content="Privacy Policy for Saby Analytics Platform"
        />
      </Head>

      <div
        className={`min-h-screen transition-colors duration-300 ${
          isDark ? "bg-gray-900" : "bg-white"
        }`}>
        <Navigation
          isDark={isDark}
          toggleTheme={toggleTheme}
          currentPage="/privacy"
        />

        <div className="pt-24 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1
              className={`text-4xl md:text-5xl font-bold mb-8 ${
                isDark ? "text-white" : "text-gray-900"
              }`}>
              Privacy Policy
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
                  1. Information We Collect
                </h2>
                <p
                  className={`mb-4 ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}>
                  We collect information you provide directly to us, including
                  name, email address, and any other information you choose to
                  provide when using our Service.
                </p>
              </section>

              <section className="mb-8">
                <h2
                  className={`text-2xl font-semibold mb-4 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}>
                  2. How We Use Your Information
                </h2>
                <p
                  className={`mb-4 ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}>
                  We use the information we collect to provide, maintain, and
                  improve our services, to communicate with you, and to monitor
                  and analyze trends and usage.
                </p>
              </section>

              <section className="mb-8">
                <h2
                  className={`text-2xl font-semibold mb-4 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}>
                  3. Data Security
                </h2>
                <p
                  className={`mb-4 ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}>
                  We take reasonable measures to help protect information about
                  you from loss, theft, misuse, and unauthorized access,
                  disclosure, alteration, and destruction.
                </p>
              </section>

              <section className="mb-8">
                <h2
                  className={`text-2xl font-semibold mb-4 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}>
                  4. Your Rights
                </h2>
                <p
                  className={`mb-4 ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}>
                  You have the right to access, update, or delete your personal
                  information at any time. You may also opt out of receiving
                  promotional communications from us.
                </p>
              </section>

              <section className="mb-8">
                <h2
                  className={`text-2xl font-semibold mb-4 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}>
                  5. Contact Us
                </h2>
                <p className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>
                  If you have any questions about this Privacy Policy, please
                  contact us at privacy@saby.com
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

