import React from "react";
import Link from "next/link";

interface ProductSubnavProps {
  isDark: boolean;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductSubnav({
  isDark,
  isOpen,
  onClose,
}: ProductSubnavProps) {
  if (!isOpen) return null;

  const leftColumnItems = [
    {
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
          />
        </svg>
      ),
      title: "Financial Services & Fintech",
      description:
        "Intelligent automation for transactions, risk, compliance, and insights.",
      href: "/product/financial-services",
    },
    {
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: "Energy, Utilities & IoT",
      description:
        "Real-time sensor and IoT data analysis for maintenance, optimization, and energy efficiency.",
      href: "/product/energy-utilities",
    },
    {
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
      title: "Healthcare & Life Sciences",
      description:
        "Unified patient data, diagnostic automation, and research insights.",
      href: "/product/healthcare",
    },
    {
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
      title: "Government & Public Sector",
      description:
        "Data unification across departments, transparency, and compliance automation.",
      href: "/product/government",
    },
  ];

  const rightColumnItems = [
    {
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
      ),
      title: "Retail, Commerce & Consumer Intelligence",
      description:
        "Data-driven personalization, demand forecasting, and supply optimization.",
      href: "/product/retail-commerce",
    },
    {
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
      title: "Education & Research",
      description:
        "Performance analytics, student insights, and research summarization.",
      href: "/product/education",
    },
    {
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: "Non-Profit, Faith-Based & NGO Sector",
      description:
        "Donor analytics, program impact tracking, and volunteer coordination.",
      href: "/product/nonprofit",
    },
    {
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: "Start here",
      description:
        "Get started with Saby and discover how we can transform your data.",
      href: "/product/start-here",
      isNew: true,
    },
  ];

  return (
    <div
      className={`absolute top-full left-0 mt-2 w-112 rounded-lg shadow-lg border transition-all duration-200 ease-in-out ${
        isDark
          ? "bg-gray-800 border-gray-700 shadow-2xl"
          : "bg-white border-gray-200 shadow-xl"
      } ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      onMouseLeave={onClose}>
      <div className="flex">
        {/* Left Column */}
        <div className="flex-1 px-4 py-3">
          <div className="space-y-2">
            {leftColumnItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                onClick={onClose}
                className={`group block p-2 rounded-md transition-all duration-200 ease-in-out ${
                  isDark
                    ? "hover:bg-blue-600/10 text-gray-300 hover:text-blue-300"
                    : "hover:bg-blue-50 text-gray-700 hover:text-blue-600"
                }`}>
                <div className="flex items-start space-x-3">
                  <div
                    className={`flex-shrink-0 mt-0.5 transition-colors duration-200 ease-in-out ${
                      isDark
                        ? "text-gray-400 group-hover:text-blue-400"
                        : "text-gray-600 group-hover:text-blue-500"
                    }`}>
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4
                      className={`font-semibold text-sm transition-colors duration-200 ease-in-out ${
                        isDark
                          ? "text-white group-hover:text-blue-300"
                          : "text-gray-900 group-hover:text-blue-600"
                      }`}>
                      {item.title}
                    </h4>
                    <p
                      className={`text-xs mt-0.5 leading-tight transition-colors duration-200 ease-in-out ${
                        isDark
                          ? "text-gray-400 group-hover:text-blue-200"
                          : "text-gray-600 group-hover:text-blue-500"
                      }`}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className={`w-px ${isDark ? "bg-gray-700" : "bg-gray-200"}`}></div>

        {/* Right Column */}
        <div className="flex-1 px-4 py-3">
          <div className="space-y-2">
            {rightColumnItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                onClick={onClose}
                className={`group block p-2 rounded-md transition-all duration-200 ease-in-out ${
                  isDark
                    ? "hover:bg-blue-600/10 text-gray-300 hover:text-blue-300"
                    : "hover:bg-blue-50 text-gray-700 hover:text-blue-600"
                }`}>
                <div className="flex items-start space-x-3">
                  <div
                    className={`flex-shrink-0 mt-0.5 transition-colors duration-200 ease-in-out ${
                      isDark
                        ? "text-gray-400 group-hover:text-blue-400"
                        : "text-gray-600 group-hover:text-blue-500"
                    }`}>
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2">
                      <h4
                        className={`font-semibold text-sm transition-colors duration-200 ease-in-out ${
                          isDark
                            ? "text-white group-hover:text-blue-300"
                            : "text-gray-900 group-hover:text-blue-600"
                        }`}>
                        {item.title}
                      </h4>
                      {item.isNew && (
                        <span className="inline-flex items-center px-1.5 py-0.5 rounded text-xs font-medium bg-pink-500 text-white">
                          NEW
                        </span>
                      )}
                    </div>
                    <p
                      className={`text-xs mt-0.5 leading-tight transition-colors duration-200 ease-in-out ${
                        isDark
                          ? "text-gray-400 group-hover:text-blue-200"
                          : "text-gray-600 group-hover:text-blue-500"
                      }`}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
