import React, { useState } from 'react';
import { ArrowRight, Eye, EyeOff } from 'lucide-react';

interface SignupPageProps {
  isDark: boolean;
  onBack: () => void;
  onLogin: () => void;
}

export default function SignupPage({ isDark, onBack, onLogin }: SignupPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate signup process
    setTimeout(() => {
      setIsLoading(false);
      onBack(); // Return to main app
    }, 2000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 relative overflow-hidden">
      {/* Background with testimonial cards */}
      <div className="absolute inset-0 z-0">
        <div className="grid grid-cols-3 gap-4 h-full p-8 opacity-20">
          {/* Background cards */}
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl h-48 p-6 flex items-end">
              <div className="text-white">
                <div className="text-2xl font-bold mb-2">platformer</div>
              </div>
            </div>
            <div className="bg-gray-800 rounded-2xl h-64 p-6">
              <p className="text-gray-300 text-sm leading-relaxed">
                "Ghost is just implausibly good. It takes care of everything you need out of the box."
              </p>
              <div className="mt-4 flex items-center">
                <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
                <span className="ml-2 text-xs text-gray-500">JOEL BRAM, THE BROWSER</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-4 mt-12">
            <div className="bg-gray-800 rounded-2xl h-32 p-6">
              <p className="text-gray-300 text-sm">
                "Moving to Ghost has proven to be one of the best business decisions we've made."
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-teal-600 rounded-2xl h-48"></div>
          </div>
          
          <div className="space-y-4 mt-8">
            <div className="bg-gray-800 rounded-2xl h-40"></div>
            <div className="bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl h-32"></div>
          </div>
        </div>
      </div>

      {/* Main signup form */}
      <div className="relative z-10 max-w-md w-full mx-4">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mx-auto mb-4">
            <span className="text-xl font-bold text-gray-900">G</span>
          </div>
        </div>

        {/* Signup Form */}
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Let's get started.</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Your name
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-500 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-20 transition-colors"
                placeholder="Jamie Larson"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email address
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 transition-colors"
                placeholder="jamie@example.com"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  className="w-full px-4 py-3 pr-12 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 transition-colors"
                  placeholder="••••••••••••••••"
                  minLength={10}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              <p className="mt-1 text-xs text-gray-500">
                At least 10 characters, but more is fine too.
              </p>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-black hover:bg-gray-800 disabled:bg-gray-400 text-white py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>
                  Continue
                  <ArrowRight className="ml-2 w-4 h-4" />
                </>
              )}
            </button>
          </form>

          <div className="mt-6 text-center text-xs text-gray-500">
            By creating an account, you agree to our{' '}
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Terms of Service</a>
            {' '}and have read and understood the{' '}
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Privacy Policy</a>.
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <button
                onClick={onLogin}
                className="text-blue-600 hover:text-blue-500 font-medium transition-colors"
              >
                Sign in
              </button>
            </p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={onBack}
            className="text-sm text-gray-400 hover:text-gray-300 transition-colors"
          >
            ← Back to site
          </button>
        </div>
      </div>
    </div>
  );
}