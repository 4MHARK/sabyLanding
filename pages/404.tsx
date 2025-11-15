import React from "react";
import Link from "next/link";
import Head from "next/head";
import { Home, ArrowLeft } from "lucide-react";
import { useTheme } from "../src/contexts/ThemeContext";

export default function Custom404() {
  const { isDark } = useTheme();

  return (
    <>
      <Head>
        <title>404 - Page Not Found | Saby Analytics</title>
        <meta
          name="description"
          content="The page you're looking for doesn't exist"
        />
      </Head>

      <div
        className={`min-h-screen flex items-center justify-center ${
          isDark ? "bg-gray-900" : "bg-gray-50"
        } transition-colors duration-300 relative overflow-hidden`}>
        {/* Patterned Background */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="max-w-md w-full mx-4 text-center relative z-10">
          {/* Logo */}
          <Link href="/" className="inline-block mb-8">
            <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">S</span>
            </div>
          </Link>

          {/* 404 Message */}
          <h1
            className={`text-9xl font-bold mb-4 ${
              isDark ? "text-white" : "text-gray-900"
            }`}>
            404
          </h1>
          <h2
            className={`text-3xl font-bold mb-4 ${
              isDark ? "text-white" : "text-gray-900"
            }`}>
            Page not found
          </h2>
          <p
            className={`text-lg mb-8 ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}>
            Sorry, we couldn't find the page you're looking for. It might have
            been moved or doesn't exist.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center justify-center">
              <Home className="w-5 h-5 mr-2" />
              Go Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className={`px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center justify-center ${
                isDark
                  ? "bg-gray-800 text-white hover:bg-gray-700"
                  : "bg-gray-200 text-gray-900 hover:bg-gray-300"
              }`}>
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </button>
          </div>

          {/* Helpful Links */}
          <div className="mt-12">
            <p
              className={`text-sm mb-4 ${
                isDark ? "text-gray-500" : "text-gray-500"
              }`}>
              Or try one of these pages:
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/product"
                className={`text-sm ${
                  isDark
                    ? "text-blue-400 hover:text-blue-300"
                    : "text-blue-600 hover:text-blue-500"
                } transition-colors`}>
                Product
              </Link>
              <span className={`${isDark ? "text-gray-700" : "text-gray-300"}`}>
                •
              </span>
              <Link
                href="/pricing"
                className={`text-sm ${
                  isDark
                    ? "text-blue-400 hover:text-blue-300"
                    : "text-blue-600 hover:text-blue-500"
                } transition-colors`}>
                Pricing
              </Link>
              <span className={`${isDark ? "text-gray-700" : "text-gray-300"}`}>
                •
              </span>
              <Link
                href="/explore"
                className={`text-sm ${
                  isDark
                    ? "text-blue-400 hover:text-blue-300"
                    : "text-blue-600 hover:text-blue-500"
                } transition-colors`}>
                Explore
              </Link>
              <span className={`${isDark ? "text-gray-700" : "text-gray-300"}`}>
                •
              </span>
              <Link
                href="/resources"
                className={`text-sm ${
                  isDark
                    ? "text-blue-400 hover:text-blue-300"
                    : "text-blue-600 hover:text-blue-500"
                } transition-colors`}>
                Resources
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
