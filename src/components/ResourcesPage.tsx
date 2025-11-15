import React, { useState } from 'react';
import { Search, ArrowRight, Twitter } from 'lucide-react';

interface ResourcesPageProps {
  isDark: boolean;
  onBack: () => void;
}

export default function ResourcesPage({ isDark, onBack }: ResourcesPageProps) {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log('Subscribing email:', email);
  };

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
              <a href="#" className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Explore</a>
              <a href="#" className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors font-medium`}>Resources</a>
              <a href="#" className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Pricing</a>
            </div>

            <div className="flex items-center space-x-4">
              <button className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
                Sign in
              </button>
              <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                Get Started — free
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-16">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className={`text-6xl md:text-7xl font-bold leading-tight mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Start here.
          </h1>
          <p className={`text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'} max-w-3xl mx-auto mb-16`}>
            A library of resources to help you share content, grow your audience,
            and build an independent subscription business.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-24">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search all Ghost creator resources..."
                className={`w-full pl-12 pr-4 py-4 rounded-xl border ${
                  isDark 
                    ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400' 
                    : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg`}
              />
            </div>
          </div>
        </div>

        {/* Part 1 - Building */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-300 to-gray-400 rounded-2xl p-8 shadow-2xl">
                <div className="text-sm font-medium text-gray-600 mb-4">CREATE YOUR BRAND</div>
                <h3 className="text-4xl font-bold text-purple-600 mb-8">
                  Launching a<br />
                  publication.
                </h3>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="w-full h-48 bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gray-800 rounded-lg mx-auto mb-4 flex items-center justify-center">
                        <span className="text-white font-bold text-xl">📱</span>
                      </div>
                      <div className="text-2xl font-bold text-gray-800">hello.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className={`text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-6`}>
                Part 1 — Building
              </h2>
              <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-8`}>
                Not sure where to begin? Dive into our tutorials and guides for people who are
                new to Ghost and setting up a brand new publication.
              </p>

              <div className="space-y-4">
                <div className={`flex items-center justify-between p-4 rounded-lg ${isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-50'} transition-colors cursor-pointer`}>
                  <span className={`${isDark ? 'text-white' : 'text-gray-900'}`}>How to setup your Ghost publication</span>
                  <div className="flex items-center space-x-2">
                    <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>2 min read</span>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                  </div>
                </div>

                <div className={`flex items-center justify-between p-4 rounded-lg ${isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-50'} transition-colors cursor-pointer`}>
                  <span className={`${isDark ? 'text-white' : 'text-gray-900'}`}>How to publish your first post</span>
                  <div className="flex items-center space-x-2">
                    <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>4 min read</span>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                  </div>
                </div>

                <div className={`flex items-center justify-between p-4 rounded-lg ${isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-50'} transition-colors cursor-pointer`}>
                  <span className={`${isDark ? 'text-white' : 'text-gray-900'}`}>Building your audience with subscriber signups</span>
                  <div className="flex items-center space-x-2">
                    <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>2 min read</span>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                  </div>
                </div>

                <div className={`flex items-center justify-between p-4 rounded-lg ${isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-50'} transition-colors cursor-pointer`}>
                  <span className={`${isDark ? 'text-white' : 'text-gray-900'}`}>Sending email newsletters</span>
                  <div className="flex items-center space-x-2">
                    <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>2 min read</span>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                  </div>
                </div>

                <div className={`flex items-center justify-between p-4 rounded-lg ${isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-50'} transition-colors cursor-pointer`}>
                  <span className="text-green-600">How to sell premium memberships</span>
                  <div className="flex items-center space-x-2">
                    <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>2 min read</span>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                  </div>
                </div>

                <button className="text-green-600 hover:text-green-500 font-medium transition-colors flex items-center mt-6">
                  Explore the full series <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Part 2 - Publishing */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-400 via-purple-500 to-purple-600 rounded-2xl p-8 shadow-2xl text-white">
                <div className="text-sm font-medium text-blue-100 mb-4">START PUBLISHING</div>
                <h3 className="text-4xl font-bold mb-8">
                  Creating<br />
                  content that<br />
                  works.
                </h3>
                <div className="relative">
                  <div className="w-32 h-32 border-4 border-white/30 rounded-full mx-auto flex items-center justify-center">
                    <div className="w-24 h-24 border-4 border-white/50 rounded-full flex items-center justify-center">
                      <div className="w-16 h-16 border-4 border-white rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className={`text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-6`}>
                Part 2 — Publishing
              </h2>
              <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-8`}>
                Learn the techniques required to create consistently and share your creative
                work with the world with these ideas and stories.
              </p>

              <div className="space-y-4">
                <div className={`flex items-center justify-between p-4 rounded-lg ${isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-50'} transition-colors cursor-pointer`}>
                  <span className={`${isDark ? 'text-white' : 'text-gray-900'}`}>The unexpected (but proven) way to find your niche</span>
                  <div className="flex items-center space-x-2">
                    <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>9 min read</span>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                  </div>
                </div>

                <div className={`flex items-center justify-between p-4 rounded-lg ${isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-50'} transition-colors cursor-pointer`}>
                  <span className={`${isDark ? 'text-white' : 'text-gray-900'}`}>6 types of newsletters you can start today</span>
                  <div className="flex items-center space-x-2">
                    <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>5 min read</span>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                  </div>
                </div>

                <div className={`flex items-center justify-between p-4 rounded-lg ${isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-50'} transition-colors cursor-pointer`}>
                  <span className={`${isDark ? 'text-white' : 'text-gray-900'}`}>A pre-publishing and post-publishing guide for new writers</span>
                  <div className="flex items-center space-x-2">
                    <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>8 min read</span>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                  </div>
                </div>

                <div className={`flex items-center justify-between p-4 rounded-lg ${isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-50'} transition-colors cursor-pointer`}>
                  <span className={`${isDark ? 'text-white' : 'text-gray-900'}`}>5 ways to repurpose content like a professional</span>
                  <div className="flex items-center space-x-2">
                    <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>7 min read</span>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Part 4 - Business */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 rounded-2xl p-8 shadow-2xl text-white">
                <div className="text-sm font-medium text-orange-100 mb-4">BUILD A BUSINESS</div>
                <h3 className="text-4xl font-bold mb-8">
                  Earning<br />
                  revenue from<br />
                  your work.
                </h3>
                <div className="relative">
                  <div className="w-32 h-32 border-4 border-white/30 rounded-full mx-auto flex items-center justify-center">
                    <div className="w-24 h-24 border-4 border-white/50 rounded-full flex items-center justify-center">
                      <div className="w-16 h-16 border-4 border-white rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className={`text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-6`}>
                Part 4 — Business
              </h2>
              <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-8`}>
                Get actionable ideas for your indie business and learn how to earn sustainable
                recurring revenue from your creative work.
              </p>

              <div className="space-y-4">
                <div className={`flex items-center justify-between p-4 rounded-lg ${isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-50'} transition-colors cursor-pointer`}>
                  <span className={`${isDark ? 'text-white' : 'text-gray-900'}`}>Subscription business metrics explained for publishers</span>
                  <div className="flex items-center space-x-2">
                    <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>10 min read</span>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                  </div>
                </div>

                <div className={`flex items-center justify-between p-4 rounded-lg ${isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-50'} transition-colors cursor-pointer`}>
                  <span className={`${isDark ? 'text-white' : 'text-gray-900'}`}>4 questions to ask before pricing your subscription newsletter</span>
                  <div className="flex items-center space-x-2">
                    <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>10 min read</span>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                  </div>
                </div>

                <div className={`flex items-center justify-between p-4 rounded-lg ${isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-50'} transition-colors cursor-pointer`}>
                  <span className={`${isDark ? 'text-white' : 'text-gray-900'}`}>How to increase the open rates of your email newsletter</span>
                  <div className="flex items-center space-x-2">
                    <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>8 min read</span>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                  </div>
                </div>

                <div className={`flex items-center justify-between p-4 rounded-lg ${isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-50'} transition-colors cursor-pointer`}>
                  <span className={`${isDark ? 'text-white' : 'text-gray-900'}`}>Conversion strategy: Turn more readers into paid members</span>
                  <div className="flex items-center space-x-2">
                    <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>9 min read</span>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                  </div>
                </div>

                <div className={`flex items-center justify-between p-4 rounded-lg ${isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-50'} transition-colors cursor-pointer`}>
                  <span className={`${isDark ? 'text-white' : 'text-gray-900'}`}>How to create a valuable offer that converts</span>
                  <div className="flex items-center space-x-2">
                    <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>7 min read</span>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                  </div>
                </div>

                <button className="text-orange-500 hover:text-orange-400 font-medium transition-colors flex items-center mt-6">
                  Explore the full series <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup Section */}
        <div className={`py-24 ${isDark ? 'bg-gray-100' : 'bg-gray-50'}`}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Get trends & tips delivered to you.
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              A weekly roundup of emerging trends, products and ideas in<br />
              the creator economy, trusted by <strong>50,000+</strong> readers.
            </p>

            <form onSubmit={handleSubscribe} className="max-w-md mx-auto mb-4">
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 rounded-l-lg border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  className="bg-black text-white px-6 py-3 rounded-r-lg hover:bg-gray-800 transition-colors font-medium"
                >
                  SUBSCRIBE
                </button>
              </div>
            </form>
            <p className="text-sm text-gray-500">
              No spam. No jibberjabber. Unsubscribe any time.
            </p>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                <div>
                  <div className="font-semibold text-gray-900">CJ Chilvers</div>
                  <div className="text-sm text-gray-500">@cjchilvers</div>
                </div>
                <Twitter className="w-5 h-5 text-blue-400 ml-auto" />
              </div>
              <p className="text-gray-700 mb-4">
                Wow, @Ghost is killing it today with their newsletter. It may just be me, but it seems like more time and care is being spent every week on it. If you can show me a link about my obsession I didn't know about yet — that's something.
              </p>
              <div className="text-sm text-gray-500">2:22 PM · 13 Jun 2021</div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                <div>
                  <div className="font-semibold text-gray-900">Arsala Khan</div>
                  <div className="text-sm text-gray-500">@arsalagrey</div>
                </div>
                <Twitter className="w-5 h-5 text-blue-400 ml-auto" />
              </div>
              <p className="text-gray-700 mb-4">
                @Ghost has been my favorite company newsletter of 2022
              </p>
              <div className="text-sm text-gray-500">6:21 PM · 4 Apr 2022</div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                <div>
                  <div className="font-semibold text-gray-900">Lajos Nagy</div>
                  <div className="text-sm text-gray-500">@LajosNagyUK</div>
                </div>
                <Twitter className="w-5 h-5 text-blue-400 ml-auto" />
              </div>
              <p className="text-gray-700 mb-4">
                Ok, the Ghost newsletter is hands down the best newsletter in my inbox and it is not even close. There's not a single other one that I am going back to read or look forward to getting. Excellent job!
              </p>
              <div className="text-sm text-gray-500">6:09 PM · 17 Apr 2022</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              <div className="flex space-x-8">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Product Updates</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">@Ghost</a>
              </div>
              <div className="text-gray-400">
                Published with <a href="#" className="text-white hover:underline">Ghost</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}