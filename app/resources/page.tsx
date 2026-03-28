'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BookOpen, FileText, ClipboardList, Download, Search, Sparkles } from 'lucide-react';

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const resources = [
    {
      title: 'Indian Polity Complete Notes',
      type: 'Notes',
      category: 'notes',
      free: true,
      description: 'Comprehensive notes covering entire Indian Polity syllabus',
    },
    {
      title: 'Modern History Summary',
      type: 'Notes',
      category: 'notes',
      free: true,
      description: 'Concise summary of Modern Indian History for quick revision',
    },
    {
      title: 'Geography Mind Maps',
      type: 'Notes',
      category: 'notes',
      free: false,
      description: 'Visual mind maps for Indian and World Geography',
    },
    {
      title: 'January 2024 Current Affairs',
      type: 'Current Affairs',
      category: 'current-affairs',
      free: true,
      description: 'Monthly compilation of important current affairs with analysis',
    },
    {
      title: 'Weekly Current Affairs - Issue 45',
      type: 'Current Affairs',
      category: 'current-affairs',
      free: true,
      description: 'Weekly digest of important national and international events',
    },
    {
      title: 'Budget 2024 Analysis',
      type: 'Current Affairs',
      category: 'current-affairs',
      free: false,
      description: 'Detailed analysis of Union Budget 2024 for UPSC preparation',
    },
    {
      title: 'Prelims Test Series 2024',
      type: 'Test Series',
      category: 'test-series',
      free: false,
      description: '50 full-length mock tests with detailed solutions',
    },
    {
      title: 'Mains Answer Writing Test Series',
      type: 'Test Series',
      category: 'test-series',
      free: false,
      description: '40 answer writing tests with personalized evaluation',
    },
    {
      title: 'Free Prelims Mock Test',
      type: 'Test Series',
      category: 'test-series',
      free: true,
      description: 'Full-length mock test to assess your preparation level',
    },
  ];

  const categories = [
    { id: 'all', label: 'All Resources', icon: BookOpen },
    { id: 'notes', label: 'Notes', icon: FileText },
    { id: 'current-affairs', label: 'Current Affairs', icon: Sparkles },
    { id: 'test-series', label: 'Test Series', icon: ClipboardList },
  ];

  const filteredResources = resources.filter((resource) => {
    const matchesCategory =
      activeCategory === 'all' || resource.category === activeCategory;
    const matchesSearch = resource.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
              Study <span className="text-gradient">Resources</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Access comprehensive study materials, current affairs, and test series
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative max-w-2xl mx-auto mb-12"
          >
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search resources..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 glass rounded-xl border border-white/10 focus:border-[#6366F1] transition-all outline-none text-white placeholder-gray-400"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-[#6366F1] to-[#22D3EE] text-white'
                      : 'glass text-gray-400 hover:text-white glass-hover border border-white/10'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{category.label}</span>
                </button>
              );
            })}
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="glass rounded-2xl p-6 border border-white/10 hover:border-[#6366F1] transition-all group"
              >
                {resource.free && (
                  <div className="inline-block mb-4">
                    <span className="px-3 py-1 bg-[#22D3EE]/20 text-[#22D3EE] rounded-full text-xs font-semibold">
                      Free
                    </span>
                  </div>
                )}
                <h3 className="text-xl font-bold text-white mb-2">
                  {resource.title}
                </h3>
                <p className="text-sm text-[#FACC15] mb-3">{resource.type}</p>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {resource.description}
                </p>
                <button className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-[#6366F1] to-[#22D3EE] rounded-lg text-white font-semibold hover:scale-105 transition-transform group">
                  <Download className="w-5 h-5" />
                  <span>{resource.free ? 'Download Free' : 'Get Access'}</span>
                </button>
              </motion.div>
            ))}
          </div>

          {filteredResources.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">
                No resources found. Try a different search or category.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#6366F1]/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 sm:p-12 text-center border border-white/10"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Get Full Access to <span className="text-gradient">All Resources</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Enroll in our courses to unlock premium study materials and test series
            </p>
            <a
              href="/courses"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#6366F1] to-[#22D3EE] rounded-xl text-white font-semibold hover:scale-105 transition-transform glow"
            >
              View Courses
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
