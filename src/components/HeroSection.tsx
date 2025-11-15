import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Play,
  BarChart3,
  TrendingUp,
  Users,
  DollarSign,
} from "lucide-react";
import TypingAnimation from "./TypingAnimation";

interface HeroSectionProps {
  isDark: boolean;
}

export default function HeroSection({ isDark }: HeroSectionProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
        isDark ? "bg-gray-950" : "bg-white"
      }`}>
      {/* Grid background overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Announcement Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-medium mb-8">
          <span className="mr-2">🚀</span>
          New: AI-powered insights now available
        </div>

        {/* Main Headline */}
        <h1
          className={`text-5xl md:text-7xl font-bold mb-6 ${
            isDark ? "text-white" : "text-gray-900"
          }`}>
          Turn your{" "}
          <span className="text-blue-600">
            <TypingAnimation
              sentences={[
                "data",
                "payments",
                "systems",
                "operations",
                "intelligence",
                "insights",
                "networks",
                "workflow",
                "Africa",
                "enterprise",
              ]}
              fadeSpeed={1000}
              pauseTime={4000}
              className=""
            />
          </span>{" "}
          into{" "}
          <span className="text-blue-600">
            <TypingAnimation
              sentences={[
                "decisions",
                "performance",
                "strategy",
                "advantage",
                "impact",
                "action",
                "intelligence",
                "innovation",
                "opportunity",
                "evolution",
              ]}
              fadeSpeed={1000}
              pauseTime={4000}
              className=""
            />
          </span>
          .
        </h1>

        {/* Subtitle */}
        <p
          className={`text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed ${
            isDark ? "text-gray-300" : "text-gray-600"
          }`}>
          Whether you're tracking payments, performance, or people, Saby helps
          you see the big picture. Our platform connects every node of your data
          ecosystem — sensors, APIs, forms, or databases — and transforms it
          into insights that predict, optimize, and guide.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 transition-colors">
            Start Free Trial
            <ArrowRight className="w-5 h-5" />
          </button>
          <button
            className={`flex items-center gap-2 px-8 py-4 rounded-lg font-semibold transition-colors ${
              isDark
                ? "text-white hover:bg-gray-800"
                : "text-gray-900 hover:bg-gray-100"
            }`}>
            <Play className="w-5 h-5" />
            Watch Demo
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div
              className={`text-3xl font-bold mb-2 ${
                isDark ? "text-white" : "text-gray-900"
              }`}>
              10K+
            </div>
            <div
              className={`text-sm ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}>
              Companies
            </div>
          </div>
          <div className="text-center">
            <div
              className={`text-3xl font-bold mb-2 ${
                isDark ? "text-white" : "text-gray-900"
              }`}>
              99.9%
            </div>
            <div
              className={`text-sm ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}>
              Uptime
            </div>
          </div>
          <div className="text-center">
            <div
              className={`text-3xl font-bold mb-2 ${
                isDark ? "text-white" : "text-gray-900"
              }`}>
              50M+
            </div>
            <div
              className={`text-sm ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}>
              Data Points
            </div>
          </div>
          <div className="text-center">
            <div
              className={`text-3xl font-bold mb-2 ${
                isDark ? "text-white" : "text-gray-900"
              }`}>
              24/7
            </div>
            <div
              className={`text-sm ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}>
              Support
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes binaryFlow {
          0% {
            transform: translateY(-100vh);
          }
          100% {
            transform: translateY(100vh);
          }
        }
      `}</style>
    </div>
  );
}
