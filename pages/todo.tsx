import React from "react";
import Head from "next/head";
import { useTheme } from "../src/contexts/ThemeContext";
import Navigation from "../src/components/Navigation";
import Footer from "../src/components/Footer";

type Status = "next" | "in-progress" | "done";

interface TodoItem {
  title: string;
  description: string;
  status: Status;
  owner?: string;
}

interface TodoSection {
  title: string;
  subtitle: string;
  items: TodoItem[];
}

const statusTokens: Record<
  Status,
  { label: string; classes: string; dot: string }
> = {
  "in-progress": {
    label: "In progress",
    classes:
      "bg-amber-500/10 text-amber-600 dark:text-amber-300 border border-amber-500/30",
    dot: "bg-amber-500",
  },
  next: {
    label: "Next up",
    classes:
      "bg-blue-500/10 text-blue-600 dark:text-blue-300 border border-blue-500/30",
    dot: "bg-blue-500",
  },
  done: {
    label: "Shipped",
    classes:
      "bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border border-emerald-500/30",
    dot: "bg-emerald-500",
  },
};

const sections: TodoSection[] = [
  {
    title: "Visual System & Layout",
    subtitle: "Tighten global framing before polishing individual pages.",
    items: [
      {
        title: "Create shared landing layout",
        description:
          "Abstract repeated Navigation/Footer pairing into a layout component with consistent padding, hero spacing, and section rhythm.",
        status: "in-progress",
      },
      {
        title: "Define design tokens in Tailwind",
        description:
          "Extend tailwind.config with brand colors, typography ramp, container widths, and reusable gradient presets.",
        status: "next",
      },
      {
        title: "Document typography scale",
        description:
          "Lock headline/body sizes and line-heights so hero, explore, and resources pages feel cohesive.",
        status: "next",
      },
    ],
  },
  {
    title: "Hero & Imagery",
    subtitle: "Replace placeholders with purposeful art direction.",
    items: [
      {
        title: "Commission hero illustration set",
        description:
          "Swap emojis/placeholders with bespoke SVG/3D renders that reflect Saby’s analytics narrative.",
        status: "next",
      },
      {
        title: "Optimize media delivery",
        description:
          "Move remote Pexels assets into /public, generate multiple sizes, and use blur placeholders via next/image.",
        status: "next",
      },
      {
        title: "Consolidate animated backgrounds",
        description:
          "Choose one background effect (or orb layer) per page to reduce visual noise and GPU load.",
        status: "in-progress",
      },
    ],
  },
  {
    title: "Content Blocks & Components",
    subtitle: "Break 500+ line pages into composable building blocks.",
    items: [
      {
        title: "Resource card component",
        description:
          "Convert repeated list rows in resources/explore pages into a1 component with props for title, meta, and link targets.",
        status: "next",
      },
      {
        title: "Industry use-case slices",
        description:
          "Move sector-specific grids (Financial, Energy, etc.) into JSON + mapper to keep pages DRY.",
        status: "next",
      },
      {
        title: "Accessibility sweep",
        description:
          "Introduce semantic headings, <dl> for stats, focus-visible styles, and keyboard-friendly dropdown behavior.",
        status: "next",
      },
    ],
  },
  {
    title: "CSS & Performance",
    subtitle: "Eliminate anti-patterns before scaling traffic.",
    items: [
      {
        title: "Replace inline data-URI backgrounds",
        description:
          "Move SVG patterns into CSS modules or utility classes so they can be cached instead of repeated in markup.",
        status: "next",
      },
      {
        title: "Audit dark-mode contrast",
        description:
          "Ensure WCAG AA contrast for text on gradients, especially cards using gray-on-gray palettes.",
        status: "in-progress",
      },
      {
        title: "Bundle size guardrails",
        description:
          "Enable Next.js bundle analyzer and target <150kb per route by trimming lucide icon imports and lazy-loading heavy sections.",
        status: "next",
      },
    ],
  },
  {
    title: "Collaboration & Git",
    subtitle: "Make it easy for the community to contribute safely.",
    items: [
      {
        title: "Adopt trunk-based flow",
        description:
          "Document `main` protection, PR template, preview deployments, and required reviews for UI-affecting changes.",
        status: "in-progress",
        owner: "@designops",
      },
      {
        title: "Starter issues & labels",
        description:
          "Seed GitHub with `design`, `good-first-issue`, and `needs-mock` labels plus screenshots for each ticket.",
        status: "next",
      },
      {
        title: "Visual regression tests",
        description:
          "Introduce Chromatic or Playwright screenshots so collaborators can verify CSS changes pre-merge.",
        status: "next",
      },
    ],
  },
];

export default function TodoPage() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <>
      <Head>
        <title>Saby Landing Revamp – Todo Plan</title>
        <meta
          name="description"
          content="Shared checklist for elevating the Saby landing experience."
        />
      </Head>
      <div
        className={`min-h-screen ${
          isDark ? "bg-gray-950 text-white" : "bg-slate-50 text-gray-900"
        } transition-colors duration-300`}>
        <Navigation
          isDark={isDark}
          toggleTheme={toggleTheme}
          currentPage="/todo"
        />
        <main className="relative z-10 pt-24 pb-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <header className="text-center space-y-4">
              <p className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-black text-white shadow-lg">
                Landing Revamp Checklist
              </p>
              <h1 className="text-4xl md:text-5xl font-bold">
                Todo plan before polishing the landing page
              </h1>
              <p
                className={`text-lg md:text-xl max-w-3xl mx-auto ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}>
                Aligning on design, CSS, imagery, and collaboration workflows so
                contributors can ship confidently.
              </p>
            </header>

            {sections.map((section) => (
              <section
                key={section.title}
                className={`rounded-3xl border ${
                  isDark
                    ? "border-gray-800 bg-gray-900/70"
                    : "border-white bg-white"
                } shadow-xl shadow-black/5 p-8 space-y-8`}>
                <div className="space-y-2">
                  <h2 className="text-2xl font-semibold">{section.title}</h2>
                  <p
                    className={`${
                      isDark ? "text-gray-400" : "text-gray-600"
                    } text-base`}>
                    {section.subtitle}
                  </p>
                </div>

                <div className="space-y-4">
                  {section.items.map((item) => {
                    const token = statusTokens[item.status];
                    return (
                      <div
                        key={item.title}
                        className={`rounded-2xl border ${
                          isDark
                            ? "border-gray-800 bg-gray-900"
                            : "border-gray-100 bg-gray-50"
                        } p-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between`}>
                        <div className="space-y-1 max-w-3xl">
                          <div className="flex items-center gap-3 flex-wrap">
                            <h3 className="text-lg font-medium">
                              {item.title}
                            </h3>
                            {item.owner && (
                              <span
                                className={`text-sm px-2.5 py-0.5 rounded-full border ${
                                  isDark
                                    ? "border-gray-700 text-gray-300"
                                    : "border-gray-200 text-gray-600"
                                }`}>
                                {item.owner}
                              </span>
                            )}
                          </div>
                          <p
                            className={`text-sm ${
                              isDark ? "text-gray-400" : "text-gray-600"
                            }`}>
                            {item.description}
                          </p>
                        </div>
                        <span
                          className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium ${token.classes}`}>
                          <span
                            className={`w-2 h-2 rounded-full ${token.dot}`}></span>
                          {token.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        </main>
        <Footer isDark={isDark} />
      </div>
    </>
  );
}
