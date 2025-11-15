import React, { useState } from "react";
import { Check, X, Info } from "lucide-react";
import { useRouter } from "next/router";
import Head from "next/head";
import { useTheme } from "../src/contexts/ThemeContext";
import Navigation from "../src/components/Navigation";
import Footer from "../src/components/Footer";

export default function PricingPage() {
  const router = useRouter();
  const { isDark, toggleTheme } = useTheme();
  const [memberCount, setMemberCount] = useState(1000);
  const [billingType, setBillingType] = useState<"monthly" | "yearly">(
    "yearly"
  );

  const plans = [
    {
      name: "STARTER",
      description: "For solo blogs & newsletters",
      price: 15,
      originalPrice: 15,
      launchPrice: 7,
      features: {
        staffUsers: 1,
        fileUploads: "5mb",
        whitelabelBranding: true,
        customDomain: true,
        internationalization: true,
        designSettings: true,
        marketplaceThemes: false,
        customThemes: false,
        registeredMembers: 1000,
        memberTagging: true,
        memberImportExport: true,
        communityComments: true,
      },
    },
    {
      name: "PUBLISHER",
      description: "For custom publications",
      price: 29,
      originalPrice: 29,
      launchPrice: 14,
      features: {
        staffUsers: 3,
        fileUploads: "100mb",
        whitelabelBranding: true,
        customDomain: true,
        internationalization: true,
        designSettings: true,
        marketplaceThemes: true,
        customThemes: true,
        registeredMembers: 1000,
        memberTagging: true,
        memberImportExport: true,
        communityComments: true,
      },
    },
    {
      name: "BUSINESS",
      description: "For teams scaling up",
      price: 199,
      originalPrice: 199,
      launchPrice: 99,
      features: {
        staffUsers: 15,
        fileUploads: "250mb",
        whitelabelBranding: true,
        customDomain: true,
        internationalization: true,
        designSettings: true,
        marketplaceThemes: true,
        customThemes: true,
        registeredMembers: 10000,
        memberTagging: true,
        memberImportExport: true,
        communityComments: true,
      },
    },
    {
      name: "CUSTOM",
      description: "For more complex needs",
      price: "Custom",
      originalPrice: "Custom",
      launchPrice: null,
      isCustom: true,
      features: {
        staffUsers: "Unlimited",
        fileUploads: "1gb",
        whitelabelBranding: true,
        customDomain: true,
        internationalization: true,
        designSettings: true,
        marketplaceThemes: true,
        customThemes: true,
        registeredMembers: "Unlimited",
        memberTagging: true,
        memberImportExport: true,
        communityComments: true,
      },
    },
  ];

  const featureRows = [
    { key: "staffUsers", label: "Staff users", category: "Website" },
    { key: "fileUploads", label: "File uploads", category: "Website" },
    {
      key: "whitelabelBranding",
      label: "Whitelabel branding",
      category: "Website",
    },
    { key: "customDomain", label: "Custom domain", category: "Website" },
    {
      key: "internationalization",
      label: "Internationalization",
      category: "Website",
    },
    { key: "designSettings", label: "Design settings", category: "Website" },
    {
      key: "marketplaceThemes",
      label: "Marketplace themes",
      category: "Website",
    },
    { key: "customThemes", label: "Custom themes", category: "Website" },
    {
      key: "registeredMembers",
      label: "Registered members",
      category: "Audience",
    },
    { key: "memberTagging", label: "Member tagging", category: "Audience" },
    {
      key: "memberImportExport",
      label: "Member import/export",
      category: "Audience",
    },
    {
      key: "communityComments",
      label: "Community comments",
      category: "Audience",
    },
  ];

  const renderFeatureValue = (value: any) => {
    if (typeof value === "boolean") {
      return value ? (
        <Check className="w-5 h-5 text-pink-500" />
      ) : (
        <X className="w-5 h-5 text-gray-400" />
      );
    }
    if (value === "Unlimited") {
      return <span className="text-pink-500 font-medium">Unlimited</span>;
    }
    return <span className="text-gray-900">{value}</span>;
  };

  return (
    <>
      <Head>
        <title>Pricing - Saby Analytics Platform</title>
        <meta
          name="description"
          content="Flexible pricing plans for every team size. Start free, scale as you grow."
        />
        <meta property="og:title" content="Saby Pricing - Choose Your Plan" />
      </Head>

      <div
        className={`min-h-screen ${
          isDark ? "bg-gray-900" : "bg-white"
        } transition-colors duration-300 relative overflow-hidden`}>
        {/* Patterned Background */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M0 0h40v40H0V0zm40 40h40v40H40V40zm0-40h2l-2 2V0zm0 4l4-4h2l-6 6V4zm0 4l8-8h2L40 10V8zm0 4L52 0h2L40 14v-2zm0 4L56 0h2L40 18v-2zm0 4L60 0h2L40 22v-2zm0 4L64 0h2L40 26v-2zm0 4L68 0h2L40 30v-2zm0 4L72 0h2L40 34v-2zm0 4L76 0h2L40 38v-2zm0 4L80 0v2L42 40h-2zm4 0L80 4v2L46 40h-2zm4 0L80 8v2L50 40h-2zm4 0l28-28v2L54 40h-2zm4 0l24-24v2L58 40h-2zm4 0l20-20v2L62 40h-2zm4 0l16-16v2L66 40h-2zm4 0l12-12v2L70 40h-2zm4 0l8-8v2l-6 6h-2zm4 0l4-4v2L78 40h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        <Navigation
          isDark={isDark}
          toggleTheme={toggleTheme}
          currentPage="/pricing"
        />

        {/* Main Content */}
        <div className="pt-16 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            {/* Header */}
            <div className="text-center mb-16">
              <div
                className={`text-sm font-medium ${
                  isDark ? "text-gray-400" : "text-gray-600"
                } mb-6`}>
                Saby plans & pricing
              </div>

              <h1
                className={`text-5xl md:text-6xl font-bold leading-tight mb-6 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}>
                Get started for free, then enjoy
                <br />
                50% off for 3 months
              </h1>

              <p
                className={`text-lg ${
                  isDark ? "text-gray-400" : "text-gray-600"
                } mb-12`}>
                No lock-in — upgrade, downgrade, or cancel anytime.
              </p>

              {/* Member Count Slider */}
              <div className="max-w-2xl mx-auto mb-12">
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`text-left ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}>
                    <div className="text-sm">Based on an audience up to</div>
                    <div className="text-lg font-semibold">
                      <span className="text-pink-500">
                        {memberCount.toLocaleString()}
                      </span>{" "}
                      members
                    </div>
                  </div>

                  <div className="flex bg-gray-100 rounded-lg p-1">
                    <button
                      onClick={() => setBillingType("monthly")}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                        billingType === "monthly"
                          ? "bg-white text-gray-900 shadow-sm"
                          : "text-gray-600 hover:text-gray-900"
                      }`}>
                      Monthly billing
                    </button>
                    <button
                      onClick={() => setBillingType("yearly")}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                        billingType === "yearly"
                          ? "bg-white text-gray-900 shadow-sm"
                          : "text-gray-600 hover:text-gray-900"
                      }`}>
                      Yearly billing
                    </button>
                  </div>
                </div>

                {/* Slider */}
                <div className="relative">
                  <input
                    type="range"
                    min="0"
                    max="100000"
                    value={memberCount}
                    onChange={(e) => setMemberCount(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-2">
                    <span>0</span>
                    <span>100k+</span>
                  </div>

                  {/* Member count indicator */}
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                    <div className="bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {memberCount.toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
              {plans.map((plan, index) => (
                <div
                  key={plan.name}
                  className={`rounded-2xl border ${
                    isDark
                      ? "bg-gray-800 border-gray-700"
                      : "bg-white border-gray-200"
                  } p-8 shadow-lg hover:shadow-xl transition-all duration-200 backdrop-blur-sm`}>
                  <div className="mb-6">
                    <h3
                      className={`text-lg font-bold ${
                        isDark ? "text-white" : "text-gray-900"
                      } mb-2`}>
                      {plan.name}
                    </h3>
                    <p
                      className={`text-sm ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}>
                      {plan.description}
                    </p>
                  </div>

                  <div className="mb-6">
                    {plan.isCustom ? (
                      <>
                        <div
                          className={`text-4xl font-bold ${
                            isDark ? "text-white" : "text-gray-900"
                          } mb-2`}>
                          $Custom
                        </div>
                        <div
                          className={`text-sm ${
                            isDark ? "text-gray-400" : "text-gray-600"
                          }`}>
                          Available on 1-3 year term
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex items-baseline mb-2">
                          <span
                            className={`text-4xl font-bold ${
                              isDark ? "text-white" : "text-gray-900"
                            }`}>
                            ${plan.price}
                          </span>
                          <span
                            className={`text-sm ${
                              isDark ? "text-gray-400" : "text-gray-600"
                            } ml-2`}>
                            USD / mo
                          </span>
                        </div>
                        <div
                          className={`text-sm ${
                            isDark ? "text-gray-400" : "text-gray-600"
                          } mb-4`}>
                          Billed yearly
                        </div>

                        {plan.launchPrice && (
                          <div className="bg-pink-100 text-pink-700 px-3 py-2 rounded-lg text-sm">
                            <div className="font-medium mb-1">Launch offer</div>
                            <div>${plan.launchPrice}/mo for first 3 months</div>
                          </div>
                        )}
                      </>
                    )}
                  </div>

                  <button
                    className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
                      index === 1
                        ? "bg-gray-900 text-white hover:bg-gray-800"
                        : isDark
                        ? "bg-gray-700 text-white hover:bg-gray-600"
                        : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                    }`}>
                    {plan.isCustom ? "Contact us" : "Choose plan"}
                  </button>
                </div>
              ))}
            </div>

            {/* Feature Comparison Table */}
            <div
              className={`rounded-2xl ${
                isDark ? "bg-gray-800" : "bg-white"
              } shadow-lg overflow-hidden backdrop-blur-sm border ${
                isDark ? "border-gray-700" : "border-gray-200"
              }`}>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr
                      className={`border-b ${
                        isDark ? "border-gray-700" : "border-gray-200"
                      }`}>
                      <th
                        className={`text-left py-4 px-6 font-medium ${
                          isDark ? "text-white" : "text-gray-900"
                        }`}>
                        Website
                      </th>
                      {plans.map((plan) => (
                        <th
                          key={plan.name}
                          className={`text-center py-4 px-6 font-medium ${
                            isDark ? "text-white" : "text-gray-900"
                          }`}>
                          {plan.name.charAt(0) +
                            plan.name.slice(1).toLowerCase()}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {featureRows
                      .filter((row) => row.category === "Website")
                      .map((row, index) => (
                        <tr
                          key={row.key}
                          className={`border-b ${
                            isDark ? "border-gray-700" : "border-gray-200"
                          } ${
                            index % 2 === 0
                              ? isDark
                                ? "bg-gray-750"
                                : "bg-gray-50"
                              : ""
                          }`}>
                          <td
                            className={`py-4 px-6 ${
                              isDark ? "text-gray-300" : "text-gray-700"
                            } flex items-center`}>
                            {row.label}
                            <Info className="w-4 h-4 ml-2 text-gray-400" />
                          </td>
                          {plans.map((plan) => (
                            <td
                              key={plan.name}
                              className="py-4 px-6 text-center">
                              {renderFeatureValue(
                                plan.features[
                                  row.key as keyof typeof plan.features
                                ]
                              )}
                            </td>
                          ))}
                        </tr>
                      ))}
                  </tbody>
                </table>

                <table className="w-full mt-8">
                  <thead>
                    <tr
                      className={`border-b ${
                        isDark ? "border-gray-700" : "border-gray-200"
                      }`}>
                      <th
                        className={`text-left py-4 px-6 font-medium ${
                          isDark ? "text-white" : "text-gray-900"
                        }`}>
                        Audience
                      </th>
                      {plans.map((plan) => (
                        <th
                          key={plan.name}
                          className={`text-center py-4 px-6 font-medium ${
                            isDark ? "text-white" : "text-gray-900"
                          }`}>
                          {plan.name.charAt(0) +
                            plan.name.slice(1).toLowerCase()}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {featureRows
                      .filter((row) => row.category === "Audience")
                      .map((row, index) => (
                        <tr
                          key={row.key}
                          className={`border-b ${
                            isDark ? "border-gray-700" : "border-gray-200"
                          } ${
                            index % 2 === 0
                              ? isDark
                                ? "bg-gray-750"
                                : "bg-gray-50"
                              : ""
                          }`}>
                          <td
                            className={`py-4 px-6 ${
                              isDark ? "text-gray-300" : "text-gray-700"
                            } flex items-center`}>
                            {row.label}
                            <Info className="w-4 h-4 ml-2 text-gray-400" />
                          </td>
                          {plans.map((plan) => (
                            <td
                              key={plan.name}
                              className="py-4 px-6 text-center">
                              {renderFeatureValue(
                                plan.features[
                                  row.key as keyof typeof plan.features
                                ]
                              )}
                            </td>
                          ))}
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .slider::-webkit-slider-thumb {
            appearance: none;
            height: 20px;
            width: 20px;
            border-radius: 50%;
            background: #ec4899;
            cursor: pointer;
            border: 2px solid white;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }

          .slider::-moz-range-thumb {
            height: 20px;
            width: 20px;
            border-radius: 50%;
            background: #ec4899;
            cursor: pointer;
            border: 2px solid white;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }
        `}</style>

        <Footer isDark={isDark} />
      </div>
    </>
  );
}
