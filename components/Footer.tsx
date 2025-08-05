"use client";

import Link from "next/link";
import { Github, Twitter, MessageCircle, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="text-2xl font-bold text-black dark:text-white">
              OpenPremed
            </Link>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-md">
              Making premed resources free, open, and transparent
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              {/* <a href="#" className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                <Twitter className="w-5 h-5" />
              </a> */}
              {/* <a href="#" className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                <Mail className="w-5 h-5" />
              </a> */}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © 2025 OpenPremed. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {/* <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link> */}
              {/* <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white text-sm transition-colors">
                Terms of Service
              </Link> */}
              <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white text-sm transition-colors">
                Open Source
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 