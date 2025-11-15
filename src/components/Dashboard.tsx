import React from 'react';
import { TrendingUp, Users, CreditCard, UserPlus } from 'lucide-react';

interface DashboardProps {
  isDark: boolean;
}

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  isDark: boolean;
}

function StatCard({ title, value, change, trend, isDark }: StatCardProps) {
  return (
    <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-lg border ${isDark ? 'border-gray-700' : 'border-gray-200'} hover:shadow-xl transition-all duration-200`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{title}</h3>
        {trend === 'up' && <TrendingUp className="w-4 h-4 text-green-500" />}
      </div>
      <div className="flex items-end justify-between">
        <div className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{value}</div>
        <div className={`text-sm font-medium ${trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
          {change}
        </div>
      </div>
    </div>
  );
}

export default function Dashboard({ isDark }: DashboardProps) {
  return (
    <div className={`py-16 ${isDark ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}>
      {/* Patterned Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23${isDark ? 'ffffff' : '000000'}' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20s-20-8.954-20-20 8.954-20 20-20 20 8.954 20 20zM0 0h20v20H0V0zm20 20h20v20H20V20z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`rounded-2xl ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-2xl overflow-hidden backdrop-blur-sm border ${isDark ? 'border-gray-700' : 'border-gray-200'} relative z-10`}>
          {/* Dashboard Header */}
          <div className={`px-8 py-6 border-b ${isDark ? 'border-gray-700' : 'border-gray-200'} flex items-center justify-between`}>
            <div className="flex items-center space-x-4">
              <div className={`w-8 h-8 rounded-lg bg-black flex items-center justify-center`}>
                <span className={`text-sm font-bold text-white`}>S</span>
              </div>
              <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Analytics Dashboard</h2>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 px-4 py-2 bg-blue-500 bg-opacity-10 rounded-full">
                <TrendingUp className="w-4 h-4 text-blue-500" />
                <span className="text-sm font-medium text-blue-500">Revenue up 23% this month</span>
                <span className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Just now</span>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <StatCard
                title="Total Revenue"
                value="$847K"
                change="+23%"
                trend="up"
                isDark={isDark}
              />
              <StatCard
                title="Active Users"
                value="12,847"
                change="+12%"
                trend="up"
                isDark={isDark}
              />
              <StatCard
                title="Conversion Rate"
                value="3.2%"
                change="+0.8%"
                trend="up"
                isDark={isDark}
              />
            </div>

            {/* Paid Members Section */}
            <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-50'} border ${isDark ? 'border-gray-600' : 'border-gray-200'}`}>
              <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Top Performing Segments</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-semibold">
                      E
                    </div>
                    <div>
                      <div className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>Enterprise Clients</div>
                      <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>High-value segment</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>$2.4M ARR</div>
                    <div className={`text-sm text-green-500`}>+18% growth</div>
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