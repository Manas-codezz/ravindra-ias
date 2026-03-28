'use client';

import { motion } from 'framer-motion';
import { Clock, BookOpen, Award, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface CourseCardProps {
  title: string;
  duration: string;
  features: string[];
  price: string;
  popular?: boolean;
  index?: number;
}

export default function CourseCard({
  title,
  duration,
  features,
  price,
  popular = false,
  index = 0,
}: CourseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative glass rounded-2xl p-6 border ${
        popular ? 'border-[#FACC15]' : 'border-white/10'
      } hover:border-[#6366F1] transition-all group`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <div className="bg-gradient-to-r from-[#FACC15] to-[#F59E0B] px-4 py-1 rounded-full text-sm font-semibold text-black">
            Most Popular
          </div>
        </div>
      )}

      <div className="mb-6">
        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#6366F1] to-[#22D3EE] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          <BookOpen className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <div className="flex items-center text-gray-400 text-sm">
          <Clock className="w-4 h-4 mr-2" />
          {duration}
        </div>
      </div>

      <ul className="space-y-3 mb-6">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start">
            <Award className="w-5 h-5 text-[#22D3EE] mr-2 flex-shrink-0 mt-0.5" />
            <span className="text-gray-300 text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      <div className="border-t border-white/10 pt-6">
        <div className="flex items-baseline justify-between mb-4">
          <div>
            <span className="text-3xl font-bold text-white">{price}</span>
            <span className="text-gray-400 text-sm ml-2">per year</span>
          </div>
        </div>
        <Link
          href="/contact"
          className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#6366F1] to-[#22D3EE] rounded-xl text-white font-semibold hover:scale-105 transition-transform group"
        >
          Enroll Now
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}
