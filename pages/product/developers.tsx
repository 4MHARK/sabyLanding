import React from "react";
import Head from "next/head";
import { useTheme } from "../../src/contexts/ThemeContext";
import Navigation from "../../src/components/Navigation";
import Footer from "../../src/components/Footer";

export default function ForDevelopers() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className={`min-h-screen ${isDark ? "bg-gray-900" : "bg-white"}`}>
      <Head>
        <title>For Developers - Saby Analytics</title>
        <meta
          name="description"
          content="Analytics tools for source code, documentation, guides and tutorials. Track developer engagement and content performance."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation isDark={isDark} toggleTheme={toggleTheme} />

      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1
              className={`text-4xl font-bold ${
                isDark ? "text-white" : "text-gray-900"
              } mb-4`}>
              Analytics for Developers
            </h1>
            <p
              className={`text-xl ${
                isDark ? "text-gray-300" : "text-gray-600"
              } mb-8`}>
              Perfect for source code, documentation, guides and tutorials
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div
                className={`p-6 rounded-lg ${
                  isDark ? "bg-gray-800" : "bg-gray-50"
                }`}>
                <div className="w-12 h-12 bg-gray-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
                <h3
                  className={`text-lg font-semibold mb-2 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}>
                  Code Analytics
                </h3>
                <p
                  className={`text-sm ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}>
                  Track repository views, clone counts, and developer engagement
                  with your open source projects.
                </p>
              </div>

              <div
                className={`p-6 rounded-lg ${
                  isDark ? "bg-gray-800" : "bg-gray-50"
                }`}>
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h3
                  className={`text-lg font-semibold mb-2 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}>
                  Documentation Insights
                </h3>
                <p
                  className={`text-sm ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}>
                  Monitor which documentation pages are most visited and
                  optimize your developer onboarding experience.
                </p>
              </div>

              <div
                className={`p-6 rounded-lg ${
                  isDark ? "bg-gray-800" : "bg-gray-50"
                }`}>
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3
                  className={`text-lg font-semibold mb-2 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}>
                  Tutorial Performance
                </h3>
                <p
                  className={`text-sm ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}>
                  Analyze which tutorials and guides are most effective at
                  teaching developers your technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

