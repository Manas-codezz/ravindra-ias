'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { TrendingUp, Sparkles, Award, Target, Loader as Loader2 } from 'lucide-react';

export default function PredictorPage() {
  const [prelimsMarks, setPrelimsMarks] = useState('');
  const [mainsMarks, setMainsMarks] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [prediction, setPrediction] = useState<any>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const subjects = [
    { value: '', label: 'Select a subject', boost: 0 },
    { value: 'gs', label: 'GS', boost: 0 },
    { value: 'public-admin', label: 'Public Administration', boost: 5 },
    { value: 'anthropology', label: 'Anthropology', boost: 7 },
    { value: 'sociology', label: 'Sociology', boost: 4 },
  ];

  const calculatePrediction = () => {
    const prelims = parseInt(prelimsMarks) || 0;
    const mains = parseInt(mainsMarks) || 0;

    if (prelims < 0 || mains < 0 || prelims > 200 || mains > 1000) {
      return;
    }

    setIsCalculating(true);

    setTimeout(() => {
      const score = prelims * 0.3 + mains * 0.7;
      const subjectBoost = subjects.find(s => s.value === selectedSubject)?.boost || 0;
      const finalScore = score + subjectBoost;

      let rankRange = '';
      let category = '';
      let recommendation = '';
      let color = '';

      if (finalScore >= 850) {
        rankRange = 'AIR < 50';
        category = 'Excellent';
        recommendation = 'Outstanding performance! You are on track for a top rank. Focus on interview preparation and maintaining consistency in your answers.';
        color = 'from-green-500 to-emerald-600';
      } else if (finalScore >= 750) {
        rankRange = 'AIR < 200';
        category = 'Very Strong';
        recommendation = 'Great score! You have strong chances. Work on refining your answer writing skills and strengthen any weak areas to secure a top 100 rank.';
        color = 'from-blue-500 to-cyan-600';
      } else if (finalScore >= 650) {
        rankRange = 'AIR < 500';
        category = 'Good';
        recommendation = 'Good performance! Focus on answer writing practice and current affairs analysis. Regular mock tests will help improve your ranking significantly.';
        color = 'from-cyan-500 to-teal-600';
      } else if (finalScore >= 550) {
        rankRange = 'Borderline';
        category = 'Needs Improvement';
        recommendation = 'You need to strengthen your fundamentals. Focus on conceptual clarity, regular revision, and practice more mock tests to improve your score.';
        color = 'from-orange-500 to-amber-600';
      } else {
        rankRange = 'Low Chances';
        category = 'Focus on Basics';
        recommendation = 'Your current preparation needs significant improvement. Consider joining a structured coaching program and focus on building strong fundamentals.';
        color = 'from-red-500 to-rose-600';
      }

      setPrediction({
        rankRange,
        category,
        recommendation,
        score: Math.round(finalScore),
        color,
      });

      setIsCalculating(false);
    }, 1500);
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
              Get an estimated rank based on your exam performance and receive personalized recommendations
            </p>
          </motion.div>

          <div className="max-w-xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="glass rounded-3xl p-8 border border-white/10 relative overflow-hidden"
              style={{ boxShadow: '0 0 40px rgba(99, 102, 241, 0.15)' }}
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#6366F1] rounded-full blur-[120px] opacity-20" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#22D3EE] rounded-full blur-[120px] opacity-20" />

              <div className="relative">
                <h2 className="text-2xl font-bold text-white mb-6 text-center">
                  Enter Your Marks
                </h2>

                <div className="space-y-5 mb-8">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Prelims Marks <span className="text-gray-500">(out of 200)</span>
                    </label>
                    <input
                      type="number"
                      placeholder="Enter prelims marks"
                      value={prelimsMarks}
                      onChange={(e) => setPrelimsMarks(e.target.value)}
                      className="w-full px-4 py-3 glass rounded-xl border border-white/10 focus:border-[#6366F1] transition-all outline-none text-white placeholder-gray-500"
                      min="0"
                      max="200"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Mains Marks <span className="text-gray-500">(out of 1000)</span>
                    </label>
                    <input
                      type="number"
                      placeholder="Enter mains marks"
                      value={mainsMarks}
                      onChange={(e) => setMainsMarks(e.target.value)}
                      className="w-full px-4 py-3 glass rounded-xl border border-white/10 focus:border-[#6366F1] transition-all outline-none text-white placeholder-gray-500"
                      min="0"
                      max="1000"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Optional Subject
                    </label>
                    <div className="relative">
                      <select
                        value={selectedSubject}
                        onChange={(e) => setSelectedSubject(e.target.value)}
                        className="w-full px-4 py-3 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 focus:border-[#6366F1] transition-all outline-none text-white appearance-none cursor-pointer"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'right 12px center',
                          backgroundSize: '20px',
                        }}
                      >
                        {subjects.map((subject) => (
                          <option
                            key={subject.value}
                            value={subject.value}
                            className="bg-[#1a1f2e] text-white"
                          >
                            {subject.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={calculatePrediction}
                    disabled={!prelimsMarks || !mainsMarks || isCalculating}
                    className="flex-1 px-8 py-4 bg-[#FACC15] rounded-xl text-black font-bold hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                    style={{ boxShadow: '0 0 30px rgba(250, 204, 21, 0.4)' }}
                  >
                    {isCalculating ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Calculating...
                      </>
                    ) : (
                      'Predict Rank'
                    )}
                  </button>
                  {prediction && !isCalculating && (
                    <button
                      onClick={resetForm}
                      className="px-6 py-4 glass rounded-xl text-white font-semibold hover:bg-white/10 transition-all border border-white/20"
                    >
                      Reset
                    </button>
                  )}
                </div>
              </div>
            </motion.div>

            <AnimatePresence>
              {prediction && !isCalculating && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  className="mt-8 space-y-6"
                >
                  <motion.div
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    className="glass rounded-3xl p-8 border-2 border-white/20 relative overflow-hidden"
                    style={{ boxShadow: '0 0 40px rgba(250, 204, 21, 0.2)' }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FACC15]/10 to-transparent" />
                    <div className="relative">
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-2xl font-bold text-white">
                          Predicted Rank
                        </h3>
                        <Award className="w-10 h-10 text-[#FACC15]" />
                      </div>
                      <div className="text-center py-6">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2, type: 'spring' }}
                          className={`text-6xl font-bold bg-gradient-to-r ${prediction.color} bg-clip-text text-transparent mb-4`}
                        >
                          {prediction.rankRange}
                        </motion.div>
                        <div className="text-xl text-[#FACC15] font-semibold mb-2">
                          {prediction.category}
                        </div>
                        <div className="text-gray-400">
                          Calculated Score: {prediction.score}
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="glass rounded-3xl p-6 border border-white/10"
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <Target className="w-6 h-6 text-[#22D3EE]" />
                      <h3 className="text-lg font-bold text-white">
                        Personalized Recommendation
                      </h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      {prediction.recommendation}
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="glass rounded-3xl p-6 border border-white/10"
                  >
                    <div className="flex items-center space-x-3 mb-6">
                      <TrendingUp className="w-6 h-6 text-[#6366F1]" />
                      <h3 className="text-lg font-bold text-white">
                        Next Steps
                      </h3>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all">
                        <h4 className="font-semibold text-white mb-1 text-sm">
                          Answer Writing
                        </h4>
                        <p className="text-xs text-gray-400">
                          Daily practice to improve quality
                        </p>
                      </div>
                      <div className="p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all">
                        <h4 className="font-semibold text-white mb-1 text-sm">
                          Mock Tests
                        </h4>
                        <p className="text-xs text-gray-400">
                          Regular full-length tests
                        </p>
                      </div>
                      <div className="p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all">
                        <h4 className="font-semibold text-white mb-1 text-sm">
                          Current Affairs
                        </h4>
                        <p className="text-xs text-gray-400">
                          Daily updates and analysis
                        </p>
                      </div>
                      <div className="p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all">
                        <h4 className="font-semibold text-white mb-1 text-sm">
                          Mentorship
                        </h4>
                        <p className="text-xs text-gray-400">
                          Expert guidance
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-center text-sm text-gray-500 px-4"
                  >
                    This is an estimated prediction based on sample logic and does not guarantee actual UPSC results.
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="glass rounded-3xl p-6 text-center border border-white/10"
                  >
                    <h3 className="text-xl font-bold mb-3">
                      Want to <span className="text-gradient">Improve Your Score?</span>
                    </h3>
                    <p className="text-gray-400 mb-6 text-sm">
                      Join our comprehensive coaching program for expert guidance
                    </p>
                    <a
                      href="/courses"
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#6366F1] to-[#22D3EE] rounded-xl text-white font-semibold hover:scale-105 transition-transform"
                      style={{ boxShadow: '0 0 30px rgba(99, 102, 241, 0.3)' }}
                    >
                      Explore Courses
                    </a>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
