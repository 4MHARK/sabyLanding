import React from "react";
import Head from "next/head";
import { useTheme } from "../../src/contexts/ThemeContext";
import Navigation from "../../src/components/Navigation";
import Footer from "../../src/components/Footer";
import UseCaseTemplate from "../../src/components/UseCaseTemplate";
import {
  Building2,
  Users,
  FileText,
  Shield,
  Globe,
  TrendingUp,
  Database,
  Lock,
  CheckCircle,
  Eye,
  BarChart3,
  Bell,
} from "lucide-react";

export default function GovernmentPage() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <>
      <Head>
        <title>Government & Public Sector | Saby</title>
        <meta
          name="description"
          content="Data unification across departments, transparency, and compliance automation. Power smarter governance through federated insights and intelligent automation."
        />
      </Head>

      <Navigation
        isDark={isDark}
        toggleTheme={toggleTheme}
        currentPage="/product/government"
      />

      <UseCaseTemplate
        isDark={isDark}
        accentColor="navy"
        // Hero Section
        heroIcon={<Building2 className="w-12 h-12" />}
        heroTitle="Government & Public Sector"
        heroSubtitle="Power smarter governance through federated insights and intelligent automation"
        heroImagePlaceholder="Smart City Command Center - Integrated public services and infrastructure monitoring"
        // Overview Section
        overviewTitle="Intelligent Public Services"
        overviewDescription="Break down data silos across government departments, enhance transparency, automate compliance, and deliver better services to citizens through unified data intelligence."
        overviewImagePlaceholder="Federated Government Data Platform - Secure cross-department data sharing and collaboration"
        benefits={[
          {
            icon: <Database className="w-8 h-8" />,
            title: "Data Unification",
            description:
              "Consolidate data across departments while maintaining security and governance.",
          },
          {
            icon: <Eye className="w-8 h-8" />,
            title: "Transparency & Reporting",
            description:
              "Automated reporting and public dashboards for government accountability.",
          },
          {
            icon: <Shield className="w-8 h-8" />,
            title: "Compliance Automation",
            description:
              "Ensure adherence to regulations, policies, and audit requirements.",
          },
          {
            icon: <Users className="w-8 h-8" />,
            title: "Citizen Services",
            description:
              "Deliver personalized, data-driven services that meet citizen needs.",
          },
        ]}
        useCasesImagePlaceholder="Public Transparency Dashboard - Open data portal showing government performance metrics"
        useCases={[
          {
            icon: <Globe className="w-6 h-6" />,
            title: "Smart City Operations",
            description:
              "Integrate data from transportation, utilities, public safety, and infrastructure to optimize city operations and improve quality of life.",
          },
          {
            icon: <FileText className="w-6 h-6" />,
            title: "Policy Analytics",
            description:
              "Analyze policy impact, forecast outcomes, and make evidence-based decisions with comprehensive data insights.",
          },
          {
            icon: <Lock className="w-6 h-6" />,
            title: "Secure Data Sharing",
            description:
              "Enable secure, federated data sharing across agencies while maintaining privacy and compliance.",
          },
          {
            icon: <Bell className="w-6 h-6" />,
            title: "Emergency Response",
            description:
              "Coordinate emergency response with real-time data from multiple agencies and communication systems.",
          },
        ]}
        // How It Works
        steps={[
          {
            number: 1,
            title: "Connect Government Systems",
            description:
              "Integrate data from legacy systems, databases, and third-party sources with secure, federated architecture.",
          },
          {
            number: 2,
            title: "Analyze & Govern",
            description:
              "Apply AI and analytics while maintaining data governance, security, and compliance requirements.",
          },
          {
            number: 3,
            title: "Deliver Better Services",
            description:
              "Provide actionable insights to policymakers and improved services to citizens.",
          },
        ]}
        capabilitiesImagePlaceholder="Government Security Architecture - FedRAMP certified secure data infrastructure"
        capabilities={[
          {
            icon: <Database className="w-6 h-6" />,
            title: "Federated Data Architecture",
            description:
              "Access data across departments without centralizing sensitive information.",
          },
          {
            icon: <Lock className="w-6 h-6" />,
            title: "Government-Grade Security",
            description:
              "FedRAMP, FISMA, and other government security standards compliance.",
          },
          {
            icon: <Eye className="w-6 h-6" />,
            title: "Public Transparency Dashboards",
            description:
              "Create public-facing dashboards for budget tracking, performance metrics, and accountability.",
          },
          {
            icon: <BarChart3 className="w-6 h-6" />,
            title: "Performance Analytics",
            description:
              "Track KPIs, measure program effectiveness, and optimize resource allocation.",
          },
          {
            icon: <CheckCircle className="w-6 h-6" />,
            title: "Audit & Compliance",
            description:
              "Automated audit trails and compliance reporting for regulatory requirements.",
          },
          {
            icon: <TrendingUp className="w-6 h-6" />,
            title: "Predictive Planning",
            description:
              "Forecast demand for services, budgets, and resource needs.",
          },
        ]}
        // Stats
        stats={[
          {
            value: "60%",
            label: "Faster Processing",
            description: "Citizen requests",
          },
          {
            value: "45%",
            label: "Cost Reduction",
            description: "Operational efficiency",
          },
          {
            value: "100+",
            label: "Agencies Connected",
            description: "Data integration",
          },
          {
            value: "99.99%",
            label: "System Uptime",
            description: "Reliable operations",
          },
        ]}
        // CTA
        ctaTitle="Ready to Transform Public Services?"
        ctaDescription="Join government agencies and public sector organizations using Saby to deliver better services, increase transparency, and drive data-informed policy."
      />

      <Footer isDark={isDark} />
    </>
  );
}
