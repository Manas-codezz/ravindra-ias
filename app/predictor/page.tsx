'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { TrendingUp, Sparkles, Award, Target } from 'lucide-react';

export default function PredictorPage() {
  const [prelimsMarks, setPrelimsMarks] = useState('');
  const [mainsMarks, setMainsMarks] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [prediction, setPrediction] = useState<any>(null);

  const subjects = [
    'History',
    'Geography',
    'Political Science',
    'Economics',
    'Public Administration',
    'Sociology',
  ];

  const calculatePrediction = () => {
    const prelims = parseInt(prelimsMarks) || 0;
    const mains = parseInt(mainsMarks) || 0;

    let rankRange = '';
    let recommendation = '';
    let category = '';

    const totalScore = prelims + mains;

    if (totalScore >= 950) {
      rankRange = '1 - 50';
      category = 'Outstanding';
      recommendation = 'Exceptional performance! Focus on interview preparation and maintain consistency.';
    } else if (totalScore >= 850) {
      rankRange = '51 - 150';
      category = 'Excellent';
      recommendation = 'Great score! Work on refining answers and strengthen weak areas for top ranks.';
    } else if (totalScore >= 750) {
      rankRange = '151 - 350';
      category = 'Very Good';
      recommendation = 'Good performance! Focus on answer writing and current affairs to improve further.';
    } else if (totalScore >= 650) {
      rankRange = '351 - 600';
      category = 'Good';
      recommendation = 'Decent score. Strengthen conceptual clarity and practice more mock tests.';
    } else if (totalScore >= 550) {
      rankRange = '601 - 1000';
      category: 'Average';
      recommendation = 'Keep working hard. Focus on fundamentals and regular revision is key.';
    } else {
      rankRange = '1000+';
      category = 'Needs Improvement';
      recommendation = 'Requires focused preparation. Consider joining a structured coaching program.';
    }

    setPrediction({
      rankRange,
      category,
      recommendation,
      totalScore,
    });
  };

  const resetForm = () => {
    setPrelimsMarks('');
    setMainsMarks('');
    setSelectedSubject('');
    setPrediction(null);
  };

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
              <Sparkles className="w-5 h-5 text-[#FACC15]" />
              <span className="text-sm font-medium">AI-Powered Analysis</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              UPSC Rank <span className="text-gradient">Predictor</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Get an estimated rank based on your mock test performance and receive personalized recommendations
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="glass rounded-3xl p-8 border border-white/10 glow relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#6366F1] rounded-full blur-[120px] opacity-20" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#22D3EE] rounded-full blur-[120px] opacity-20" />

              <div className="relative">
                <h2 className="text-2xl font-bold text-white mb-8">
                  Enter Your Marks
                </h2>

                <div className="space-y-6 mb-8">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Prelims Marks (out of 200)
                    </label>
                    <input
                      type="number"
                      placeholder="Enter your prelims marks"
                      value={prelimsMarks}
                      onChange={(e) => setPrelimsMarks(e.target.value)}
                      className="w-full px-4 py-3 glass rounded-xl border border-white/10 focus:border-[#6366F1] transition-all outline-none text-white placeholder-gray-400"
                      min="0"
                      max="200"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Mains Marks (out of 1000)
                    </label>
                    <input
                      type="number"
                      placeholder="Enter your mains marks"
                      value={mainsMarks}
                      onChange={(e) => setMainsMarks(e.target.value)}
                      className="w-full px-4 py-3 glass rounded-xl border border-white/10 focus:border-[#6366F1] transition-all outline-none text-white placeholder-gray-400"
                      min="0"
                      max="1000"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Optional Subject (Optional)
                    </label>
                    <select
                      value={selectedSubject}
                      onChange={(e) => setSelectedSubject(e.target.value)}
                      className="w-full px-4 py-3 glass rounded-xl border border-white/10 focus:border-[#6366F1] transition-all outline-none text-white"
                    >
                      <option value="">Select a subject</option>
                      {subjects.map((subject) => (
                        <option key={subject} value={subject}>
                          {subject}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={calculatePrediction}
                    disabled={!prelimsMarks || !mainsMarks}
                    className="flex-1 px-8 py-4 bg-gradient-to-r from-[#6366F1] to-[#22D3EE] rounded-xl text-white font-semibold hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    Predict My Rank
                  </button>
                  {prediction && (
                    <button
                      onClick={resetForm}
                      className="px-8 py-4 glass rounded-xl text-white font-semibold glass-hover border border-white/20"
                    >
                      Reset
                    </button>
                  )}
                </div>
              </div>
            </motion.div>

            {prediction && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 space-y-6"
              >
                <div className="glass rounded-3xl p-8 border border-[#FACC15] glow-accent">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-white">
                      Predicted Rank Range
                    </h3>
                    <Award className="w-10 h-10 text-[#FACC15]" />
                  </div>
                  <div className="text-center py-8">
                    <div className="text-6xl font-bold text-gradient mb-4">
                      {prediction.rankRange}
                    </div>
                    <div className="text-xl text-[#FACC15] font-semibold mb-2">
                      {prediction.category}
                    </div>
                    <div className="text-gray-400">
                      Total Score: {prediction.totalScore}
                    </div>
                  </div>
                </div>

                <div className="glass rounded-3xl p-8 border border-white/10">
                  <div className="flex items-center space-x-3 mb-4">
                    <Target className="w-6 h-6 text-[#22D3EE]" />
                    <h3 className="text-xl font-bold text-white">
                      Personalized Recommendation
                    </h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {prediction.recommendation}
                  </p>
                </div>

                <div className="glass rounded-3xl p-8 border border-white/10">
                  <div className="flex items-center space-x-3 mb-6">
                    <TrendingUp className="w-6 h-6 text-[#6366F1]" />
                    <h3 className="text-xl font-bold text-white">
                      Next Steps
                    </h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-white/5 rounded-xl">
                      <h4 className="font-semibold text-white mb-2">
                        Answer Writing
                      </h4>
                      <p className="text-sm text-gray-400">
                        Practice daily answer writing to improve quality and speed
                      </p>
                    </div>
                    <div className="p-4 bg-white/5 rounded-xl">
                      <h4 className="font-semibold text-white mb-2">
                        Mock Tests
                      </h4>
                      <p className="text-sm text-gray-400">
                        Take regular full-length mock tests for better preparation
                      </p>
                    </div>
                    <div className="p-4 bg-white/5 rounded-xl">
                      <h4 className="font-semibold text-white mb-2">
                        Current Affairs
                      </h4>
                      <p className="text-sm text-gray-400">
                        Stay updated with daily current affairs and analysis
                      </p>
                    </div>
                    <div className="p-4 bg-white/5 rounded-xl">
                      <h4 className="font-semibold text-white mb-2">
                        Mentorship
                      </h4>
                      <p className="text-sm text-gray-400">
                        Get personalized guidance from experienced mentors
                      </p>
                    </div>
                  </div>
                </div>

                <div className="glass rounded-3xl p-8 text-center border border-white/10">
                  <h3 className="text-2xl font-bold mb-4">
                    Want to <span className="text-gradient">Improve Your Score?</span>
                  </h3>
                  <p className="text-gray-400 mb-6">
                    Join our comprehensive coaching program for expert guidance
                  </p>
                  <a
                    href="/courses"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#6366F1] to-[#22D3EE] rounded-xl text-white font-semibold hover:scale-105 transition-transform glow"
                  >
                    Explore Courses
                  </a>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
