import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface UseCase {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface Step {
  number: number;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface Capability {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface Stat {
  value: string;
  label: string;
  description?: string;
}

interface UseCaseTemplateProps {
  isDark: boolean;
  // Hero Section
  heroIcon: React.ReactNode;
  heroTitle: string;
  heroSubtitle: string;
  heroPrimaryCtaText?: string;
  heroPrimaryCtaLink?: string;
  heroSecondaryCtaText?: string;
  heroSecondaryCtaLink?: string;
  heroImagePlaceholder?: string; // URL or description for hero image
  accentColor?: string;

  // Overview Section
  overviewTitle: string;
  overviewDescription: string;
  overviewImagePlaceholder?: string; // Image for overview section
  benefits: Benefit[];

  // Use Cases Section
  useCasesTitle?: string;
  useCases: UseCase[];
  useCasesImagePlaceholder?: string; // Featured image for use cases

  // How It Works Section
  howItWorksTitle?: string;
  steps: Step[];

  // Key Capabilities Section
  capabilitiesTitle?: string;
  capabilities: Capability[];
  capabilitiesImagePlaceholder?: string; // Image for capabilities

  // Stats Section
  statsTitle?: string;
  stats: Stat[];

  // CTA Section
  ctaTitle: string;
  ctaDescription: string;
  ctaPrimaryText?: string;
  ctaPrimaryLink?: string;
  ctaSecondaryText?: string;
  ctaSecondaryLink?: string;
}

export default function UseCaseTemplate({
  isDark,
  heroIcon,
  heroTitle,
  heroSubtitle,
  heroPrimaryCtaText = "Get Started",
  heroPrimaryCtaLink = "/auth/signup",
  heroSecondaryCtaText = "Watch Demo",
  heroSecondaryCtaLink = "#demo",
  heroImagePlaceholder,
  accentColor = "blue",
  overviewTitle,
  overviewDescription,
  overviewImagePlaceholder,
  benefits,
  useCasesTitle = "Key Use Cases",
  useCases,
  useCasesImagePlaceholder,
  howItWorksTitle = "How It Works",
  steps,
  capabilitiesTitle = "Key Capabilities",
  capabilities,
  capabilitiesImagePlaceholder,
  statsTitle = "Impact & Results",
  stats,
  ctaTitle,
  ctaDescription,
  ctaPrimaryText = "Start Free Trial",
  ctaPrimaryLink = "/auth/signup",
  ctaSecondaryText = "Talk to Sales",
  ctaSecondaryLink = "/contact",
}: UseCaseTemplateProps) {
  // Color mapping for accent colors
  const colorClasses = {
    blue: {
      bg: "bg-blue-600",
      bgHover: "hover:bg-blue-700",
      text: "text-blue-600",
      border: "border-blue-600",
      gradientFrom: "from-blue-600",
      gradientTo: "to-blue-800",
      bgLight: "bg-blue-50",
      bgDark: "bg-blue-900/20",
    },
    green: {
      bg: "bg-green-600",
      bgHover: "hover:bg-green-700",
      text: "text-green-600",
      border: "border-green-600",
      gradientFrom: "from-green-600",
      gradientTo: "to-green-800",
      bgLight: "bg-green-50",
      bgDark: "bg-green-900/20",
    },
    red: {
      bg: "bg-red-600",
      bgHover: "hover:bg-red-700",
      text: "text-red-600",
      border: "border-red-600",
      gradientFrom: "from-red-600",
      gradientTo: "to-red-800",
      bgLight: "bg-red-50",
      bgDark: "bg-red-900/20",
    },
    purple: {
      bg: "bg-purple-600",
      bgHover: "hover:bg-purple-700",
      text: "text-purple-600",
      border: "border-purple-600",
      gradientFrom: "from-purple-600",
      gradientTo: "to-purple-800",
      bgLight: "bg-purple-50",
      bgDark: "bg-purple-900/20",
    },
    indigo: {
      bg: "bg-indigo-600",
      bgHover: "hover:bg-indigo-700",
      text: "text-indigo-600",
      border: "border-indigo-600",
      gradientFrom: "from-indigo-600",
      gradientTo: "to-indigo-800",
      bgLight: "bg-indigo-50",
      bgDark: "bg-indigo-900/20",
    },
    teal: {
      bg: "bg-teal-600",
      bgHover: "hover:bg-teal-700",
      text: "text-teal-600",
      border: "border-teal-600",
      gradientFrom: "from-teal-600",
      gradientTo: "to-teal-800",
      bgLight: "bg-teal-50",
      bgDark: "bg-teal-900/20",
    },
    orange: {
      bg: "bg-orange-600",
      bgHover: "hover:bg-orange-700",
      text: "text-orange-600",
      border: "border-orange-600",
      gradientFrom: "from-orange-600",
      gradientTo: "to-orange-800",
      bgLight: "bg-orange-50",
      bgDark: "bg-orange-900/20",
    },
    navy: {
      bg: "bg-blue-900",
      bgHover: "hover:bg-blue-950",
      text: "text-blue-900",
      border: "border-blue-900",
      gradientFrom: "from-blue-900",
      gradientTo: "to-blue-950",
      bgLight: "bg-blue-50",
      bgDark: "bg-blue-900/20",
    },
  };

  const colors =
    colorClasses[accentColor as keyof typeof colorClasses] || colorClasses.blue;

  return (
    <div className={`min-h-screen ${isDark ? "bg-gray-900" : "bg-white"}`}>
      {/* Hero Section - Modern Split Design */}
      <section
        className={`relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden ${
          isDark ? "bg-gray-900" : "bg-white"
        }`}>
        <div className="relative max-w-7xl mx-auto">
          {/* Back Link */}
          <Link
            href="/"
            className={`inline-flex items-center mb-8 ${
              isDark
                ? "text-gray-400 hover:text-white"
                : "text-gray-600 hover:text-gray-900"
            } transition-colors`}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div>
              {/* Hero Icon */}
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${colors.bg} bg-opacity-10 mb-6`}>
                <div className={`${colors.text}`}>{heroIcon}</div>
              </div>

              {/* Hero Title */}
              <h1
                className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight ${
                  isDark ? "text-white" : "text-gray-900"
                }`}>
                {heroTitle}
              </h1>

              {/* Hero Subtitle */}
              <p
                className={`text-lg md:text-xl mb-8 ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}>
                {heroSubtitle}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={heroPrimaryCtaLink}
                  className={`${colors.bg} ${colors.bgHover} text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors`}>
                  {heroPrimaryCtaText}
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href={heroSecondaryCtaLink}
                  className={`px-8 py-4 rounded-lg font-semibold transition-colors border-2 ${
                    isDark
                      ? `border-gray-700 text-gray-300 hover:bg-gray-800`
                      : `border-gray-300 text-gray-700 hover:bg-gray-50`
                  }`}>
                  {heroSecondaryCtaText}
                </Link>
              </div>
            </div>

            {/* Right: Image Placeholder */}
            <div className="relative">
              <div
                className={`aspect-[4/3] rounded-2xl ${
                  isDark ? "bg-gray-800" : "bg-gray-100"
                } flex items-center justify-center overflow-hidden`}>
                {heroImagePlaceholder ? (
                  <div className="text-center p-8">
                    <div className={`${colors.text} mb-4 text-6xl`}>
                      {heroIcon}
                    </div>
                    <p
                      className={`text-sm ${
                        isDark ? "text-gray-400" : "text-gray-500"
                      }`}>
                      {heroImagePlaceholder}
                    </p>
                  </div>
                ) : (
                  <div className={`text-6xl ${colors.text}`}>{heroIcon}</div>
                )}
              </div>
              {/* Decorative Elements */}
              <div
                className={`absolute -bottom-6 -right-6 w-32 h-32 ${colors.bg} opacity-10 rounded-full blur-3xl`}
              />
              <div
                className={`absolute -top-6 -left-6 w-24 h-24 ${colors.bg} opacity-10 rounded-full blur-2xl`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section - Image + Content Grid */}
      <section
        className={`py-20 px-4 sm:px-6 lg:px-8 ${
          isDark ? "bg-gray-800" : "bg-gray-50"
        }`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            {/* Left: Image */}
            <div className="order-2 lg:order-1">
              <div
                className={`aspect-[16/10] rounded-2xl ${
                  isDark ? "bg-gray-900" : "bg-white"
                } flex items-center justify-center shadow-xl overflow-hidden`}>
                {overviewImagePlaceholder ? (
                  <div className="text-center p-8">
                    <p
                      className={`text-sm ${
                        isDark ? "text-gray-400" : "text-gray-500"
                      }`}>
                      {overviewImagePlaceholder}
                    </p>
                  </div>
                ) : (
                  <div className={`text-4xl ${colors.text}`}>
                    Dashboard Preview
                  </div>
                )}
              </div>
            </div>

            {/* Right: Content */}
            <div className="order-1 lg:order-2">
              <h2
                className={`text-3xl md:text-4xl font-bold mb-6 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}>
                {overviewTitle}
              </h2>
              <p
                className={`text-lg mb-8 ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}>
                {overviewDescription}
              </p>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl transition-all duration-200 ${
                  isDark
                    ? "bg-gray-900 hover:bg-gray-750"
                    : "bg-white hover:shadow-lg"
                }`}>
                <div className={`${colors.text} mb-4`}>{benefit.icon}</div>
                <h3
                  className={`text-lg font-semibold mb-2 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}>
                  {benefit.title}
                </h3>
                <p
                  className={`text-sm ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section - Bento Grid Style */}
      <section
        className={`py-20 px-4 sm:px-6 lg:px-8 ${
          isDark ? "bg-gray-900" : "bg-white"
        }`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className={`text-3xl md:text-4xl font-bold mb-4 ${
                isDark ? "text-white" : "text-gray-900"
              }`}>
              {useCasesTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Featured Use Case - Larger */}
            <div
              className={`lg:col-span-2 lg:row-span-2 p-8 rounded-2xl border-2 transition-all duration-200 relative overflow-hidden ${
                isDark
                  ? "border-gray-800 hover:border-gray-700 bg-gray-800"
                  : "border-gray-200 hover:border-gray-300 bg-gradient-to-br from-white to-gray-50"
              }`}>
              {/* Background Pattern */}
              <div
                className={`absolute inset-0 opacity-5 ${colors.bg}`}
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
                  backgroundSize: "32px 32px",
                }}
              />

              <div className="relative z-10">
                <div className={`${colors.text} mb-6 text-5xl`}>
                  {useCases[0]?.icon}
                </div>
                <h3
                  className={`text-2xl font-semibold mb-4 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}>
                  {useCases[0]?.title}
                </h3>
                <p
                  className={`text-lg leading-relaxed ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}>
                  {useCases[0]?.description}
                </p>

                {/* Image Placeholder */}
                {useCasesImagePlaceholder && (
                  <div
                    className={`mt-6 aspect-video rounded-xl ${
                      isDark ? "bg-gray-900" : "bg-gray-100"
                    } flex items-center justify-center`}>
                    <p
                      className={`text-sm ${
                        isDark ? "text-gray-400" : "text-gray-500"
                      }`}>
                      {useCasesImagePlaceholder}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Other Use Cases - Smaller Cards */}
            {useCases.slice(1).map((useCase, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl border-2 transition-all duration-200 ${
                  isDark
                    ? "border-gray-800 hover:border-gray-700 bg-gray-800"
                    : "border-gray-200 hover:border-gray-300 bg-white hover:shadow-lg"
                }`}>
                <div className={`${colors.text} mb-4`}>{useCase.icon}</div>
                <h3
                  className={`text-lg font-semibold mb-3 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}>
                  {useCase.title}
                </h3>
                <p
                  className={`text-sm ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}>
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section - Modern Timeline */}
      <section
        className={`py-20 px-4 sm:px-6 lg:px-8 ${
          isDark ? "bg-gray-800" : "bg-gray-50"
        }`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className={`text-3xl md:text-4xl font-bold mb-4 ${
                isDark ? "text-white" : "text-gray-900"
              }`}>
              {howItWorksTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting Line - Desktop Only */}
            <div
              className={`hidden md:block absolute top-16 left-0 right-0 h-1 ${colors.bg} opacity-20`}
              style={{
                width: "calc(100% - 8rem)",
                marginLeft: "4rem",
              }}
            />

            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Number Circle */}
                <div
                  className={`w-32 h-32 rounded-full ${colors.bg} flex items-center justify-center mb-6 mx-auto relative z-10 shadow-xl`}>
                  <span className="text-4xl font-bold text-white">
                    {step.number}
                  </span>
                </div>

                {/* Step Content Card */}
                <div
                  className={`p-6 rounded-xl ${
                    isDark ? "bg-gray-900" : "bg-white"
                  } shadow-lg`}>
                  <h3
                    className={`text-xl font-semibold mb-3 text-center ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}>
                    {step.title}
                  </h3>
                  <p
                    className={`text-center ${
                      isDark ? "text-gray-300" : "text-gray-600"
                    }`}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Capabilities Section - Image + Grid */}
      <section
        className={`py-20 px-4 sm:px-6 lg:px-8 ${
          isDark ? "bg-gray-900" : "bg-white"
        }`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className={`text-3xl md:text-4xl font-bold mb-4 ${
                isDark ? "text-white" : "text-gray-900"
              }`}>
              {capabilitiesTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Left: Large Image */}
            <div className="lg:col-span-1">
              <div
                className={`aspect-[3/4] rounded-2xl ${
                  isDark ? "bg-gray-800" : "bg-gray-100"
                } flex items-center justify-center sticky top-24`}>
                {capabilitiesImagePlaceholder ? (
                  <div className="text-center p-8">
                    <p
                      className={`text-sm ${
                        isDark ? "text-gray-400" : "text-gray-500"
                      }`}>
                      {capabilitiesImagePlaceholder}
                    </p>
                  </div>
                ) : (
                  <div className={`text-4xl ${colors.text}`}>
                    Platform Features
                  </div>
                )}
              </div>
            </div>

            {/* Right: Capabilities Grid */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              {capabilities.map((capability, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl transition-all duration-200 ${
                    isDark
                      ? "bg-gray-800 hover:bg-gray-750"
                      : "bg-gray-50 hover:shadow-lg hover:bg-white"
                  }`}>
                  <div className={`${colors.text} mb-4`}>{capability.icon}</div>
                  <h3
                    className={`text-lg font-semibold mb-2 ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}>
                    {capability.title}
                  </h3>
                  <p
                    className={`text-sm ${
                      isDark ? "text-gray-400" : "text-gray-600"
                    }`}>
                    {capability.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Modern Cards */}
      <section
        className={`py-20 px-4 sm:px-6 lg:px-8 ${
          isDark ? "bg-gray-800" : "bg-gray-50"
        }`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className={`text-3xl md:text-4xl font-bold mb-4 ${
                isDark ? "text-white" : "text-gray-900"
              }`}>
              {statsTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`p-8 rounded-xl text-center transition-all duration-200 ${
                  isDark ? "bg-gray-900" : "bg-white shadow-lg"
                } hover:scale-105`}>
                <div
                  className={`text-5xl md:text-6xl font-bold mb-3 ${colors.text}`}>
                  {stat.value}
                </div>
                <div
                  className={`text-lg font-semibold mb-2 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}>
                  {stat.label}
                </div>
                {stat.description && (
                  <div
                    className={`text-sm ${
                      isDark ? "text-gray-400" : "text-gray-600"
                    }`}>
                    {stat.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section - Modern with Background */}
      <section
        className={`py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden ${
          isDark ? "bg-gray-900" : "bg-white"
        }`}>
        {/* Background Pattern */}
        <div
          className={`absolute inset-0 opacity-5 ${colors.bg}`}
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative max-w-4xl mx-auto text-center">
          <h2
            className={`text-3xl md:text-5xl font-bold mb-6 ${
              isDark ? "text-white" : "text-gray-900"
            }`}>
            {ctaTitle}
          </h2>
          <p
            className={`text-lg md:text-xl mb-10 ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}>
            {ctaDescription}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href={ctaPrimaryLink}
              className={`${colors.bg} ${colors.bgHover} text-white px-10 py-5 rounded-lg font-semibold flex items-center gap-2 transition-all hover:scale-105 shadow-xl text-lg`}>
              {ctaPrimaryText}
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href={ctaSecondaryLink}
              className={`px-10 py-5 rounded-lg font-semibold transition-all text-lg border-2 ${
                isDark
                  ? "border-gray-700 text-gray-300 hover:bg-gray-800"
                  : "border-gray-300 text-gray-700 hover:bg-gray-50"
              }`}>
              {ctaSecondaryText}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
