import React, { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Navigation from "../src/components/Navigation";
import HeroSection from "../src/components/HeroSection";
import Dashboard from "../src/components/Dashboard";
import ProfileSection from "../src/components/ProfileSection";
import ThemeCustomizer from "../src/components/ThemeCustomizer";
import WaitingList from "../src/components/WaitingList";
import Footer from "../src/components/Footer";
import { useTheme } from "../src/contexts/ThemeContext";

export default function Home() {
  const router = useRouter();
  const { isDark, toggleTheme } = useTheme();
  const [accentColor, setAccentColor] = useState("#14B8A6");

  return (
    <>
      <Head>
        <title>Saby - Turn Your Data Into Insights</title>
        <meta
          name="description"
          content="Saby empowers you to unify data, drive insights, and grow with clarity. Analytics platform for modern businesses."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="Saby - Turn Your Data Into Insights"
        />
        <meta
          property="og:description"
          content="Analytics platform that transforms raw data into actionable insights"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Saby - Analytics Platform" />
        <meta
          name="twitter:description"
          content="Turn your data into insights with Saby"
        />
      </Head>

      <div
        className={`min-h-screen transition-colors duration-300 ${
          isDark ? "bg-gray-900" : "bg-white"
        }`}>
        <Navigation isDark={isDark} toggleTheme={toggleTheme} currentPage="/" />
        <HeroSection isDark={isDark} />
        <Dashboard isDark={isDark} />
        <ProfileSection isDark={isDark} />
        <ThemeCustomizer
          isDark={isDark}
          accentColor={accentColor}
          setAccentColor={setAccentColor}
        />

        {/* Waiting List Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <WaitingList isDark={isDark} />
        </div>

        <Footer isDark={isDark} />
      </div>
    </>
  );
}
