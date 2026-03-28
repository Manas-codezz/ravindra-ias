'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CourseCard from '@/components/CourseCard';
import { Filter } from 'lucide-react';

export default function CoursesPage() {
  const [activeFilter, setActiveFilter] = useState('all');

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
      category: 'beginner',
      stage: 'foundation',
    },
    {
      title: 'Prelims Intensive',
      duration: '6 Months',
      features: [
        'Prelims Focused Study Material',
        'Daily Practice Questions',
        'Mock Test Analysis',
        'Doubt Clearing Sessions',
      ],
      price: '₹65,000',
      category: 'beginner',
      stage: 'prelims',
    },
    {
      title: 'Prelims + Mains Comprehensive',
      duration: '18 Months',
      features: [
        'Comprehensive Study Material',
        'Answer Writing Practice',
        'Interview Preparation',
        'AI-Powered Performance Analysis',
      ],
      price: '₹1,20,000',
      popular: true,
      category: 'advanced',
      stage: 'mains',
    },
    {
      title: 'Advanced Mains Program',
      duration: '10 Months',
      features: [
        'Advanced Answer Writing',
        'One-on-One Mentorship',
        'Mock Interviews',
        'Personalized Study Plan',
      ],
      price: '₹95,000',
      category: 'advanced',
      stage: 'mains',
    },
    {
      title: 'Interview Preparation',
      duration: '3 Months',
      features: [
        'Mock Interview Sessions',
        'Personality Development',
        'Current Affairs Mastery',
        'Expert Panel Guidance',
      ],
      price: '₹45,000',
      category: 'advanced',
      stage: 'interview',
    },
    {
      title: 'Optional Subject - History',
      duration: '8 Months',
      features: [
        'Complete Syllabus Coverage',
        'Answer Writing Practice',
        'Previous Year Analysis',
        'Subject Expert Guidance',
      ],
      price: '₹55,000',
      category: 'beginner',
      stage: 'mains',
    },
  ];

  const filters = [
    { id: 'all', label: 'All Courses' },
    { id: 'prelims', label: 'Prelims' },
    { id: 'mains', label: 'Mains' },
    { id: 'interview', label: 'Interview' },
    { id: 'beginner', label: 'Beginner' },
    { id: 'advanced', label: 'Advanced' },
  ];

  const filteredCourses =
    activeFilter === 'all'
      ? courses
      : courses.filter(
          (course) =>
            course.stage === activeFilter || course.category === activeFilter
        );

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="text-gradient">Courses</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Comprehensive programs designed to transform your UPSC preparation journey
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-12"
          >
            <div className="flex items-center space-x-2 text-gray-400">
              <Filter className="w-5 h-5" />
              <span className="font-medium">Filter by:</span>
            </div>
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-[#6366F1] to-[#22D3EE] text-white'
                    : 'glass text-gray-400 hover:text-white glass-hover border border-white/10'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course, index) => (
              <CourseCard key={index} {...course} index={index} />
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">
                No courses found for this filter.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
