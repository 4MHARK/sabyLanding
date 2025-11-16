import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Menu,
  X,
  ChevronDown,
  User,
  Settings,
  Palette,
  FileText,
  Building2,
  Code2,
  Github,
  MessageSquare,
} from "lucide-react";
import ProductSubnav from "./ProductSubnav";
import ResourcesSubnav from "./ResourcesSubnav";
import { useAuthModal } from "../contexts/AuthModalContext";

interface NavigationProps {
  isDark: boolean;
  toggleTheme: () => void;
  currentPage?: string;
}

export default function Navigation({
  isDark,
  toggleTheme,
  currentPage,
}: NavigationProps) {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [showProductMenu, setShowProductMenu] = React.useState(false);
  const [showResourcesMenu, setShowResourcesMenu] = React.useState(false);
  const { openModal } = useAuthModal();

  const isActive = (path: string) =>
    currentPage === path || router.pathname === path;

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isDark ? "bg-gray-900/95" : "bg-white/95"
      } backdrop-blur-sm border-b ${
        isDark ? "border-gray-800" : "border-gray-200"
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center cursor-pointer">
            <div
              className={`w-8 h-8 rounded-lg ${
                isDark
                  ? "bg-gradient-to-br from-blue-500 to-purple-600"
                  : "bg-gradient-to-br from-blue-600 to-purple-700"
              } flex items-center justify-center`}>
              <span className={`text-sm font-bold text-white`}>S</span>
            </div>
            <span
              className={`ml-2 text-xl font-bold ${
                isDark ? "text-white" : "text-gray-900"
              }`}>
              Saby
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Product Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setShowProductMenu(true)}
                className={`flex items-center space-x-1 ${
                  isActive("/product") ? "font-semibold" : ""
                } ${
                  isDark
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                } transition-colors`}>
                <span>Product</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <ProductSubnav
                isDark={isDark}
                isOpen={showProductMenu}
                onClose={() => setShowProductMenu(false)}
              />
            </div>
            <Link
              href="/pricing"
              className={`${isActive("/pricing") ? "font-semibold" : ""} ${
                isDark
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-600 hover:text-gray-900"
              } transition-colors`}>
              Pricing
            </Link>
            <Link
              href="/explore"
              className={`${isActive("/explore") ? "font-semibold" : ""} ${
                isDark
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-600 hover:text-gray-900"
              } transition-colors`}>
              Explore
            </Link>
            {/* Resources Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setShowResourcesMenu(true)}
                className={`flex items-center space-x-1 ${
                  isActive("/resources") ? "font-semibold" : ""
                } ${
                  isDark
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                } transition-colors`}>
                <span>Resources</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <ResourcesSubnav
                isDark={isDark}
                isOpen={showResourcesMenu}
                onClose={() => setShowResourcesMenu(false)}
              />
            </div>
          </div>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Social Media Links */}
            <a
              href="https://x.com/saby"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-full ${
                isDark
                  ? "text-gray-400 hover:text-white hover:bg-gray-800"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              } transition-colors`}
              aria-label="Follow us on X (formerly Twitter)">
              {/* X Logo */}
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://discord.gg/saby"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-full ${
                isDark
                  ? "text-gray-400 hover:text-white hover:bg-gray-800"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              } transition-colors`}
              aria-label="Join our Discord community">
              <MessageSquare className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/saby/saby"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-full ${
                isDark
                  ? "text-gray-400 hover:text-white hover:bg-gray-800"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              } transition-colors`}
              aria-label="Star us on GitHub">
              <Github className="w-4 h-4" />
            </a>

            {/* Divider */}
            <div
              className={`h-6 w-px ${
                isDark ? "bg-gray-700" : "bg-gray-300"
              }`}></div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full ${
                isDark
                  ? "bg-gray-800 text-gray-300 hover:text-white"
                  : "bg-gray-100 text-gray-600 hover:text-gray-900"
              } transition-colors`}
              aria-label="Toggle theme">
              {isDark ? "☀️" : "🌙"}
            </button>
            <button
              onClick={() => openModal("login")}
              className={`${
                isDark
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-600 hover:text-gray-900"
              } transition-colors`}>
              Sign in
            </button>
            <Link
              href="/subscribe"
              className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-all">
              Start Free Trial
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div
            className={`md:hidden border-t ${
              isDark
                ? "border-gray-800 bg-gray-900"
                : "border-gray-200 bg-white"
            } py-4`}>
            <div className="flex flex-col space-y-4 px-4">
              {/* Mobile Product Menu */}
              <div>
                <button
                  onClick={() => setShowProductMenu(!showProductMenu)}
                  className={`flex items-center space-x-2 w-full text-left ${
                    isDark
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  } transition-colors`}>
                  <span>Product</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      showProductMenu ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {showProductMenu && (
                  <div className="mt-2 ml-4 space-y-3">
                    <div className="space-y-2">
                      <Link
                        href="/product/financial-services"
                        className={`block text-sm ${
                          isDark
                            ? "text-gray-400 hover:text-white"
                            : "text-gray-500 hover:text-gray-900"
                        } transition-colors`}>
                        Financial Services & Fintech
                      </Link>
                      <Link
                        href="/product/energy-utilities"
                        className={`block text-sm ${
                          isDark
                            ? "text-gray-400 hover:text-white"
                            : "text-gray-500 hover:text-gray-900"
                        } transition-colors`}>
                        Energy, Utilities & IoT
                      </Link>
                      <Link
                        href="/product/healthcare"
                        className={`block text-sm ${
                          isDark
                            ? "text-gray-400 hover:text-white"
                            : "text-gray-500 hover:text-gray-900"
                        } transition-colors`}>
                        Healthcare & Life Sciences
                      </Link>
                      <Link
                        href="/product/government"
                        className={`block text-sm ${
                          isDark
                            ? "text-gray-400 hover:text-white"
                            : "text-gray-500 hover:text-gray-900"
                        } transition-colors`}>
                        Government & Public Sector
                      </Link>
                    </div>
                    <div className="space-y-2">
                      <Link
                        href="/product/retail-commerce"
                        className={`block text-sm ${
                          isDark
                            ? "text-gray-400 hover:text-white"
                            : "text-gray-500 hover:text-gray-900"
                        } transition-colors`}>
                        Retail, Commerce & Consumer Intelligence
                      </Link>
                      <Link
                        href="/product/education"
                        className={`block text-sm ${
                          isDark
                            ? "text-gray-400 hover:text-white"
                            : "text-gray-500 hover:text-gray-900"
                        } transition-colors`}>
                        Education & Research
                      </Link>
                      <Link
                        href="/product/nonprofit"
                        className={`block text-sm ${
                          isDark
                            ? "text-gray-400 hover:text-white"
                            : "text-gray-500 hover:text-gray-900"
                        } transition-colors`}>
                        Non-Profit, Faith-Based & NGO Sector
                      </Link>
                      <Link
                        href="/product/start-here"
                        className={`block text-sm ${
                          isDark
                            ? "text-gray-400 hover:text-white"
                            : "text-gray-500 hover:text-gray-900"
                        } transition-colors`}>
                        Start here
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              <Link
                href="/pricing"
                className={`${
                  isDark
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                } transition-colors`}>
                Pricing
              </Link>
              <Link
                href="/explore"
                className={`${
                  isDark
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                } transition-colors`}>
                Explore
              </Link>
              {/* Mobile Resources Menu */}
              <div>
                <button
                  onClick={() => setShowResourcesMenu(!showResourcesMenu)}
                  className={`flex items-center space-x-2 w-full text-left ${
                    isDark
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  } transition-colors`}>
                  <span>Resources</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      showResourcesMenu ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {showResourcesMenu && (
                  <div className="mt-2 ml-4 space-y-3">
                    <div className="space-y-2">
                      <h4
                        className={`text-xs font-semibold ${
                          isDark ? "text-gray-400" : "text-gray-500"
                        }`}>
                        Learn & Build
                      </h4>
                      <Link
                        href="/resources/marketplace"
                        className={`block text-sm ${
                          isDark
                            ? "text-gray-400 hover:text-white"
                            : "text-gray-500 hover:text-gray-900"
                        } transition-colors`}>
                        Marketplace
                      </Link>
                      <Link
                        href="/resources/themes"
                        className={`block text-sm ${
                          isDark
                            ? "text-gray-400 hover:text-white"
                            : "text-gray-500 hover:text-gray-900"
                        } transition-colors`}>
                        Themes
                      </Link>
                      <Link
                        href="/resources/integrations"
                        className={`block text-sm ${
                          isDark
                            ? "text-gray-400 hover:text-white"
                            : "text-gray-500 hover:text-gray-900"
                        } transition-colors`}>
                        Integrations
                      </Link>
                      <Link
                        href="/resources/experts"
                        className={`block text-sm ${
                          isDark
                            ? "text-gray-400 hover:text-white"
                            : "text-gray-500 hover:text-gray-900"
                        } transition-colors`}>
                        Experts
                      </Link>
                    </div>
                    <div className="space-y-2">
                      <h4
                        className={`text-xs font-semibold ${
                          isDark ? "text-gray-400" : "text-gray-500"
                        }`}>
                        Community & Support
                      </h4>
                      <Link
                        href="/resources/start-here"
                        className={`block text-sm ${
                          isDark
                            ? "text-gray-400 hover:text-white"
                            : "text-gray-500 hover:text-gray-900"
                        } transition-colors`}>
                        Start here
                      </Link>
                      <Link
                        href="/resources/help-center"
                        className={`block text-sm ${
                          isDark
                            ? "text-gray-400 hover:text-white"
                            : "text-gray-500 hover:text-gray-900"
                        } transition-colors`}>
                        Help center
                      </Link>
                      <Link
                        href="/resources/product-updates"
                        className={`block text-sm ${
                          isDark
                            ? "text-gray-400 hover:text-white"
                            : "text-gray-500 hover:text-gray-900"
                        } transition-colors`}>
                        Product updates
                      </Link>
                      <Link
                        href="/resources/about-us"
                        className={`block text-sm ${
                          isDark
                            ? "text-gray-400 hover:text-white"
                            : "text-gray-500 hover:text-gray-900"
                        } transition-colors`}>
                        About us
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => openModal("login")}
                  className={`block mb-2 w-full text-left ${
                    isDark
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  } transition-colors`}>
                  Sign in
                </button>
                <Link
                  href="/subscribe"
                  className="w-full bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors block text-center">
                  Get Started — free
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
