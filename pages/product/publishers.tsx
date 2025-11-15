import React from "react";
import Head from "next/head";
import { useTheme } from "../../src/contexts/ThemeContext";
import Navigation from "../../src/components/Navigation";
import Footer from "../../src/components/Footer";

export default function ForPublishers() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className={`min-h-screen ${isDark ? "bg-gray-900" : "bg-white"}`}>
      <Head>
        <title>For Publishers - Saby Analytics</title>
        <meta
          name="description"
          content="Analytics tools for writers, journalists, local news and new media outlets. Track readership and content performance."
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
              Analytics for Publishers
            </h1>
            <p
              className={`text-xl ${
                isDark ? "text-gray-300" : "text-gray-600"
              } mb-8`}>
              Perfect for writers, journalists, local news and new media outlets
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div
                className={`p-6 rounded-lg ${
                  isDark ? "bg-gray-800" : "bg-gray-50"
                }`}>
                <div className="w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                    />
                  </svg>
                </div>
                <h3
                  className={`text-lg font-semibold mb-2 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}>
                  Readership Analytics
                </h3>
                <p
                  className={`text-sm ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}>
                  Track article views, reading time, and engagement metrics
                  across all your publications.
                </p>
              </div>

              <div
                className={`p-6 rounded-lg ${
                  isDark ? "bg-gray-800" : "bg-gray-50"
                }`}>
                <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3
                  className={`text-lg font-semibold mb-2 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}>
                  Breaking News Tracking
                </h3>
                <p
                  className={`text-sm ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}>
                  Monitor real-time engagement and viral spread of your breaking
                  news stories.
                </p>
              </div>

              <div
                className={`p-6 rounded-lg ${
                  isDark ? "bg-gray-800" : "bg-gray-50"
                }`}>
                <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h3
                  className={`text-lg font-semibold mb-2 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}>
                  Content Performance
                </h3>
                <p
                  className={`text-sm ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}>
                  Analyze which stories resonate most with your audience and
                  optimize your editorial strategy.
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

