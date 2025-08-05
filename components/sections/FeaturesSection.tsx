"use client";

import { Marquee } from "@/components/magicui/marquee";
import { AnimatedFeatureButton } from "@/components/AnimatedFeatureButton";

const features = [
  "📚 Anki Decks",
  "📝 MCAT Study Guides", 
  "💯 AAMC Score Converters",
  "📚 Psych Soc Docs",
  "💬 Premed Discord",
  "🔗 Open Source",
  "🔍 Transparent",
];

const firstRow = features.slice(0, 3);
const secondRow = features.slice(3, 6);

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-4 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6">
            Everything You Need
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Comprehensive resources designed to help you excel in your premed journey
          </p>
        </div>
        
        <div className="relative overflow-hidden">
          <Marquee pauseOnHover className="[--duration:30s] mb-8">
            {firstRow.map((feature, idx) => (
              <div key={idx} className="mx-8">
                <AnimatedFeatureButton text={feature} />
              </div>
            ))}
          </Marquee>
          
          <Marquee reverse pauseOnHover className="[--duration:35s] mb-8">
            {secondRow.map((feature, idx) => (
              <div key={idx} className="mx-8">
                <AnimatedFeatureButton text={feature} />
              </div>
            ))}
          </Marquee>
          
          {/* <Marquee pauseOnHover className="[--duration:40s] mb-8">
            {thirdRow.map((feature, idx) => (
              <div key={idx} className="mx-8">
                <AnimatedFeatureButton text={feature} />
              </div>
            ))}
          </Marquee> */}
{/*           
          <Marquee reverse pauseOnHover className="[--duration:45s]">
            {fourthRow.map((feature, idx) => (
              <div key={idx} className="mx-8">
                <AnimatedFeatureButton text={feature} />
              </div>
            ))}
          </Marquee> */}
        </div>
      </div>
    </section>
  );
} 