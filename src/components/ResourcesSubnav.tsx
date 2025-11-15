import React from "react";
import Link from "next/link";

interface ResourcesSubnavProps {
  isDark: boolean;
  isOpen: boolean;
  onClose: () => void;
}

export default function ResourcesSubnav({
  isDark,
  isOpen,
  onClose,
}: ResourcesSubnavProps) {
  if (!isOpen) return null;

  const learnAndBuildItems = [
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
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      ),
      title: "Marketplace",
      description:
        "Professional themes, custom integrations and qualified experts",
      href: "/resources/marketplace",
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
            d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
          />
        </svg>
      ),
      title: "Themes",
      description: "Hundreds of beautifully designed publication templates",
      href: "/resources/themes",
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
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      ),
      title: "Integrations",
      description: "Connect thousands of apps and services with your website",
      href: "/resources/integrations",
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
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
      title: "Experts",
      description:
        "Get help building your site from certified Ghost developers",
      href: "/resources/experts",
    },
  ];

  const communityAndSupportItems = [
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
      title: "Start here",
      description:
        "A huge library of guides, stories, interviews and tips for success",
      href: "/resources/start-here",
      isNew: true,
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
            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Help center",
      description:
        "Get help with product features and answers to common questions.",
      href: "/resources/help-center",
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
            d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m0 0V1a1 1 0 011-1h2a1 1 0 011 1v22a1 1 0 01-1 1h-2a1 1 0 01-1-1V4m0 0H7m10 0v16a1 1 0 01-1 1H8a1 1 0 01-1-1V4"
          />
        </svg>
      ),
      title: "Product updates",
      description: "All the latest changes and improvements to Ghost",
      href: "/resources/product-updates",
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
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
      title: "About us",
      description:
        "Learn more about the people behind the platform (We're hiring!)",
      href: "/resources/about-us",
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
        {/* Left Column - Learn & Build */}
        <div className="flex-1 px-4 py-3">
          <h3
            className={`text-sm font-semibold mb-3 ${
              isDark ? "text-white" : "text-gray-900"
            }`}>
            Learn & Build
          </h3>
          <div className="space-y-2">
            {learnAndBuildItems.map((item, index) => (
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

        {/* Right Column - Community & Support */}
        <div className="flex-1 px-4 py-3">
          <h3
            className={`text-sm font-semibold mb-3 ${
              isDark ? "text-white" : "text-gray-900"
            }`}>
            Community & Support
          </h3>
          <div className="space-y-2">
            {communityAndSupportItems.map((item, index) => (
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

