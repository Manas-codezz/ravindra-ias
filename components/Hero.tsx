'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Sparkles, Trophy, Users } from 'lucide-react';

export default function Hero() {
  const toppers = [
    { name: 'Priya Sharma', rank: 'AIR 1', year: '2023' },
    { name: 'Rahul Verma', rank: 'AIR 3', year: '2023' },
    { name: 'Ananya Singh', rank: 'AIR 7', year: '2023' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/20 via-transparent to-[#22D3EE]/20" />

      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#6366F1] rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#22D3EE] rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4 text-[#FACC15]" />
              <span className="text-sm font-medium">India's #1 UPSC Institute</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Not Just Coaching.{' '}
              <span className="text-gradient">
                A Rank-Generating System.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-400 mb-8 leading-relaxed">
              Join 10,000+ aspirants who transformed their UPSC journey with our proven methodology, expert mentorship, and AI-powered analysis.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/courses"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#6366F1] to-[#22D3EE] rounded-xl text-white font-semibold hover:scale-105 transition-transform glow group"
              >
                Explore Courses
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/predictor"
                className="inline-flex items-center justify-center px-8 py-4 glass rounded-xl text-white font-semibold glass-hover border border-white/20"
              >
                Try Rank Predictor
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#FACC15] mb-1">500+</div>
                <div className="text-sm text-gray-400">Selections</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#FACC15] mb-1">50+</div>
                <div className="text-sm text-gray-400">AIR under 100</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#FACC15] mb-1">10K+</div>
                <div className="text-sm text-gray-400">Students</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full h-[600px]">
              {toppers.map((topper, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.5 + index * 0.2,
                    duration: 0.6,
                  }}
                  className={`absolute glass rounded-2xl p-6 border border-white/20 ${
                    index === 0
                      ? 'top-0 left-0 w-72 animate-float'
                      : index === 1
                      ? 'top-32 right-0 w-64 animate-float'
                      : 'bottom-0 left-12 w-68 animate-float'
                  }`}
                  style={{ animationDelay: `${index * 0.5}s` }}
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#6366F1] to-[#22D3EE] flex items-center justify-center">
                      <Trophy className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[#FACC15]">{topper.rank}</div>
                      <div className="text-sm text-gray-400">{topper.year}</div>
                    </div>
                  </div>
                  <div className="text-lg font-semibold text-white mb-2">{topper.name}</div>
                  <p className="text-sm text-gray-400">
                    "The mentorship and resources were exceptional. Grateful to the entire team!"
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
