import React from "react";
import Head from "next/head";
import { useTheme } from "../../src/contexts/ThemeContext";
import Navigation from "../../src/components/Navigation";
import Footer from "../../src/components/Footer";
import UseCaseTemplate from "../../src/components/UseCaseTemplate";
import {
  Heart,
  Users,
  TrendingUp,
  DollarSign,
  Target,
  BarChart3,
  UserCheck,
  Globe,
  Database,
  FileText,
  Award,
  MessageSquare,
} from "lucide-react";

export default function NonProfitPage() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <>
      <Head>
        <title>Non-Profit, Faith-Based & NGO Sector | Saby</title>
        <meta
          name="description"
          content="Donor analytics, program impact tracking, and volunteer coordination. Equip mission-driven organizations with data intelligence for accountability and growth."
        />
      </Head>

      <Navigation
        isDark={isDark}
        toggleTheme={toggleTheme}
        currentPage="/product/nonprofit"
      />

      <UseCaseTemplate
        isDark={isDark}
        accentColor="teal"
        // Hero Section
        heroIcon={<Heart className="w-12 h-12" />}
        heroTitle="Non-Profit, Faith-Based & NGO Sector"
        heroSubtitle="Equip mission-driven organizations with data intelligence for accountability and growth"
        heroImagePlaceholder="Impact Measurement Dashboard - Program outcomes and social impact tracking visualization"
        // Overview Section
        overviewTitle="Intelligent Impact Management"
        overviewDescription="Maximize donor engagement, measure program impact, coordinate volunteers effectively, and demonstrate accountability with comprehensive data intelligence tailored for mission-driven organizations."
        overviewImagePlaceholder="Donor Relationship Platform - Unified donor data, giving patterns, and engagement tracking"
        benefits={[
          {
            icon: <DollarSign className="w-8 h-8" />,
            title: "Donor Intelligence",
            description:
              "Understand donor behavior, predict giving patterns, and personalize engagement.",
          },
          {
            icon: <Target className="w-8 h-8" />,
            title: "Impact Measurement",
            description:
              "Track program outcomes, measure social impact, and demonstrate effectiveness.",
          },
          {
            icon: <Users className="w-8 h-8" />,
            title: "Volunteer Management",
            description:
              "Coordinate volunteers, track hours, and optimize volunteer engagement.",
          },
          {
            icon: <FileText className="w-8 h-8" />,
            title: "Grant Reporting",
            description:
              "Automate grant reporting, track compliance, and demonstrate fund usage.",
          },
        ]}
        useCasesImagePlaceholder="Community Impact Map - Geographic visualization of program reach and beneficiary outcomes"
        useCases={[
          {
            icon: <UserCheck className="w-6 h-6" />,
            title: "Donor Analytics & Retention",
            description:
              "Segment donors by giving patterns, predict churn, and implement retention strategies to maximize lifetime donor value.",
          },
          {
            icon: <BarChart3 className="w-6 h-6" />,
            title: "Program Impact Tracking",
            description:
              "Measure program outcomes, track beneficiary progress, and quantify social impact for stakeholders and funders.",
          },
          {
            icon: <Globe className="w-6 h-6" />,
            title: "Multi-Location Coordination",
            description:
              "Coordinate activities across multiple locations, track resources, and ensure consistent service delivery.",
          },
          {
            icon: <MessageSquare className="w-6 h-6" />,
            title: "Community Engagement",
            description:
              "Track community interactions, measure engagement, and build stronger relationships with beneficiaries.",
          },
        ]}
        // How It Works
        steps={[
          {
            number: 1,
            title: "Integrate Data Sources",
            description:
              "Connect donor management systems, volunteer platforms, program databases, and financial tools.",
          },
          {
            number: 2,
            title: "Analyze & Measure",
            description:
              "Apply analytics to understand donor behavior, measure program impact, and optimize operations.",
          },
          {
            number: 3,
            title: "Maximize Impact",
            description:
              "Use insights to increase donations, improve programs, and demonstrate accountability to stakeholders.",
          },
        ]}
        capabilitiesImagePlaceholder="Grant Management System - Track funding requirements, deadlines, and reporting workflows"
        capabilities={[
          {
            icon: <Database className="w-6 h-6" />,
            title: "Unified Donor Database",
            description:
              "Consolidate donor, volunteer, and beneficiary data into a single platform.",
          },
          {
            icon: <TrendingUp className="w-6 h-6" />,
            title: "Fundraising Analytics",
            description:
              "Predict donor giving, identify major gift prospects, and optimize campaigns.",
          },
          {
            icon: <Award className="w-6 h-6" />,
            title: "Impact Dashboards",
            description:
              "Create public-facing dashboards that showcase your organization's impact.",
          },
          {
            icon: <FileText className="w-6 h-6" />,
            title: "Grant Management",
            description:
              "Track grant requirements, deadlines, and deliverables with automated reporting.",
          },
          {
            icon: <Users className="w-6 h-6" />,
            title: "Volunteer Portal",
            description:
              "Manage volunteer schedules, track hours, and recognize contributions.",
          },
          {
            icon: <Globe className="w-6 h-6" />,
            title: "Multi-Currency Support",
            description:
              "Accept and track donations in multiple currencies for global operations.",
          },
        ]}
        // Stats
        stats={[
          {
            value: "45%",
            label: "Donor Retention",
            description: "Improved engagement",
          },
          {
            value: "60%",
            label: "Grant Success Rate",
            description: "Better reporting",
          },
          {
            value: "3x",
            label: "Impact Visibility",
            description: "Transparent outcomes",
          },
          {
            value: "1000+",
            label: "Organizations",
            description: "Making a difference",
          },
        ]}
        // CTA
        ctaTitle="Ready to Amplify Your Mission?"
        ctaDescription="Join non-profits, faith-based organizations, and NGOs using Saby to increase donations, measure impact, and serve communities more effectively."
      />

      <Footer isDark={isDark} />
    </>
  );
}
