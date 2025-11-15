import React from "react";
import Head from "next/head";
import { useTheme } from "../../src/contexts/ThemeContext";
import Navigation from "../../src/components/Navigation";
import Footer from "../../src/components/Footer";
import UseCaseTemplate from "../../src/components/UseCaseTemplate";
import {
  Heart,
  Activity,
  FileText,
  Users,
  Shield,
  Microscope,
  Pill,
  UserCheck,
  Database,
  TrendingUp,
  Lock,
  Bell,
} from "lucide-react";

export default function HealthcarePage() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <>
      <Head>
        <title>Healthcare & Life Sciences | Saby</title>
        <meta
          name="description"
          content="Unified patient data, diagnostic automation, and research insights. Transform clinical and research operations with agentic data intelligence."
        />
      </Head>

      <Navigation
        isDark={isDark}
        toggleTheme={toggleTheme}
        currentPage="/product/healthcare"
      />

      <UseCaseTemplate
        isDark={isDark}
        accentColor="red"
        // Hero Section
        heroIcon={<Heart className="w-12 h-12" />}
        heroTitle="Healthcare & Life Sciences"
        heroSubtitle="Transform clinical and research operations with agentic data intelligence"
        heroImagePlaceholder="Clinical Intelligence Dashboard - Patient care coordination and diagnostic support system"
        // Overview Section
        overviewTitle="Intelligent Healthcare Solutions"
        overviewDescription="Unify patient data across systems, automate diagnostic workflows, and accelerate research with AI-powered insights that improve patient outcomes and operational efficiency."
        overviewImagePlaceholder="Unified Patient Records - EHR, labs, imaging, and wearables data integration platform"
        benefits={[
          {
            icon: <FileText className="w-8 h-8" />,
            title: "Unified Patient Records",
            description:
              "Consolidate patient data from EHR, labs, imaging, and wearables into a single view.",
          },
          {
            icon: <Activity className="w-8 h-8" />,
            title: "Clinical Decision Support",
            description:
              "AI-powered insights to assist clinicians in diagnosis, treatment planning, and care coordination.",
          },
          {
            icon: <Microscope className="w-8 h-8" />,
            title: "Research Acceleration",
            description:
              "Analyze clinical trial data, genomics, and real-world evidence to accelerate discoveries.",
          },
          {
            icon: <Shield className="w-8 h-8" />,
            title: "HIPAA Compliance",
            description:
              "Enterprise-grade security and compliance with healthcare regulations worldwide.",
          },
        ]}
        useCasesImagePlaceholder="AI Diagnostic Assistant - Clinical decision support and treatment recommendation engine"
        useCases={[
          {
            icon: <UserCheck className="w-6 h-6" />,
            title: "Patient Data Integration",
            description:
              "Integrate data from EHRs, PACS, LIS, and wearables to create comprehensive patient profiles for better care coordination.",
          },
          {
            icon: <Pill className="w-6 h-6" />,
            title: "Drug Discovery & Development",
            description:
              "Accelerate pharmaceutical research with AI-powered analysis of clinical trials, biomarkers, and patient outcomes.",
          },
          {
            icon: <TrendingUp className="w-6 h-6" />,
            title: "Population Health Management",
            description:
              "Identify at-risk populations, predict disease outbreaks, and optimize preventive care programs.",
          },
          {
            icon: <Bell className="w-6 h-6" />,
            title: "Clinical Alert Systems",
            description:
              "Automated alerts for critical lab results, drug interactions, and patient deterioration indicators.",
          },
        ]}
        // How It Works
        steps={[
          {
            number: 1,
            title: "Connect Health Systems",
            description:
              "Securely integrate with EHR systems, medical devices, and research databases using HL7, FHIR, and custom APIs.",
          },
          {
            number: 2,
            title: "AI-Powered Analysis",
            description:
              "Apply machine learning to clinical data for diagnostics, risk stratification, and treatment recommendations.",
          },
          {
            number: 3,
            title: "Improve Outcomes",
            description:
              "Deliver actionable insights that improve patient care, accelerate research, and optimize operations.",
          },
        ]}
        capabilitiesImagePlaceholder="Healthcare Security Framework - HIPAA compliant data protection and access control system"
        capabilities={[
          {
            icon: <Database className="w-6 h-6" />,
            title: "FHIR-Compliant Data",
            description:
              "Full support for FHIR standards to ensure interoperability across healthcare systems.",
          },
          {
            icon: <Lock className="w-6 h-6" />,
            title: "Advanced Security",
            description:
              "HIPAA, GDPR, and SOC 2 compliant with end-to-end encryption and audit trails.",
          },
          {
            icon: <Activity className="w-6 h-6" />,
            title: "Real-Time Monitoring",
            description:
              "Monitor patient vitals, lab results, and clinical events in real-time.",
          },
          {
            icon: <Microscope className="w-6 h-6" />,
            title: "Genomics Integration",
            description:
              "Integrate genomic data for personalized medicine and precision therapeutics.",
          },
          {
            icon: <TrendingUp className="w-6 h-6" />,
            title: "Predictive Analytics",
            description:
              "Predict patient readmissions, disease progression, and treatment responses.",
          },
          {
            icon: <Users className="w-6 h-6" />,
            title: "Care Team Collaboration",
            description:
              "Enable seamless collaboration across care teams with shared patient insights.",
          },
        ]}
        // Stats
        stats={[
          {
            value: "40%",
            label: "Faster Diagnosis",
            description: "With AI assistance",
          },
          {
            value: "98%",
            label: "Data Accuracy",
            description: "Unified patient records",
          },
          {
            value: "2x",
            label: "Research Speed",
            description: "Clinical trials",
          },
          {
            value: "100%",
            label: "HIPAA Compliant",
            description: "Enterprise security",
          },
        ]}
        // CTA
        ctaTitle="Ready to Transform Healthcare Delivery?"
        ctaDescription="Join leading hospitals, research institutions, and pharmaceutical companies using Saby to improve patient outcomes and accelerate medical innovation."
      />

      <Footer isDark={isDark} />
    </>
  );
}
