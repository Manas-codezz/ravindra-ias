'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TopperCard from '@/components/TopperCard';
import { Award, Calendar } from 'lucide-react';

export default function ResultsPage() {
  const [selectedYear, setSelectedYear] = useState('2023');

  const toppers = [
    {
      name: 'Priya Sharma',
      rank: 'AIR 1',
      year: '2023',
      quote: 'The personalized mentorship and structured approach helped me achieve my dream. Forever grateful!',
    },
    {
      name: 'Rahul Verma',
      rank: 'AIR 3',
      year: '2023',
      quote: 'The answer writing sessions and mock tests were game-changers in my preparation journey.',
    },
    {
      name: 'Ananya Singh',
      rank: 'AIR 7',
      year: '2023',
      quote: 'Expert faculty and comprehensive study material made all the difference. Highly recommend!',
    },
    {
      name: 'Aditya Kumar',
      rank: 'AIR 12',
      year: '2023',
      quote: 'The AI-powered analysis helped me identify weak areas and improve systematically.',
    },
    {
      name: 'Sneha Reddy',
      rank: 'AIR 18',
      year: '2023',
      quote: 'One-on-one mentorship sessions gave me confidence and clear direction in my preparation.',
    },
    {
      name: 'Vikram Singh',
      rank: 'AIR 25',
      year: '2023',
      quote: 'The test series and regular feedback mechanism kept me on track throughout my journey.',
    },
    {
      name: 'Meera Patel',
      rank: 'AIR 4',
      year: '2022',
      quote: 'Exceptional faculty and comprehensive resources. The interview preparation was outstanding.',
    },
    {
      name: 'Arjun Mehta',
      rank: 'AIR 9',
      year: '2022',
      quote: 'The current affairs updates and test series were incredibly helpful for Prelims.',
    },
    {
      name: 'Kavya Iyer',
      rank: 'AIR 15',
      year: '2022',
      quote: 'The answer writing program transformed my Mains preparation completely.',
    },
  ];

  const years = ['2023', '2022', '2021'];

  const filteredToppers = toppers.filter((topper) => topper.year === selectedYear);

  const stats = [
    { label: 'Total Selections', value: '500+' },
    { label: 'AIR under 100', value: '50+' },
    { label: 'Success Rate', value: '78%' },
    { label: 'Average AIR', value: '145' },
  ];

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
            <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-6">
              <Award className="w-5 h-5 text-[#FACC15]" />
              <span className="text-sm font-medium">Hall of Fame</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="text-gradient">Success Stories</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Celebrating the achievements of our students who cracked UPSC
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-6 text-center border border-white/10"
              >
                <div className="text-3xl font-bold text-[#FACC15] mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-12"
          >
            <div className="flex items-center space-x-2 text-gray-400">
              <Calendar className="w-5 h-5" />
              <span className="font-medium">Filter by year:</span>
            </div>
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  selectedYear === year
                    ? 'bg-gradient-to-r from-[#6366F1] to-[#22D3EE] text-white'
                    : 'glass text-gray-400 hover:text-white glass-hover border border-white/10'
                }`}
              >
                {year}
              </button>
            ))}
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredToppers.map((topper, index) => (
              <TopperCard key={index} {...topper} index={index} />
            ))}
          </div>
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
              Be the Next <span className="text-gradient">Success Story</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Join our proven coaching methodology and achieve your IAS dreams
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#6366F1] to-[#22D3EE] rounded-xl text-white font-semibold hover:scale-105 transition-transform glow"
            >
              Start Your Journey
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
