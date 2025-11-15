import React from "react";
import Head from "next/head";
import { useTheme } from "../../src/contexts/ThemeContext";
import Navigation from "../../src/components/Navigation";
import Footer from "../../src/components/Footer";
import UseCaseTemplate from "../../src/components/UseCaseTemplate";
import {
  BookOpen,
  Users,
  TrendingUp,
  GraduationCap,
  BarChart3,
  FileText,
  Lightbulb,
  Target,
  Database,
  Award,
  MessageSquare,
  CheckCircle,
} from "lucide-react";

export default function EducationPage() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <>
      <Head>
        <title>Education & Research | Saby</title>
        <meta
          name="description"
          content="Performance analytics, student insights, and research summarization. Empower academic excellence and institutional intelligence with AI-driven insights."
        />
      </Head>

      <Navigation
        isDark={isDark}
        toggleTheme={toggleTheme}
        currentPage="/product/education"
      />

      <UseCaseTemplate
        isDark={isDark}
        accentColor="indigo"
        // Hero Section
        heroIcon={<BookOpen className="w-12 h-12" />}
        heroTitle="Education & Research"
        heroSubtitle="Empower academic excellence and institutional intelligence with AI-driven insights"
        heroImagePlaceholder="Academic Analytics Dashboard - Student performance tracking and learning outcome visualization"
        // Overview Section
        overviewTitle="Intelligent Education Platform"
        overviewDescription="Transform student data into personalized learning experiences, accelerate research with AI-powered summarization, and optimize institutional operations with comprehensive analytics."
        overviewImagePlaceholder="Unified Learning Platform - Integration of LMS, SIS, and student engagement systems"
        benefits={[
          {
            icon: <Users className="w-8 h-8" />,
            title: "Student Success",
            description:
              "Identify at-risk students and provide personalized interventions to improve outcomes.",
          },
          {
            icon: <BarChart3 className="w-8 h-8" />,
            title: "Performance Analytics",
            description:
              "Track academic performance, engagement, and institutional effectiveness.",
          },
          {
            icon: <Lightbulb className="w-8 h-8" />,
            title: "Research Acceleration",
            description:
              "AI-powered tools to summarize papers, identify trends, and accelerate discoveries.",
          },
          {
            icon: <Target className="w-8 h-8" />,
            title: "Operational Efficiency",
            description:
              "Optimize enrollment, resource allocation, and administrative processes.",
          },
        ]}
        useCasesImagePlaceholder="Student Success Prediction - AI model identifying at-risk students and intervention opportunities"
        useCases={[
          {
            icon: <GraduationCap className="w-6 h-6" />,
            title: "Student Success Analytics",
            description:
              "Predict student outcomes, identify intervention opportunities, and personalize learning paths based on performance data.",
          },
          {
            icon: <FileText className="w-6 h-6" />,
            title: "Research Intelligence",
            description:
              "Analyze research publications, summarize literature, and identify collaboration opportunities across disciplines.",
          },
          {
            icon: <MessageSquare className="w-6 h-6" />,
            title: "Learning Management Integration",
            description:
              "Connect LMS, SIS, and other educational platforms to create a unified view of student engagement and performance.",
          },
          {
            icon: <Award className="w-6 h-6" />,
            title: "Institutional Effectiveness",
            description:
              "Track accreditation metrics, measure program outcomes, and demonstrate institutional impact.",
          },
        ]}
        // How It Works
        steps={[
          {
            number: 1,
            title: "Connect Education Systems",
            description:
              "Integrate data from SIS, LMS, library systems, and research databases into a unified platform.",
          },
          {
            number: 2,
            title: "AI-Powered Analysis",
            description:
              "Apply machine learning to predict student success, summarize research, and optimize operations.",
          },
          {
            number: 3,
            title: "Drive Excellence",
            description:
              "Deliver actionable insights that improve student outcomes, accelerate research, and enhance institutional effectiveness.",
          },
        ]}
        capabilitiesImagePlaceholder="Research Intelligence Platform - Academic publication analysis and collaboration network visualization"
        capabilities={[
          {
            icon: <Database className="w-6 h-6" />,
            title: "Unified Data Platform",
            description:
              "Integrate student, faculty, research, and operational data from disparate systems.",
          },
          {
            icon: <TrendingUp className="w-6 h-6" />,
            title: "Predictive Analytics",
            description:
              "Predict student retention, graduation rates, and academic performance.",
          },
          {
            icon: <FileText className="w-6 h-6" />,
            title: "Research Summarization",
            description:
              "AI-powered tools to summarize academic papers and identify key findings.",
          },
          {
            icon: <Users className="w-6 h-6" />,
            title: "Personalized Learning",
            description:
              "Recommend courses, resources, and interventions based on student profiles.",
          },
          {
            icon: <BarChart3 className="w-6 h-6" />,
            title: "Custom Dashboards",
            description:
              "Build role-based dashboards for students, faculty, and administrators.",
          },
          {
            icon: <CheckCircle className="w-6 h-6" />,
            title: "Compliance Reporting",
            description:
              "Automated reporting for accreditation, grants, and regulatory compliance.",
          },
        ]}
        // Stats
        stats={[
          {
            value: "25%",
            label: "Higher Retention",
            description: "With early interventions",
          },
          {
            value: "3x",
            label: "Faster Research",
            description: "AI-assisted analysis",
          },
          {
            value: "90%",
            label: "Student Satisfaction",
            description: "Personalized support",
          },
          {
            value: "500+",
            label: "Institutions",
            description: "Worldwide",
          },
        ]}
        // CTA
        ctaTitle="Ready to Transform Education?"
        ctaDescription="Join leading universities and research institutions using Saby to improve student outcomes, accelerate research, and drive institutional excellence."
      />

      <Footer isDark={isDark} />
    </>
  );
}
