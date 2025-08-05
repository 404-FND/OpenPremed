import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AvatarCircles } from "@/components/magicui/avatar-circles";

const contributors = [
  {
    name: "Sarah Johnson",
    role: "Founder & Lead Developer",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Michael Chen",
    role: "Content Lead",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Emily Rodriguez",
    role: "Community Manager",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "David Kim",
    role: "UI/UX Designer",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Jessica Williams",
    role: "Content Creator",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Alex Thompson",
    role: "Backend Developer",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Maria Garcia",
    role: "Data Scientist",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Ryan Park",
    role: "Mobile Developer",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 px-8 lg:px-16 bg-white dark:bg-black">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-black dark:text-white mb-8">
              About OpenPremed
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed">
              We&apos;re on a mission to democratize medical education
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 px-8 lg:px-16 bg-white dark:bg-black">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-12 text-center">
              Our Mission
            </h2>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                The journey to medical school is one of the most challenging and expensive educational paths a student can take. Traditional MCAT prep resources are often scattered across multiple platforms, locked behind expensive paywalls, and lack transparency in their development and quality assurance processes.
              </p>
              
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                At OpenPremed, we believe that access to high-quality medical school preparation resources should be universal, transparent, and community-driven. Our platform centralizes all premed materials in one comprehensive, free, and open-source ecosystem.
              </p>
              
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                We&apos;re committed to increasing transparency in every aspect of our platform. From our open-source codebase to our community-driven content creation process, we believe that transparency builds trust and fosters innovation. Every study material, practice question, and feature is developed with input from our global community of students, educators, and medical professionals.
              </p>
              
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                By centralizing resources and maintaining complete transparency, we&apos;re not just creating another study platform—we&apos;re building a movement that empowers students from all backgrounds to pursue their medical dreams without financial barriers.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-8 lg:px-16 bg-white dark:bg-black">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-12 text-center">
              Our Values
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8 border border-gray-200 dark:border-gray-800 rounded-lg">
                <h3 className="text-xl font-semibold text-black dark:text-white mb-4">
                  Accessibility
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We believe quality education should be free and accessible to everyone, regardless of their financial situation.
                </p>
              </div>
              
              <div className="text-center p-8 border border-gray-200 dark:border-gray-800 rounded-lg">
                <h3 className="text-xl font-semibold text-black dark:text-white mb-4">
                  Transparency
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Every aspect of our platform is open and transparent, from our development process to our content creation.
                </p>
              </div>
              
              <div className="text-center p-8 border border-gray-200 dark:border-gray-800 rounded-lg">
                <h3 className="text-xl font-semibold text-black dark:text-white mb-4">
                  Community
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We&apos;re built by the community, for the community. Your feedback and contributions drive everything we do.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contributors Section */}
        <section className="py-20 px-8 lg:px-16 bg-white dark:bg-black">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-12 text-center">
              Meet Our Contributors
            </h2>
            
            <div className="flex justify-center mb-12">
              <AvatarCircles
                avatarUrls={contributors.map(c => ({
                  imageUrl: c.avatar,
                  profileUrl: "#"
                }))}
                className="w-full max-w-2xl"
              />
            </div>
            
            <div className="text-center">
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Want to join our team of contributors?
              </p>
              <a
                href="https://github.com/openpremed/openpremed"
                className="inline-flex items-center px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
              >
                Contribute on GitHub
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 