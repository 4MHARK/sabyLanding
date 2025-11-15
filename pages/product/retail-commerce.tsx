import React from "react";
import Head from "next/head";
import { useTheme } from "../../src/contexts/ThemeContext";
import Navigation from "../../src/components/Navigation";
import Footer from "../../src/components/Footer";
import UseCaseTemplate from "../../src/components/UseCaseTemplate";
import {
  ShoppingBag,
  Users,
  TrendingUp,
  Target,
  Package,
  BarChart3,
  Sparkles,
  Globe,
  Database,
  Zap,
  Heart,
  ShoppingCart,
} from "lucide-react";

export default function RetailCommercePage() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <>
      <Head>
        <title>Retail, Commerce & Consumer Intelligence | Saby</title>
        <meta
          name="description"
          content="Data-driven personalization, demand forecasting, and supply optimization. Help consumer brands make smarter business decisions and boost customer experience."
        />
      </Head>

      <Navigation
        isDark={isDark}
        toggleTheme={toggleTheme}
        currentPage="/product/retail-commerce"
      />

      <UseCaseTemplate
        isDark={isDark}
        accentColor="purple"
        // Hero Section
        heroIcon={<ShoppingBag className="w-12 h-12" />}
        heroTitle="Retail, Commerce & Consumer Intelligence"
        heroSubtitle="Make smarter business decisions and boost customer experience with data-driven insights"
        heroImagePlaceholder="Omnichannel Retail Dashboard - Customer journey tracking across online and in-store touchpoints"
        // Overview Section
        overviewTitle="Intelligent Retail Solutions"
        overviewDescription="Transform customer data into personalized experiences, optimize inventory with demand forecasting, and streamline supply chains for maximum efficiency and profitability."
        overviewImagePlaceholder="Customer 360 View - Unified customer data from e-commerce, POS, CRM, and loyalty programs"
        benefits={[
          {
            icon: <Sparkles className="w-8 h-8" />,
            title: "Personalization",
            description:
              "AI-powered product recommendations and personalized customer experiences.",
          },
          {
            icon: <TrendingUp className="w-8 h-8" />,
            title: "Demand Forecasting",
            description:
              "Predict customer demand and optimize inventory levels across channels.",
          },
          {
            icon: <Package className="w-8 h-8" />,
            title: "Supply Chain Optimization",
            description:
              "Streamline logistics, reduce costs, and improve delivery times.",
          },
          {
            icon: <Users className="w-8 h-8" />,
            title: "Customer Analytics",
            description:
              "Deep insights into customer behavior, preferences, and lifetime value.",
          },
        ]}
        useCasesImagePlaceholder="AI Recommendation Engine - Personalization algorithm showing product suggestions and customer segments"
        useCases={[
          {
            icon: <Target className="w-6 h-6" />,
            title: "Customer Segmentation",
            description:
              "Segment customers by behavior, preferences, and value to deliver targeted marketing campaigns and personalized experiences.",
          },
          {
            icon: <ShoppingCart className="w-6 h-6" />,
            title: "Basket Analysis",
            description:
              "Analyze purchase patterns to optimize product placement, cross-selling, and promotional strategies.",
          },
          {
            icon: <BarChart3 className="w-6 h-6" />,
            title: "Inventory Optimization",
            description:
              "Balance stock levels across locations, reduce overstock and stockouts, and maximize inventory turnover.",
          },
          {
            icon: <Heart className="w-6 h-6" />,
            title: "Customer Retention",
            description:
              "Predict churn, identify at-risk customers, and implement retention strategies to maximize lifetime value.",
          },
        ]}
        // How It Works
        steps={[
          {
            number: 1,
            title: "Unify Customer Data",
            description:
              "Integrate data from e-commerce platforms, POS systems, CRM, marketing tools, and social media.",
          },
          {
            number: 2,
            title: "AI-Powered Insights",
            description:
              "Apply machine learning to understand customer behavior, forecast demand, and optimize operations.",
          },
          {
            number: 3,
            title: "Drive Growth",
            description:
              "Deliver personalized experiences, optimize inventory, and increase sales with actionable insights.",
          },
        ]}
        capabilitiesImagePlaceholder="Inventory Optimization System - Real-time stock management and demand forecasting across locations"
        capabilities={[
          {
            icon: <Database className="w-6 h-6" />,
            title: "Omnichannel Integration",
            description:
              "Unify data from online, in-store, mobile, and marketplace channels.",
          },
          {
            icon: <Sparkles className="w-6 h-6" />,
            title: "Recommendation Engine",
            description:
              "AI-powered product recommendations that increase conversion and AOV.",
          },
          {
            icon: <TrendingUp className="w-6 h-6" />,
            title: "Predictive Analytics",
            description:
              "Forecast sales, demand, and customer behavior with machine learning.",
          },
          {
            icon: <Globe className="w-6 h-6" />,
            title: "Multi-Region Support",
            description:
              "Manage inventory, pricing, and promotions across multiple regions and currencies.",
          },
          {
            icon: <Zap className="w-6 h-6" />,
            title: "Real-Time Dashboards",
            description:
              "Monitor sales, inventory, and customer metrics in real-time.",
          },
          {
            icon: <Package className="w-6 h-6" />,
            title: "Supply Chain Visibility",
            description:
              "Track shipments, monitor supplier performance, and optimize logistics.",
          },
        ]}
        // Stats
        stats={[
          {
            value: "35%",
            label: "Sales Increase",
            description: "With personalization",
          },
          {
            value: "50%",
            label: "Inventory Reduction",
            description: "Optimized stock",
          },
          {
            value: "4x",
            label: "Customer Retention",
            description: "Improved loyalty",
          },
          {
            value: "92%",
            label: "Forecast Accuracy",
            description: "Demand prediction",
          },
        ]}
        // CTA
        ctaTitle="Ready to Transform Your Retail Business?"
        ctaDescription="Join leading retail and e-commerce brands using Saby to deliver exceptional customer experiences and drive profitable growth."
      />

      <Footer isDark={isDark} />
    </>
  );
}
