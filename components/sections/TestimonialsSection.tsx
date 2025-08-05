"use client";

import { Marquee } from "@/components/magicui/marquee";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Medical Student",
    university: "Harvard Medical School",
    content: "OpenPremed was a game-changer for my MCAT prep. The free resources and community support helped me achieve a 520 score!",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Premed Student",
    university: "UC Berkeley",
    content: "The practice questions and study materials are incredibly comprehensive. I love how everything is free and accessible.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Medical Student",
    university: "Stanford Medical School",
    content: "The community aspect is amazing. I found my study group here and we all got into medical school together!",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 5
  },
  {
    name: "David Kim",
    role: "Premed Student",
    university: "UCLA",
    content: "Finally, a platform that makes quality MCAT prep accessible to everyone. The transparency is refreshing.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 5
  },
  {
    name: "Jessica Williams",
    role: "Medical Student",
    university: "Johns Hopkins",
    content: "The free resources here are better than some paid programs I've tried. Highly recommend to all premed students.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    rating: 5
  },
  {
    name: "Alex Thompson",
    role: "Premed Student",
    university: "MIT",
    content: "OpenPremed's approach to making education accessible is exactly what the premed community needed.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    rating: 5
  }
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
  <div className="relative w-80 h-full cursor-pointer overflow-hidden rounded-xl border p-6 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-gray-300 dark:hover:border-gray-700 transform-gpu transition-all duration-300 ease-out hover:scale-105">
    <div className="flex flex-col h-full">
      {/* Rating */}
      <div className="flex mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Content */}
      <blockquote className="flex-1 text-gray-700 dark:text-gray-300 mb-4">
        "{testimonial.content}"
      </blockquote>

      {/* Author */}
      <div className="flex items-center">
        <img
          className="w-12 h-12 rounded-full mr-4"
          src={testimonial.avatar}
          alt={testimonial.name}
        />
        <div>
          <div className="font-semibold text-gray-900 dark:text-white">
            {testimonial.name}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            {testimonial.role} • {testimonial.university}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default function TestimonialsSection() {
  return (
    <section id="community" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6">
            Trusted by Premeds
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            See what our community has to say about their experience with OpenPremed!
          </p>
        </div>

        <div className="relative">
          <Marquee pauseOnHover className="[--duration:30s]">
            {testimonials.map((testimonial, idx) => (
              <TestimonialCard key={idx} testimonial={testimonial} />
            ))}
          </Marquee>
          
          <Marquee reverse pauseOnHover className="[--duration:25s] mt-8">
            {testimonials.slice().reverse().map((testimonial, idx) => (
              <TestimonialCard key={idx} testimonial={testimonial} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
} 