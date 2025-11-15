import React from "react";
import { ArrowRight, Play, Youtube } from "lucide-react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import { useTheme } from "../src/contexts/ThemeContext";
import Navigation from "../src/components/Navigation";
import Footer from "../src/components/Footer";

export default function ProductPage() {
  const router = useRouter();
  const { isDark, toggleTheme } = useTheme();

  return (
    <>
      <Head>
        <title>Product - Saby Analytics Platform</title>
        <meta
          name="description"
          content="Unlock the power of your data with Saby's comprehensive analytics platform"
        />
        <meta property="og:title" content="Saby Product - Analytics Platform" />
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
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20s-20-8.954-20-20 8.954-20 20-20 20 8.954 20 20zM0 0h20v20H0V0zm20 20h20v20H20V20z'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <Navigation
          isDark={isDark}
          toggleTheme={toggleTheme}
          currentPage="/product"
        />

        {/* Main Content */}
        <div className="pt-16 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div>
                <h1
                  className={`text-5xl md:text-6xl font-bold leading-tight mb-8 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}>
                  Unlock the power of your data.
                </h1>

                <p
                  className={`text-lg leading-relaxed mb-8 ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}>
                  Saby is a comprehensive analytics platform that transforms raw
                  data into actionable insights. Connect all your data sources,
                  visualize trends, and make data-driven decisions with
                  confidence.
                </p>

                <button className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all inline-flex items-center mb-12 shadow-lg">
                  Start Your Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>

                {/* Testimonial */}
                <div
                  className={`p-6 rounded-xl ${
                    isDark ? "bg-gray-800" : "bg-gray-50"
                  } border-l-4 border-blue-500 backdrop-blur-sm`}>
                  <p
                    className={`text-lg italic mb-4 ${
                      isDark ? "text-gray-300" : "text-gray-700"
                    }`}>
                    "Saby transformed how we understand our business. The
                    insights we get are incredible, and the platform is so
                    intuitive. It's been a game-changer for our team."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white font-semibold mr-3">
                      S
                    </div>
                    <div>
                      <div
                        className={`font-semibold ${
                          isDark ? "text-white" : "text-gray-900"
                        }`}>
                        Sarah Chen
                      </div>
                      <div
                        className={`text-sm ${
                          isDark ? "text-gray-400" : "text-gray-600"
                        }`}>
                        VP of Analytics, TechCorp
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Content - Creator Image */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Content Creator"
                    width={800}
                    height={600}
                    className="w-full h-96 object-cover"
                  />

                  {/* YouTube Badge Overlay */}
                  <div className="absolute top-6 right-6 bg-white rounded-lg px-4 py-2 shadow-lg flex items-center space-x-2">
                    <Youtube className="w-5 h-5 text-red-500" />
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">
                        Ali Abdaal
                      </div>
                      <div className="text-xs text-gray-600">
                        5M+ Subscribers
                      </div>
                    </div>
                  </div>

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-lg hover:bg-opacity-100 transition-all">
                      <Play className="w-6 h-6 text-gray-900 ml-1" />
                    </button>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl opacity-20"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-pink-500 to-orange-500 rounded-2xl opacity-20"></div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div
                className={`p-8 rounded-2xl ${
                  isDark ? "bg-gray-800" : "bg-gray-50"
                } text-center backdrop-blur-sm border ${
                  isDark ? "border-gray-700" : "border-gray-200"
                }`}>
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">📊</span>
                </div>
                <h3
                  className={`text-xl font-semibold mb-3 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}>
                  Data Visualization
                </h3>
                <p className={`${isDark ? "text-gray-400" : "text-gray-600"}`}>
                  Transform complex data into beautiful, interactive dashboards
                  and reports that tell your story.
                </p>
              </div>

              <div
                className={`p-8 rounded-2xl ${
                  isDark ? "bg-gray-800" : "bg-gray-50"
                } text-center backdrop-blur-sm border ${
                  isDark ? "border-gray-700" : "border-gray-200"
                }`}>
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">🔗</span>
                </div>
                <h3
                  className={`text-xl font-semibold mb-3 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}>
                  Data Integration
                </h3>
                <p className={`${isDark ? "text-gray-400" : "text-gray-600"}`}>
                  Connect all your data sources seamlessly with 200+
                  integrations and real-time sync.
                </p>
              </div>

              <div
                className={`p-8 rounded-2xl ${
                  isDark ? "bg-gray-800" : "bg-gray-50"
                } text-center backdrop-blur-sm border ${
                  isDark ? "border-gray-700" : "border-gray-200"
                }`}>
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">🤖</span>
                </div>
                <h3
                  className={`text-xl font-semibold mb-3 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}>
                  AI-Powered Insights
                </h3>
                <p className={`${isDark ? "text-gray-400" : "text-gray-600"}`}>
                  Get intelligent recommendations and automated insights powered
                  by machine learning.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Footer isDark={isDark} />
      </div>
    </>
  );
}
