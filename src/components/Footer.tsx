import React from "react";
import Link from "next/link";
import { Star, Github } from "lucide-react";

interface FooterProps {
  isDark: boolean;
}

export default function Footer({ isDark }: FooterProps) {
  return (
    <footer
      className={`${isDark ? "bg-gray-900" : "bg-gray-900"} text-white py-16`}>
      {/* Patterned Background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15 0C6.716 0 0 6.716 0 15c0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15C30 6.716 23.284 0 15 0zm0 28C7.82 28 2 22.18 2 15S7.82 2 15 2s13 5.82 13 13-5.82 13-13 13z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10">
          {/* CTA Section */}
          <div className="text-center mb-16">
            <button className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center">
              Start publishing now →
            </button>
          </div>

          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
            {/* Logo and GitHub Star */}
            <div className="md:col-span-1">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center mr-3">
                  <span className="text-sm font-bold text-white">S</span>
                </div>
                <span className="text-xl font-bold">Saby</span>
              </div>

              <div className="flex items-center space-x-2">
                <button className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded-lg text-sm transition-colors">
                  <Star className="w-4 h-4" />
                  <span>Star</span>
                </button>
                <span className="bg-gray-800 px-3 py-2 rounded-lg text-sm">
                  12,847
                </span>
              </div>
            </div>

            {/* Product */}
            <div>
              <h3 className="text-white font-semibold mb-4">Platform</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link
                    href="/product"
                    className="hover:text-white transition-colors">
                    Analytics Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    href="/product"
                    className="hover:text-white transition-colors">
                    Data Visualization
                  </Link>
                </li>
                <li>
                  <Link
                    href="/explore"
                    className="hover:text-white transition-colors">
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link
                    href="/product"
                    className="hover:text-white transition-colors">
                    AI Insights
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className="hover:text-white transition-colors">
                    Enterprise
                  </Link>
                </li>
              </ul>
            </div>

            {/* Developers */}
            <div>
              <h3 className="text-white font-semibold mb-4">Solutions</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link
                    href="/product"
                    className="hover:text-white transition-colors">
                    Business Intelligence
                  </Link>
                </li>
                <li>
                  <Link
                    href="/product"
                    className="hover:text-white transition-colors">
                    Marketing Analytics
                  </Link>
                </li>
                <li>
                  <Link
                    href="/product"
                    className="hover:text-white transition-colors">
                    Sales Analytics
                  </Link>
                </li>
                <li>
                  <Link
                    href="/product"
                    className="hover:text-white transition-colors">
                    Financial Reporting
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className="hover:text-white transition-colors">
                    Custom Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/explore"
                    className="hover:text-white transition-colors">
                    Data Migration
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link
                    href="/explore"
                    className="hover:text-white transition-colors">
                    Getting Started
                  </Link>
                </li>
                <li>
                  <Link
                    href="/explore"
                    className="hover:text-white transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources"
                    className="hover:text-white transition-colors">
                    Best Practices
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources"
                    className="hover:text-white transition-colors">
                    Case Studies
                  </Link>
                </li>
              </ul>
            </div>

            {/* Comparisons & Support */}
            <div>
              <h3 className="text-white font-semibold mb-4">Compare</h3>
              <ul className="space-y-3 text-gray-400 mb-6">
                <li>
                  <Link
                    href="/product"
                    className="hover:text-white transition-colors">
                    Saby vs Tableau
                  </Link>
                </li>
                <li>
                  <Link
                    href="/product"
                    className="hover:text-white transition-colors">
                    Saby vs Power BI
                  </Link>
                </li>
                <li>
                  <Link
                    href="/product"
                    className="hover:text-white transition-colors">
                    Saby vs Looker
                  </Link>
                </li>
                <li>
                  <Link
                    href="/product"
                    className="hover:text-white transition-colors">
                    Saby vs Mixpanel
                  </Link>
                </li>
                <li>
                  <Link
                    href="/product"
                    className="hover:text-white transition-colors">
                    Saby vs Google Analytics
                  </Link>
                </li>
                <li>
                  <Link
                    href="/product"
                    className="text-lime-400 hover:text-lime-300 transition-colors">
                    See all comparisons →
                  </Link>
                </li>
              </ul>

              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link
                    href="/resources"
                    className="hover:text-white transition-colors">
                    Help center
                  </Link>
                </li>
                <li>
                  <Link
                    href="/explore"
                    className="hover:text-white transition-colors">
                    Community forum
                  </Link>
                </li>
                <li>
                  <div className="flex items-center space-x-2">
                    <Link
                      href="/resources"
                      className="hover:text-white transition-colors">
                      Status
                    </Link>
                    <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                      99.9%
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              {/* Badges */}
              <div className="flex items-center space-x-6 mb-6 md:mb-0">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                    <span className="text-xs font-bold text-gray-900">NPF</span>
                  </div>
                  <div className="text-sm">
                    <div className="text-white font-medium">NON-PROFIT</div>
                    <div className="text-gray-400 text-xs">CERTIFIED</div>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <Github className="w-4 h-4 text-gray-900" />
                  </div>
                  <div className="text-sm">
                    <div className="text-white font-medium">SOC 2</div>
                    <div className="text-gray-400 text-xs">COMPLIANT</div>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <span className="text-xs">🌱</span>
                  </div>
                  <div className="text-sm">
                    <div className="text-white font-medium">GDPR</div>
                    <div className="text-gray-400 text-xs">READY</div>
                  </div>
                </div>
              </div>

              {/* Legal Links */}
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <Link
                  href="/terms"
                  className="hover:text-white transition-colors">
                  Terms
                </Link>
                <Link
                  href="/privacy"
                  className="hover:text-white transition-colors">
                  Privacy
                </Link>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors">
                  Contact
                </Link>
                <span>Saby Technologies @ 2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
