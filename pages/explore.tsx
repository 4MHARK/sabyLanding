import React from "react";
import {
  Search,
  Github,
  MessageCircle,
  Twitter,
  BookOpen,
  HelpCircle,
} from "lucide-react";
import { useRouter } from "next/router";
import Head from "next/head";
import { useTheme } from "../src/contexts/ThemeContext";
import Navigation from "../src/components/Navigation";
import Footer from "../src/components/Footer";

export default function ExplorePage() {
  const router = useRouter();
  const { isDark, toggleTheme } = useTheme();

  return (
    <>
      <Head>
        <title>Explore - Saby Developer Documentation</title>
        <meta
          name="description"
          content="Comprehensive guides and documentation for integrating Saby analytics into your applications"
        />
        <meta property="og:title" content="Saby Documentation & Guides" />
      </Head>

      <div
        className={`min-h-screen ${
          isDark ? "bg-gray-900" : "bg-white"
        } transition-colors duration-300 relative overflow-hidden`}>
        {/* Patterned Background */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "20px 20px",
            }}
          />
        </div>

        <Navigation
          isDark={isDark}
          toggleTheme={toggleTheme}
          currentPage="/explore"
        />

        {/* Main Content */}
        <div className="pt-16 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Breadcrumb */}
            <div className="flex items-center space-x-2 text-sm mb-8">
              <a
                href="#"
                className={`${
                  isDark
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                } transition-colors`}>
                Home
              </a>
              <span className={`${isDark ? "text-gray-600" : "text-gray-400"}`}>
                /
              </span>
              <a
                href="#"
                className={`${
                  isDark
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                } transition-colors`}>
                Documentation
              </a>
              <span className={`${isDark ? "text-gray-600" : "text-gray-400"}`}>
                /
              </span>
              <span className={`${isDark ? "text-white" : "text-gray-900"}`}>
                Integration Guides
              </span>
            </div>

            {/* Header Section */}
            <div className="mb-12">
              <h1
                className={`text-4xl font-bold ${
                  isDark ? "text-white" : "text-gray-900"
                } mb-4`}>
                Getting Started with Saby
              </h1>
              <p
                className={`text-lg ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}>
                Learn how to build and develop beautiful, data-driven analytics
                dashboards
              </p>
            </div>

            {/* Dashboard Preview */}
            <div className="mb-16 relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-purple-100 to-pink-100 backdrop-blur-sm">
                <div className="p-8">
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xl font-semibold text-gray-900">
                        Analytics Dashboard
                      </h3>
                      <div className="flex space-x-4 text-sm text-gray-600">
                        <span>40,349</span>
                        <span>17,010</span>
                        <span>23,339</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-6 mb-6">
                      <div>
                        <div className="text-2xl font-bold text-gray-900 mb-1">
                          40,349
                        </div>
                        <div className="text-sm text-gray-600">Total users</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900 mb-1">
                          17,010
                        </div>
                        <div className="text-sm text-gray-600">
                          Active users
                        </div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900 mb-1">
                          23,339
                        </div>
                        <div className="text-sm text-gray-600">Revenue</div>
                      </div>
                    </div>

                    {/* Chart Area */}
                    <div className="h-32 bg-gradient-to-r from-purple-200 to-pink-200 rounded-lg mb-6 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-300/50 to-transparent"></div>
                      <svg
                        className="absolute bottom-0 left-0 w-full h-full"
                        viewBox="0 0 400 120">
                        <path
                          d="M0,120 L0,80 Q100,60 200,70 T400,50 L400,120 Z"
                          fill="url(#gradient)"
                          opacity="0.6"
                        />
                        <defs>
                          <linearGradient
                            id="gradient"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="0%">
                            <stop offset="0%" stopColor="#8B5CF6" />
                            <stop offset="100%" stopColor="#EC4899" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-lg font-semibold text-gray-900">
                          28%
                        </div>
                        <div className="text-sm text-gray-600">
                          Conversion rate
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-semibold text-gray-900">
                          34,578
                        </div>
                        <div className="text-sm text-gray-600">Page views</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Developer Install Guide */}
            <div className="mb-16">
              <h2
                className={`text-2xl font-bold ${
                  isDark ? "text-white" : "text-gray-900"
                } mb-4`}>
                Developer install guide
              </h2>
              <p
                className={`text-lg ${
                  isDark ? "text-gray-400" : "text-gray-600"
                } mb-6`}>
                Follow our setup guides for any platform, from local development
                to production environments.
              </p>

              <button className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors mb-6">
                Get Started →
              </button>

              <div className="flex space-x-4">
                <button className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium">
                  Saby Cloud
                </button>
                <button
                  className={`px-4 py-2 rounded-lg text-sm font-medium ${
                    isDark
                      ? "bg-gray-800 text-gray-300"
                      : "bg-gray-100 text-gray-700"
                  } hover:bg-gray-200 transition-colors`}>
                  Self-hosted
                </button>
                <button
                  className={`px-4 py-2 rounded-lg text-sm font-medium ${
                    isDark
                      ? "bg-gray-800 text-gray-300"
                      : "bg-gray-100 text-gray-700"
                  } hover:bg-gray-200 transition-colors`}>
                  Local
                </button>
                <button
                  className={`px-4 py-2 rounded-lg text-sm font-medium ${
                    isDark
                      ? "bg-gray-800 text-gray-300"
                      : "bg-gray-100 text-gray-700"
                  } hover:bg-gray-200 transition-colors`}>
                  Docker
                </button>
              </div>
            </div>

            {/* Guide Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div
                className={`p-6 rounded-xl ${
                  isDark ? "bg-gray-800" : "bg-gray-50"
                } border ${
                  isDark ? "border-gray-700" : "border-gray-200"
                } backdrop-blur-sm`}>
                <h3
                  className={`text-lg font-semibold ${
                    isDark ? "text-white" : "text-gray-900"
                  } mb-3`}>
                  Platform guide
                </h3>
                <p
                  className={`${
                    isDark ? "text-gray-400" : "text-gray-600"
                  } mb-4`}>
                  A detailed overview of Saby's architecture & configuration.
                </p>
                <button
                  className={`text-blue-600 hover:text-blue-500 font-medium transition-colors`}>
                  Read the docs
                </button>
              </div>

              <div
                className={`p-6 rounded-xl ${
                  isDark ? "bg-gray-800" : "bg-gray-50"
                } border ${
                  isDark ? "border-gray-700" : "border-gray-200"
                } backdrop-blur-sm`}>
                <h3
                  className={`text-lg font-semibold ${
                    isDark ? "text-white" : "text-gray-900"
                  } mb-3`}>
                  Integration guide
                </h3>
                <p
                  className={`${
                    isDark ? "text-gray-400" : "text-gray-600"
                  } mb-4`}>
                  Connect your data sources and third-party services seamlessly.
                </p>
                <button
                  className={`text-blue-600 hover:text-blue-500 font-medium transition-colors`}>
                  Connect data
                </button>
              </div>

              <div
                className={`p-6 rounded-xl ${
                  isDark ? "bg-gray-800" : "bg-gray-50"
                } border ${
                  isDark ? "border-gray-700" : "border-gray-200"
                } backdrop-blur-sm`}>
                <h3
                  className={`text-lg font-semibold ${
                    isDark ? "text-white" : "text-gray-900"
                  } mb-3`}>
                  Dashboard guide
                </h3>
                <p
                  className={`${
                    isDark ? "text-gray-400" : "text-gray-600"
                  } mb-4`}>
                  A full guide to building custom analytics dashboards for your
                  data.
                </p>
                <button
                  className={`text-blue-600 hover:text-blue-500 font-medium transition-colors`}>
                  Start building
                </button>
              </div>
            </div>

            {/* Developer Resources */}
            <div className="mb-16">
              <h2
                className={`text-2xl font-bold ${
                  isDark ? "text-white" : "text-gray-900"
                } mb-8`}>
                Developer resources
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div
                  className={`p-6 rounded-xl ${
                    isDark ? "bg-gray-800" : "bg-white"
                  } border ${
                    isDark ? "border-gray-700" : "border-gray-200"
                  } shadow-sm backdrop-blur-sm`}>
                  <div className="flex items-center justify-between mb-4">
                    <h3
                      className={`text-lg font-semibold ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}>
                      Analytics SDK
                    </h3>
                    <span className="text-gray-400">→</span>
                  </div>
                  <p
                    className={`${isDark ? "text-gray-400" : "text-gray-600"}`}>
                    Fast track your development with our comprehensive analytics
                    SDK and starter templates.
                  </p>
                </div>

                <div
                  className={`p-6 rounded-xl ${
                    isDark ? "bg-gray-800" : "bg-white"
                  } border ${
                    isDark ? "border-gray-700" : "border-gray-200"
                  } shadow-sm backdrop-blur-sm`}>
                  <div className="flex items-center justify-between mb-4">
                    <h3
                      className={`text-lg font-semibold ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}>
                      API documentation
                    </h3>
                    <span className="text-gray-400">→</span>
                  </div>
                  <p
                    className={`${isDark ? "text-gray-400" : "text-gray-600"}`}>
                    Explore detailed REST API documentation for accessing and
                    manipulating your analytics data.
                  </p>
                </div>

                <div
                  className={`p-6 rounded-xl ${
                    isDark ? "bg-gray-800" : "bg-white"
                  } border ${
                    isDark ? "border-gray-700" : "border-gray-200"
                  } shadow-sm backdrop-blur-sm`}>
                  <div className="flex items-center justify-between mb-4">
                    <h3
                      className={`text-lg font-semibold ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}>
                      Frontend frameworks
                    </h3>
                    <span className="text-gray-400">→</span>
                  </div>
                  <p
                    className={`${isDark ? "text-gray-400" : "text-gray-600"}`}>
                    Use Saby with any frontend framework - React, Vue, Angular,
                    or vanilla JavaScript.
                  </p>
                </div>

                <div
                  className={`p-6 rounded-xl ${
                    isDark ? "bg-gray-800" : "bg-white"
                  } border ${
                    isDark ? "border-gray-700" : "border-gray-200"
                  } shadow-sm backdrop-blur-sm`}>
                  <div className="flex items-center justify-between mb-4">
                    <h3
                      className={`text-lg font-semibold ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}>
                      Changelog
                    </h3>
                    <span className="text-gray-400">→</span>
                  </div>
                  <p
                    className={`${isDark ? "text-gray-400" : "text-gray-600"}`}>
                    View all →
                  </p>
                </div>
              </div>
            </div>

            {/* Community Section */}
            <div>
              <h2
                className={`text-2xl font-bold ${
                  isDark ? "text-white" : "text-gray-900"
                } mb-8`}>
                Community
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div
                  className={`p-6 rounded-xl ${
                    isDark ? "bg-gray-800" : "bg-white"
                  } border ${
                    isDark ? "border-gray-700" : "border-gray-200"
                  } shadow-sm backdrop-blur-sm`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Github className="w-6 h-6 mr-3 text-gray-600" />
                      <h3
                        className={`font-semibold ${
                          isDark ? "text-white" : "text-gray-900"
                        }`}>
                        GitHub
                      </h3>
                    </div>
                    <span className="text-gray-400">→</span>
                  </div>
                  <p
                    className={`text-sm ${
                      isDark ? "text-gray-400" : "text-gray-600"
                    }`}>
                    Source code and releases
                  </p>
                </div>

                <div
                  className={`p-6 rounded-xl ${
                    isDark ? "bg-gray-800" : "bg-white"
                  } border ${
                    isDark ? "border-gray-700" : "border-gray-200"
                  } shadow-sm backdrop-blur-sm`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <MessageCircle className="w-6 h-6 mr-3 text-gray-600" />
                      <h3
                        className={`font-semibold ${
                          isDark ? "text-white" : "text-gray-900"
                        }`}>
                        Developer forum
                      </h3>
                    </div>
                    <span className="text-gray-400">→</span>
                  </div>
                  <p
                    className={`text-sm ${
                      isDark ? "text-gray-400" : "text-gray-600"
                    }`}>
                    Official community
                  </p>
                </div>

                <div
                  className={`p-6 rounded-xl ${
                    isDark ? "bg-gray-800" : "bg-white"
                  } border ${
                    isDark ? "border-gray-700" : "border-gray-200"
                  } shadow-sm backdrop-blur-sm`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-6 h-6 mr-3 bg-orange-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">R</span>
                      </div>
                      <h3
                        className={`font-semibold ${
                          isDark ? "text-white" : "text-gray-900"
                        }`}>
                        Reddit
                      </h3>
                    </div>
                    <span className="text-gray-400">→</span>
                  </div>
                  <p
                    className={`text-sm ${
                      isDark ? "text-gray-400" : "text-gray-600"
                    }`}>
                    News and highlights
                  </p>
                </div>

                <div
                  className={`p-6 rounded-xl ${
                    isDark ? "bg-gray-800" : "bg-white"
                  } border ${
                    isDark ? "border-gray-700" : "border-gray-200"
                  } shadow-sm backdrop-blur-sm`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Twitter className="w-6 h-6 mr-3 text-blue-400" />
                      <h3
                        className={`font-semibold ${
                          isDark ? "text-white" : "text-gray-900"
                        }`}>
                        Twitter
                      </h3>
                    </div>
                    <span className="text-gray-400">→</span>
                  </div>
                  <p
                    className={`text-sm ${
                      isDark ? "text-gray-400" : "text-gray-600"
                    }`}>
                    Bite-size updates
                  </p>
                </div>

                <div
                  className={`p-6 rounded-xl ${
                    isDark ? "bg-gray-800" : "bg-white"
                  } border ${
                    isDark ? "border-gray-700" : "border-gray-200"
                  } shadow-sm backdrop-blur-sm`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <BookOpen className="w-6 h-6 mr-3 text-green-600" />
                      <h3
                        className={`font-semibold ${
                          isDark ? "text-white" : "text-gray-900"
                        }`}>
                        Tutorials
                      </h3>
                    </div>
                    <span className="text-gray-400">→</span>
                  </div>
                  <p
                    className={`text-sm ${
                      isDark ? "text-gray-400" : "text-gray-600"
                    }`}>
                    In-depth guides
                  </p>
                </div>

                <div
                  className={`p-6 rounded-xl ${
                    isDark ? "bg-gray-800" : "bg-white"
                  } border ${
                    isDark ? "border-gray-700" : "border-gray-200"
                  } shadow-sm backdrop-blur-sm`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <HelpCircle className="w-6 h-6 mr-3 text-orange-600" />
                      <h3
                        className={`font-semibold ${
                          isDark ? "text-white" : "text-gray-900"
                        }`}>
                        StackOverflow
                      </h3>
                    </div>
                    <span className="text-gray-400">→</span>
                  </div>
                  <p
                    className={`text-sm ${
                      isDark ? "text-gray-400" : "text-gray-600"
                    }`}>
                    Questions and answers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer isDark={isDark} />
      </div>
    </>
  );
}
