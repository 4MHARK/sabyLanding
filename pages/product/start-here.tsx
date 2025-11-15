import React from "react";
import Head from "next/head";
import { useTheme } from "../../src/contexts/ThemeContext";
import Navigation from "../../src/components/Navigation";
import Footer from "../../src/components/Footer";
import UseCaseTemplate from "../../src/components/UseCaseTemplate";
import {
  Rocket,
  Zap,
  BookOpen,
  Users,
  Code,
  Globe,
  TrendingUp,
  CheckCircle,
  Database,
  Lock,
  BarChart3,
  Lightbulb,
} from "lucide-react";

export default function StartHerePage() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <>
      <Head>
        <title>Start Here | Saby</title>
        <meta
          name="description"
          content="Get started with Saby and discover how we can transform your data into insights, actions, and decisions. Your journey to intelligent operations begins here."
        />
      </Head>

      <Navigation
        isDark={isDark}
        toggleTheme={toggleTheme}
        currentPage="/product/start-here"
      />

      <UseCaseTemplate
        isDark={isDark}
        accentColor="orange"
        // Hero Section
        heroIcon={<Rocket className="w-12 h-12" />}
        heroTitle="Start Your Data Intelligence Journey"
        heroSubtitle="Transform your data into insights, actions, and decisions with Saby"
        heroPrimaryCtaText="Get Started Free"
        heroSecondaryCtaText="Talk to an Expert"
        heroSecondaryCtaLink="/contact"
        heroImagePlaceholder="Saby Platform Overview - Comprehensive data intelligence platform architecture"
        // Overview Section
        overviewTitle="Welcome to Saby"
        overviewDescription="Whether you're in finance, healthcare, energy, retail, education, government, or running a non-profit, Saby helps you turn complex data into intelligent operations. Start your journey today."
        overviewImagePlaceholder="Quick Start Guide - Step-by-step onboarding and data integration walkthrough"
        benefits={[
          {
            icon: <Zap className="w-8 h-8" />,
            title: "Quick Setup",
            description:
              "Connect your data sources in minutes, not months. No complex infrastructure required.",
          },
          {
            icon: <Users className="w-8 h-8" />,
            title: "Expert Support",
            description:
              "Our team of data engineers and domain experts guide you every step of the way.",
          },
          {
            icon: <Code className="w-8 h-8" />,
            title: "API-First",
            description:
              "Integrate with any system using our comprehensive API and pre-built connectors.",
          },
          {
            icon: <BookOpen className="w-8 h-8" />,
            title: "Comprehensive Docs",
            description:
              "Detailed documentation, tutorials, and best practices to accelerate your success.",
          },
        ]}
        useCasesImagePlaceholder="Integration Hub - Pre-built connectors for databases, APIs, and SaaS platforms"
        useCases={[
          {
            icon: <Database className="w-6 h-6" />,
            title: "Unify Your Data",
            description:
              "Connect data from sensors, APIs, forms, databases, and third-party services into a single, unified platform.",
          },
          {
            icon: <BarChart3 className="w-6 h-6" />,
            title: "Get Instant Insights",
            description:
              "Pre-built dashboards and AI-powered analytics give you immediate visibility into your operations.",
          },
          {
            icon: <Lightbulb className="w-6 h-6" />,
            title: "Predict & Optimize",
            description:
              "Machine learning models help you forecast trends, identify opportunities, and make data-driven decisions.",
          },
          {
            icon: <Globe className="w-6 h-6" />,
            title: "Scale Globally",
            description:
              "Built for enterprise scale with multi-region support, high availability, and compliance certifications.",
          },
        ]}
        // How It Works
        steps={[
          {
            number: 1,
            title: "Sign Up & Connect",
            description:
              "Create your free account and connect your first data source in minutes using our guided setup.",
          },
          {
            number: 2,
            title: "Explore & Customize",
            description:
              "Use pre-built templates or customize dashboards, alerts, and analytics to match your needs.",
          },
          {
            number: 3,
            title: "Scale & Grow",
            description:
              "Add more data sources, users, and capabilities as your needs evolve. We scale with you.",
          },
        ]}
        capabilitiesImagePlaceholder="Developer Resources - API documentation, SDKs, and code examples"
        capabilities={[
          {
            icon: <Database className="w-6 h-6" />,
            title: "200+ Integrations",
            description:
              "Pre-built connectors for popular databases, APIs, SaaS platforms, and IoT devices.",
          },
          {
            icon: <Lock className="w-6 h-6" />,
            title: "Enterprise Security",
            description:
              "SOC 2, GDPR, HIPAA compliant with enterprise-grade encryption and access controls.",
          },
          {
            icon: <Zap className="w-6 h-6" />,
            title: "Real-Time Processing",
            description:
              "Process millions of events per second with sub-second latency.",
          },
          {
            icon: <BarChart3 className="w-6 h-6" />,
            title: "AI-Powered Analytics",
            description:
              "Built-in machine learning for forecasting, anomaly detection, and recommendations.",
          },
          {
            icon: <Code className="w-6 h-6" />,
            title: "Developer-Friendly",
            description:
              "Comprehensive APIs, SDKs, and CLI tools for seamless integration.",
          },
          {
            icon: <Users className="w-6 h-6" />,
            title: "24/7 Support",
            description:
              "Expert support team available around the clock to help you succeed.",
          },
        ]}
        // Stats
        stats={[
          {
            value: "10K+",
            label: "Organizations",
            description: "Trust Saby",
          },
          {
            value: "5 Min",
            label: "Setup Time",
            description: "Get started fast",
          },
          {
            value: "200+",
            label: "Integrations",
            description: "Data sources",
          },
          {
            value: "99.9%",
            label: "Uptime",
            description: "Reliable platform",
          },
        ]}
        // CTA
        ctaTitle="Ready to Get Started?"
        ctaDescription="Join thousands of organizations using Saby to transform their data into intelligent operations. Start your free trial today—no credit card required."
        ctaPrimaryText="Start Free Trial"
        ctaSecondaryText="Schedule a Demo"
        ctaSecondaryLink="/contact"
      />

      <Footer isDark={isDark} />
    </>
  );
}
