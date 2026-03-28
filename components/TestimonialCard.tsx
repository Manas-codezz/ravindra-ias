'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  index?: number;
}

export default function TestimonialCard({
  name,
  role,
  content,
  rating,
  index = 0,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass rounded-2xl p-6 border border-white/10 hover:border-[#22D3EE] transition-all h-full"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex space-x-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${
                i < rating
                  ? 'text-[#FACC15] fill-[#FACC15]'
                  : 'text-gray-600'
              }`}
            />
          ))}
        </div>
        <Quote className="w-8 h-8 text-[#6366F1]/30" />
      </div>

      <p className="text-gray-300 mb-6 leading-relaxed">{content}</p>

      <div className="border-t border-white/10 pt-4">
        <div className="font-semibold text-white">{name}</div>
        <div className="text-sm text-gray-400">{role}</div>
      </div>
    </motion.div>
  );
}
