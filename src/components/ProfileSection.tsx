import React from 'react';
import { Mail, MapPin, Twitter, Linkedin, Github, Instagram } from 'lucide-react';

interface ProfileSectionProps {
  isDark: boolean;
}

export default function ProfileSection({ isDark }: ProfileSectionProps) {
  return (
    <div className={`py-16 ${isDark ? 'bg-gray-800' : 'bg-white'} transition-colors duration-300`}>
      {/* Patterned Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23${isDark ? 'ffffff' : '000000'}' fill-opacity='0.1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '20px 20px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Profile Card */}
          <div className={`${isDark ? 'bg-gray-900' : 'bg-gray-50'} rounded-2xl p-8 shadow-lg backdrop-blur-sm border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
            {/* Profile Image */}
            <div className="text-center mb-6">
              <div className="w-48 h-48 mx-auto rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-1">
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Profile"
                  className="w-full h-full rounded-2xl object-cover"
                />
              </div>
            </div>

            {/* Profile Info */}
            <div className="text-center mb-6">
              <div className={`text-lg font-medium ${isDark ? 'text-white' : 'text-gray-900'} mb-2`}>
                hello@fadebowaley.com
              </div>
              <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Base in Lagos, Nigeria
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-4 mb-6">
              <a href="#" className={`p-3 rounded-full border ${isDark ? 'border-gray-700 text-gray-400 hover:text-white hover:bg-gray-800' : 'border-gray-300 text-gray-600 hover:text-gray-900 hover:bg-gray-100'} transition-colors`}>
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className={`p-3 rounded-full border ${isDark ? 'border-gray-700 text-gray-400 hover:text-white hover:bg-gray-800' : 'border-gray-300 text-gray-600 hover:text-gray-900 hover:bg-gray-100'} transition-colors`}>
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className={`p-3 rounded-full border ${isDark ? 'border-gray-700 text-gray-400 hover:text-white hover:bg-gray-800' : 'border-gray-300 text-gray-600 hover:text-gray-900 hover:bg-gray-100'} transition-colors`}>
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className={`p-3 rounded-full border ${isDark ? 'border-gray-700 text-gray-400 hover:text-white hover:bg-gray-800' : 'border-gray-300 text-gray-600 hover:text-gray-900 hover:bg-gray-100'} transition-colors`}>
                <Github className="w-5 h-5" />
              </a>
            </div>

            {/* Hire Me Button */}
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-medium transition-colors flex items-center justify-center">
              <Mail className="w-5 h-5 mr-2" />
              HIRE ME!
            </button>

            <div className={`text-center text-sm ${isDark ? 'text-gray-500' : 'text-gray-400'} mt-6`}>
              © 2021 fade. All Rights Reserved
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <button className={`px-6 py-3 rounded-full border ${isDark ? 'border-gray-600 text-gray-300 hover:text-white hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:text-gray-900 hover:bg-gray-50'} transition-colors flex items-center`}>
                <span className="mr-2">▶</span>
                ABOUT ME
              </button>
              <button className={`px-6 py-3 rounded-full border ${isDark ? 'border-gray-600 text-gray-300 hover:text-white hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:text-gray-900 hover:bg-gray-50'} transition-colors flex items-center`}>
                <span className="mr-2">●</span>
                ASK QUESTIONS
              </button>
            </div>

            {/* Main Heading */}
            <h1 className={`text-5xl md:text-6xl font-bold leading-tight mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Welcome to my
              <br />
              <span>Space! I'm </span>
              <span className="text-blue-500">Ademola</span>
              <br />
              <span>Adebowale</span>
            </h1>

            {/* Description */}
            <p className={`text-lg leading-relaxed mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              I'm a Software Engineer and Research Scientist with expertise in web development, 
              data engineering, and machine learning. Former CTO, passionate about building scalable, 
              high-impact applications and pushing the boundaries of what technology can achieve.
            </p>

            {/* Skills/Expertise */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Technical Expertise</h3>
                <ul className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li>• Full-stack Web Development</li>
                  <li>• Data Engineering & Analytics</li>
                  <li>• Machine Learning & AI</li>
                  <li>• Cloud Architecture</li>
                </ul>
              </div>
              <div>
                <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Leadership</h3>
                <ul className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li>• Former CTO Experience</li>
                  <li>• Team Leadership</li>
                  <li>• Product Strategy</li>
                  <li>• Technical Innovation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}