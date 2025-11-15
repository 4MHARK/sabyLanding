import React from 'react';
import { Palette, Type, LayoutGrid as Layout } from 'lucide-react';

interface ThemeCustomizerProps {
  isDark: boolean;
  accentColor: string;
  setAccentColor: (color: string) => void;
}

export default function ThemeCustomizer({ isDark, accentColor, setAccentColor }: ThemeCustomizerProps) {
  const colors = [
    { name: 'Teal', value: '#14B8A6', class: 'bg-teal-500' },
    { name: 'Pink', value: '#EC4899', class: 'bg-pink-500' },
    { name: 'Blue', value: '#3B82F6', class: 'bg-blue-500' },
    { name: 'Purple', value: '#8B5CF6', class: 'bg-purple-500' },
    { name: 'Orange', value: '#F97316', class: 'bg-orange-500' },
    { name: 'Green', value: '#10B981', class: 'bg-emerald-500' },
  ];

  return (
    <div className={`py-16 ${isDark ? 'bg-gray-800' : 'bg-gray-50'} transition-colors duration-300`}>
      {/* Patterned Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23${isDark ? 'ffffff' : '000000'}' fill-opacity='0.1'%3E%3Cpath d='M0 0h40v40H0V0zm40 40h40v40H40V40zm0-40h2l-2 2V0zm0 4l4-4h2l-6 6V4zm0 4l8-8h2L40 10V8zm0 4L52 0h2L40 14v-2zm0 4L56 0h2L40 18v-2zm0 4L60 0h2L40 22v-2zm0 4L64 0h2L40 26v-2zm0 4L68 0h2L40 30v-2zm0 4L72 0h2L40 34v-2zm0 4L76 0h2L40 38v-2zm0 4L80 0v2L42 40h-2zm4 0L80 4v2L46 40h-2zm4 0L80 8v2L50 40h-2zm4 0l28-28v2L54 40h-2zm4 0l24-24v2L58 40h-2zm4 0l20-20v2L62 40h-2zm4 0l16-16v2L66 40h-2zm4 0l12-12v2L70 40h-2zm4 0l8-8v2l-6 6h-2zm4 0l4-4v2L78 40h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className={`inline-block px-4 py-2 ${isDark ? 'bg-yellow-400 text-gray-900' : 'bg-yellow-100 text-yellow-800'} rounded-full text-sm font-medium mb-6`}>
              CUSTOMIZABLE DASHBOARDS
            </div>
            
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'} leading-tight`}>
              Complete control over your
              <br />
              <span className="italic bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">analytics</span> experience
              <br />
              and insights.
            </h2>

            <div className="space-y-4 mb-8">
              <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Create custom dashboards and configure analytics views to perfectly match your business needs.
              </p>
              
              <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Choose from dozens of pre-built templates or build your own completely custom analytics 
                dashboards from scratch.
              </p>
              
              <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Your data insights take center stage, while Saby handles all the complex processing in the background.
              </p>
            </div>

            <button className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
              Explore Dashboard Templates →
            </button>
          </div>

          {/* Right Content - Theme Customizer */}
          <div className={`${isDark ? 'bg-white' : 'bg-white'} rounded-2xl shadow-2xl overflow-hidden`}>
            {/* Customizer Panel */}
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Dashboard Settings</h3>
              
              {/* Accent Color */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">Accent color</label>
                <div className="flex space-x-3">
                  {colors.map((color) => (
                    <button
                      key={color.value}
                      onClick={() => setAccentColor(color.value)}
                      className={`w-8 h-8 rounded-full ${color.class} ${
                        accentColor === color.value ? 'ring-2 ring-offset-2 ring-gray-400' : ''
                      } transition-all`}
                    />
                  ))}
                </div>
              </div>

              {/* Theme Toggle */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">Theme</label>
                <div className="flex bg-gray-100 rounded-lg p-1">
                  <button className={`flex-1 py-2 px-4 rounded-md text-sm font-medium ${!isDark ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600'} transition-colors`}>
                    Light
                  </button>
                  <button className={`flex-1 py-2 px-4 rounded-md text-sm font-medium ${isDark ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600'} transition-colors`}>
                    Dark
                  </button>
                </div>
              </div>

              {/* Publication Logo */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">Company logo</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <div className="text-gray-400 text-3xl mb-2">+</div>
                </div>
              </div>

              {/* Header Style */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">Layout</label>
                <select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-900">
                  <option>Grid View</option>
                  <option>List View</option>
                  <option>Card View</option>
                </select>
              </div>

              {/* Font Style */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">Chart Style</label>
                <select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-900">
                  <option>Modern Charts</option>
                  <option>Classic Charts</option>
                  <option>Minimal Charts</option>
                </select>
              </div>
            </div>

            {/* Preview Section */}
            <div className="border-t border-gray-200">
              <div className="p-6">
                <div className="text-center">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Analytics Dashboard</h4>
                  <div 
                    className="w-full h-32 rounded-lg mb-4"
                    style={{
                      background: `linear-gradient(135deg, ${accentColor}, #3B82F6, #000000)`
                    }}
                  ></div>
                  <div className="text-left">
                    <h5 className="font-semibold text-gray-900 mb-2">Customize your analytics experience</h5>
                    <p className="text-sm text-gray-600">
                      Adjust colors, modify layouts, add your branding and transform a standard 
                      dashboard into a personalized analytics experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}