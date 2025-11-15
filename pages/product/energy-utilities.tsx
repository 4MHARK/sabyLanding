import React from "react";
import Head from "next/head";
import { useTheme } from "../../src/contexts/ThemeContext";
import Navigation from "../../src/components/Navigation";
import Footer from "../../src/components/Footer";
import UseCaseTemplate from "../../src/components/UseCaseTemplate";
import {
  Zap,
  Activity,
  TrendingDown,
  Shield,
  Settings,
  AlertTriangle,
  Battery,
  Wind,
  Wifi,
  Database,
  BarChart3,
  Clock,
} from "lucide-react";

export default function EnergyUtilitiesPage() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <>
      <Head>
        <title>Energy, Utilities & IoT | Saby</title>
        <meta
          name="description"
          content="Real-time sensor and IoT data analysis for maintenance, optimization, and energy efficiency. Enable smarter, cleaner, and more efficient energy operations."
        />
      </Head>

      <Navigation
        isDark={isDark}
        toggleTheme={toggleTheme}
        currentPage="/product/energy-utilities"
      />

      <UseCaseTemplate
        isDark={isDark}
        accentColor="green"
        // Hero Section
        heroIcon={<Zap className="w-12 h-12" />}
        heroTitle="Energy, Utilities & IoT"
        heroSubtitle="Enable smarter, cleaner, and more efficient energy operations through data-driven intelligence"
        heroImagePlaceholder="Smart Grid Dashboard - Real-time energy distribution and renewable integration monitoring"
        // Overview Section
        overviewTitle="Smart Energy Management"
        overviewDescription="Transform raw sensor and IoT data into actionable insights that optimize energy consumption, predict equipment failures, and drive sustainability goals."
        overviewImagePlaceholder="IoT Sensor Network - Connected devices monitoring energy infrastructure across facilities"
        benefits={[
          {
            icon: <Activity className="w-8 h-8" />,
            title: "Real-Time Monitoring",
            description:
              "Monitor energy consumption and equipment performance across all facilities in real-time.",
          },
          {
            icon: <TrendingDown className="w-8 h-8" />,
            title: "Energy Optimization",
            description:
              "AI-powered recommendations to reduce energy waste and lower operational costs.",
          },
          {
            icon: <AlertTriangle className="w-8 h-8" />,
            title: "Predictive Maintenance",
            description:
              "Predict equipment failures before they happen, reducing downtime and repair costs.",
          },
          {
            icon: <Wind className="w-8 h-8" />,
            title: "Sustainability Tracking",
            description:
              "Track and report on carbon emissions, renewable energy usage, and ESG goals.",
          },
        ]}
        useCasesImagePlaceholder="Predictive Maintenance AI - Equipment health monitoring and failure prediction visualization"
        useCases={[
          {
            icon: <Battery className="w-6 h-6" />,
            title: "Smart Grid Management",
            description:
              "Optimize power distribution, balance loads, and integrate renewable energy sources with intelligent grid management.",
          },
          {
            icon: <Wifi className="w-6 h-6" />,
            title: "IoT Sensor Analytics",
            description:
              "Collect, process, and analyze data from thousands of IoT sensors to monitor equipment health and performance.",
          },
          {
            icon: <Settings className="w-6 h-6" />,
            title: "Asset Performance Optimization",
            description:
              "Maximize the efficiency and lifespan of energy assets through continuous monitoring and optimization.",
          },
          {
            icon: <Shield className="w-6 h-6" />,
            title: "Outage Detection & Response",
            description:
              "Rapidly detect, diagnose, and respond to power outages with automated alert systems and root cause analysis.",
          },
        ]}
        // How It Works
        steps={[
          {
            number: 1,
            title: "Connect IoT Devices",
            description:
              "Integrate sensors, meters, and IoT devices across your energy infrastructure through secure protocols.",
          },
          {
            number: 2,
            title: "Analyze in Real-Time",
            description:
              "Process millions of data points per second to identify anomalies, inefficiencies, and optimization opportunities.",
          },
          {
            number: 3,
            title: "Optimize & Automate",
            description:
              "Receive actionable insights and automated recommendations to optimize energy usage and reduce costs.",
          },
        ]}
        capabilitiesImagePlaceholder="Energy Analytics Platform - Comprehensive energy management and optimization tools"
        capabilities={[
          {
            icon: <Database className="w-6 h-6" />,
            title: "Time-Series Data Processing",
            description:
              "Handle massive volumes of time-series sensor data with optimized storage and query performance.",
          },
          {
            icon: <BarChart3 className="w-6 h-6" />,
            title: "Advanced Analytics",
            description:
              "Machine learning models for demand forecasting, anomaly detection, and predictive maintenance.",
          },
          {
            icon: <Clock className="w-6 h-6" />,
            title: "Historical Analysis",
            description:
              "Analyze historical trends to identify patterns and optimize long-term energy strategies.",
          },
          {
            icon: <AlertTriangle className="w-6 h-6" />,
            title: "Automated Alerts",
            description:
              "Custom alert rules that notify teams of critical issues, anomalies, or threshold breaches.",
          },
          {
            icon: <Wind className="w-6 h-6" />,
            title: "Renewable Integration",
            description:
              "Seamlessly integrate solar, wind, and other renewable energy sources into your grid.",
          },
          {
            icon: <Shield className="w-6 h-6" />,
            title: "Secure Data Transmission",
            description:
              "Enterprise-grade security for IoT data transmission and storage.",
          },
        ]}
        // Stats
        stats={[
          {
            value: "30%",
            label: "Energy Savings",
            description: "Average reduction",
          },
          {
            value: "85%",
            label: "Downtime Prevention",
            description: "Predicted failures",
          },
          {
            value: "1M+",
            label: "IoT Devices",
            description: "Connected sensors",
          },
          {
            value: "24/7",
            label: "Real-Time Monitoring",
            description: "Continuous operations",
          },
        ]}
        // CTA
        ctaTitle="Ready to Transform Your Energy Operations?"
        ctaDescription="Join leading energy and utility companies using Saby to drive efficiency, sustainability, and innovation."
      />

      <Footer isDark={isDark} />
    </>
  );
}
