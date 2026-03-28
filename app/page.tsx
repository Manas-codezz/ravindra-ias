'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Users, Target, PenTool, Brain, ArrowRight, TrendingUp } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import CourseCard from '@/components/CourseCard';
import FeatureCard from '@/components/FeatureCard';
import TestimonialCard from '@/components/TestimonialCard';

export default function Home() {
  const courses = [
    {
      title: 'Foundation Course',
      duration: '12 Months',
      features: [
        'Complete NCERT Coverage',
        'Weekly Test Series',
        'Current Affairs Updates',
        'Personal Mentor Assignment',
      ],
      price: '₹80,000',
    },
    {
      title: 'Prelims + Mains',
      duration: '18 Months',
      features: [
        'Comprehensive Study Material',
        'Answer Writing Practice',
        'Interview Preparation',
        'AI-Powered Performance Analysis',
      ],
      price: '₹1,20,000',
      popular: true,
    },
    {
      title: 'Advanced Mains',
      duration: '10 Months',
      features: [
        'Advanced Answer Writing',
        'One-on-One Mentorship',
        'Mock Interviews',
        'Personalized Study Plan',
      ],
      price: '₹95,000',
    },
  ];

  const features = [
    {
      icon: Users,
      title: 'Expert Faculty',
      description:
        'Learn from IAS officers and subject matter experts with decades of experience in UPSC coaching.',
    },
    {
      icon: Target,
      title: 'Personalized Mentorship',
      description:
        'One-on-one guidance from mentors who understand your strengths and help overcome weaknesses.',
    },
    {
      icon: PenTool,
      title: 'Answer Writing',
      description:
        'Master the art of answer writing with daily practice, evaluation, and personalized feedback.',
    },
    {
      icon: Brain,
      title: 'AI Analysis',
      description:
        'Get AI-powered insights on your performance, weak areas, and personalized improvement strategies.',
    },
  ];

  const testimonials = [
    {
      name: 'Aditya Kumar',
      role: 'AIR 45, 2023',
      content:
        'The structured approach and consistent guidance helped me stay focused. The answer writing sessions were particularly transformative.',
      rating: 5,
    },
    {
      name: 'Sneha Reddy',
      role: 'AIR 78, 2023',
      content:
        'The faculty is exceptional and the study material is comprehensive. The mock interview sessions gave me confidence.',
      rating: 5,
    },
    {
      name: 'Vikram Singh',
      role: 'AIR 112, 2022',
      content:
        'Best decision I made was joining Ravindra IAS. The mentorship program is unmatched and really makes a difference.',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />

      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Our <span className="text-gradient">Premium Courses</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Choose the perfect course tailored to your UPSC preparation stage and goals
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <CourseCard key={index} {...course} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/courses"
              className="inline-flex items-center px-8 py-4 glass rounded-xl text-white font-semibold glass-hover border border-white/20 group"
            >
              View All Courses
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#6366F1]/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Why <span className="text-gradient">Choose Us</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Our unique methodology and comprehensive approach set us apart
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              What Our <span className="text-gradient">Students Say</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Real stories from students who achieved their dreams with us
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 sm:p-12 text-center border border-white/10 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#6366F1]/20 to-[#22D3EE]/20" />
            <div className="relative">
              <TrendingUp className="w-16 h-16 mx-auto mb-6 text-[#FACC15]" />
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Ready to Start Your <span className="text-gradient">Success Story?</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                Join thousands of successful aspirants who achieved their IAS dreams with our guidance
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#6366F1] to-[#22D3EE] rounded-xl text-white font-semibold hover:scale-105 transition-transform glow group"
                >
                  Enroll Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/courses"
                  className="inline-flex items-center justify-center px-8 py-4 glass rounded-xl text-white font-semibold glass-hover border border-white/20"
                >
                  Explore Courses
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
