import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface SiteSetupPageProps {
  isDark: boolean;
  onBack: () => void;
  onContinue: () => void;
}

export default function SiteSetupPage({ isDark, onBack, onContinue }: SiteSetupPageProps) {
  const [siteAddress, setSiteAddress] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate site setup process
    setTimeout(() => {
      setIsLoading(false);
      onContinue();
    }, 1500);
  };

  return (
    <div className={`min-h-screen flex items-center justify-center ${isDark ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}>
      <div className="max-w-md w-full mx-4">
        {/* Logo */}
        <div className="text-center mb-12">
          <div className={`w-16 h-16 rounded-full ${isDark ? 'bg-white' : 'bg-gray-900'} flex items-center justify-center mx-auto mb-6`}>
            <span className={`text-2xl font-bold ${isDark ? 'text-gray-900' : 'text-white'}`}>G</span>
          </div>
          <div className={`text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-2`}>ghost</div>
        </div>

        {/* Setup Form */}
        <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-xl p-8`}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="siteAddress" className={`block text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'} mb-3`}>
                Site address
              </label>
              <input
                id="siteAddress"
                type="text"
                value={siteAddress}
                onChange={(e) => setSiteAddress(e.target.value)}
                className={`w-full px-4 py-4 rounded-lg border ${
                  isDark 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500' 
                    : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500'
                } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 transition-colors text-center`}
                placeholder="site.ghost.io or myghostsite.com"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isLoading || !siteAddress.trim()}
              className="w-full bg-black hover:bg-gray-800 disabled:bg-gray-400 text-white py-4 px-4 rounded-lg font-medium transition-colors flex items-center justify-center"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>
                  Continue
                  <ArrowRight className="ml-2 w-5 h-5" />
                </>
              )}
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-2`}>
              Don't have a Ghost site yet?
            </p>
            <button className={`text-sm font-medium ${isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'} transition-colors`}>
              Create one here
            </button>
          </div>
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={onBack}
            className={`text-sm ${isDark ? 'text-gray-400 hover:text-gray-300' : 'text-gray-600 hover:text-gray-700'} transition-colors`}
          >
            ← Back
          </button>
        </div>
      </div>
    </div>
  );
}