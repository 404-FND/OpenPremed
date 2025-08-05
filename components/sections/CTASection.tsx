"use client";

import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-20 px-4 bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-black dark:text-white mb-6">
          Ready to Start Your Journey?
        </h2>
        
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Join thousands of students who are already using OpenPremed to achieve their medical school dreams
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link href="/resources">
            <button className="bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
              Check out your resources
            </button>
          </Link>
          
          <div className="text-gray-600 dark:text-gray-400 text-sm">
            <div className="font-medium">100% Free • No Credit Card Required</div>
            {/* <div className="opacity-80">Join 50,000+ students worldwide</div> */}
          </div>
        </div>
      </div>
    </section>
  );
} 