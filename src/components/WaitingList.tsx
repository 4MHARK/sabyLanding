import React, { useState, useEffect, useMemo } from "react";
import { Mail, ArrowRight, Clock, Users, Sparkles } from "lucide-react";

interface WaitingListProps {
  isDark: boolean;
  launchDate?: Date; // Optional launch date, defaults to 7 days from now
}

export default function WaitingList({ isDark, launchDate }: WaitingListProps) {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Set default launch date to 7 days from now if not provided
  // useMemo ensures this is only calculated once
  const targetDate = useMemo(
    () => launchDate || new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    [launchDate]
  );

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // TODO: Connect to actual API/backend
      console.log("Email submitted to waiting list:", email);
      setIsSubmitted(true);

      // Store in localStorage for demo purposes
      const waitingList = JSON.parse(
        localStorage.getItem("saby-waiting-list") || "[]"
      );
      waitingList.push({ email, timestamp: new Date().toISOString() });
      localStorage.setItem("saby-waiting-list", JSON.stringify(waitingList));

      setTimeout(() => {
        setIsSubmitted(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <div
      className={`relative overflow-hidden ${
        isDark
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
          : "bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"
      } rounded-3xl p-8 md:p-12 my-16`}>
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.2'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
          <Sparkles className="w-4 h-4" />
          <span>Early Access Launch</span>
        </div>

        {/* Heading */}
        <h2
          className={`text-3xl md:text-5xl font-bold mb-4 ${
            isDark ? "text-white" : "text-gray-900"
          }`}>
          Join the Waiting List
        </h2>
        <p
          className={`text-lg md:text-xl mb-8 ${
            isDark ? "text-gray-300" : "text-gray-600"
          }`}>
          Be among the first to experience the future of analytics. Get
          exclusive early access and lifetime discounts.
        </p>

        {/* Countdown Timer */}
        <div className="grid grid-cols-4 gap-4 md:gap-6 mb-10 max-w-2xl mx-auto">
          {[
            { label: "Days", value: timeLeft.days },
            { label: "Hours", value: timeLeft.hours },
            { label: "Minutes", value: timeLeft.minutes },
            { label: "Seconds", value: timeLeft.seconds },
          ].map((item, index) => (
            <div
              key={index}
              className={`${
                isDark
                  ? "bg-gray-800/50 border-gray-700"
                  : "bg-white/80 border-gray-200"
              } backdrop-blur-sm border rounded-2xl p-4 md:p-6`}>
              <div
                className={`text-3xl md:text-5xl font-bold ${
                  isDark ? "text-white" : "text-gray-900"
                }`}>
                {String(item.value).padStart(2, "0")}
              </div>
              <div
                className={`text-xs md:text-sm font-medium mt-2 ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}>
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="flex items-center justify-center space-x-8 mb-8">
          <div className="flex items-center space-x-2">
            <Users
              className={`w-5 h-5 ${
                isDark ? "text-blue-400" : "text-blue-600"
              }`}
            />
            <span
              className={`text-sm font-semibold ${
                isDark ? "text-gray-300" : "text-gray-700"
              }`}>
              2,847 early adopters
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock
              className={`w-5 h-5 ${
                isDark ? "text-purple-400" : "text-purple-600"
              }`}
            />
            <span
              className={`text-sm font-semibold ${
                isDark ? "text-gray-300" : "text-gray-700"
              }`}>
              Limited spots available
            </span>
          </div>
        </div>

        {/* Email Form */}
        {!isSubmitted ? (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <div className="flex-1 relative">
              <Mail
                className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
                  isDark ? "text-gray-400" : "text-gray-500"
                }`}
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className={`w-full pl-12 pr-4 py-4 rounded-xl border ${
                  isDark
                    ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                    : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                } focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
              />
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all inline-flex items-center justify-center whitespace-nowrap">
              Join Waitlist
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </form>
        ) : (
          <div
            className={`max-w-xl mx-auto p-6 rounded-xl ${
              isDark ? "bg-green-900/30" : "bg-green-100"
            }`}>
            <p
              className={`text-lg font-semibold ${
                isDark ? "text-green-400" : "text-green-800"
              }`}>
              🎉 You're on the list! Check your email for confirmation.
            </p>
          </div>
        )}

        {/* Benefits */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            {
              icon: "🎁",
              title: "50% Off",
              desc: "Lifetime discount for early adopters",
            },
            {
              icon: "⚡",
              title: "Priority Access",
              desc: "Be first to try new features",
            },
            {
              icon: "🎯",
              title: "VIP Support",
              desc: "Direct line to our team",
            },
          ].map((benefit, index) => (
            <div
              key={index}
              className={`${
                isDark ? "bg-gray-800/30" : "bg-white/60"
              } backdrop-blur-sm rounded-xl p-5`}>
              <div className="text-3xl mb-3">{benefit.icon}</div>
              <h3
                className={`font-semibold mb-1 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}>
                {benefit.title}
              </h3>
              <p
                className={`text-sm ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}>
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Fine Print */}
        <p
          className={`text-xs mt-8 ${
            isDark ? "text-gray-500" : "text-gray-500"
          }`}>
          By joining, you agree to receive product updates. Unsubscribe anytime.
          We respect your privacy.
        </p>
      </div>
    </div>
  );
}
