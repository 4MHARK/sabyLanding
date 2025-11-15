import React, { useState } from "react";
import Head from "next/head";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useTheme } from "../src/contexts/ThemeContext";
import Navigation from "../src/components/Navigation";
import Footer from "../src/components/Footer";

export default function ContactPage() {
  const { isDark, toggleTheme } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    // TODO: Connect to actual API
    alert("Thank you! We will get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      <Head>
        <title>Contact Us - Saby Analytics</title>
        <meta
          name="description"
          content="Get in touch with the Saby Analytics team"
        />
      </Head>

      <div
        className={`min-h-screen transition-colors duration-300 ${
          isDark ? "bg-gray-900" : "bg-white"
        }`}>
        <Navigation
          isDark={isDark}
          toggleTheme={toggleTheme}
          currentPage="/contact"
        />

        <div className="pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-16">
              <h1
                className={`text-4xl md:text-5xl font-bold mb-4 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}>
                Get in Touch
              </h1>
              <p
                className={`text-lg ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}>
                Have a question? We'd love to hear from you. Send us a message
                and we'll respond as soon as possible.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <div className="lg:col-span-1">
                <div
                  className={`${
                    isDark ? "bg-gray-800" : "bg-gray-50"
                  } rounded-2xl p-8 border ${
                    isDark ? "border-gray-700" : "border-gray-200"
                  }`}>
                  <h2
                    className={`text-2xl font-semibold mb-6 ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}>
                    Contact Information
                  </h2>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <Mail
                        className={`w-6 h-6 mt-1 mr-4 ${
                          isDark ? "text-blue-400" : "text-blue-600"
                        }`}
                      />
                      <div>
                        <div
                          className={`font-medium mb-1 ${
                            isDark ? "text-white" : "text-gray-900"
                          }`}>
                          Email
                        </div>
                        <a
                          href="mailto:hello@saby.com"
                          className={`${
                            isDark ? "text-gray-400" : "text-gray-600"
                          } hover:text-blue-500`}>
                          hello@saby.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Phone
                        className={`w-6 h-6 mt-1 mr-4 ${
                          isDark ? "text-blue-400" : "text-blue-600"
                        }`}
                      />
                      <div>
                        <div
                          className={`font-medium mb-1 ${
                            isDark ? "text-white" : "text-gray-900"
                          }`}>
                          Phone
                        </div>
                        <a
                          href="tel:+1234567890"
                          className={`${
                            isDark ? "text-gray-400" : "text-gray-600"
                          } hover:text-blue-500`}>
                          +1 (234) 567-890
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <MapPin
                        className={`w-6 h-6 mt-1 mr-4 ${
                          isDark ? "text-blue-400" : "text-blue-600"
                        }`}
                      />
                      <div>
                        <div
                          className={`font-medium mb-1 ${
                            isDark ? "text-white" : "text-gray-900"
                          }`}>
                          Office
                        </div>
                        <p
                          className={`${
                            isDark ? "text-gray-400" : "text-gray-600"
                          }`}>
                          Lagos, Nigeria
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div
                  className={`${
                    isDark ? "bg-gray-800" : "bg-white"
                  } rounded-2xl p-8 border ${
                    isDark ? "border-gray-700" : "border-gray-200"
                  } shadow-lg`}>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          className={`block text-sm font-medium mb-2 ${
                            isDark ? "text-gray-300" : "text-gray-700"
                          }`}>
                          Your Name
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className={`w-full px-4 py-3 rounded-lg border ${
                            isDark
                              ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                              : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                          } focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors`}
                          placeholder="John Doe"
                          required
                        />
                      </div>

                      <div>
                        <label
                          className={`block text-sm font-medium mb-2 ${
                            isDark ? "text-gray-300" : "text-gray-700"
                          }`}>
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className={`w-full px-4 py-3 rounded-lg border ${
                            isDark
                              ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                              : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                          } focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors`}
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        className={`block text-sm font-medium mb-2 ${
                          isDark ? "text-gray-300" : "text-gray-700"
                        }`}>
                        Subject
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        className={`w-full px-4 py-3 rounded-lg border ${
                          isDark
                            ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                            : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                        } focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors`}
                        placeholder="How can we help?"
                        required
                      />
                    </div>

                    <div>
                      <label
                        className={`block text-sm font-medium mb-2 ${
                          isDark ? "text-gray-300" : "text-gray-700"
                        }`}>
                        Message
                      </label>
                      <textarea
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        rows={6}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          isDark
                            ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                            : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                        } focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors`}
                        placeholder="Tell us more about your inquiry..."
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-black hover:bg-gray-800 text-white px-6 py-4 rounded-lg font-medium transition-colors inline-flex items-center justify-center">
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer isDark={isDark} />
      </div>
    </>
  );
}

