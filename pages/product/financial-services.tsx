import React from "react";
import Head from "next/head";
import { useTheme } from "../../src/contexts/ThemeContext";
import Navigation from "../../src/components/Navigation";
import Footer from "../../src/components/Footer";
import UseCaseTemplate from "../../src/components/UseCaseTemplate";
import {
  DollarSign,
  Shield,
  TrendingUp,
  Zap,
  Lock,
  BarChart3,
  RefreshCw,
  Users,
  Activity,
  CheckCircle,
  Globe,
  Database,
} from "lucide-react";

export default function FinancialServicesPage() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <>
      <Head>
        <title>Financial Services & Fintech | Saby</title>
        <meta
          name="description"
          content="Intelligent automation for transactions, risk, compliance, and insights. Transform financial data into intelligent operations and predictive insights."
        />
      </Head>

      <Navigation
        isDark={isDark}
        toggleTheme={toggleTheme}
        currentPage="/product/financial-services"
      />

      <UseCaseTemplate
        isDark={isDark}
        accentColor="blue"
        // Hero Section
        heroIcon={<DollarSign className="w-12 h-12" />}
        heroTitle="Financial Services & Fintech"
        heroSubtitle="Turn financial data into intelligent operations and predictive insights"
        heroPrimaryCtaText="Get Started"
        heroSecondaryCtaText="Watch Demo"
        heroImagePlaceholder="Financial Analytics Dashboard - Real-time transaction monitoring and risk assessment visualization"
        // Overview Section
        overviewTitle="Intelligent Financial Operations"
        overviewDescription="Saby empowers financial institutions and fintech companies to automate transactions, manage risk, ensure compliance, and generate actionable insights from complex financial data."
        overviewImagePlaceholder="Unified Financial Data Platform - Connect banking systems, payment processors, and regulatory databases"
        benefits={[
          {
            icon: <Shield className="w-8 h-8" />,
            title: "Risk Management",
            description:
              "Real-time risk assessment and fraud detection with AI-powered analytics.",
          },
          {
            icon: <Lock className="w-8 h-8" />,
            title: "Compliance Automation",
            description:
              "Automated regulatory reporting and compliance monitoring across jurisdictions.",
          },
          {
            icon: <TrendingUp className="w-8 h-8" />,
            title: "Predictive Insights",
            description:
              "Forecast market trends, customer behavior, and financial performance.",
          },
          {
            icon: <Zap className="w-8 h-8" />,
            title: "Transaction Intelligence",
            description:
              "Process millions of transactions with intelligent categorization and analysis.",
          },
        ]}
        // Use Cases Section
        useCasesTitle="Key Use Cases"
        useCasesImagePlaceholder="Fraud Detection AI Model - Machine learning visualization showing transaction patterns and anomaly detection"
        useCases={[
          {
            icon: <Activity className="w-6 h-6" />,
            title: "Fraud Detection & Prevention",
            description:
              "Real-time transaction monitoring with machine learning models that identify suspicious patterns, reduce false positives, and protect customers from fraud.",
          },
          {
            icon: <BarChart3 className="w-6 h-6" />,
            title: "Credit Risk Assessment",
            description:
              "Automated credit scoring and risk modeling using alternative data sources, enabling faster loan approvals and better risk management.",
          },
          {
            icon: <CheckCircle className="w-6 h-6" />,
            title: "Regulatory Compliance",
            description:
              "Automated KYC/AML processes, transaction monitoring, and regulatory reporting that adapts to changing compliance requirements.",
          },
          {
            icon: <Users className="w-6 h-6" />,
            title: "Customer Analytics",
            description:
              "Deep insights into customer behavior, lifetime value, and churn prediction to drive personalized financial products and services.",
          },
        ]}
        // How It Works Section
        howItWorksTitle="How It Works"
        steps={[
          {
            number: 1,
            title: "Connect Data Sources",
            description:
              "Integrate with core banking systems, payment processors, CRM, and third-party data providers through secure APIs.",
          },
          {
            number: 2,
            title: "AI-Powered Analysis",
            description:
              "Our intelligent platform processes and analyzes financial data in real-time, identifying patterns, risks, and opportunities.",
          },
          {
            number: 3,
            title: "Actionable Insights",
            description:
              "Receive automated alerts, compliance reports, and predictive insights that drive smarter financial decisions.",
          },
        ]}
        // Key Capabilities Section
        capabilitiesTitle="Key Capabilities"
        capabilitiesImagePlaceholder="Enterprise Security Architecture - Multi-layer security, encryption, and compliance framework visualization"
        capabilities={[
          {
            icon: <Database className="w-6 h-6" />,
            title: "Data Unification",
            description:
              "Consolidate data from multiple financial systems into a single, unified view.",
          },
          {
            icon: <Shield className="w-6 h-6" />,
            title: "Advanced Security",
            description:
              "Bank-grade encryption, role-based access control, and audit trails for all transactions.",
          },
          {
            icon: <RefreshCw className="w-6 h-6" />,
            title: "Real-Time Processing",
            description:
              "Process and analyze financial transactions in real-time for instant insights.",
          },
          {
            icon: <Globe className="w-6 h-6" />,
            title: "Multi-Currency Support",
            description:
              "Handle transactions across multiple currencies with automatic conversion and reporting.",
          },
          {
            icon: <BarChart3 className="w-6 h-6" />,
            title: "Custom Dashboards",
            description:
              "Build custom dashboards and reports tailored to your specific financial metrics.",
          },
          {
            icon: <Zap className="w-6 h-6" />,
            title: "API-First Architecture",
            description:
              "Seamlessly integrate with existing systems through our comprehensive API suite.",
          },
        ]}
        // Stats Section
        statsTitle="Proven Results"
        stats={[
          {
            value: "95%",
            label: "Fraud Detection Accuracy",
            description: "Industry-leading accuracy",
          },
          {
            value: "50%",
            label: "Faster Compliance",
            description: "Reduce reporting time",
          },
          {
            value: "10M+",
            label: "Transactions/Day",
            description: "Scalable processing",
          },
          {
            value: "99.9%",
            label: "Platform Uptime",
            description: "Enterprise reliability",
          },
        ]}
        // CTA Section
        ctaTitle="Ready to Transform Your Financial Operations?"
        ctaDescription="Join leading financial institutions and fintech companies using Saby to drive intelligent operations and predictive insights."
        ctaPrimaryText="Start Free Trial"
        ctaSecondaryText="Schedule a Demo"
        ctaSecondaryLink="/contact"
      />

      <Footer isDark={isDark} />
    </>
  );
}
