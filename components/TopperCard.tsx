'use client';

import { motion } from 'framer-motion';
import { Trophy, Quote } from 'lucide-react';

interface TopperCardProps {
  name: string;
  rank: string;
  year: string;
  quote: string;
  image?: string;
  index?: number;
}

export default function TopperCard({
  name,
  rank,
  year,
  quote,
  image,
  index = 0,
}: TopperCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass rounded-2xl p-6 border border-white/10 hover:border-[#FACC15] transition-all group"
    >
      <div className="flex items-center space-x-4 mb-4">
        <div className="relative">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#6366F1] to-[#22D3EE] flex items-center justify-center">
            {image ? (
              <img
                src={image}
                alt={name}
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              <Trophy className="w-10 h-10 text-white" />
            )}
          </div>
          <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-[#FACC15] flex items-center justify-center border-2 border-[#0B0F1A]">
            <Trophy className="w-4 h-4 text-black" />
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">{name}</h3>
          <div className="text-2xl font-bold text-[#FACC15]">{rank}</div>
          <div className="text-sm text-gray-400">{year}</div>
        </div>
      </div>

      <div className="relative">
        <Quote className="w-8 h-8 text-[#6366F1]/30 mb-2" />
        <p className="text-gray-300 text-sm leading-relaxed pl-2 border-l-2 border-[#6366F1]">
          {quote}
        </p>
      </div>
    </motion.div>
  );
}
