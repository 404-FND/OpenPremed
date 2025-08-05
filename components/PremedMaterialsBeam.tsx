"use client";

import { Marquee } from "@/components/magicui/marquee";

const resources = [
  "MCAT Biology",
  "MCAT Chemistry", 
  "MCAT Physics",
  "MCAT Psychology",
  "Practice Tests",
  "Study Guides",
  "Anki Decks",
  "Video Lectures",
  "Free Resources",
  "Community Support",
  "Open Source",
  "Transparent",
  "High Quality",
  "Expert Curated",
  "Student Focused",
  "Biochemistry",
  "Sociology",
  "CARS Section",
  "Flashcards",
  "Mock Exams"
];

const firstRow = resources.slice(0, 5);
const secondRow = resources.slice(5, 10);
const thirdRow = resources.slice(10, 15);
const fourthRow = resources.slice(15, 20);

export function PremedMaterialsBeam() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="flex flex-col justify-center h-full">
        <Marquee pauseOnHover className="[--duration:25s]">
          {firstRow.map((resource, idx) => (
            <span key={idx} className="mx-8 text-sm font-medium text-gray-600 dark:text-gray-400">
              {resource}
            </span>
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:30s]">
          {secondRow.map((resource, idx) => (
            <span key={idx} className="mx-8 text-sm font-medium text-gray-600 dark:text-gray-400">
              {resource}
            </span>
          ))}
        </Marquee>
        <Marquee pauseOnHover className="[--duration:35s]">
          {thirdRow.map((resource, idx) => (
            <span key={idx} className="mx-8 text-sm font-medium text-gray-600 dark:text-gray-400">
              {resource}
            </span>
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:40s]">
          {fourthRow.map((resource, idx) => (
            <span key={idx} className="mx-8 text-sm font-medium text-gray-600 dark:text-gray-400">
              {resource}
            </span>
          ))}
        </Marquee>
      </div>
    </div>
  );
} 