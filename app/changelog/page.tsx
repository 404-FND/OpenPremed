import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Plus, Minus, Zap, Bug, Shield, Star } from "lucide-react";

const changelogEntries = [
  {
    version: "1.0.0",
    date: "2024-01-15",
    title: "Initial Release",
    type: "major",
    description: "The first public release of OpenPremed with core features.",
    changes: [
      { type: "added", text: "Comprehensive MCAT study materials" },
      { type: "added", text: "Community Discord server" },
      { type: "added", text: "Anki deck library" },
      { type: "added", text: "Practice test platform" },
      { type: "added", text: "Open source codebase" }
    ]
  },
  {
    version: "0.9.0",
    date: "2024-01-10",
    title: "Beta Release",
    type: "minor",
    description: "Beta version with improved features and bug fixes.",
    changes: [
      { type: "added", text: "User authentication system" },
      { type: "added", text: "Progress tracking" },
      { type: "improved", text: "Study material organization" },
      { type: "fixed", text: "Mobile responsiveness issues" },
      { type: "fixed", text: "Video loading performance" }
    ]
  },
  {
    version: "0.8.0",
    date: "2024-01-05",
    title: "Alpha Release",
    type: "minor",
    description: "Alpha version with core functionality.",
    changes: [
      { type: "added", text: "Basic study material library" },
      { type: "added", text: "Simple practice questions" },
      { type: "added", text: "Community forum" },
      { type: "improved", text: "Website performance" },
      { type: "fixed", text: "Navigation bugs" }
    ]
  },
  {
    version: "0.7.0",
    date: "2024-01-01",
    title: "Pre-Alpha",
    type: "patch",
    description: "Pre-alpha version with foundational features.",
    changes: [
      { type: "added", text: "Basic website structure" },
      { type: "added", text: "Landing page" },
      { type: "added", text: "About page" },
      { type: "added", text: "Resources page" },
      { type: "fixed", text: "Initial setup issues" }
    ]
  }
];

const getChangeIcon = (type: string) => {
  switch (type) {
    case "added":
      return <Plus className="w-4 h-4 text-green-500" />;
    case "improved":
      return <Zap className="w-4 h-4 text-blue-500" />;
    case "fixed":
      return <Bug className="w-4 h-4 text-red-500" />;
    case "removed":
      return <Minus className="w-4 h-4 text-gray-500" />;
    case "security":
      return <Shield className="w-4 h-4 text-purple-500" />;
    default:
      return <Star className="w-4 h-4 text-yellow-500" />;
  }
};

const getTypeColor = (type: string) => {
  switch (type) {
    case "major":
      return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
    case "minor":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
    case "patch":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
  }
};

export default function ChangelogPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-white dark:bg-black">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-black dark:text-white mb-8">
              Changelog
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed">
              Track our progress and see what&apos;s new
            </p>
          </div>
        </section>

        {/* Changelog Section */}
        <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {changelogEntries.map((entry, idx) => (
                <div key={idx} className="relative">
                  {/* Version line */}
                  <div className="flex items-center mb-6">
                    <div className="flex items-center space-x-4">
                      <span className="text-2xl font-bold text-black dark:text-white">
                        {entry.version}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(entry.type)}`}>
                        {entry.type}
                      </span>
                    </div>
                    <div className="flex-1 border-t border-gray-300 dark:border-gray-600 ml-4"></div>
                    <span className="text-gray-500 dark:text-gray-400 text-sm ml-4">
                      {new Date(entry.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
                    <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
                      {entry.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      {entry.description}
                    </p>

                    {/* Changes */}
                    <div className="space-y-3">
                      {entry.changes.map((change, changeIdx) => (
                        <div key={changeIdx} className="flex items-start space-x-3">
                          {getChangeIcon(change.type)}
                          <span className="text-gray-700 dark:text-gray-300">
                            {change.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Legend */}
            <div className="mt-16 p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-black dark:text-white mb-4">
                Change Types
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Plus className="w-4 h-4 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">Added - New features</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="w-4 h-4 text-blue-500" />
                  <span className="text-gray-700 dark:text-gray-300">Improved - Enhanced features</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Bug className="w-4 h-4 text-red-500" />
                  <span className="text-gray-700 dark:text-gray-300">Fixed - Bug fixes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Minus className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-700 dark:text-gray-300">Removed - Deprecated features</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 