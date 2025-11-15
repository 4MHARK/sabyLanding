import React from 'react';
import { Search, Github, MessageCircle, Twitter, BookOpen, HelpCircle } from 'lucide-react';

interface ExplorePageProps {
  isDark: boolean;
  onBack: () => void;
}

export default function ExplorePage({ isDark, onBack }: ExplorePageProps) {
  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-white'} transition-colors duration-300`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isDark ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-sm border-b ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button 
              onClick={onBack}
              className="flex items-center"
            >
              <div className={`w-8 h-8 rounded-full ${isDark ? 'bg-white' : 'bg-gray-900'} flex items-center justify-center`}>
                <span className={`text-sm font-bold ${isDark ? 'text-gray-900' : 'text-white'}`}>G</span>
              </div>
              <span className={`ml-2 text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>ghost</span>
            </button>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Product</a>
              <a href="#" className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors font-medium`}>Explore</a>
              <a href="#" className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Resources</a>
              <a href="#" className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Pricing</a>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className={`pl-10 pr-12 py-2 rounded-lg border ${
                    isDark 
                      ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400' 
                      : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64`}
                />
                <span className={`absolute right-3 top-1/2 transform -translate-y-1/2 text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                  ⌘K
                </span>
              </div>
              <button className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
                Sign in
              </button>
              <button className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-sm mb-8">
            <a href="#" className={`${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
              Home
            </a>
            <span className={`${isDark ? 'text-gray-600' : 'text-gray-400'}`}>/</span>
            <a href="#" className={`${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
              Documentation
            </a>
            <span className={`${isDark ? 'text-gray-600' : 'text-gray-400'}`}>/</span>
            <span className={`${isDark ? 'text-white' : 'text-gray-900'}`}>Migration Guides</span>
          </div>

          {/* Header Section */}
          <div className="mb-12">
            <h1 className={`text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>
              Getting Started with Ghost
            </h1>
            <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Learn how to build and develop beautiful, independent publications
            </p>
          </div>

          {/* Dashboard Preview */}
          <div className="mb-16 relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-purple-100 to-pink-100">
              <div className="p-8">
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-semibold text-gray-900">Dashboard</h3>
                    <div className="flex space-x-4 text-sm text-gray-600">
                      <span>40,349</span>
                      <span>17,010</span>
                      <span>23,339</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-6 mb-6">
                    <div>
                      <div className="text-2xl font-bold text-gray-900 mb-1">40,349</div>
                      <div className="text-sm text-gray-600">Total members</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900 mb-1">17,010</div>
                      <div className="text-sm text-gray-600">Free members</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900 mb-1">23,339</div>
                      <div className="text-sm text-gray-600">Paid members</div>
                    </div>
                  </div>

                  {/* Chart Area */}
                  <div className="h-32 bg-gradient-to-r from-purple-200 to-pink-200 rounded-lg mb-6 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-300/50 to-transparent"></div>
                    <svg className="absolute bottom-0 left-0 w-full h-full" viewBox="0 0 400 120">
                      <path
                        d="M0,120 L0,80 Q100,60 200,70 T400,50 L400,120 Z"
                        fill="url(#gradient)"
                        opacity="0.6"
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#8B5CF6" />
                          <stop offset="100%" stopColor="#EC4899" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-lg font-semibold text-gray-900">28%</div>
                      <div className="text-sm text-gray-600">Open rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-semibold text-gray-900">34,578</div>
                      <div className="text-sm text-gray-600">Clicks</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Developer Install Guide */}
          <div className="mb-16">
            <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>
              Developer install guide
            </h2>
            <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-6`}>
              Follow our setup guides for any platform, from local development to production environments.
            </p>
            
            <button className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors mb-6">
              Get Started →
            </button>

            <div className="flex space-x-4">
              <button className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium">
                Ghost(Pro)
              </button>
              <button className={`px-4 py-2 rounded-lg text-sm font-medium ${isDark ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-700'} hover:bg-gray-200 transition-colors`}>
                Ubuntu
              </button>
              <button className={`px-4 py-2 rounded-lg text-sm font-medium ${isDark ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-700'} hover:bg-gray-200 transition-colors`}>
                Local
              </button>
              <button className={`px-4 py-2 rounded-lg text-sm font-medium ${isDark ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-700'} hover:bg-gray-200 transition-colors`}>
                Docker
              </button>
            </div>
          </div>

          {/* Guide Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className={`p-6 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-gray-50'} border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
              <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'} mb-3`}>
                Platform guide
              </h3>
              <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mb-4`}>
                A detailed overview of Ghost's architecture & configuration.
              </p>
              <button className={`text-blue-600 hover:text-blue-500 font-medium transition-colors`}>
                Read the docs
              </button>
            </div>

            <div className={`p-6 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-gray-50'} border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
              <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'} mb-3`}>
                Migration guide
              </h3>
              <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mb-4`}>
                Import your content, members and payments from other platforms.
              </p>
              <button className={`text-blue-600 hover:text-blue-500 font-medium transition-colors`}>
                Import data
              </button>
            </div>

            <div className={`p-6 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-gray-50'} border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
              <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'} mb-3`}>
                Theme guide
              </h3>
              <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mb-4`}>
                A full guide to building custom designed templates for your site.
              </p>
              <button className={`text-blue-600 hover:text-blue-500 font-medium transition-colors`}>
                Start building
              </button>
            </div>
          </div>

          {/* Developer Resources */}
          <div className="mb-16">
            <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-8`}>
              Developer resources
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className={`p-6 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-white'} border ${isDark ? 'border-gray-700' : 'border-gray-200'} shadow-sm`}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Starter theme framework
                  </h3>
                  <span className="text-gray-400">→</span>
                </div>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Fast track your development of new custom themes with our open source theme starter framework.
                </p>
              </div>

              <div className={`p-6 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-white'} border ${isDark ? 'border-gray-700' : 'border-gray-200'} shadow-sm`}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Ghost API documentation
                  </h3>
                  <span className="text-gray-400">→</span>
                </div>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Explore detailed REST API documentation for accessing content in and out of Ghost programmatically.
                </p>
              </div>

              <div className={`p-6 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-white'} border ${isDark ? 'border-gray-700' : 'border-gray-200'} shadow-sm`}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    JAMstack front-end frameworks
                  </h3>
                  <span className="text-gray-400">→</span>
                </div>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Use Ghost as a headless CMS, integrating the API with any third party front-end or custom static framework.
                </p>
              </div>

              <div className={`p-6 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-white'} border ${isDark ? 'border-gray-700' : 'border-gray-200'} shadow-sm`}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Changelog
                  </h3>
                  <span className="text-gray-400">→</span>
                </div>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  View all →
                </p>
              </div>
            </div>
          </div>

          {/* Community Section */}
          <div>
            <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-8`}>
              Community
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className={`p-6 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-white'} border ${isDark ? 'border-gray-700' : 'border-gray-200'} shadow-sm`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Github className="w-6 h-6 mr-3 text-gray-600" />
                    <h3 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>GitHub</h3>
                  </div>
                  <span className="text-gray-400">→</span>
                </div>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Source code and releases
                </p>
              </div>

              <div className={`p-6 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-white'} border ${isDark ? 'border-gray-700' : 'border-gray-200'} shadow-sm`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <MessageCircle className="w-6 h-6 mr-3 text-gray-600" />
                    <h3 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Developer forum</h3>
                  </div>
                  <span className="text-gray-400">→</span>
                </div>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Official community
                </p>
              </div>

              <div className={`p-6 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-white'} border ${isDark ? 'border-gray-700' : 'border-gray-200'} shadow-sm`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-6 h-6 mr-3 bg-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">R</span>
                    </div>
                    <h3 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Reddit</h3>
                  </div>
                  <span className="text-gray-400">→</span>
                </div>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  News and highlights
                </p>
              </div>

              <div className={`p-6 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-white'} border ${isDark ? 'border-gray-700' : 'border-gray-200'} shadow-sm`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Twitter className="w-6 h-6 mr-3 text-blue-400" />
                    <h3 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Twitter</h3>
                  </div>
                  <span className="text-gray-400">→</span>
                </div>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Bite-size updates
                </p>
              </div>

              <div className={`p-6 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-white'} border ${isDark ? 'border-gray-700' : 'border-gray-200'} shadow-sm`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <BookOpen className="w-6 h-6 mr-3 text-green-600" />
                    <h3 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Tutorials</h3>
                  </div>
                  <span className="text-gray-400">→</span>
                </div>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  In-depth guides
                </p>
              </div>

              <div className={`p-6 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-white'} border ${isDark ? 'border-gray-700' : 'border-gray-200'} shadow-sm`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <HelpCircle className="w-6 h-6 mr-3 text-orange-600" />
                    <h3 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>StackOverflow</h3>
                  </div>
                  <span className="text-gray-400">→</span>
                </div>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Questions and answers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}